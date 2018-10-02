(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{425:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"multipartfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multipartfile","aria-hidden":"true"}},[t._v("#")]),t._v(" MultipartFile "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("div",{pre:!0},[a("p",[t._v("Define a parameter as Multipart file.")]),t._v(" "),t._m(4),a("blockquote",[a("p",[t._v("See the tutorial on the "),a("router-link",{attrs:{to:"/tutorials/multer.html"}},[t._v("multer configuration")]),t._v(".")],1)])])])},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { MultipartFile } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/multipartfiles"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/Romakita/ts-express-decorators/blob/v4.32.0/packages/multipartfiles/src/decorators/multipartFile.ts#L0-L0"}},[t._v("/packages/multipartfiles/src/decorators/multipartFile.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"typescript-lang "},[t._v("function "),a("span",{staticClass:"token function"},[t._v("MultipartFile")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("name?"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("string")]),t._v(" | multer.Options"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" maxCount?"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("number")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" Function"),a("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{class:"language-typescript extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Controller"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Post"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"@tsed/common"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("MulterOptions"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MultipartFile"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"@tsed/multipartfiles"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Multer"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"@types/multer"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MulterFile "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Express"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Multer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("File"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),a("span",{attrs:{class:"token function"}},[t._v("Controller")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyCtrl")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),a("span",{attrs:{class:"token function"}},[t._v("Post")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/file'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("uploadFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{attrs:{class:"token function"}},[t._v("MultipartFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"file1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" file"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MulterFile"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),a("span",{attrs:{class:"token function"}},[t._v("Post")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/file'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  @"),a("span",{attrs:{class:"token function"}},[t._v("MulterOptions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("dest"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"/other-dir"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("uploadFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{attrs:{class:"token function"}},[t._v("MultipartFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"file1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" file"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MulterFile"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),a("span",{attrs:{class:"token function"}},[t._v("Post")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/file2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  @"),a("span",{attrs:{class:"token function"}},[t._v("MulterOptions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("dest"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"/other-dir"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("uploadFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{attrs:{class:"token function"}},[t._v("MultipartFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"file1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" file"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MulterFile"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" @"),a("span",{attrs:{class:"token function"}},[t._v("MultipartFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"file2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" file2"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MulterFile"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),a("span",{attrs:{class:"token function"}},[t._v("Post")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/files'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("uploadFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{attrs:{class:"token function"}},[t._v("MultipartFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"file1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" files"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MulterFile"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="MultipartFile.md";s.default=e.exports}}]);