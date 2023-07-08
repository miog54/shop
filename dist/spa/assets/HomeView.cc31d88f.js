import{A as H,r as g,w as N,o as $,j as K,h as u,C as Z,O as x,P as ee,u as te,Q as z,c as S,B as L,R as ne,S as ie,U,V as ae,_ as Y,G as E,W as M,M as A,X as b,Y as W,J as re,K as oe,d as D,Z as se,$ as J,a0 as le,I as ue,a1 as ce,F as de,a2 as ve}from"./index.13386955.js";import{u as fe,a as ge}from"./use-spinner.efa7212a.js";function Q(e){let t=!1,i,s;function r(){s=arguments,t!==!0&&(t=!0,i=requestAnimationFrame(()=>{e.apply(this,s),s=void 0,t=!1}))}return r.cancel=()=>{window.cancelAnimationFrame(i),t=!1},r}const{passive:_}=te;var me=H({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:e=>e>=0&&e<=1},scrollTarget:{default:void 0},onScroll:Function},setup(e,{slots:t,emit:i}){const s=g(0),r=g(null),a=g(null),v=g(null);let l,o,f,c,y,m;N(()=>e.height,()=>{l===!0&&p()}),N(()=>e.scrollTarget,()=>{l===!0&&(k(),q())});let C=d=>{s.value=d,e.onScroll!==void 0&&i("scroll",d)};function p(){let d,P,V;m===window?(d=0,V=P=window.innerHeight):(d=z(m).top,P=x(m),V=d+P);const T=z(r.value).top,O=T+e.height;if(y!==void 0||O>d&&T<V){const n=(V-T)/(e.height+P);B((f-e.height)*n*e.speed),C(n)}}let B=d=>{o.style.transform=`translate3d(-50%,${Math.round(d)}px,0)`};function w(){f=o.naturalHeight||o.videoHeight||x(o),l===!0&&p()}function q(){l=!0,m=ee(r.value,e.scrollTarget),m.addEventListener("scroll",p,_),window.addEventListener("resize",c,_),p()}function k(){l===!0&&(l=!1,m.removeEventListener("scroll",p,_),window.removeEventListener("resize",c,_),m=void 0,B.cancel(),C.cancel(),c.cancel())}return $(()=>{B=Q(B),C=Q(C),c=Q(w),o=t.media!==void 0?a.value.children[0]:v.value,o.onload=o.onloadstart=o.loadedmetadata=w,w(),o.style.display="initial",window.IntersectionObserver!==void 0?(y=new IntersectionObserver(d=>{(d[0].isIntersecting===!0?q:k)()}),y.observe(r.value)):q()}),K(()=>{k(),y!==void 0&&y.disconnect(),o.onload=o.onloadstart=o.loadedmetadata=null}),()=>u("div",{ref:r,class:"q-parallax",style:{height:`${e.height}px`}},[u("div",{ref:a,class:"q-parallax__media absolute-full"},t.media!==void 0?t.media():[u("img",{ref:v,src:e.src})]),u("div",{class:"q-parallax__content absolute-full column flex-center"},t.content!==void 0?t.content({percentScrolled:s.value}):Z(t.default))])}}),he=H({name:"QSpinner",props:{...fe,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:i}=ge(e);return()=>u("svg",{class:i.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[u("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});const be={ratio:[String,Number]};function Se(e,t){return S(()=>{const i=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(i)!==!0&&i>0?{paddingBottom:`${100/i}%`}:null})}const ye=16/9;var pe=H({name:"QImg",props:{...be,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ye},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:i}){const s=g(e.initialRatio),r=Se(e,s);let a=null,v=!1;const l=[g(null),g(w())],o=g(0),f=g(!1),c=g(!1),y=S(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),m=S(()=>({width:e.width,height:e.height})),C=S(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),p=S(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));N(()=>B(),q);function B(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function w(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function q(n){a!==null&&(clearTimeout(a),a=null),c.value=!1,n===null?(f.value=!1,l[o.value^1].value=w()):f.value=!0,l[o.value].value=n}function k({target:n}){v!==!0&&(a!==null&&(clearTimeout(a),a=null),s.value=n.naturalHeight===0?.5:n.naturalWidth/n.naturalHeight,d(n,1))}function d(n,X){v===!0||X===1e3||(n.complete===!0?P(n):a=setTimeout(()=>{a=null,d(n,X+1)},50))}function P(n){v!==!0&&(o.value=o.value^1,l[o.value].value=null,f.value=!1,c.value=!1,i("load",n.currentSrc||n.src))}function V(n){a!==null&&(clearTimeout(a),a=null),f.value=!1,c.value=!0,l[o.value].value=null,l[o.value^1].value=w(),i("error",n)}function T(n){const X=l[n].value,j={key:"img_"+n,class:C.value,style:p.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...X};return o.value===n?(j.class+=" q-img__image--waiting",Object.assign(j,{onLoad:k,onError:V})):j.class+=" q-img__image--loaded",u("div",{class:"q-img__container absolute-full",key:"img"+n},u("img",j))}function O(){return f.value!==!0?u("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},Z(t[c.value===!0?"error":"default"])):u("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[u(he,{color:e.spinnerColor,size:e.spinnerSize})])}return q(B()),K(()=>{v=!0,a!==null&&(clearTimeout(a),a=null)}),()=>{const n=[];return r.value!==null&&n.push(u("div",{key:"filler",style:r.value})),c.value!==!0&&(l[0].value!==null&&n.push(T(0)),l[1].value!==null&&n.push(T(1))),n.push(u(L,{name:"q-transition--fade"},O)),u("div",{class:y.value,style:m.value,role:"img","aria-label":e.alt},n)}}});const R={threshold:0,root:null,rootMargin:"0px"};function I(e,t,i){let s,r,a;typeof i=="function"?(s=i,r=R,a=t.cfg===void 0):(s=i.handler,r=Object.assign({},R,i.cfg),a=t.cfg===void 0||ie(t.cfg,r)===!1),t.handler!==s&&(t.handler=s),a===!0&&(t.cfg=r,t.observer!==void 0&&t.observer.unobserve(e),t.observer=new IntersectionObserver(([v])=>{if(typeof t.handler=="function"){if(v.rootBounds===null&&document.body.contains(e)===!0){t.observer.unobserve(e),t.observer.observe(e);return}(t.handler(v,t.observer)===!1||t.once===!0&&v.isIntersecting===!0)&&F(e)}},r),t.observer.observe(e))}function F(e){const t=e.__qvisible;t!==void 0&&(t.observer!==void 0&&t.observer.unobserve(e),delete e.__qvisible)}var Be=ne({name:"intersection",mounted(e,{modifiers:t,value:i}){const s={once:t.once===!0};I(e,s,i),e.__qvisible=s},updated(e,t){const i=e.__qvisible;i!==void 0&&I(e,i,t.value)},beforeUnmount:F}),G=H({name:"QIntersection",props:{tag:{type:String,default:"div"},once:Boolean,transition:String,transitionDuration:{type:[String,Number],default:300},ssrPrerender:Boolean,margin:String,threshold:[Number,Array],root:{default:null},disable:Boolean,onVisibility:Function},setup(e,{slots:t,emit:i}){const s=g(U.value===!0?e.ssrPrerender:!1),r=S(()=>e.root!==void 0||e.margin!==void 0||e.threshold!==void 0?{handler:o,cfg:{root:e.root,rootMargin:e.margin,threshold:e.threshold}}:o),a=S(()=>e.disable!==!0&&(U.value!==!0||e.once!==!0||e.ssrPrerender!==!0)),v=S(()=>[[Be,r.value,void 0,{once:e.once}]]),l=S(()=>`--q-transition-duration: ${e.transitionDuration}ms`);function o(c){s.value!==c.isIntersecting&&(s.value=c.isIntersecting,e.onVisibility!==void 0&&i("visibility",s.value))}function f(){if(s.value===!0)return[u("div",{key:"content",style:l.value},Z(t.default))];if(t.hidden!==void 0)return[u("div",{key:"hidden",style:l.value},t.hidden())]}return()=>{const c=e.transition?[u(L,{name:"q-transition--"+e.transition},f)]:f();return ae(e.tag,{class:"q-intersection"},c,"main",a.value,()=>v.value)}}});const we={},Pe={class:"mainLayout"},Ae={class:"mainLayout-head"},Ce={class:"mainLayout-main"};function qe(e,t){return E(),M(G,{once:"",transition:"fade"},{default:A(()=>[b("div",Pe,[b("div",Ae,[W(e.$slots,"head",{},void 0,!0)]),b("div",Ce,[W(e.$slots,"main",{},void 0,!0)])])]),_:3})}var Ve=Y(we,[["render",qe],["__scopeId","data-v-12bc2920"]]),Te="https://muro472.github.io/shop/assets/Audiotechnics.b83c3c61.jpeg",ke="https://muro472.github.io/shop/assets/Books.54235b5d.jpeg",Xe="https://muro472.github.io/shop/assets/Cassets.d7672ad0.png",je="https://muro472.github.io/shop/assets/Cd.d0d026f1.webp",_e="https://muro472.github.io/shop/assets/Games.7a5caa9f.jpeg",Ee="https://muro472.github.io/shop/assets/MainImage.d9386b2b.jpeg",He="https://muro472.github.io/shop/assets/Plackats.36731977.jpg",Oe="data:image/webp;base64,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",De="https://muro472.github.io/shop/assets/Vynil.23e41f3b.png";const h={audiotechnics:Te,books:ke,cassets:Xe,cd:je,games:_e,mainImage:Ee,plackats:He,suveneirs:Oe,vynil:De};const Qe=["src"],Ne={class:"text-h3 text-white text-center"},Me={class:"row justify-center q-gutter-sm"},Ze={class:"main_item"},xe={class:"main_item-text"},ze=re({__name:"HomeView",setup(e){const t=oe([{label:"Audiotechnics",photo:h.audiotechnics},{label:"Books",photo:h.books},{label:"Cassets",photo:h.cassets},{label:"Cd",photo:h.cd},{label:"Games",photo:h.games},{label:"Plackats",photo:h.plackats},{label:"Suveneirs",photo:h.suveneirs},{label:"Vynil",photo:h.vynil}]);return(i,s)=>(E(),M(Ve,null,{head:A(()=>[D(me,null,{media:A(()=>[b("img",{src:se(h).mainImage},null,8,Qe)]),content:A(r=>[b("div",{class:"absolute column items-center",style:le({opacity:.8+(1-r.percentScrolled)*.55,top:r.percentScrolled*60+"%",left:0,right:0})},[b("div",Ne,J(i.$t("homePageText1")),1)],4)]),_:1})]),main:A(()=>[b("div",Me,[(E(!0),ue(de,null,ce(t,(r,a)=>(E(),M(G,{key:a,once:"",transition:"slide-up",class:"example-item"},{default:A(()=>[b("div",Ze,[D(ve,{flat:"",class:"main_item-container"},{default:A(()=>[D(pe,{fit:"cover",class:"main_item-container-img",src:r.photo},null,8,["src"])]),_:2},1024),b("div",xe,J(r.label),1)])]),_:2},1024))),128))])]),_:1}))}});var Je=Y(ze,[["__scopeId","data-v-1ddd55ff"]]);export{Je as default};