(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-dicebear"],{"301b":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"max-w-full relative"},[e.loading?s("ProgressBar"):e._e(),s("AvatarImage",e._b({},"AvatarImage",{src:e.src,email:e.email},!1)),s("InputCopy",{staticClass:"mb-5",attrs:{value:e.src}}),s("Options",{attrs:{sprite:e.sprite},on:{"update:sprite":function(t){e.sprite=t}}}),s("GeneratorLink",{attrs:{href:"https://avatars.dicebear.com"}})],1)},r=[],i=s("e45e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-wrap -mx-3 mb-2"},[s("v-select",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0",attrs:{options:e.$options.sprites,name:"sprite",label:"sprite",value:e.sprite},on:{input:function(t){return e.$emit("update:sprite",t)}}})],1)},l=[],p=s("d5fd"),c=s("77dd");const o=Object(c["a"])(["male","female","identicon"]);var u={components:{VSelect:p["a"]},sprites:o,props:{sprite:String}},m=u,d=s("2877"),b=Object(d["a"])(m,n,l,!1,null,null,null),f=b.exports,v={name:"page-dicebear",title:"DiceBear",extends:i["a"],components:{Options:f},data:()=>({sprite:"female"}),computed:{src(){const e=this.hash,t=this.sprite;return`https://avatars.dicebear.com/v2/${t}/${e}.svg`}}},h=v,w=Object(d["a"])(h,a,r,!1,null,null,null);t["default"]=w.exports}}]);
//# sourceMappingURL=page-dicebear.aa24e2b6.js.map