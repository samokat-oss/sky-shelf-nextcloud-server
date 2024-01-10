/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import '@nextcloud/dialogs/style.css'
import type { Folder, Node, View } from '@nextcloud/files'
import type { IFilePickerButton } from '@nextcloud/dialogs'
import type { MoveCopyResult } from './moveOrCopyActionUtils'

// eslint-disable-next-line n/no-extraneous-import
import { AxiosError } from 'axios'
import { basename, join } from 'path'
import { emit } from '@nextcloud/event-bus'
import { generateRemoteUrl } from '@nextcloud/router'
import { getCurrentUser } from '@nextcloud/auth'
import { getFilePickerBuilder, showError } from '@nextcloud/dialogs'
import { Permission, FileAction, FileType, NodeStatus } from '@nextcloud/files'
import { translate as t } from '@nextcloud/l10n'
import axios from '@nextcloud/axios'
import Vue from 'vue'

import CopyIconSvg from '@mdi/svg/svg/folder-multiple.svg?raw'
import FolderMoveSvg from '@mdi/svg/svg/folder-move.svg?raw'

import { MoveCopyAction, canCopy, canMove, getQueue } from './moveOrCopyActionUtils'
import logger from '../logger'

/**
 * Return the action that is possible for the given nodes
 * @param {Node[]} nodes The nodes to check against
 * @return {MoveCopyAction} The action that is possible for the given nodes
 */
const getActionForNodes = (nodes: Node[]): MoveCopyAction => {
	if (canMove(nodes)) {
		if (canCopy(nodes)) {
			return MoveCopyAction.MOVE_OR_COPY
		}
		return MoveCopyAction.MOVE
	}

	// Assuming we can copy as the enabled checks for copy permissions
	return MoveCopyAction.COPY
}

/**
 * Handle the copy/move of a node to a destination
 * This can be imported and used by other scripts/components on server
 * @param {Node} node The node to copy/move
 * @param {Folder} destination The destination to copy/move the node to
 * @param {MoveCopyAction} method The method to use for the copy/move
 * @param {boolean} overwrite Whether to overwrite the destination if it exists
 * @return {Promise<void>} A promise that resolves when the copy/move is done
 */
export const handleCopyMoveNodeTo = async (node: Node, destination: Folder, method: MoveCopyAction.COPY | MoveCopyAction.MOVE, overwrite = false) => {
	if (!destination) {
		return
	}

	if (destination.type !== FileType.Folder) {
		throw new Error(t('files', 'Destination is not a folder'))
	}

	if (node.dirname === destination.path) {
		throw new Error(t('files', 'This file/folder is already in that directory'))
	}

	/**
	 * Example:
	 * node: /foo/bar/file.txt -> path = /foo/bar
	 * destination: /foo
	 * Allow move of /foo does not start with /foo/bar so allow
	 */
	if (destination.path.startsWith(node.path)) {
		throw new Error(t('files', 'You cannot move a file/folder onto itself or into a subfolder of itself'))
	}

	const relativePath = join(destination.path, node.basename)
	const destinationUrl = generateRemoteUrl(`dav/files/${getCurrentUser()?.uid}${relativePath}`)

	// Set loading state
	Vue.set(node, 'status', NodeStatus.LOADING)

	const queue = getQueue()
	return await queue.add(async () => {
		try {
			await axios({
				method: method === MoveCopyAction.COPY ? 'COPY' : 'MOVE',
				url: node.encodedSource,
				headers: {
					Destination: encodeURI(destinationUrl),
					Overwrite: overwrite ? undefined : 'F',
				},
			})

			// If we're moving, update the node
			// if we're copying, we don't need to update the node
			// the view will refresh itself
			if (method === MoveCopyAction.MOVE) {
				// Delete the node as it will be fetched again
				// when navigating to the destination folder
				emit('files:node:deleted', node)
			}
		} catch (error) {
			if (error instanceof AxiosError) {
				if (error?.response?.status === 412) {
					throw new Error(t('files', 'A file or folder with that name already exists in this folder'))
				} else if (error?.response?.status === 423) {
					throw new Error(t('files', 'The files is locked'))
				} else if (error?.response?.status === 404) {
					throw new Error(t('files', 'The file does not exist anymore'))
				} else if (error.message) {
					throw new Error(error.message)
				}
			}
			throw new Error()
		} finally {
			Vue.set(node, 'status', undefined)
		}
	})
}

