import{_ as v,h as d,r as y,c as f,s as u,b as s,m as l,v as i,u as n,o as w}from"./index-DN3XQRAJ.js";const b="/zwBlog/assets/bac1-D0aQBs8f.png",C={class:"myCenter in-up-container my-animation-hideToShow"},k={class:"in-up",id:"loginAndRegist"},x={class:"form-container sign-up-container"},U={class:"myCenter"},V={class:"form-container sign-in-container"},B={class:"myCenter"},$={class:"overlay-container"},q={class:"overlay"},D={class:"overlay-panel myCenter overlay-left"},z={class:"overlay-panel myCenter overlay-right"},A={__name:"login",setup(I){d({username:[{required:!0,massage:"请输入用户名",trigger:"blur"},{min:5,max:16,message:"请输入长度5~16非空字符",trigger:"blur"}],password:[{required:!0,massage:"请输入密码",trigger:"blur"},{min:5,max:16,message:"请输入长度5~16非空字符",trigger:"blur"}]});const r=d({username:"xiaozhang",password:""});y(null);const o=d({username:"",password:"",email:"",code:""}),p=()=>{addUser(o)},m=()=>{document.querySelector("#loginAndRegist").classList.remove("right-panel-active")},g=()=>{document.querySelector("#loginAndRegist").classList.add("right-panel-active"),o.username="",o.password="",o.email=""};return(a,e)=>(w(),f("div",C,[e[0]||(u(-1,!0),(e[0]=s("img",{class:"my-el-image",style:{position:"absolute"},lazy:"",src:b,fit:"cover"})).cacheIndex=0,u(1),e[0]),e[19]||(e[19]=s("div",{slot:"error",class:"image-slot"},null,-1)),s("div",k,[s("div",x,[s("div",U,[e[13]||(e[13]=s("h1",null,"注册",-1)),l(s("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>n(o).username=t),type:"text",maxlength:"30",placeholder:"用户名"},null,512),[[i,n(o).username]]),l(s("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>n(o).password=t),type:"password",maxlength:"30",placeholder:"密码"},null,512),[[i,n(o).password]]),l(s("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>n(o).email=t),type:"email",placeholder:"邮箱"},null,512),[[i,n(o).email]]),l(s("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>n(o).code=t),type:"text",placeholder:"验证码",disabled:""},null,512),[[i,n(o).code]]),s("a",{style:{margin:"0"},href:"#",onClick:e[5]||(e[5]=t=>a.changeDialog("邮箱验证码"))},"获取验证码"),s("button",{onClick:e[6]||(e[6]=t=>p())},"注册")])]),s("div",V,[s("div",B,[e[14]||(e[14]=s("h1",null,"登录",-1)),l(s("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>n(r).username=t),type:"text",placeholder:"用户名/邮箱/手机号"},null,512),[[i,n(r).username]]),l(s("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>n(r).password=t),type:"password",placeholder:"密码"},null,512),[[i,n(r).password]]),s("a",{href:"#",onClick:e[9]||(e[9]=t=>a.changeDialog("找回密码"))},"忘记密码？"),s("button",{onClick:e[10]||(e[10]=t=>a.login(n(r)))},"登录")])]),s("div",$,[s("div",q,[s("div",D,[e[15]||(e[15]=s("h1",null,"已有帐号？",-1)),e[16]||(e[16]=s("p",null,"请登录🚀",-1)),s("button",{class:"ghost",onClick:e[11]||(e[11]=t=>m())},"登录")]),s("div",z,[e[17]||(e[17]=s("h1",null,"没有帐号？",-1)),e[18]||(e[18]=s("p",null,"立即注册吧😃",-1)),s("button",{class:"ghost",onClick:e[12]||(e[12]=t=>g())},"注册")])])])])]))}},R=v(A,[["__scopeId","data-v-ad93e3cc"]]);export{R as default};
