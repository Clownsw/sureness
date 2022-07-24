"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7080],{4137:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>h});var r=s(7294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function a(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(s),h=n,b=m["".concat(u,".").concat(h)]||m[h]||c[h]||o;return s?r.createElement(b,i(i({ref:t},p),{},{components:s})):r.createElement(b,i({ref:t},p))}));function h(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=s.length,i=new Array(o);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var l=2;l<o;l++)i[l]=s[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,s)}m.displayName="MDXCreateElement"},2884:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=s(7462),n=(s(7294),s(4137));const o={id:"contributing",title:"Contributing to Us",sidebar_label:"Contribute To Us"},i="Contributing to Sureness",a={unversionedId:"contributing",id:"contributing",title:"Contributing to Us",description:"Very welcome to Contribute this project, go further and better with sureness.",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/sureness/docs/contributing",draft:!1,editUrl:"https://github.com/dromara/sureness/edit/master/home/docs/contributing.md",tags:[],version:"current",frontMatter:{id:"contributing",title:"Contributing to Us",sidebar_label:"Contribute To Us"},sidebar:"docs",previous:{title:"Design",permalink:"/sureness/docs/design"},next:{title:"Sponsor",permalink:"/sureness/docs/sponsor"}},u={},l=[{value:"How to contribute?",id:"how-to-contribute",level:2},{value:"Join discussion",id:"join-discussion",level:2},{value:"\u5982\u4f55\u8d21\u732e?",id:"\u5982\u4f55\u8d21\u732e",level:2},{value:"\u52a0\u5165\u4ea4\u6d41",id:"\u52a0\u5165\u4ea4\u6d41",level:2}],p={toc:l};function c(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"contributing-to-sureness"},"Contributing to Sureness"),(0,n.kt)("p",null,"Very welcome to Contribute this project, go further and better with sureness.\nFirstly, thanks for your interest in contributing! I hope that this will be a pleasant first experience for you, and that you will return to continue contributing."),(0,n.kt)("p",null,"Components of Repository:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/core"},"sureness's kernel code--sureness-core")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/sample-bootstrap"},"sureness integration springboot sample(configuration file scheme)--sample-bootstrap")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/sample-tom"},"sureness integration springboot sample(database scheme)-sample-tom")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/samples"},"sample projects using sureness in each framework(javalin,ktor,quarkus)--samples"))),(0,n.kt)("h2",{id:"how-to-contribute"},"How to contribute?"),(0,n.kt)("p",null,"Most of the contributions that we receive are code contributions, but you can\nalso contribute to the documentation or simply report solid bugs\nfor us to fix."),(0,n.kt)("p",null,"For new contributors, please take a look at issues or pull requests with a tag called below."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Good first issue"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"},"Help wanted"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/issues?q=label%3A%22good+first+pull+request%22+"},"Good first pull request")),(0,n.kt)("h2",{id:"join-discussion"},"Join discussion"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/discussions"},"Github Discussion"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://gitter.im/usthe/sureness"},"Gitter Channel")),(0,n.kt)("hr",null),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"\u53c2\u4e0e\u8d21\u732e"},"\u53c2\u4e0e\u8d21\u732e"),(0,n.kt)("p",null,"\u975e\u5e38\u6b22\u8fce\u53c2\u4e0e\u9879\u76ee\u8d21\u732e\uff0c\u6211\u4eec\u81f4\u529b\u4e8e\u7ef4\u62a4\u4e00\u4e2a\u4e92\u76f8\u5e2e\u52a9\u7684\u5feb\u4e50\u793e\u533a\u3002"),(0,n.kt)("p",null,"\u4ed3\u5e93\u7684\u7ec4\u6210\u90e8\u5206:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/core"},"sureness\u7684\u6838\u5fc3\u4ee3\u7801--sureness-core")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/sample-bootstrap"},"\u4f7f\u7528sureness\u96c6\u6210springboot\u642d\u5efa\u6743\u9650\u9879\u76ee(\u914d\u7f6e\u6587\u4ef6\u65b9\u6848)--sample-bootstrap")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/sample-tom"},"\u4f7f\u7528sureness\u96c6\u6210springboot\u642d\u5efa\u6743\u9650\u9879\u76ee(\u6570\u636e\u5e93\u65b9\u6848)--sample-tom")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/samples"},"\u5404\u4e2a\u6846\u67b6\u4f7f\u7528sureness\u7684\u6837\u4f8b\u9879\u76ee(javalin,ktor,quarkus)--samples"))),(0,n.kt)("h2",{id:"\u5982\u4f55\u8d21\u732e"},"\u5982\u4f55\u8d21\u732e?"),(0,n.kt)("p",null,"\u6211\u4eec\u4e0d\u4ec5\u4ec5\u63a5\u6536\u4ee3\u7801\u7684\u8d21\u732e\u63d0\u4ea4\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63d0\u4ea4\u6587\u6863\u7684\u66f4\u65b0\u6216\u8005BUG\u7684\u62a5\u544a\u6765\u53c2\u4e0e\u793e\u533a\u8d21\u732e\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u662f\u65b0\u7684\u8d21\u732e\u8005\uff0c\u8bf7\u9996\u5148\u4e86\u89e3\u53c2\u8003\u5982\u4e0b\u6837\u4f8b\u7684\u63d0\u4ea4Issues,\u63d0\u4ea4Pull Requests\u5982\u679c\u5de5\u4f5c\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Good first issue"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"},"Help wanted"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/issues?q=label%3A%22good+first+pull+request%22+"},"Good first pull request")),(0,n.kt)("h2",{id:"\u52a0\u5165\u4ea4\u6d41"},"\u52a0\u5165\u4ea4\u6d41"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/discussions"},"Github Discussion"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://gitter.im/usthe/sureness"},"Gitter Channel"),(0,n.kt)("br",{parentName:"p"}),"\n","QQ\u4ea4\u6d41\u7fa4\uff1a390083213",(0,n.kt)("br",{parentName:"p"}),"\n","\u5fae\u4fe1\u516c\u4f17\u53f7\uff1asureness"))}c.isMDXComponent=!0}}]);