import{r as o,u as v,a as y,j as e,C as f,L as p}from"./index-d403958a.js";function C(){const[r,h]=o.useState(!1),d=v().state??!1;o.useEffect(()=>window.scrollTo({top:0}),[!1]);const{cart:u}=o.useContext(y);return o.useEffect(()=>{u.length>0&&console.log(u.sort((a,c)=>a.category-c.category))}),e.jsx(f,{children:({cart:a,updateCart:c})=>{const g=a.map(({qnty:t})=>t).reduce((t,n)=>t+n,0);let i=0,x=50;a.map(({qnty:t,cost:n})=>{i+=t*n});let s=Math.floor(i*(18/100)),l=s+x+i;const m=10-l%10;return e.jsx(e.Fragment,{children:a.length===0?e.jsxs("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",padding:4,flexDirection:"column"},children:[e.jsx("p",{style:{fontWeight:400,fontSize:"3rem"},children:"Woah... Such empty...🍽️"}),e.jsx(p,{onClick:()=>window.scrollTo({top:0}),to:"/wok-of-fame/menu",className:"btn btn-lg btn-outline-danger",children:"Continue Cooking"})]}):e.jsxs("div",{className:"plate container bg-light",children:[e.jsxs("div",{className:"plate-count-div",children:[e.jsx("div",{className:"plate-count",children:g}),e.jsx("div",{children:`Item${g>1?"s":""} on the plate!😋`})]}),e.jsxs("div",{className:"cart-items-list",children:[a.sort((t,n)=>t.category-n.category).map((t,n)=>e.jsx(e.Fragment,{children:e.jsx(b,{item:t,updateCart:c},n)})),e.jsx("hr",{className:"w-100"}),e.jsxs("div",{className:"additional-costs",children:[e.jsxs("div",{children:[e.jsx("div",{className:"subtotal-text",children:"Subtotal"}),e.jsxs("div",{className:"subtotal-cost",children:["₹",i]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"gst-text",children:"GST"}),e.jsxs("div",{className:"gst-cost",children:[e.jsxs("span",{children:["₹",s]}),e.jsx("span",{style:{fontSize:"small",color:"var(--red)"},children:Math.floor(i*(18/100))!==i*(18/100)&&e.jsxs("div",{children:["-",(i*(18/100)-Math.floor(i*(18/100))).toFixed(2)]})})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"delivery-text",children:"Delivery Charges"}),e.jsxs("div",{className:"delivery-cost",children:["₹",x]})]}),r&&e.jsxs("div",{children:[e.jsx("div",{className:"round-off-text",children:"Tip"}),e.jsxs("div",{className:"round-off-cost",children:[e.jsxs("span",{children:["₹",m]}),e.jsx("button",{onClick:()=>h(!1),children:"❌"})]})]})]}),e.jsx("hr",{className:"w-100"}),e.jsxs("div",{className:"cart-total",children:[e.jsx("div",{className:"text-info",children:"Grand Total"}),e.jsxs("div",{children:["₹",r?l+m:l]})]}),l%10!==0&&!r&&e.jsxs("div",{className:"round-off",children:[e.jsx("div",{children:"Tip our delivery guy with"}),e.jsx("button",{onClick:()=>{h(!0)},children:`₹${Math.round(10-l%10)}`})]})]}),e.jsx(f,{children:({setTotalPayment:t})=>e.jsx("div",{className:"continue",children:e.jsx(p,{to:"/wok-of-fame/details",state:{reserve:d},className:"continue-button",onClick:()=>{window.scrollTo({top:0}),t(r?l+m:l)},children:"Continue"})})})]})})}})}function b({item:r,updateCart:h}){const{category:j,cost:d,details:u,img:a,name:c,qnty:g,rating:i,veg:x}=r,[s,l]=o.useState(g),[m,t]=o.useState(!0);return o.useEffect(()=>{m?t(!1):h({details:u,rating:i,veg:x,name:c,qnty:s,cost:d,category:j,img:a})},[s]),e.jsxs("div",{className:"border border-top-0 border-right-0 border-left-0 py-lg-4 py-2 px-3 d-flex flex-column flex-lg-row",children:[e.jsx("img",{loading:"lazy",src:a?`Images/Menu/${a}.jpg`:"",alt:c,style:{maxWidth:"20rem",aspectRatio:"16/9",transitionDuration:"200ms",objectFit:"cover",objectPosition:"center"}}),e.jsxs("div",{className:"d-flex flex-lg-row flex-column align-items-start w-100 px-lg-4 px-2 pt-2",style:{justifyContent:"space-between"},children:[e.jsx("div",{className:"d-flex flex-column",style:{gap:"0.6em"},children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[j!=="dessert"&&j!=="baverage"&&e.jsx("img",{src:x?"Images/Veg.png":"Images/Non.png",alt:x?"Veg":"Non-Veg",width:20,height:20}),e.jsx("p",{className:"item-name",children:c})]})}),e.jsxs("div",{style:{marginLeft:"auto"},children:[e.jsx("button",{style:{...s>0&&{display:"none"}},className:"btn btn-dark add-btn",onClick:async()=>{l(n=>n+1)},children:"+ 🍽️"}),e.jsxs("div",{className:"btn-group float-right mb-3",role:"group",style:{...s===0&&{display:"none"}},children:[e.jsx("button",{className:"btn btn-dark",onClick:async()=>{l(n=>n-1)},children:"-"}),e.jsx("div",{className:"btn btn-text",children:s}),e.jsx("button",{disabled:s>=10,className:"btn btn-dark",onClick:async()=>{l(n=>n+1)},children:"+"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("span",{style:{...s>0&&{display:"none"}},className:"text-secondary item-cost-big",children:`₹${d}`}),e.jsx("span",{style:{...s===0&&{display:"none"}},className:"text-success item-cost-big",children:`₹${d*s} `}),e.jsxs("span",{style:{...s===0&&{display:"none"}},className:"",children:["(",d," x ",s,")"]})]})]})]})]})}export{C as default};