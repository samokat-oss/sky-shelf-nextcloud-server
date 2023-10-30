/*! For license information please see systemtags-admin.js.LICENSE.txt */
(()=>{"use strict";var t,e,s,a={27498:(t,e,s)=>{var a=s(20144),i=s(77958),r=s(20435),n=s(67912),l=s(31352),o=s(64024),g=s(74628),d=s(86884),c=s(35380),u=s(49368),m=s(36906);const p={userVisible:!0,userAssignable:!0,canAssign:!0};s(93664);var y=s(79753),h=s(14596);const b=(0,y.generateRemoteUrl)("dav"),v=(0,h.eI)(b),f=t=>{v.setHeaders({"X-Requested-With":"XMLHttpRequest",requesttoken:t??""})};(0,i._S)(f),f((0,i.IH)());const A=(0,s(17499).IY)().setApp("systemtags").detectUser().build();var I;!function(t){t.Public="Public",t.Restricted="Restricted",t.Invisible="Invisible"}(I||(I={}));const C=[{id:I.Public,label:(0,l.Iu)("systemtags","Public")},{id:I.Restricted,label:(0,l.Iu)("systemtags","Restricted")},{id:I.Invisible,label:(0,l.Iu)("systemtags","Invisible")}],x=(t,e)=>({[[!0,!0].join(",")]:I.Public,[[!0,!1].join(",")]:I.Restricted,[[!1,!1].join(",")]:I.Invisible}[[t,e].join(",")]),N=a.default.extend({name:"SystemTagForm",components:{NcButton:g.Z,NcLoadingIcon:r.Z,NcSelect:d.Z,NcSelectTags:c.Z,NcTextField:u.Z},props:{tags:{type:Array,required:!0}},data:()=>({loading:!1,tagLevelOptions:C,selectedTag:null,errorMessage:"",tagName:"",tagLevel:I.Public}),watch:{selectedTag(t){this.tagName=t?t.displayName:"",this.tagLevel=t?x(t.userVisible,t.userAssignable):I.Public}},computed:{isCreating(){return null===this.selectedTag},isCreateDisabled(){return""===this.tagName},isUpdateDisabled(){return""===this.tagName||this.selectedTag?.displayName===this.tagName&&x(this.selectedTag?.userVisible,this.selectedTag?.userAssignable)===this.tagLevel},isResetDisabled(){return this.isCreating?""===this.tagName&&this.tagLevel===I.Public:null===this.selectedTag},userVisible(){return{[I.Public]:!0,[I.Restricted]:!0,[I.Invisible]:!1}[this.tagLevel]},userAssignable(){return{[I.Public]:!0,[I.Restricted]:!1,[I.Invisible]:!1}[this.tagLevel]},tagProperties(){return{displayName:this.tagName,userVisible:this.userVisible,userAssignable:this.userAssignable}}},methods:{t:l.Iu,async handleSubmit(){this.isCreating?await this.create():await this.update()},async create(){const t={...p,...this.tagProperties};this.loading=!0;try{const e=await(async t=>{const e=(t=>{const e={...t};return e.name&&!e.displayName||(e.name=e.displayName,delete e.displayName),e})(t);try{const{headers:t}=await v.customRequest("/systemtags",{method:"POST",data:e}),s=t.get("content-location");if(s)return(t=>{const e=t.indexOf("?");e>0&&(t=t.substring(0,e));const s=t.split("/");let a;do{a=s[s.length-1],s.pop()}while(!a&&s.length>0);return Number(a)})(s);throw A.error((0,l.Iu)("systemtags",'Missing "Content-Location" header')),new Error((0,l.Iu)("systemtags",'Missing "Content-Location" header'))}catch(t){throw A.error((0,l.Iu)("systemtags","Failed to create tag"),{error:t}),new Error((0,l.Iu)("systemtags","Failed to create tag"))}})(t),s={...t,id:e};this.$emit("tag:created",s),(0,o.s$)((0,l.Iu)("systemtags","Created tag")),this.reset()}catch(t){this.errorMessage=(0,l.Iu)("systemtags","Failed to create tag")}this.loading=!1},async update(){if(null===this.selectedTag)return;const t={...this.selectedTag,...this.tagProperties};this.loading=!0;try{await(async t=>{const e="/systemtags/"+t.id,s=`<?xml version="1.0"?>\n\t<d:propertyupdate  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t\t<d:set>\n\t\t\t<d:prop>\n\t\t\t\t<oc:display-name>${t.displayName}</oc:display-name>\n\t\t\t\t<oc:user-visible>${t.userVisible}</oc:user-visible>\n\t\t\t\t<oc:user-assignable>${t.userAssignable}</oc:user-assignable>\n\t\t\t</d:prop>\n\t\t</d:set>\n\t</d:propertyupdate>`;try{await v.customRequest(e,{method:"PROPPATCH",data:s})}catch(t){throw A.error((0,l.Iu)("systemtags","Failed to update tag"),{error:t}),new Error((0,l.Iu)("systemtags","Failed to update tag"))}})(t),this.selectedTag=t,this.$emit("tag:updated",t),(0,o.s$)((0,l.Iu)("systemtags","Updated tag")),this.$refs.tagNameInput?.focus()}catch(t){this.errorMessage=(0,l.Iu)("systemtags","Failed to update tag")}this.loading=!1},async handleDelete(){if(null!==this.selectedTag){this.loading=!0;try{await(async t=>{const e="/systemtags/"+this.selectedTag.id;try{await v.deleteFile(e)}catch(t){throw A.error((0,l.Iu)("systemtags","Failed to delete tag"),{error:t}),new Error((0,l.Iu)("systemtags","Failed to delete tag"))}})(),this.$emit("tag:deleted",this.selectedTag),(0,o.s$)((0,l.Iu)("systemtags","Deleted tag")),this.reset()}catch(t){this.errorMessage=(0,l.Iu)("systemtags","Failed to delete tag")}this.loading=!1}},reset(){this.selectedTag=null,this.errorMessage="",this.tagName="",this.tagLevel=I.Public,this.$refs.tagNameInput?.focus()}}});var T=s(93379),L=s.n(T),j=s(7795),S=s.n(j),M=s(90569),w=s.n(M),Z=s(3565),_=s.n(Z),D=s(19216),P=s.n(D),R=s(44589),O=s.n(R),B=s(80162),E={};E.styleTagTransform=O(),E.setAttributes=_(),E.insert=w().bind(null,"head"),E.domAPI=S(),E.insertStyleElement=P(),L()(B.Z,E),B.Z&&B.Z.locals&&B.Z.locals;var z=s(51900);const F=(0,z.Z)(N,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("form",{staticClass:"system-tag-form",attrs:{disabled:t.loading,"aria-labelledby":"system-tag-form-heading"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)},reset:t.reset}},[e("h3",{attrs:{id:"system-tag-form-heading"}},[t._v("\n\t\t"+t._s(t.t("systemtags","Create or edit tags"))+"\n\t")]),t._v(" "),e("div",{staticClass:"system-tag-form__group"},[e("label",{attrs:{for:"system-tags-input"}},[t._v(t._s(t.t("systemtags","Search for a tag to edit")))]),t._v(" "),e("NcSelectTags",{attrs:{"input-id":"system-tags-input",placeholder:t.t("systemtags","Collaborative tags …"),"fetch-tags":!1,options:t.tags,multiple:!1,passthru:""},scopedSlots:t._u([{key:"no-options",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","No tags to select"))+"\n\t\t\t")]},proxy:!0}]),model:{value:t.selectedTag,callback:function(e){t.selectedTag=e},expression:"selectedTag"}})],1),t._v(" "),e("div",{staticClass:"system-tag-form__group"},[e("label",{attrs:{for:"system-tag-name"}},[t._v(t._s(t.t("systemtags","Tag name")))]),t._v(" "),e("NcTextField",{ref:"tagNameInput",attrs:{id:"system-tag-name",value:t.tagName,error:Boolean(t.errorMessage),"helper-text":t.errorMessage,"label-outside":""},on:{"update:value":function(e){t.tagName=e}}})],1),t._v(" "),e("div",{staticClass:"system-tag-form__group"},[e("label",{attrs:{for:"system-tag-level"}},[t._v(t._s(t.t("systemtags","Tag level")))]),t._v(" "),e("NcSelect",{attrs:{"input-id":"system-tag-level",options:t.tagLevelOptions,reduce:t=>t.id,clearable:!1,disabled:t.loading},model:{value:t.tagLevel,callback:function(e){t.tagLevel=e},expression:"tagLevel"}})],1),t._v(" "),e("div",{staticClass:"system-tag-form__row"},[t.isCreating?e("NcButton",{attrs:{"native-type":"submit",disabled:t.isCreateDisabled||t.loading}},[t._v("\n\t\t\t"+t._s(t.t("systemtags","Create"))+"\n\t\t")]):[e("NcButton",{attrs:{"native-type":"submit",disabled:t.isUpdateDisabled||t.loading}},[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","Update"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{attrs:{disabled:t.loading},on:{click:t.handleDelete}},[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","Delete"))+"\n\t\t\t")])],t._v(" "),e("NcButton",{attrs:{"native-type":"reset",disabled:t.isResetDisabled||t.loading}},[t._v("\n\t\t\t"+t._s(t.t("systemtags","Reset"))+"\n\t\t")]),t._v(" "),t.loading?e("NcLoadingIcon",{attrs:{name:t.t("systemtags","Loading …"),size:32}}):t._e()],2)])}),[],!1,null,"76c7369e",null).exports,Y=a.default.extend({name:"SystemTagsSection",components:{NcLoadingIcon:r.Z,NcSettingsSection:n.Z,SystemTagForm:F},data:()=>({loadingTags:!1,tags:[]}),async created(){this.loadingTags=!0;try{this.tags=await(async()=>{try{const{data:t}=await v.getDirectoryContents("/systemtags",{data:'<?xml version="1.0"?>\n<d:propfind  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t<d:prop>\n\t\t<oc:id />\n\t\t<oc:display-name />\n\t\t<oc:user-visible />\n\t\t<oc:user-assignable />\n\t\t<oc:can-assign />\n\t</d:prop>\n</d:propfind>',details:!0,glob:"/systemtags/*"});return(t=>t.map((t=>{let{props:e}=t;return Object.fromEntries(Object.entries(e).map((t=>{let[e,s]=t;return[(0,m.Z)(e),"displayName"===(0,m.Z)(e)?String(s):s]})))})))(t)}catch(t){throw A.error((0,l.Iu)("systemtags","Failed to load tags"),{error:t}),new Error((0,l.Iu)("systemtags","Failed to load tags"))}})()}catch(t){(0,o.x2)((0,l.Iu)("systemtags","Failed to load tags"))}this.loadingTags=!1},methods:{t:l.Iu,handleCreate(t){this.tags.unshift(t)},handleUpdate(t){const e=this.tags.findIndex((e=>e.id===t.id));this.tags.splice(e,1),this.tags.unshift(t)},handleDelete(t){const e=this.tags.findIndex((e=>e.id===t.id));this.tags.splice(e,1)}}}),H=(0,z.Z)(Y,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("NcSettingsSection",{attrs:{name:t.t("systemtags","Collaborative tags"),description:t.t("systemtags","Collaborative tags are available for all users. Restricted tags are visible to users but cannot be assigned by them. Invisible tags are for internal use, since users cannot see or assign them.")}},[t.loadingTags?e("NcLoadingIcon",{attrs:{name:t.t("systemtags","Loading collaborative tags …"),size:32}}):e("SystemTagForm",{attrs:{tags:t.tags},on:{"tag:created":t.handleCreate,"tag:updated":t.handleUpdate,"tag:deleted":t.handleDelete}})],1)}),[],!1,null,null,null).exports;s.nc=btoa((0,i.IH)()),(new(a.default.extend(H))).$mount("#vue-admin-systemtags")},80162:(t,e,s)=>{s.d(e,{Z:()=>l});var a=s(87537),i=s.n(a),r=s(23645),n=s.n(r)()(i());n.push([t.id,".system-tag-form[data-v-76c7369e]{display:flex;flex-direction:column;max-width:400px;gap:8px 0}.system-tag-form__group[data-v-76c7369e]{display:flex;flex-direction:column}.system-tag-form__row[data-v-76c7369e]{margin-top:8px;display:flex;gap:0 4px}","",{version:3,sources:["webpack://./apps/systemtags/src/components/SystemTagForm.vue"],names:[],mappings:"AACA,kCACC,YAAA,CACA,qBAAA,CACA,eAAA,CACA,SAAA,CAEA,yCACC,YAAA,CACA,qBAAA,CAGD,uCACC,cAAA,CACA,YAAA,CACA,SAAA",sourcesContent:["\n.system-tag-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 400px;\n\tgap: 8px 0;\n\n\t&__group {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t&__row {\n\t\tmargin-top: 8px;\n\t\tdisplay: flex;\n\t\tgap: 0 4px;\n\t}\n}\n"],sourceRoot:""}]);const l=n},42761:t=>{t.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTS00LTRoMjR2MjRILTRWLTR6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTggMEMzLjYgMCAwIDMuNiAwIDhzMy42IDggOCA4IDgtMy42IDgtOC0zLjYtOC04LTh6IiBmaWxsPSIjZWQ0ODRjIi8+PHBhdGggZD0iTTUgNi41aDZjLjggMCAxLjUuNyAxLjUgMS41cy0uNyAxLjUtMS41IDEuNUg1Yy0uOCAwLTEuNS0uNy0xLjUtMS41UzQuMiA2LjUgNSA2LjV6IiBmaWxsPSIjZmRmZmZmIi8+PC9zdmc+Cg=="},87210:t=>{t.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTQuOCAxMS4yaDYuNFY0LjhINC44djYuNHpNOCAwQzMuNiAwIDAgMy42IDAgOHMzLjYgOCA4IDggOC0zLjYgOC04LTMuNi04LTgtOHoiIGZpbGw9IiM0OWIzODIiLz48L3N2Zz4K"},94659:t=>{t.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS00LTRoMjR2MjRILTR6Ii8+PHBhdGggZD0iTTYuOS4xQzMgLjYtLjEgNC0uMSA4YzAgNC40IDMuNiA4IDggOCA0IDAgNy40LTMgOC02LjktMS4yIDEuMy0yLjkgMi4xLTQuNyAyLjEtMy41IDAtNi40LTIuOS02LjQtNi40IDAtMS45LjgtMy42IDIuMS00Ljd6IiBmaWxsPSIjZjRhMzMxIi8+PC9zdmc+Cg=="}},i={};function r(t){var e=i[t];if(void 0!==e)return e.exports;var s=i[t]={id:t,loaded:!1,exports:{}};return a[t].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=a,t=[],r.O=(e,s,a,i)=>{if(!s){var n=1/0;for(d=0;d<t.length;d++){s=t[d][0],a=t[d][1],i=t[d][2];for(var l=!0,o=0;o<s.length;o++)(!1&i||n>=i)&&Object.keys(r.O).every((t=>r.O[t](s[o])))?s.splice(o--,1):(l=!1,i<n&&(n=i));if(l){t.splice(d--,1);var g=a();void 0!==g&&(e=g)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[s,a,i]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,s)=>(r.f[s](t,e),e)),[])),r.u=t=>t+"-"+t+".js?v="+{2048:"78a82614529a3cefcde7",4180:"fe82f3a2dac70d6b82bc"}[t],r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},s="nextcloud:",r.l=(t,a,i,n)=>{if(e[t])e[t].push(a);else{var l,o;if(void 0!==i)for(var g=document.getElementsByTagName("script"),d=0;d<g.length;d++){var c=g[d];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==s+i){l=c;break}}l||(o=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",s+i),l.src=t),e[t]=[a];var u=(s,a)=>{l.onerror=l.onload=null,clearTimeout(m);var i=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((t=>t(a))),s)return s(a)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),o&&document.head.appendChild(l)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),r.j=5304,(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");if(s.length)for(var a=s.length-1;a>-1&&!t;)t=s[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{r.b=document.baseURI||self.location.href;var t={5304:0};r.f.j=(e,s)=>{var a=r.o(t,e)?t[e]:void 0;if(0!==a)if(a)s.push(a[2]);else{var i=new Promise(((s,i)=>a=t[e]=[s,i]));s.push(a[2]=i);var n=r.p+r.u(e),l=new Error;r.l(n,(s=>{if(r.o(t,e)&&(0!==(a=t[e])&&(t[e]=void 0),a)){var i=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",l.name="ChunkLoadError",l.type=i,l.request=n,a[1](l)}}),"chunk-"+e,e)}},r.O.j=e=>0===t[e];var e=(e,s)=>{var a,i,n=s[0],l=s[1],o=s[2],g=0;if(n.some((e=>0!==t[e]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(o)var d=o(r)}for(e&&e(s);g<n.length;g++)i=n[g],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(d)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})(),r.nc=void 0;var n=r.O(void 0,[7874],(()=>r(27498)));n=r.O(n)})();
//# sourceMappingURL=systemtags-admin.js.map?v=846ceeeb626811e5b923