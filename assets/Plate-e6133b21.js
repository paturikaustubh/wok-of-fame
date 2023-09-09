import{r as x,u as N,j as e,C as g,L as p,a as b}from"./index-33d6b547.js";function k(){const[o,h]=x.useState(!1),r=N().state??!1;return x.useEffect(()=>window.scrollTo({top:0}),[!1]),e.jsx(g,{children:({cart:i,updateCart:m})=>{const c=i.map(({qnty:t})=>t).reduce((t,l)=>t+l,0);let n=0,j=50;i.map(({qnty:t,cost:l})=>{n+=t*l});let d=Math.floor(n*(18/100)),a=d+j+n;const s=10-a%10;return e.jsx(e.Fragment,{children:i.length===0?e.jsxs("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e.jsx("p",{className:"such-empty",children:"Woah... Such empty...🍽️"}),e.jsx(p,{onClick:()=>window.scrollTo({top:0}),to:"/wok-of-fame/menu",className:"btn btn-lg btn-outline-danger",children:"Continue Cooking"})]}):e.jsxs("div",{className:"plate container bg-light",children:[e.jsxs("div",{className:"plate-count-div",children:[e.jsx("div",{className:"plate-count",children:c}),e.jsx("div",{children:`Item${c>1?"s":""} on the plate!😋`})]}),e.jsxs("div",{className:"cart-items-list",children:[i.sort((t,l)=>t.category-l.category).map((t,l)=>(console.log(i),e.jsx(C,{item:t,updateCart:m},l))),e.jsx("hr",{className:"w-100"}),e.jsxs("div",{className:"additional-costs",children:[e.jsxs("div",{children:[e.jsx("div",{className:"subtotal-text",children:"Subtotal"}),e.jsxs("div",{className:"subtotal-cost",children:["₹",n]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"gst-text",children:"GST"}),e.jsxs("div",{className:"gst-cost",children:[e.jsxs("span",{children:["₹",d]}),e.jsx("span",{style:{fontSize:"small",color:"var(--red)"},children:Math.floor(n*(18/100))!==n*(18/100)&&e.jsxs("div",{children:["-",(n*(18/100)-Math.floor(n*(18/100))).toFixed(2)]})})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"delivery-text",children:"Delivery Charges"}),e.jsxs("div",{className:"delivery-cost",children:["₹",j]})]}),o&&e.jsxs("div",{children:[e.jsx("div",{className:"round-off-text",children:"Tip"}),e.jsxs("div",{className:"round-off-cost",children:[e.jsxs("span",{children:["₹",s]}),e.jsx("button",{onClick:()=>h(!1),children:"❌"})]})]})]}),e.jsx("hr",{className:"w-100"}),e.jsxs("div",{className:"cart-total",children:[e.jsx("div",{className:"text-info",children:"Grand Total"}),e.jsxs("div",{children:["₹",o?a+s:a]})]}),a%10!==0&&!o&&e.jsxs("div",{className:"round-off",children:[e.jsx("div",{children:"Tip our delivery guy with"}),e.jsx("button",{onClick:()=>{h(!0)},children:`₹${Math.round(10-a%10)}`})]})]}),e.jsx(g,{children:({setTotalPayment:t})=>e.jsx("div",{className:"continue",children:e.jsx(p,{to:"/wok-of-fame/details",state:{reserve:r},className:"continue-button",onClick:()=>{window.scrollTo({top:0}),t(o?a+s:a)},children:"Continue"})})})]})})}})}function C({item:o,updateCart:h}){const{category:u,cost:r,details:i,img:m,name:c,qnty:n,rating:j,veg:d}=o,{cart:a}=x.useContext(b);let s=a.filter(f=>{if(f.name.includes(c))return f.qnty})[0];s=s?s.qnty:0;const[t,l]=x.useState(s),[v,y]=x.useState(!0);return console.log(t),x.useEffect(()=>{v?y(!1):h({details:i,rating:j,veg:d,name:c,qnty:t,cost:r,category:u,img:m})},[t]),e.jsxs("div",{className:"border border-top-0 border-right-0 border-left-0 py-lg-4 py-2 px-3 d-flex flex-column flex-lg-row",children:[e.jsx("img",{loading:"lazy",src:m?`Images/Menu/${m}.jpg`:"",alt:c,style:{maxWidth:"20rem",aspectRatio:"16/9",transitionDuration:"200ms",objectFit:"cover",objectPosition:"center"}}),e.jsxs("div",{className:"d-flex flex-lg-row flex-column align-items-start w-100 px-lg-4 px-2 pt-2",style:{justifyContent:"space-between"},children:[e.jsx("div",{className:"d-flex flex-column",style:{gap:"0.6em"},children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[u!=="dessert"&&u!=="baverage"&&e.jsx("img",{src:d?"Images/Veg.png":"Images/Non.png",alt:d?"Veg":"Non-Veg",width:20,height:20}),e.jsx("p",{className:"item-name",children:c})]})}),e.jsxs("div",{style:{marginLeft:"auto"},children:[e.jsx("button",{style:{...s>0&&{display:"none"}},className:"btn btn-dark add-btn",onClick:async()=>{l(s+1)},children:"+ 🍽️"}),e.jsxs("div",{className:"btn-group float-right mb-3",role:"group",style:{...s===0&&{display:"none"}},children:[e.jsx("button",{className:"btn btn-dark",onClick:async()=>{l(s-1)},children:"-"}),e.jsx("div",{className:"btn btn-text",children:s}),e.jsx("button",{disabled:s>=10,className:"btn btn-dark",onClick:async()=>{l(s+1)},children:"+"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("span",{style:{...s>0&&{display:"none"}},className:"text-secondary item-cost-big",children:`₹${r}`}),e.jsx("span",{style:{...s===0&&{display:"none"}},className:"text-success item-cost-big",children:`₹${r*s} `}),e.jsxs("span",{style:{...s===0&&{display:"none"}},className:"",children:["(",r," x ",s,")"]})]})]})]})]})}export{k as default};
