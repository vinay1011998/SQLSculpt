import{r as p,j as e,H as x,I as m,q as h,L as t,h as b,b as g,p as f,M as j,n as i,c as _,d as B}from"./index-DOMUSjM9.js";import{_ as a}from"./get-DY_n4LKX.js";/* empty css               */const E=({setSelectedQuery:d,setIsQueryExecuted:o})=>{const[n,r]=p.useState(!1),l=()=>e.jsx(t,{"aria-label":"right",icon:n?"keyboard_arrow_up_round":"keyboard_arrow_down_round",iconAlign:"right",className:"pt-1 ml-4",onClick:()=>r(s=>!s),children:n?b:g}),c=()=>f.map((s,u)=>e.jsx(j,{className:"message-container mt-4 mb-4","data-test":a(s,"label",i),actions:e.jsx(t,{onClick:()=>{d(a(s,"id","-1")),r(!1),o(!1)},children:_}),children:e.jsx(B,{weight:"strong",children:a(s,"label",i)})},a(s,"id",u)));return e.jsxs("div",{className:"wrapper",children:[e.jsxs("div",{className:"d-flex",children:[e.jsxs(x,{size:"m","data-test":"heading-for-predefined-queries",children:[e.jsx(m,{size:24,name:"query_stats",className:"icon"})," ",h]}),l()]}),n&&c()]})};export{E as default};