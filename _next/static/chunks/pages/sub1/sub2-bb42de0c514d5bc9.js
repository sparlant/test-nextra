(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{6545:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sub1/sub2",function(){return t(6530)}])},9120:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893);function i(e){if(e)return"folder"===e.type?(0,r.jsxs)("li",{children:[(0,r.jsx)("button",{children:e.name}),(0,r.jsx)("ul",{children:e.children.map((function(e){return i(e)}))})]},e.name):"folder-with-index"===e.type?(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:e.link,children:e.name}),(0,r.jsx)("ul",{children:e.children.map((function(e){return i(e)}))})]},e.name):(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:e.link,children:e.name})},e.name)}function a(e){var n=e.tree;return(0,r.jsx)("div",{className:"sidebar",children:(0,r.jsx)("ul",{children:n.map((function(e){return i(e)}))})})}function s(e,n,t){var r=!0,i=!1,a=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var l=o.value;if("meta.json"!==l.name&&("index"!==l.name||n))if(l.children&&l.children.length>0)if(l.children.filter((function(e){return"index"===e.name})).length>0){var c=[];s(l.children,!1,c),t.push({type:"folder-with-index",name:l.name,link:l.route,children:c})}else{var d=[];s(l.children,!1,d),t.push({type:"folder",name:l.name,link:l.route,children:d})}else t.push({type:"page",name:l.name,link:l.route})}}catch(h){i=!0,a=h}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}}function o(e){return function(n){var t=n.children,i=[];return s(e.pageMap,!0,i),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{tree:i}),(0,r.jsx)("div",{className:"body-text",children:t})]})}}},7845:function(e,n,t){"use strict";var r=t(5893);n.Z={projectLink:"https://github.com/sparlant/test-nextra",docsRepositoryBase:"https://github.com/sparlant/test-nextra/blob/main",titleSuffix:" \u2013 Nextra",nextLinks:!0,prevLinks:!0,search:!0,customSearch:null,darkMode:!0,footer:!0,footerText:"MIT ".concat((new Date).getFullYear()," \xa9 Shu Ding."),footerEditLink:"Edit this page on GitHub",logo:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("svg",{children:"..."}),(0,r.jsx)("span",{children:"Next.js Static Site Generator"})]}),head:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{name:"description",content:"Nextra: the next docs builder"}),(0,r.jsx)("meta",{name:"og:title",content:"Nextra: the next docs builder"})]})}},6530:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(9120),a=t(3805),s=t(7845),o=function(e){return(0,a.withSSG)((0,i.Z)({filename:"index.mdx",route:"/sub1/sub2",meta:{},pageMap:[{name:"index",route:"/"},{name:"meta.json",meta:{index:"Welcome",sub1:"First training"}},{name:"sub1",children:[{name:"index",route:"/sub1"},{name:"meta.json",meta:{index:"Main informations"}},{name:"sub2",children:[{name:"index",route:"/sub1/sub2"}],route:"/sub1/sub2"}],route:"/sub1"},{name:"sub2",children:[{name:"subb2",route:"/sub2/subb2"}],route:"/sub2"}]},s.Z))(e)};function u(e){var n=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"Nextra SubSubFolder"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nextra"})," is a ",(0,r.jsx)(n.a,{href:"https://nextjs.org",children:"Next.js"})," based static site generator."]}),"\n",(0,r.jsxs)(n.p,{children:["It supports Markdown and React components (",(0,r.jsx)(n.a,{href:"/features/mdx",children:"MDX"}),"), automatically generated ",(0,r.jsx)(n.a,{href:"/get-started#sidebar-and-anchor-links",children:"sidebar and anchor links"}),", file-system based routing, built-in syntax highlighting, image optimization, custom layouts, i18n, and all the features you love about Next.js."]}),"\n",(0,r.jsx)(n.p,{children:"Here's what you will get in 1 minute:"}),"\n",(0,r.jsx)(n.p,{children:"Nextra Example"})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(o,Object.assign({},e,{children:(0,r.jsx)(u,e)}))}},7308:function(e,n,t){var r,i=t(7294),a=(r=i)&&"object"===typeof r&&"default"in r?r.default:r;const s=i.createContext({});n.withSSG=e=>n=>a.createElement(s.Provider,{value:n.ssg},a.createElement(e,n))},3805:function(e,n,t){e.exports=t(7308)}},function(e){e.O(0,[774,888,179],(function(){return n=6545,e(e.s=n);var n}));var n=e.O();_N_E=n}]);