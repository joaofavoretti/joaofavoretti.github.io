import{k as r,Y as i,b as c,c as d,e,t as a,n as l,M as o}from"./entry.TiZ0nQhi.js";const n=["href"],_={class:"card-image"},u=["src"],g={class:"card-details"},f={class:"card-details__subtitle"},h={class:"card-details__note"},m={__name:"ProjectCard",props:{img:{type:String,required:!0},title:{type:String,required:!0},subtitle:{type:String,required:!1},note:{type:String,required:!1},link:{type:String,required:!1}},setup(t){const s=i();return(k,p)=>(c(),d("a",{href:t.link,target:"_blank"},[e("div",{class:l(["card",o(s).value==="dark"?"card__dark":"card__light"])},[e("div",_,[e("img",{src:t.img,alt:"Card Image"},null,8,u)]),e("div",g,[e("h1",null,a(t.title),1),e("p",f,a(t.subtitle),1),e("p",h,a(t.note),1)])],2)],8,n))}},S=r(m,[["__scopeId","data-v-75ce7fd5"]]);export{S as default};
