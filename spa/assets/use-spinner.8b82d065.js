import{c as i,N as s}from"./index.25ce80c2.js";const t={size:{type:[Number,String],default:"1em"},color:String};function r(e){return{cSize:i(()=>e.size in s?`${s[e.size]}px`:e.size),classes:i(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}export{r as a,t as u};