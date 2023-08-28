import{j as e,C as d,L as l}from"./index-54e8cf56.js";function c(){return e.jsxs("div",{className:"container bg-light border wrapper",children:[e.jsx("div",{className:"reserve-title",children:"Don't wait for others to get free!"}),e.jsx("div",{className:"reserve-subtitle text-secondary",children:"Book a seat for you/your family and we will keep it available till your arrival."}),e.jsxs("div",{action:"",className:"table-details-form",children:[e.jsx("div",{className:"table-form-head",children:"Specify details for reservation"}),e.jsx(d,{children:({tableDetails:o,setTableDetails:r,cart:a,updateCart:s})=>e.jsxs("div",{className:"flex-form-inputs",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"table-type",className:"form-label",children:"Select a table that you prefer"}),e.jsxs("select",{name:"table",id:"table-type",className:"form-input",value:o.table,onChange:({target:n})=>r({...o,[n.name]:n.value}),children:[e.jsx("option",{children:"A/C"}),e.jsx("option",{children:"Non A/C"}),e.jsx("option",{children:"Open Top"}),e.jsx("option",{children:"Beach View"}),e.jsx("option",{children:"Restro Bar"})]}),e.jsx("span",{className:`age-alert ${o.table==="Restro Bar"?"show":""} text-danger`,children:"You need to carry your Aadhar or any other ID proof to confirm your age before entering."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"count",className:"form-label",children:"Table for how many members?"}),e.jsx("input",{defaultValue:4,type:"number",name:"count",id:"count",placeholder:"Count",className:"form-input",value:o.count,onInput:({target:n})=>{r({...o,[n.name]:n.value});const i=document.getElementById(n.id);(n.value>15||n.value<=0)&&n.value!=69?i.classList.add("invalid"):(n.value<=15||n.value>0||n.value===""||n.value===69)&&i.classList.remove("invalid")}})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"date-time",className:"form-label",children:"Reserve on..."}),e.jsx("input",{type:"datetime-local",name:"date",id:"date-time",placeholder:"",className:"form-input",value:o.date,onChange:({target:n})=>r({...o,[n.name]:n.value})})]}),e.jsxs("div",{children:[e.jsx("div",{children:"Don't wait for your food when you arrive!"}),e.jsx("div",{className:"text-secondary",children:"Pre-order your food now and enjoy your meal with ZERO waiting time."}),e.jsx("button",{className:"continue-button",style:{marginTop:"1em",padding:0,marginLeft:0},disabled:o.table===""||o.count<=0||o.count>15&&o.count!=69||o.date==="",children:e.jsx(l,{to:"/wok-of-fame/menu",state:!0,style:{textDecoration:"none",color:"inherit",height:"100%",width:"100%",display:"inline-block",paddingBlock:"0.5em",paddingInline:"1.5em"},children:"Open menu"})})]}),e.jsx("div",{style:{marginTop:"2rem",display:"flex",alignItems:"center",gap:"2rem"},children:e.jsx("button",{className:"save-data-button",style:{padding:0,marginLeft:0},disabled:o.table===""||o.count<=0||o.count>15&&o.count!=69||o.date==="",children:e.jsx(l,{to:a.length>0?"/wok-of-fame/plate":"/wok-of-fame/details",state:{reserve:!0},style:{textDecoration:"none",color:"inherit",height:"100%",width:"100%",paddingBlock:"0.5rem",paddingInline:"1.5rem",display:"inline-block"},children:"Continue Reservation"})})}),a.length>0&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[e.jsxs("div",{style:{fontSize:"1.2rem"},children:["With"," ",a.map(({qnty:n})=>n).reduce((n,i)=>n+i,0)," ","items on plate😋"]}),e.jsx("button",{className:"btn btn-outline-danger",onClick:()=>s({}),children:"Remove menu"})]})]})})]})]})}export{c as default};