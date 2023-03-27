#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../" >/dev/null 2>&1 && pwd )"

cd $DIR/
git submodule update --init

# Codespace config
cp .devcontainer/codespace.config.php config/codespace.config.php

# Set git safe.directory
git config --global --add safe.directory /var/www/html
git config --global --add safe.directory /var/www/html/3rdparty

# Onetime installation setup
if [[ ! $(sudo -u www-data php occ status) =~ installed:[[:space:]]*true ]]; then
    echo "Running NC installation"
    sudo -u www-data php occ maintenance:install \
        --verbose \
        --database=pgsql \
        --database-name=postgres \
        --database-host=127.0.0.1 \
        --database-port=5432 \
        --database-user=postgres \
        --database-pass=postgres \
        --admin-user admin \
        --admin-pass admin
fi

# Set proper permissions and start webserver
chown -R www-data:www-data /var/www/html && service apache2 start