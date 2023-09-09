import{r as n,a as y,u as v,j as e,C as w,L as f}from"./index-33d6b547.js";import{D as N}from"./Dialog-57a71b23.js";function I(){const{menu:s,cart:o}=n.useContext(y),l=v().state??!1,[c,t]=n.useState(s),[a,i]=n.useState(""),[u,d]=n.useState(!1);return n.useState(!1),n.useEffect(()=>window.scrollTo({top:0}),[!1]),n.useEffect(()=>{document.addEventListener("keydown",r=>{r.code==="Escape"&&d(!1)})},[!1]),e.jsx(w,{children:({updateCart:r,cart:g})=>e.jsxs(n.Fragment,{children:[e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"container border mt-5 p-lg-4 p-1 rounded bg-light",children:[e.jsxs("div",{className:"row align-items-center d-flex justify-content-between",children:[e.jsx("p",{className:"display-3 col-4 text-danger",style:{fontWeight:500},children:"Menu"}),l&&e.jsx(f,{to:"/wok-of-fame/reserve",className:"btn btn-danger btn-lg",onClick:()=>{r({}),window.scrollTo({top:0})},children:"Cancel"})]}),e.jsx("input",{type:"search",placeholder:"Search items in Menu",className:"form-input w-100",onInput:({target:m})=>i(m.value)}),e.jsx("div",{style:{display:"flex",gap:12,marginTop:30}}),e.jsx("hr",{}),e.jsx("div",{className:"mt-3",children:c.map((m,j)=>{const{title:p,items:h}=m;return e.jsxs("div",{style:{marginBottom:"3rem"},id:p.toLowerCase().slice(0,-2).split(" ").join(""),children:[e.jsx("div",{className:"py-1 text-white px-4 rounded menu-item-title",style:{background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(4px)",position:"sticky",zIndex:1,color:"white",fontWeight:500,...h.length===0&&{display:"none"}},children:p}),h.filter(({name:x})=>x.toLowerCase().includes(a.toLowerCase())).map((x,b)=>e.jsx(C,{element:x,searchValue:a},b))]},j)})})]})}),e.jsxs("div",{style:{position:"sticky",bottom:50,display:"flex",justifyContent:"center",gap:"3em",zIndex:1,marginTop:10,marginBottom:30},children:[e.jsx("button",{className:"rounded-full rounded btn-warning",style:{outline:"none"},id:"section-btn",onClick:()=>d(m=>!m),children:"Sections📃"}),l&&g.length>0&&e.jsx(f,{onClick:()=>window.scrollTo({top:0}),to:g.length>0?"/wok-of-fame/plate":"/wok-of-fame/details",className:"rounded-full rounded btn-lg btn btn-success",style:{outline:"none"},state:{reserve:!0},children:"Continue Reservation"})]}),e.jsx(k,{showSection:u,setShowSections:d})]})})}function C({element:s,searchValue:o}){const{cart:l,updateCart:c}=n.useContext(y);let t=l.filter(r=>{if(r.name.includes(s.name))return r.qnty})[0];t=t?t.qnty:0;const[a,i]=n.useState(t),[u,d]=n.useState(!0);return n.useEffect(()=>{u?d(!1):c({details:s.details,rating:s.rating,veg:s.veg,name:s.name,qnty:a,cost:s.cost,category:s.category,img:s.img})},[a]),e.jsxs("div",{className:"border border-top-0 border-right-0 border-left-0 py-lg-4 py-2 px-3 d-flex flex-column flex-lg-row",style:{...o.length>0&&s.name!==o&&{display:"none"}},children:[e.jsx("img",{loading:"lazy",src:s.img?`Images/Menu/${s.img}.jpg`:"",alt:s.name,style:{maxWidth:"20rem",aspectRatio:"16/9",transitionDuration:"200ms",objectFit:"cover",objectPosition:"center",marginInline:"auto"}}),e.jsxs("div",{className:"d-flex flex-lg-row flex-column align-items-start w-100 px-lg-4 px-2 pt-2",style:{justifyContent:"space-between"},children:[e.jsxs("div",{className:"d-flex flex-column",style:{gap:"0.6em"},children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[s.category!=="dessert"&&s.category!=="baverage"&&e.jsx("img",{src:s.veg?"Images/Veg.png":"Images/Non.png",alt:s.veg?"Veg":"Non-Veg",width:20,height:20}),e.jsx("p",{className:"item-name",children:s.name})]}),e.jsxs("div",{className:"d-flex align-items-baseline",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 576 512",style:{fill:"#FAAF00"},children:e.jsx("path",{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"})}),e.jsx("span",{children:s.rating})]}),e.jsx("p",{className:"font-weight-normal text-secondary w-100 item-desc",children:s.details}),e.jsxs("h5",{className:"font-weight-normal item-serves",children:["🧑🏻‍🦱 ",s.serves]})]}),e.jsxs("div",{style:{marginLeft:"auto"},children:[e.jsx("button",{style:{...t>0&&{display:"none"}},className:"btn btn-dark add-btn",onClick:async()=>{i(t+1)},children:"+ 🍽️"}),e.jsxs("div",{className:"btn-group float-right mb-3",role:"group",style:{...t===0&&{display:"none"}},children:[e.jsx("button",{className:"btn btn-dark",onClick:async()=>{i(t-1)},children:"-"}),e.jsx("div",{className:"btn btn-text",children:t}),e.jsx("button",{disabled:t>=10,className:"btn btn-dark",onClick:async()=>{i(t+1)},children:"+"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("span",{style:{...t>0&&{display:"none"}},className:"text-secondary item-cost-big",children:`₹${s.cost}`}),e.jsx("span",{style:{...t===0&&{display:"none"}},className:"text-success item-cost-big",children:`₹${s.cost*t} `}),e.jsxs("span",{style:{...t===0&&{display:"none"}},className:"",children:["(",s.cost," x ",t,")"]})]})]})]})]})}function k({showSection:s,setShowSections:o}){const l=[{name:"Starters🍲",id:"starters"},{name:"Main Course🍛",id:"main-course"},{name:"Desserts🍨",id:"desserts"},{name:"Baverages☕",id:"baverage"}];return e.jsx(N,{title:"Sections",show:s,setShow:o,content:e.jsx("div",{className:"nav-buttons",children:l.map(({name:c,id:t},a)=>{const i=document.getElementById(`${t}`);return e.jsx("button",{className:"section-button",onClick:()=>{o(!1),i.scrollIntoView({behavior:"smooth"})},children:c},a)})})})}export{I as default};