/**
 * Open a file picker for the given action
 * @param {MoveCopyAction} action The action to open the file picker for
 * @param {string} dir The directory to start the file picker in
 * @param {Node[]} nodes The nodes to move/copy
 * @return {Promise<MoveCopyResult>} The picked destination
 */
const openFilePickerForAction = async (action: MoveCopyAction, dir = '/', nodes: Node[]): Promise<MoveCopyResult> => {
	const fileIDs = nodes.map(node => node.fileid).filter(Boolean)
	const filePicker = getFilePickerBuilder(t('files', 'Choose destination'))
		.allowDirectories(true)
		.setFilter((n: Node) => {
			// We only want to show folders that we can create nodes in
			return (n.permissions & Permission.CREATE) !== 0
				// We don't want to show the current nodes in the file picker
				&& !fileIDs.includes(n.fileid)
		})
		.setMimeTypeFilter([])
		.setMultiSelect(false)
		.startAt(dir)

	return new Promise((resolve, reject) => {
		filePicker.setButtonFactory((_selection, path: string) => {
			const buttons: IFilePickerButton[] = []
			const target = basename(path)

			const dirnames = nodes.map(node => node.dirname)
			const paths = nodes.map(node => node.path)

			if (dirnames.includes(path)) {
				// This file/folder is already in that directory
				return buttons
			}

			if (paths.includes(path)) {
				// You cannot move a file/folder onto itself
				return buttons
			}

			if (action === MoveCopyAction.COPY || action === MoveCopyAction.MOVE_OR_COPY) {
				buttons.push({
					label: target ? t('files', 'Copy to {target}', { target }) : t('files', 'Copy'),
					type: 'primary',
					icon: CopyIconSvg,
					async callback(destination: Node[]) {
						resolve({
							destination: destination[0] as Folder,
							action: MoveCopyAction.COPY,
						} as MoveCopyResult)
					},
				})
			}

			if (action === MoveCopyAction.MOVE || action === MoveCopyAction.MOVE_OR_COPY) {
				buttons.push({
					label: target ? t('files', 'Move to {target}', { target }) : t('files', 'Move'),
					type: action === MoveCopyAction.MOVE ? 'primary' : 'secondary',
					icon: FolderMoveSvg,
					async callback(destination: Node[]) {
						resolve({
							destination: destination[0] as Folder,
							action: MoveCopyAction.MOVE,
						} as MoveCopyResult)
					},
				})
			}

			return buttons
		})

		const picker = filePicker.build()
		picker.pick().catch(() => {
			reject(new Error(t('files', 'Cancelled move or copy operation')))
		})
	})
}

export const action = new FileAction({
	id: 'move-copy',
	displayName(nodes: Node[]) {
		switch (getActionForNodes(nodes)) {
		case MoveCopyAction.MOVE:
			return t('files', 'Move')
		case MoveCopyAction.COPY:
			return t('files', 'Copy')
		case MoveCopyAction.MOVE_OR_COPY:
			return t('files', 'Move or copy')
		}
	},
	iconSvgInline: () => FolderMoveSvg,
	enabled(nodes: Node[]) {
		// We only support moving/copying files within the user folder
		if (!nodes.every(node => node.root?.startsWith('/files/'))) {
			return false
		}
		return nodes.length > 0 && (canMove(nodes) || canCopy(nodes))
	},

	async exec(node: Node, view: View, dir: string) {
		const action = getActionForNodes([node])
		const result = await openFilePickerForAction(action, dir, [node])
		try {
			await handleCopyMoveNodeTo(node, result.destination, result.action)
			return true
		} catch (error) {
			if (error instanceof Error && !!error.message) {
				showError(error.message)
				// Silent action as we handle the toast
				return null
			}
			return false
		}
	},

	async execBatch(nodes: Node[], view: View, dir: string) {
		const action = getActionForNodes(nodes)
		const result = await openFilePickerForAction(action, dir, nodes)
		const promises = nodes.map(async node => {
			try {
				await handleCopyMoveNodeTo(node, result.destination, result.action)
				return true
			} catch (error) {
				logger.error(`Failed to ${result.action} node`, { node, error })
				return false
			}
		})

		// We need to keep the selection on error!
		// So we do not return null, and for batch action
		// we let the front handle the error.
		return await Promise.all(promises)
	},

	order: 15,
})
