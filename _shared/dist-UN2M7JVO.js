import{m as a}from"/myst-online-media-testing/build/_shared/chunk-GTUSQ763.js";import{i as c,j as d,k as y,m as g,p as C}from"/myst-online-media-testing/build/_shared/chunk-RMYRWJKG.js";c();d();y();C();g();var v=/((?<before>[\s\S]*?)\s+){0,1}\^\^\^(\s+(?<after>[\s\S]*)){0,1}/,x={name:"card",alias:"grid-item-card",arg:{type:a.parsed},options:{link:{type:a.string},header:{type:a.parsed},footer:{type:a.parsed}},body:{type:a.parsed,required:!0},run(s){let{link:p,header:r,footer:t}=s.options||{},e,l,n;if(r||t)e=r?[{type:"paragraph",children:r}]:[],l=s.body,n=t?[{type:"paragraph",children:t}]:[];else{let[u,i]=m(s.body);e=i.length?u:[];let h=i.length?i:u;[l,n]=E(h)}let o=[];return e.length&&o.push({type:"header",children:e}),s.arg&&o.push({type:"cardTitle",children:s.arg}),o.push(...l),n.length&&o.push({type:"footer",children:n}),[{type:"card",url:p,children:o}]}};function b(s){var p;let r=[],t=[],e=!1;return(p=s.children)===null||p===void 0||p.forEach(n=>{var o;if(e){t.push(n);return}if(n.type!=="text"||!n.value){r.push(n);return}let u=n.value,i=v.exec(u);if(!i){r.push(n);return}e=!0;let{before:h,after:f}=(o=i.groups)!==null&&o!==void 0?o:{};h&&r.push({type:"text",value:h}),f&&t.push({type:"text",value:f})}),{before:r.length?{...s,children:r}:null,after:t.length?{...s,children:t}:null,post:e}}function m(s){let p=[],r=[],t=!1;return s.forEach(e=>{if(t)r.push(e);else if(e.type!=="paragraph")p.push(e);else{let l=b(e),{before:n,after:o}=l;t=l.post,n&&p.push(n),o&&r.push(o)}}),[p,r]}function E(s){let p=[],r=[],t=!1;return s.forEach(e=>{t?r.push(e):e.type!=="blockBreak"?p.push(e):t=!0}),[p,r]}export{x as cardDirective,b as splitParagraphNode};
