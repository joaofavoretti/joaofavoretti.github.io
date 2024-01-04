import{d as C,l as g,Y as v,Z as D,q as w,L as o}from"./entry.uyRwtpG2.js";import{u as d}from"./head.u3BlWN1g.js";import _ from"./ContentRenderer.LlzW0zAR.js";import q from"./ContentQuery.Ug3Km07A.js";import"./ContentRendererMarkdown.vue.r2xx-auW.js";import"./preview.Z2-wMSFt.js";import"./asyncData.oeyHryR5.js";import"./query.xGws0atO.js";const S=C({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(f){const{contentHead:c}=g().public.content,t=v(),{tag:m,excerpt:r,path:l,query:i,head:a}=f,u=a===void 0?c:a,s={...i||{},path:l||(i==null?void 0:i.path)||D(w().path),find:"one"},h=(e,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:e,data:n},null,2));return o(q,s,{default:t!=null&&t.default?({data:e,refresh:n,isPartial:y})=>{var p;return u&&d(e),(p=t.default)==null?void 0:p.call(t,{doc:e,refresh:n,isPartial:y,excerpt:r,...this.$attrs})}:({data:e})=>(u&&d(e),o(_,{value:e,excerpt:r,tag:m,...this.$attrs},{empty:n=>t!=null&&t.empty?t.empty(n):h("default",e)})),empty:e=>{var n;return((n=t==null?void 0:t.empty)==null?void 0:n.call(t,e))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":e=>{var n;return((n=t==null?void 0:t["not-found"])==null?void 0:n.call(t,e))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),R=S;export{R as default};