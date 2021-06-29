(function(t){function e(e){for(var n,i,u=e[0],a=e[1],l=e[2],c=0,p=[];c<u.length;c++)i=u[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,i=1;i<o.length;i++){var a=o[i];0!==r[a]&&(n=!1)}n&&(s.splice(e--,1),t=u(u.s=o[0]))}return t}var n={},r={app:0},s=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2ff7cb09"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=n);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.src=i(t);var l=new Error;s=function(e){a.onerror=a.onload=null,clearTimeout(c);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,o[1](l)}r[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,o){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(o,n,function(e){return t[e]}.bind(null,n));return o},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/test-vue-todo/dist/",u.oe=function(t){throw console.error(t),t};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Go to notes list")])],1),o("router-view")],1)},s=[],i=(o("034f"),o("2877")),u={},a=Object(i["a"])(u,r,s,!1,null,null,null),l=a.exports,c=(o("d3b7"),o("3ca3"),o("ddb0"),o("8c4f")),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("NoteList")},p=[],f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("button",{staticClass:"mb",on:{click:function(e){return t.addNote()}}},[t._v("Add note")]),o("ul",t._l(t.notes,(function(t){return o("li",{key:t.id,staticClass:"mb"},[o("Note",{attrs:{todos:t}})],1)})),0),t.$root.isPopUpOpen?o("addNotePopup"):t._e()],1)},m=[],v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo"},[o("router-link",{attrs:{to:"/notes/"+t.todos.id}},[o("h3",{staticClass:"title"},[t._v(t._s(t.todos.title))])]),o("ul",{staticClass:"mb"},t._l(t.noteToShow,(function(e){return o("li",{key:e.id},[o("input",{attrs:{type:"checkbox",disabled:""},domProps:{checked:e.done}}),o("span",{staticClass:"todo__text"},[t._v(t._s(e.text))])])})),0),o("div",{staticClass:"button__group"},[o("router-link",{staticClass:"button",attrs:{to:"/notes/"+t.todos.id}},[t._v(" Edit Note ")]),o("button",{on:{click:function(e){return t.togleDelPopup()}}},[t._v("Delete Note")])],1),t.deletePopUpOpen?o("popup",{on:{close:function(e){return t.togleDelPopup()}}},[o("p",{staticClass:"title"},[t._v("Are you sure?")]),o("div",{staticClass:"button__group"},[o("button",{on:{click:function(e){return t.deleteNote(t.todos)}}},[t._v("Yes")]),o("button",{on:{click:function(e){return t.togleDelPopup()}}},[t._v("No")])])]):t._e()],1)},h=[],b=(o("4de4"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"popup"},[o("div",{staticClass:"popup__backdrop",on:{click:t.close}}),o("div",{staticClass:"popup__window"},[o("a",{staticClass:"popup__close",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.close.apply(null,arguments)}}},[t._v("×")]),t._t("default")],2)])}),_=[],g={methods:{close:function(){this.$emit("close")}}},y=g,x=Object(i["a"])(y,b,_,!1,null,null,null),O=x.exports,k={props:{todos:Object},data:function(){return{deletePopUpOpen:!1}},computed:{noteToShow:function(){return this.todos.todos.filter((function(t,e){return e<3}))}},methods:{deleteNote:function(t){this.$store.commit("deleteNote",t.id),this.togleDelPopup()},togleDelPopup:function(){this.deletePopUpOpen=!this.deletePopUpOpen,document.body.classList.toggle("modal-open")}},components:{popup:O}},P=k,N=Object(i["a"])(P,v,h,!1,null,null,null),w=N.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("popup",{on:{close:t.close}},[o("form",{staticClass:"form"},[o("span",[t._v("Title:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input input__title mb mt",attrs:{type:"text",placeholder:"input note title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._l(t.todos,(function(e,n){return o("div",{key:e.id,staticClass:"form__group mb"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.done,expression:"todo.done"}],staticClass:"form__checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.done)?t._i(e.done,null)>-1:e.done},on:{change:function(o){var n=e.done,r=o.target,s=!!r.checked;if(Array.isArray(n)){var i=null,u=t._i(n,i);r.checked?u<0&&t.$set(e,"done",n.concat([i])):u>-1&&t.$set(e,"done",n.slice(0,u).concat(n.slice(u+1)))}else t.$set(e,"done",s)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"todo.text"}],staticClass:"input",attrs:{type:"text",placeholder:"input todo"},domProps:{value:e.text},on:{input:function(o){o.target.composing||t.$set(e,"text",o.target.value)}}}),o("button",{staticClass:"form__delButton",attrs:{type:"button"},on:{click:function(e){return t.del(n)}}},[t._v("Delete todo")])])})),o("button",{staticClass:"mb",attrs:{type:"button"},on:{click:function(e){return t.add()}}},[t._v("Add todo")])],2),o("button",{on:{click:function(e){return t.addNote()}}},[t._v("Add note")])])},j=[],$=(o("a434"),{data:function(){return{title:"",todos:[]}},methods:{del:function(t){this.todos.splice(t,1)},addNote:function(){this.$store.commit("addNote",{id:Date.now(),title:this.title,todos:this.todos}),this.close()},add:function(){var t=Date.now();this.todos.push({id:t,done:!1,text:""})},close:function(){this.$root.isPopUpOpen=!1,document.body.classList.remove("modal-open")}},components:{popup:O}}),E=$,D=Object(i["a"])(E,C,j,!1,null,null,null),A=D.exports,S={data:function(){return{notes:this.$store.state.notes}},methods:{addNote:function(){this.$root.isPopUpOpen=!0,document.body.classList.add("modal-open")}},components:{Note:w,addNotePopup:A}},T=S,U=Object(i["a"])(T,f,m,!1,null,null,null),L=U.exports,M={components:{NoteList:L}},J=M,q=Object(i["a"])(J,d,p,!1,null,null,null),B=q.exports;n["a"].use(c["a"]);var G=[{path:"/",name:"Home",component:B},{path:"/notes/:id",name:"EditNote",props:!0,component:function(){return o.e("about").then(o.bind(null,"70e2"))}}],H=new c["a"]({routes:G}),Y=H,z=(o("7db0"),o("2f62")),F=o("0e44");n["a"].use(z["a"]);var I=new z["a"].Store({state:{notes:[]},mutations:{addNote:function(t,e){t.notes.push(e)},deleteNote:function(t,e){var o=t.notes.indexOf(this.getters.findNote(e));t.notes.splice(o,1)},updateNote:function(t,e){var o=t.notes.indexOf(this.getters.findNote(e.id));t.notes[o].title=e.title,t.notes[o].todos=e.todos}},getters:{findNote:function(t){return function(e){return t.notes.find((function(t){return t.id===e}))}}},actions:{},modules:{},plugins:[Object(F["a"])()]});o("fa6d");n["a"].config.productionTip=!1,new n["a"]({router:Y,store:I,data:function(){return{isPopUpOpen:!1}},render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.8fc9b83f.js.map