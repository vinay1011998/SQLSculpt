import{r as p,j as e,B as x,s as u,S as g,M as b,d as j,m,o as f,v as S,w as C,x as v,y}from"./index-DOMUSjM9.js";import{_ as t}from"./get-DY_n4LKX.js";const w=({selectedQuery:n})=>{const[o,i]=p.useState(!1),r={onClose:()=>{i(!1)},open:o,headerOptions:{heading:v,subHeading:y}},d=s=>{const{label:a}=s;return e.jsx("div",{className:"py-4",children:a&&e.jsx(m,{children:a})})},l={label:f};async function c(s){console.log(`${s} this query ${n} in less than 50 words.`)}const h=()=>e.jsx("div",{className:"d-flex mt-4 justify-content-end",children:S.map((s,a)=>e.jsx(C,{icon:t(s,"icon",""),label:t(s,"label",""),onClick:()=>c(t(s,"value","explain")),className:"mr-2",disabled:!1,"data-test":`chip-btn-${t(s,"value","explain")}`},t(s,"value","explain")))});return e.jsxs("div",{"data-test":"sidesheet-main",children:[e.jsx(x,{appearance:"primary",onClick:()=>i(!0),icon:"rocket_launch",iconAlign:"left",disabled:n==="","data-test":"sidesheet-trigger-btn",children:u}),e.jsxs(g,{...r,"data-test":"kong-sidesheet",children:[e.jsx(d,{...l}),e.jsx(b,{className:"mt-2 mb-4","data-test":"selected-query-sidesheet",children:e.jsx(j,{weight:"strong","data-test":`${n}-text`,children:n})}),h()]})]})};export{w as default};
