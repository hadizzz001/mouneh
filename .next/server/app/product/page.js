(()=>{var e={};e.id=752,e.ids=[752],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},590:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>o});var s=r(482),i=r(9108),a=r(2563),n=r.n(a),l=r(8300),d={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>l[e]);r.d(t,d);let o=["",{children:["product",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9204)),"C:\\Users\\abc\\Desktop\\Hadi\\My Bussiness\\Mouneh\\src\\app\\product\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7311)),"C:\\Users\\abc\\Desktop\\Hadi\\My Bussiness\\Mouneh\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\abc\\Desktop\\Hadi\\My Bussiness\\Mouneh\\src\\app\\product\\page.jsx"],u="/product/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/product/page",pathname:"/product",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},5173:(e,t,r)=>{Promise.resolve().then(r.bind(r,3107))},3107:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(5344);let i=({temp:e})=>{let{id:t,title:r,category:i,img:a}=e;return s.jsx("div",{className:"br_grid br_grid-cols-1 supports-subgrid:br_row-span-4 supports-subgrid:br_grid-rows-[subgrid]",children:s.jsx("div",{className:"Layout br_contents",children:s.jsx("center",{children:s.jsx("span",{className:"br_contents br_edition-",children:(0,s.jsxs)("div",{className:"",children:[s.jsx("div",{className:"initial:br_row-span-1 br_col-start-1 br_row-start-1 br_relative",children:s.jsx("div",{className:"br_aspect-[4/5] sm:br_aspect-square",children:s.jsx("div",{className:"br_w-full br_h-full br_relative br_flex br_items-center br_justify-center",children:s.jsx("img",{className:"br_w-full br_h-full br_object-center br_object-contain br_mx-auto br_max-h-64 sm:br_max-h-72 sm:br_px-4",alt:"Slim Sleeve - Cocoa-Java",loading:"lazy",sizes:"(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw",src:a[0]})})})}),s.jsx("div",{className:"initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center",children:s.jsx("h3",{className:"br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300",children:(0,s.jsxs)("a",{href:`/product?id=${t}`,className:"br_text-current br_no-underline",children:[r,s.jsx("span",{className:"br_absolute br_inset-0 br_z-10"})]})})}),s.jsx("div",{className:"initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center",children:s.jsx("p",{className:"br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none",children:s.jsx("span",{className:"br_text-base-sans-bold-cta-uppercase ",children:"Shop now >"})})})]})})})})})};var a=r(3729),n=r(76);r(5388);var l=r(6062),d=r(4767),o=r(5580),c=r(698),u=r(6301),p=r(4437);let x=()=>{var e;let t,r,x,m,h,g;let[b,_]=(0,a.useState)(0),[f,j]=(0,a.useState)(),[v,y]=(0,a.useState)(),w=(0,d.useSearchParams)().get("id"),{cart:P,addToCart:S}=(0,c.useCart)(),N=async()=>{j(await (0,o.Zu)(w))};(0,a.useEffect)(()=>{N()},[]),f&&(g=f.id,t=f.img,h=f.category,r=f.title,x=f.price,m=f.description);let G=async()=>{y(await (0,o.sj)(h))};(0,a.useEffect)(()=>{G()},[h]);let T=async()=>{j(await (0,o.Zu)(w))};(0,a.useEffect)(()=>{T()},[]);let M=e=>{_(-8.3333333*e)};return console.log(P),s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:"sm:pb-20",children:[s.jsx(p.default,{}),s.jsx("link",{href:"https://assets.bellroy.com",rel:"preconnect"}),s.jsx("link",{href:"https://bellroy.imgix.net",rel:"preconnect"}),s.jsx("link",{href:"css/webfonts-3e3c2400.css",rel:"preload",as:"style"}),s.jsx("link",{rel:"stylesheet",href:"css/webfonts-3e3c2400.css",media:"print"}),s.jsx("link",{rel:"stylesheet",href:"css/style-4109db2b.css"}),s.jsx("link",{href:"https://fonts.cdnfonts.com/css/lato",rel:"stylesheet"}),s.jsx("style",{dangerouslySetInnerHTML:{__html:"\n\n.uploadcare--widget__button, .uploadcare--widget__button:hover {\n	padding: 10px;\n	background-color: #d7d7d7; \n  color: #212529;\n  width:100%;\n}\n\n.uploadcare--widget__button:hover {\n	background-color: #c1c1c1;\n  \n}\n\n\n"}}),(0,s.jsxs)("div",{className:"ProductDetailWrapper",children:[s.jsx("div",{className:"BreadcrumbsWrapper",children:s.jsx("div",{className:"br_flex br_px-6 xl:br_px-0 br_text-xs-sans-bold-stretched br_text-[12px] br_text-grey-400 br_h-12 br_items-center"})}),s.jsx("bellroy-product-detail",{"data-filter-dimensions-style":"WSSB,WSSB-CHA-213,WSSD-MIB-124,WSSB-BSH-102","data-default-sku":"WSSB-BLACK",style:{},"data-updated-url":"null",children:s.jsx("div",{className:"ProductDetail",children:(0,s.jsxs)("div",{className:"Layout br_contents",children:[s.jsx("unsafe-html",{style:{display:"none"}}),s.jsx("events-enabled",{"data-events":"custom.product.view"}),(0,s.jsxs)("div",{className:"Layout_TwoColumns br_edition-",children:[s.jsx("section",{style:{position:"relative"},children:s.jsx("span",{className:"ProvidersIfSelectedProductMatchesFilter",children:(0,s.jsxs)("div",{className:"HtmlProductGallery",children:[s.jsx("div",{className:"HtmlProductGallery_GalleryWrapper",children:(0,s.jsxs)("div",{className:"HtmlProductInfiniteGallery",id:"InfiniteGallery0",style:{width:"auto",height:"100%"},children:[s.jsx("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"#InfiniteGallery0 .HtmlProductInfiniteGallery { }#InfiniteGallery0 .HtmlProductInfiniteGallery__Wrapper { position:relative;overflow:hidden;width:100%;height:100%}#InfiniteGallery0 .HtmlProductInfiniteGallery__Slides { position:absolute;top:0;width:1200%;height:100%;display:grid;grid-template-columns:repeat(12, 1fr);transition:transform 300ms ease;cursor:grab}#InfiniteGallery0 .HtmlProductInfiniteGallery__Slides--dragging { transition:none}#InfiniteGallery0 .HtmlProductInfiniteGallery__Slides_Slide { max-width:100%;max-height:100%;overflow:hidden;position:relative;user-drag:none;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}"}}),s.jsx("div",{className:"HtmlProductInfiniteGallery__Wrapper",children:s.jsx("div",{className:"HtmlProductInfiniteGallery__Slides ",style:{transform:`translateX(${b}%)`},children:t&&t?.length>0?t.map(e=>s.jsx("div",{children:s.jsx("div",{className:"HtmlProductInfiniteGallery__Slides_Slide",children:s.jsx("div",{className:"Slide Slide--image",children:s.jsx("img",{src:e,style:{maxWidth:"100%",height:"auto"}})})})})):s.jsx("div",{className:"container",children:s.jsx("h2",{className:"text-black text-xl dont-bold",children:"..."})})})})]})}),s.jsx("div",{className:"HtmlProductGallery_Thumbnails",children:t&&t?.length>0?t.map((e,t)=>s.jsx("button",{onClick:()=>M(t),className:"Thumbnail Thumbnail--image",children:s.jsx("img",{src:e})})):s.jsx("div",{className:"container",children:s.jsx("h2",{className:"text-black text-xl dont-bold",children:"..."})})})]})})}),(0,s.jsxs)("section",{className:"ProductSelector",children:[s.jsx("span",{className:"ProvidersSingleProduct--selected",children:(0,s.jsxs)("h1",{children:[r,s.jsx("span",{className:"ProductSelector_EditionLabel",style:{margin:"0 0 0 3px"}})]})}),(0,s.jsxs)("div",{className:"ApexPriceAndFreeShippingWrapper",children:[s.jsx("span",{className:"ProvidersSingleProduct--selected",children:s.jsx("div",{className:"br_flex",children:s.jsx("span",{className:"price",children:(0,s.jsxs)("span",{className:"price_value",children:["$",x]})})})}),s.jsx("div",{children:s.jsx("div",{className:"FreeShippingMessage FreeShippingMessage--empty"})})]}),s.jsx("hr",{}),s.jsx("div",{className:"ProductSelector_IntroBlurb",children:(0,s.jsxs)("span",{className:"ProvidersIfSelectedProductMatchesFilter",children:[s.jsx("p",{children:m}),s.jsx("br",{})]})}),(0,s.jsxs)("div",{className:"bagsFeaturesGrid__gridWrapper",children:[(e=g,P.some(t=>t.id===e))?s.jsx("center",{children:s.jsx("h2",{style:{color:"green"},children:"Added to the cart!"})}):(0,s.jsxs)("div",{className:"",children:[s.jsx("div",{className:""}),s.jsx("div",{className:"",children:s.jsx("span",{className:"ProvidersSingleProduct--selected",children:s.jsx("button",{type:"button",className:"AddToCart HtmlProductAddToCart",style:{borderRadius:"0"},onClick:()=>S(f),children:s.jsx("span",{children:"Add To Cart"})})})}),s.jsx("div",{className:""})]}),s.jsx("br",{})]}),s.jsx("span",{className:"ProvidersIfSelectedProductMatchesFilter"})]})]}),s.jsx("span",{className:"ProvidersIfSelectedProductMatchesFilter",children:(0,s.jsxs)("content-block",{slug:"product-page-wssb",children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:".bagsFeaturesGrid{margin:0 auto;padding:30px 5%;background:#111622}.bagsFeaturesGrid__gridWrapper{max-width:1150px;margin:0 auto}.bagsFeaturesGrid__title{-webkit-font-smoothing:antialiased;text-align:center;padding:0 0 25px;margin:0 auto;color:#fff}.bagsFeaturesGrid__feature{background:inherit;display:grid;grid-template-s:auto;align-items:center;padding:5px 0}.bagsFeaturesGrid__feature--text{-webkit-font-smoothing:antialiased;text-align:center;padding:15px 0 20px;grid-:2}.bagsFeaturesGrid__feature--text a{color:inherit}.bagsFeaturesGrid__feature--text h3{color:#fff;padding-bottom:10px}.bagsFeaturesGrid__feature--text p{color:#eee}.bagsFeaturesGrid__feature--image{position:relative;width:100%;min-height:62vw}@media (min-width: 811px){.bagsFeaturesGrid__feature--image{min-height:28vw}}@media (min-width: 1460px){.bagsFeaturesGrid__feature--image{min-height:409px}}.bagsFeaturesGrid__feature--image img{width:100%;display:block}.bagsFeaturesGrid__feature--image--logo{position:absolute;bottom:3.5%;right:8%;width:15vw}.bagsFeaturesGrid__feature--image--logo img{width:100%}.bagsFeaturesGrid__feature--text--logo{width:100px;padding-top:30px}.bagsFeaturesGrid__feature--text--logo img{width:100%}@media (min-width: 811px){.bagsFeaturesGrid{padding:75px 10%}.bagsFeaturesGrid__title{padding:0 0 60px}.bagsFeaturesGrid__feature{display:grid;grid-template-columns:1fr 1fr;grid-template-s:auto;padding:30px 0}.bagsFeaturesGrid__feature--image--logo{width:7vw}.bagsFeaturesGrid__feature .left{padding-right:15%}.bagsFeaturesGrid__feature .right{padding-left:15%}.bagsFeaturesGrid__feature--text{-webkit-font-smoothing:antialiased;text-align:left;padding:0;grid-:auto}}\n"}}),s.jsx("style",{dangerouslySetInnerHTML:{__html:".ProductTile-SliderContainer--YMAL .ProductTile-SliderContainer-Title{height:auto;text-align:center;padding-bottom:10px}.ProductTile-SliderContainer--YMAL.ProductTile-SliderContainer{padding:40px 0 10px;background-color:#e9e9e9 ;display:flex;flex-direction:column;align-items:center}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev-ar,.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next-ar{height:25px;width:25px;border-top:2px solid #999;border-right:2px solid #999}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next-ar{transform:rotate(45deg);margin:0 15px 0 0}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev-ar{transform:rotate(225deg);margin:0 0 0 15px}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev,.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next{height:430px;width:80px;cursor:pointer;background-color:transparent;transition:opacity .3s ease;display:none;border:none;padding:0;appearance:none;-webkit-appearance:none}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev[disabled],.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next[disabled]{opacity:0;pointer-events:none}@media (min-width: 700px){.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev,.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next{display:flex;align-items:center;justify-content:center}}@media (min-width: 811px){.ProductTile-SliderContainer--YMAL .ProductTile-SliderContainer-Title{padding-bottom:30px}}.ProductTile-SliderContainer--YMAL .productRangeSlider{display:flex;align-items:center;max-width:1340px;width:100%;padding:5px;justify-content:space-between;margin:0 auto;min-height:145px}\n"}}),(0,s.jsxs)("div",{className:"ProductTile-SliderContainer ProductTile-SliderContainer--YMAL","data-product-list-category":"ymal-slider",children:[s.jsx("div",{className:"ProductTile-SliderContainer-Title br_text-3xl-serif br_text-[#333]",children:"You might also like:"}),v&&v?.length>0?s.jsx("section",{style:{maxWidth:"100%"},children:s.jsx(n.tq,{spaceBetween:50,loop:!0,modules:[l.pt],autoplay:{delay:2e3,stopOnLastSlide:!1,reverseDirection:!0},breakpoints:{150:{slidesPerView:1},768:{slidesPerView:4}},children:s.jsx("div",{className:"home__cars-wrapper",children:v.map(e=>s.jsx(n.o5,{children:s.jsx(i,{temp:e})},e.id))})})}):s.jsx("div",{className:"home___error-container",children:s.jsx("h2",{className:"text-black text-xl dont-bold",children:"..."})})]})]})})]})})})]}),s.jsx(u.Z,{})]})})}},6301:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(5344);function i(){let e=new Date().getFullYear();return(0,s.jsxs)("footer",{className:"flex flex-col justify-center items-center pt-10 pb-[52%] sm:py-12 relative",children:[(0,s.jsxs)("div",{className:"flex gap-4 mb-10 order-2 sm:order-1",children:[s.jsx("a",{href:"https://www.facebook.com/mounehwzaytouneh",className:"w-20 h-20 bg-[url('/icons/fb.svg')] bg-no-repeat hover:bg-[url('/icons/fb2.svg')] hover:bg-[length:100%] bg-center rounded-full"}),s.jsx("a",{href:"https://wa.me/96181352620",className:"w-20 h-20 bg-[url('/icons/wa.svg')] bg-no-repeat hover:bg-[url('/icons/wa2.svg')] hover:bg-[length:100%] bg-center rounded-full"}),s.jsx("a",{href:"https://www.instagram.com/mounehwzeytouneh.lb/",className:"w-20 h-20 bg-[url('/icons/ig.svg')] bg-no-repeat hover:bg-[url('/icons/ig2.svg')] hover:bg-[length:100%] bg-center rounded-full"})]}),(0,s.jsxs)("p",{className:"font-light text-[#74645a] uppercase text-sm text-center order-3",children:["\xa9 MOUNE W Zaytonue ",e," - DEVELOPED BY"," ",s.jsx("span",{className:"text-red-500",children:s.jsx("a",{href:"https://www.hadizproductions.com",target:"_blank",children:"Hadiz Productions"})})]}),s.jsx("img",{src:"/images/footerbg.jpg",alt:"footer",className:"absolute w-full inset-0 h-full object-cover -z-10 sm:hidden"})]})}r(3729)},5580:(e,t,r)=>{"use strict";async function s(){let e=await fetch("/api/posts",{next:{revalidate:0}});return(await e.json()).posts}async function i(e){let t=await fetch(`/api/posts/${e}`,{next:{revalidate:0}});return(await t.json()).posts}async function a(e){let t=await fetch(`/api/posts3/${e}`,{next:{revalidate:0}});return(await t.json()).posts}r.d(t,{Zu:()=>a,sj:()=>i,z5:()=>s})},9204:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>i,default:()=>n});let s=(0,r(6843).createProxy)(String.raw`C:\Users\abc\Desktop\Hadi\My Bussiness\Mouneh\src\app\product\page.jsx`),{__esModule:i,$$typeof:a}=s,n=s.default}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,356,489,341,475],()=>r(590));module.exports=s})();