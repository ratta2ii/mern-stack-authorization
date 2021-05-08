/*! For license information please see main.f6723455.chunk.js.LICENSE.txt */
(this["webpackJsonpmern-stack-authorization"]=this["webpackJsonpmern-stack-authorization"]||[]).push([[0],{176:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(10),c=n.n(a),i=n(23),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,249)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},o=n(18),d=n.n(o),l=n(28),u=n(129),p=n(17),j=n(58),h=n.n(j),b=function(e){return new Promise((function(t){setTimeout(t,e)}))};h.a.defaults.baseURL="https://mern-stack-auth-server.herokuapp.com",h.a.interceptors.response.use(function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b(1e3);case 3:return e.abrupt("return",t);case 6:return e.prev=6,e.t0=e.catch(0),console.log("interceptor error: ",e.t0),e.next=11,Promise.reject(e.t0);case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}());var g=function(e){return e.data},x=function(e){return h.a.get(e).then(g)},f=function(e,t){return h.a.post(e,t).then(g)},m=function(e){return h.a.delete(e).then(g)},O={Users:{find:function(e){return x("userdata/".concat(e))},details:function(e){return f("/login",e)},create:function(e){return f("/users/register",e)},delete:function(e){return m("/users/".concat(e))},logout:function(){return x("/logout")}}},w={userStore:new function e(){var t=this;Object(u.a)(this,e),this.currentUser=void 0,this.loading=!1,this.loadingInitial=!0,this.editMode=!1,this.isAuthenticated=!1,this.errorMessage="",this.loadUser=Object(l.a)(d.a.mark((function e(){var n,r,a=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.length>0&&void 0!==a[0]?a[0]:void 0,!(r=t.currentUser)){e.next=6;break}return e.abrupt("return",r);case 6:return t.setLoadingInitial(!0),e.prev=7,e.next=10,O.Users.details(n);case 10:return r=e.sent,t.setUser(r),t.setLoadingInitial(!1),e.abrupt("return",r);case 16:e.prev=16,e.t0=e.catch(7),console.log(e.t0),t.setLoadingInitial(!1);case 20:case"end":return e.stop()}}),e,null,[[7,16]])}))),this.loadUserById=function(){var e=Object(l.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.currentUser)){e.next=5;break}return e.abrupt("return",r);case 5:return t.setLoadingInitial(!0),e.prev=6,e.next=9,O.Users.find(n);case 9:return r=e.sent,Object(p.g)((function(){t.isAuthenticated=!0})),e.next=13,t.setUser(r);case 13:return t.setLoadingInitial(!1),e.abrupt("return",r);case 17:e.prev=17,e.t0=e.catch(6),console.log(e.t0),t.setLoadingInitial(!1);case 21:case"end":return e.stop()}}),e,null,[[6,17]])})));return function(t){return e.apply(this,arguments)}}(),this.loadCurrentUserName=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.currentUser){e.next=2;break}return e.abrupt("return",t.currentUser);case 2:case"end":return e.stop()}}),e)}))),this.getUser=function(e){return t.currentUser},this.setUser=function(){var e=Object(l.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(p.g)((function(){t.currentUser=n}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.setLoadingInitial=function(e){Object(p.g)((function(){t.loadingInitial=e}))},this.setLoading=function(e){Object(p.g)((function(){t.loading=e}))},this.createUser=function(){var e=Object(l.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoading(!0),e.prev=1,e.next=4,O.Users.create(n);case 4:(n=e.sent).username&&t.setUser(n),t.setLoading(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t.setLoading(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),this.logUserOut=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.setLoading(!0),e.prev=1,!t.currentUser){e.next=5;break}return e.next=5,O.Users.logout();case 5:t.setUser(void 0),t.setLoading(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t.setLoading(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),Object(p.d)(this)}},v=Object(r.createContext)(w),A=function(){return Object(r.useContext)(v)},k=(n(174),n(175),n(176),n(14)),y=n(230),E=n(25),I=n(32),S=n(239),L=n(243),D="data:image/png;base64,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",R=n(2),H=Object(E.a)((function(){var e=A().userStore,t=e.logUserOut,n=e.currentUser,a=Object(r.useState)(),c=Object(I.a)(a,2),s=c[0],o=c[1];Object(r.useEffect)((function(){return n&&o(n.username),function(){}}),[n]);return Object(R.jsxs)(S.a,{inverted:!0,fixed:"top",children:[Object(R.jsxs)(y.a,{children:[Object(R.jsxs)(S.a.Item,{as:i.c,to:"/",exact:!0,header:!0,children:[Object(R.jsx)("img",{src:D,alt:"logo",style:{marginRight:10}}),"MERN Stack Authentication"]}),!n&&Object(R.jsx)(S.a.Item,{children:Object(R.jsx)(L.a,{as:i.c,to:"/login",positive:!0,content:"Login"})}),n&&Object(R.jsx)(S.a.Item,{children:Object(R.jsx)(L.a,{as:i.c,to:"/login",positive:!0,content:"Logout",onClick:function(){o(""),t()}})})]}),Object(R.jsx)(y.a,{style:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:n&&Object(R.jsx)("h4",{style:{color:"white",fontWeight:100,marginRight:20},children:s})})]})})),T=n(245),N=n(246),C=n(136),z=function(){return Object(R.jsx)(T.a,{inverted:!0,textAlign:"center",vertical:!0,className:"masthead",children:Object(R.jsxs)(y.a,{text:!0,children:[Object(R.jsxs)(N.a,{as:"h1",inverted:!0,children:[Object(R.jsx)(C.a,{size:"massive",src:D,alt:"logo",style:{marginBottom:12}}),"MERN Stack"]}),Object(R.jsx)(N.a,{as:"h4",inverted:!0,content:"MongoDB | Express | React | Node.js | JavaScript | TypeScript | Passport -OAuth 2.0"}),Object(R.jsx)(L.a,{as:i.b,to:"/dashboard",size:"huge",inverted:!0,style:{marginTop:30},children:"Show me the magic!"})]})})},M=n(247),Q=Object(E.a)((function(e){var t=A().userStore.currentUser,n=Object(r.useState)(),a=Object(I.a)(n,2),c=a[0],s=a[1];return Object(r.useEffect)((function(){return t&&s(t._id),function(){}}),[t]),Object(R.jsxs)(M.a,{children:[Object(R.jsx)("h1",{children:"Welcom to the Public Dashboard!"}),Object(R.jsx)(L.a,{as:i.b,to:'/dashboard/user/"'.concat(c),size:"huge",inverted:!0,style:{marginTop:30},children:"Go to Private (Authorized) Dashboard"})]})})),P=n(45),U=n(30),J=n(242),F=n(234),B=n(236),X=n(238),W=n(240),V=n(231),Z=Object(V.a)((function(e){return{button:{margin:e.spacing(1),height:30,marginTop:25},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2),maxWidth:350},container:{display:"flex",flexWrap:"wrap"},textField:{margin:"5px 8px",width:300}}})),G=function(e){var t=e.formName,n=e.formDescription,a=Z(),c=Object(k.f)(),s=A().userStore,o=s.createUser,u=s.currentUser,p=Object(r.useState)({_id:"",username:"",password:"",confirmPassword:""}),j=Object(I.a)(p,2),h=j[0],b=j[1],g=function(e){var t=e.target,n=t.name,r=t.value;b(Object(U.a)(Object(U.a)({},h),{},Object(P.a)({},n,r)))},x=function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(h.password===h.confirmPassword)){e.next=11;break}return e.next=5,Object(U.a)(Object(U.a)({},h),{},{_id:Object(J.a)()});case 5:return n=e.sent,e.next=8,delete n[n.confirmPassword];case 8:o(n).then((function(){c.push("/dashboard/user/".concat(n._id))})),e.next=12;break;case 11:alert("Your passwords do not match! Please reenter a different password.");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{children:[u,Object(R.jsxs)(F.a,{className:a.root,children:[Object(R.jsx)(B.a,{variant:"h5",component:"h3",children:t}),Object(R.jsx)(B.a,{component:"p",style:{fontSize:12,margin:10},children:n}),Object(R.jsxs)("form",{onSubmit:x,children:[Object(R.jsx)(X.a,{label:"Email",id:"margin-normal",name:"username",defaultValue:h.username,className:a.textField,helperText:"Enter your email",variant:"filled",onChange:g}),Object(R.jsx)(X.a,{label:"Password",id:"margin-normal",name:"password",defaultValue:h.password,className:a.textField,variant:"outlined",onChange:g}),Object(R.jsx)(X.a,{label:"Confirm Password",id:"margin-normal",name:"confirmPassword",className:a.textField,defaultValue:h.confirmPassword,variant:"outlined",onChange:g}),Object(R.jsx)(W.a,{type:"submit",variant:"contained",color:"default",className:a.button,children:"SignUp"})]}),Object(R.jsx)("div",{style:{textAlign:"center",marginTop:15},children:Object(R.jsx)(i.b,{to:"/login",children:"Already have an Account? Login HERE"})})]})]})},K=Object(V.a)((function(e){return{imgStyles:{height:40,marginTop:5,marginLeft:25,cursor:"pointer",boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)","&:hover":{opacity:".85"}}}})),Y=n.p+"static/media/google-social-sign-on.02e5dde5.png",q=function(){var e=K();return Object(R.jsx)("div",{children:Object(R.jsx)("img",{src:Y,alt:"google Oauth sign-on button",width:"300",onClick:function(){window.open("https://mern-stack-auth-server.herokuapp.com/auth/google","_self")},className:e.imgStyles,style:{marginTop:30}})})},_=n.p+"static/media/facebook-social-sign-on.f71acf6a.png",$=function(){var e=K();return Object(R.jsx)("div",{children:Object(R.jsx)("img",{src:_,alt:"facebook social media OAuth alternate sing-on",width:"300",onClick:function(){window.open("https://mern-stack-auth-server.herokuapp.com/auth/facebook","_self")},className:e.imgStyles})})},ee=n.p+"static/media/github-social-sign-on.c2ed0597.png",te=function(){var e=K();return Object(R.jsx)("div",{children:Object(R.jsx)("img",{src:ee,alt:"google Oauth sign-on button",width:"300",onClick:function(){window.open("https://mern-stack-auth-server.herokuapp.com/auth/google","_self")},className:e.imgStyles})})},ne=Object(E.a)((function(){return Object(R.jsxs)("div",{style:{width:450,margin:"150px auto",backgroundColor:"#d2d2d2",padding:50,boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"},children:[Object(R.jsx)("div",{children:Object(R.jsx)(G,{formName:"Register New Account",formDescription:"Enter your email and choose a password"})}),Object(R.jsx)("div",{children:Object(R.jsx)(q,{})}),Object(R.jsx)("div",{children:Object(R.jsx)($,{})}),Object(R.jsx)("div",{children:Object(R.jsx)(te,{})})]})})),re=Object(V.a)((function(e){return{button:{margin:e.spacing(1),height:30,marginTop:25},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2),maxWidth:350},container:{},textField:{margin:"5px 8px",width:300}}})),ae=function(e){var t=e.formName,n=e.formDescription,a=re(),c=Object(k.f)(),s=A().userStore.loadUser,o=Object(r.useState)({_id:"",username:"",password:""}),d=Object(I.a)(o,2),l=d[0],u=d[1],p=function(e){var t=e.target,n=t.name,r=t.value;u(Object(U.a)(Object(U.a)({},l),{},Object(P.a)({},n,r)))};return Object(R.jsx)("div",{children:Object(R.jsxs)(F.a,{className:a.root,children:[Object(R.jsx)(B.a,{variant:"h5",component:"h3",children:t}),Object(R.jsx)(B.a,{component:"p",style:{fontSize:12,margin:10},children:n}),Object(R.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(l).then((function(e){e?(console.log("I am the response in handleOnSubmit: ",e),c.push("/dashboard/user/".concat(e._id))):c.push("/login")}))},children:[Object(R.jsx)(X.a,{label:"Email",placeholder:"Enter your email here",name:"username",defaultValue:l.username,onChange:p,id:"margin-normal",className:a.textField,helperText:"Enter your Email",variant:"filled"}),Object(R.jsx)(X.a,{label:"Password",id:"margin-normal",name:"password",defaultValue:l.password,placeholder:"Enter your email here",className:a.textField,helperText:"Enter your Password",variant:"outlined",onChange:p}),Object(R.jsx)(W.a,{type:"submit",variant:"contained",color:"default",className:a.button,children:"Login"})]}),Object(R.jsx)("div",{style:{textAlign:"center",marginTop:15},children:Object(R.jsx)(i.b,{to:"/signup",children:"Need an account? Signup HERE"})})]})})};var ce=Object(E.a)((function(){return Object(R.jsxs)("div",{style:{width:450,margin:"150px auto",backgroundColor:"#d2d2d2",padding:50,boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"},children:[Object(R.jsx)("div",{children:Object(R.jsx)(ae,{formName:"Login to your Account",formDescription:"IMPORTANT: Your email is your username"})}),Object(R.jsx)("div",{children:Object(R.jsx)(q,{})}),Object(R.jsx)("div",{children:Object(R.jsx)($,{})}),Object(R.jsx)("div",{children:Object(R.jsx)(te,{})})]})})),ie=n(241),se=n(237),oe=function(e){var t=e.inverted,n=void 0===t||t,r=e.content,a=void 0===r?"Loading...":r;return Object(R.jsx)(ie.a,{active:!0,inverted:n,children:Object(R.jsx)(se.a,{content:a})})},de=Object(V.a)((function(e){return{button:{margin:e.spacing(1),height:30,marginTop:25},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2),maxWidth:350},container:{display:"flex",flexWrap:"wrap"},textField:{margin:"5px 8px",width:300}}}));var le=Object(E.a)((function(e){var t=de(),n=A().userStore,a=n.createUser,c=n.currentUser,i=Object(r.useState)({password:"",confirmPassword:""}),s=Object(I.a)(i,2),o=s[0],u=s[1],p=function(e){var t=e.target,n=t.name,r=t.value;u(Object(U.a)(Object(U.a)({},o),{},Object(P.a)({},n,r)))},j=function(){var t=Object(l.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(o.password===o.confirmPassword)||!c){t.next=9;break}return t.next=5,Object(U.a)(Object(U.a)({},c),{},{password:o.password});case 5:r=t.sent,a(r).then((function(){e.setDisplayPasswordForm(!1)})),t.next=10;break;case 9:alert("Your passwords do not match! Please reenter a different password.");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(R.jsx)("div",{children:Object(R.jsxs)(F.a,{className:t.root,children:[Object(R.jsx)(B.a,{variant:"h5",component:"h3",children:e.formName}),Object(R.jsx)(B.a,{component:"p",style:{fontSize:12,margin:10},children:e.formDescription}),Object(R.jsxs)("form",{onSubmit:j,children:[Object(R.jsx)(X.a,{label:"Password",id:"margin-normal",name:"password",defaultValue:o.password,className:t.textField,variant:"outlined",onChange:p}),Object(R.jsx)(X.a,{label:"Confirm Password",id:"margin-normal",name:"confirmPassword",className:t.textField,defaultValue:o.confirmPassword,variant:"outlined",onChange:p}),Object(R.jsx)(W.a,{type:"submit",variant:"contained",color:"default",className:t.button,children:"Create"})]}),Object(R.jsx)("div",{style:{textAlign:"center",marginTop:15}})]})})})),ue=Object(E.a)((function(e){var t=A().userStore,n=t.loadUserById,a=t.loadingInitial,c=t.currentUser,s=t.isAuthenticated,o=Object(k.g)().id,d=Object(r.useState)(!0),l=Object(I.a)(d,2),u=l[0],p=l[1];return Object(r.useEffect)((function(){n(o).then((function(e){(null===e||void 0===e?void 0:e.localAccount)&&p(!1)}))}),[o,n]),!a||c||s?c&&s&&c.hasOwnProperty("accounts")&&!c.localAccount&&u?Object(R.jsx)("div",{style:{width:450,margin:"150px auto",backgroundColor:"#d2d2d2",padding:50,boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"},children:Object(R.jsx)(le,{setDisplayPasswordForm:p,formName:"Choose a password for this account:",formDescription:"IMPORTANT: Choosing a password will enable alternative authentication methods using your email and password -in addition to the 3rd party registration (authentication) you are currently using."})}):Object(R.jsx)("div",{children:c&&Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:Object(R.jsxs)("h3",{children:["ID: ",c._id]})}),Object(R.jsx)("li",{children:Object(R.jsxs)("h3",{children:["USERNAME: ",c.username]})}),Object(R.jsx)(L.a,{as:i.b,to:"/dashboard",size:"huge",inverted:!0,style:{marginTop:30},children:"Go to Public Dashboard"})]})}):Object(R.jsx)(oe,{content:"Loading app"})}));var pe=Object(E.a)((function(){return Object(R.jsxs)(r.Fragment,{children:[Object(R.jsx)(H,{}),Object(R.jsxs)(k.c,{children:[Object(R.jsx)(k.a,{exact:!0,path:"/",component:z}),Object(R.jsxs)(y.a,{style:{marginTop:"7em"},children:[Object(R.jsx)(k.a,{exact:!0,path:["/dashboard"],component:Q}),Object(R.jsx)(k.a,{exact:!0,path:"/login",component:ce}),Object(R.jsx)(k.a,{exact:!0,path:"/signup",component:ne}),Object(R.jsx)(k.a,{exact:!0,path:"/dashboard/user/:id",component:ue})]})]})]})}));c.a.render(Object(R.jsx)(v.Provider,{value:w,children:Object(R.jsx)(i.a,{basename:"/mern-stack-authorization",children:Object(R.jsx)(pe,{})})}),document.getElementById("root")),s()}},[[189,1,2]]]);
//# sourceMappingURL=main.f6723455.chunk.js.map