import{k as a,b as c,c as d,e,t as s}from"./entry.co4n10LZ.js";const r={props:{img:{type:String,required:!0},country:{type:String,required:!0},degree:{type:String,required:!0},college:{type:String,required:!0},date:{type:String,required:!0},note:{type:String,required:!1}}},i={class:"education-card"},n={class:"education-card-image"},o=["src"],_={class:"education-card-details"},l={class:"education-card-details__college"},u={class:"education-card-details__country"},g={class:"education-card-details__degree"},h={class:"date"},p={class:"note"};function y(f,m,t,S,q,b){return c(),d("div",i,[e("div",n,[e("img",{src:t.img,alt:"Education Image"},null,8,o)]),e("div",_,[e("h1",null,[e("span",l,s(t.college)+", ",1),e("span",u,s(t.country)+" — ",1),e("span",g,s(t.degree),1)]),e("p",h,s(t.date),1),e("p",p,s(t.note),1)])])}const k=a(r,[["render",y],["__scopeId","data-v-b7fbfba8"]]);export{k as default};