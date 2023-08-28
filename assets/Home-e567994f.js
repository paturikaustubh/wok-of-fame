import{j as e,C as h,L as x,r}from"./index-57c817de.js";function g(){return e.jsx("div",{className:"container-fluid py-5 bg-danger",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 col-lg-5 col-12 text-center",children:e.jsx("img",{loading:"lazy",src:"https://media.istockphoto.com/id/1038108608/photo/bowls-with-chow-mein.jpg?s=612x612&w=0&k=20&c=BioejbjglNwOp6yeRnOAcPCHuK5Ixr8cQJCNFQDX5oI=",alt:"Image",width:"100%",className:"rounded logo"})}),e.jsxs("div",{className:"col-md-12 col-lg-7 col-12 py-4",children:[e.jsx("div",{className:"text-light display-4 font-weight-light",children:"Welcome to"}),e.jsx("p",{className:"display-2 font-weight-bold text-light main-title",children:"Wok Of Fame"}),e.jsx("div",{className:"text-light",children:"Experience the taste of pure Chinese."}),e.jsx("div",{className:"text-light",children:"We provide the best quality Chinese food with great taste in whole of Mumbai."}),e.jsxs("div",{className:"text-light",children:["Order online or visit our"," ",e.jsx("a",{href:"https://goo.gl/maps/jdxpoXjhggSSsEG97",className:"text-light",children:e.jsx("u",{children:"dine-in"})})]})]})]})})}function p(){return e.jsxs("div",{className:"container-fluid py-5 bg-light",id:"menu",children:[e.jsxs("div",{className:"display-3 text-center",children:[e.jsx("span",{className:"font-weight-light",children:"Today's "}),e.jsx("span",{className:"text-danger font-weight-normal",children:"Specials✨"})]}),e.jsxs("div",{className:"row mt-4 text-center py-4",children:[e.jsx(h,{children:n=>{const{specials:t,updateCart:c,cart:a}=n;return e.jsx(e.Fragment,{children:t.map((i,d)=>(console.log(i),e.jsx(j,{item:i,updateCart:c,cart:a},d)))})}}),e.jsx("div",{className:"col-12 text-right",children:e.jsx("h2",{children:e.jsx(x,{to:"menu",className:"btn btn-danger btn-lg mt-4",children:"View Full Menu"})})})]})]})}function j({item:n,updateCart:t,cart:c}){const[a,i]=r.useState(0),[d,o]=r.useState(!0),[s,m]=r.useState({name:"",img:"",cost:0,details:"",category:"",rating:0,veg:!0});return r.useEffect(()=>{console.log("count effect"),d?(m(c.map(l=>{if(l.name===n.name)return i(l.qnty),l})[0]??n),o(!1)):t({details:s.details,rating:s.rating,veg:s.veg,name:s.name,qnty:a,cost:s.cost,category:s.category,img:s.img})},[a]),e.jsx("div",{className:"col-md-6 col-lg-4 col-12 mb-4",children:e.jsxs("div",{className:"card shadow h-100",children:[e.jsx("img",{loading:"lazy",src:`Images/Menu/${s.img}.jpg`,alt:s.title,className:"card-img-top",height:"350"}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"d-flex justify-content-center align-items-center",style:{gap:"0.5em"},children:[e.jsx("img",{loading:"lazy",src:`Images/${s.veg?"Veg":"Non"}.png`,alt:"",width:25,height:25}),e.jsxs("h2",{className:"card-title m-0",children:[s.name," "]})]}),e.jsx("p",{className:"text-justify text-secondary",children:s.details})]}),e.jsxs("div",{className:"card-footer text-right",children:[e.jsxs("div",{className:"float-left mt-2 text-dark",children:[e.jsx("span",{style:{...a>0&&{display:"none"}},children:`₹${s.cost}`}),e.jsx("span",{style:{...a===0&&{display:"none"}},className:"text-success h4",children:`₹${s.cost*a} `}),e.jsx("span",{style:{...a===0&&{display:"none"}},children:`(${s.cost} x ${a})`})]}),e.jsx("button",{style:{...a>0&&{display:"none"},width:130},className:"btn btn-lg btn-dark",onClick:async()=>{i(l=>l+1)},children:"+ 🍽️"}),e.jsxs("div",{className:"btn-group",role:"group",style:{...a===0&&{display:"none"}},children:[e.jsx("button",{className:"btn btn-lg btn-dark",onClick:async()=>{i(l=>l-1)},children:"-"}),e.jsx("div",{className:"btn btn-lg",children:a}),e.jsx("button",{disabled:a>=10,className:"btn btn-lg btn-dark",onClick:async()=>{i(l=>l+1)},children:"+"})]})]})]})})}function u(){const n=[{img:"Images/wok-of-fame.webp",title:"Mini Bar",desc:"Clear your mind with friends with a beach view",active:"active"},{img:"Images/Interior.jpg",title:"Elegant View",desc:"Have your favourite meal with a pleasent view",active:""},{img:"Images/Buffet.jpg",title:"Couple Time",desc:"For the special couple",active:""}];return e.jsxs("div",{className:"container text-center py-5",children:[e.jsxs("p",{className:"display-2",children:[e.jsx("span",{className:"font-weight-light",children:"Image"})," ",e.jsx("span",{className:"text-danger font-weight-normal",children:"Gallery🖼️"})]}),e.jsxs("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel",children:[e.jsx("div",{className:"carousel-inner",children:n.map((t,c)=>e.jsxs("div",{className:`carousel-item ${t.active}`,children:[e.jsx("img",{loading:"lazy",className:"d-block w-100",src:t.img,alt:t.title}),e.jsx("div",{className:"carousel-caption d-md-flex d-none",children:e.jsxs("div",{className:"pt-3 pb-1 w-100",style:{backgroundColor:"rgba(8, 8, 8, 0.5)",backdropFilter:"blur(2px)"},children:[e.jsx("h5",{children:t.title}),e.jsx("p",{children:t.desc})]})})]},c))}),e.jsxs("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev",children:[e.jsx("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"Previous"})]}),e.jsxs("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next",children:[e.jsx("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"Next"})]})]})]})}function y(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx(p,{}),e.jsx(u,{})]})}export{y as default};
