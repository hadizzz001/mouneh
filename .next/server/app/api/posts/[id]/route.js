"use strict";(()=>{var e={};e.id=602,e.ids=[602],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2841:(e,t,s)=>{s.r(t),s.d(t,{headerHooks:()=>h,originalPathname:()=>x,patchFetch:()=>v,requestAsyncStorage:()=>c,routeModule:()=>d,serverHooks:()=>m,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>g});var r={};s.r(r),s.d(r,{GET:()=>p});var a=s(5419),o=s(9108),i=s(9678),n=s(8984),u=s(7777);let p=async(e,{params:t})=>{try{let{id:e}=t,s=e.split(","),r=await u.Z.post.findMany({where:{category:{in:s}}});if(!r)return n.NextResponse.json({message:"Post not found",err},{status:404});return n.NextResponse.json({message:"Success",posts:r},{status:200})}catch(e){return n.NextResponse.json({message:"GET Error",err:e},{status:500})}},d=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/posts/[id]/route",pathname:"/api/posts/[id]",filename:"route",bundlePath:"app/api/posts/[id]/route"},resolvedPagePath:"C:\\Users\\abc\\Desktop\\Hadi\\My Bussiness\\Mouneh\\src\\app\\api\\posts\\[id]\\route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:m,headerHooks:h,staticGenerationBailout:g}=d,x="/api/posts/[id]/route";function v(){return(0,i.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:l})}},7777:(e,t,s)=>{s.d(t,{Z:()=>r});let r=new(require("@prisma/client")).PrismaClient}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,791],()=>s(2841));module.exports=r})();