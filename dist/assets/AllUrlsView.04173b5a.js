import{d as n,u as i,o as s,c as l,a as e,F as d,r as p,b as r,n as u,t as a,e as x}from"./index.a7e11544.js";const m={class:"my-10 origin-top scale-50 2xs:scale-75 xs:scale-100 lg:w-10/12"},f=e("thead",{class:"text-2xl text-white"},[e("tr",null,[e("th",{class:"font-normal"},"Your Urls"),e("th",{class:"font-normal"},"Actions")])],-1),b={class:"flex flex-col p-2"},g=e("h2",{class:"text-purple-200"},"Original:",-1),U=["href"],k=e("h2",{class:"text-purple-300"},"Shortened:",-1),v=["href"],w=["onClick"],y=n({name:"UrlTable",setup(c){const o=i();return(h,$)=>(s(),l("table",m,[f,e("tbody",null,[(s(!0),l(d,null,p(r(o).urls,(t,_)=>(s(),l("tr",{key:t.shortUrl,class:u(["h-16 text-slate-300",_%2==0?"":"bg-slate-900"])},[e("td",b,[g,e("a",{class:"m-4 break-words hover:text-purple-500",href:t.longUrl,target:"_blank"},a(t.longUrl),9,U),k,e("a",{class:"m-4 break-words hover:text-purple-500",href:t.shortUrl,target:"_blank"},a(t.shortUrl),9,v)]),e("td",null,[e("button",{class:"p-2 text-red-500 rounded-lg outline-none hover:text-white hover:bg-red-500",onClick:A=>r(o).removeUrl(t.shortUrl)}," Delete ",8,w)])],2))),128))])]))}}),C={class:"flex flex-col items-center m-auto mt-20"},S=e("h1",{class:"m-6 text-4xl font-semibold text-purple-500"}," All your shortened links ",-1),V=n({name:"AllUrlsView",setup(c){return(o,h)=>(s(),l("div",C,[S,x(y)]))}});export{V as default};