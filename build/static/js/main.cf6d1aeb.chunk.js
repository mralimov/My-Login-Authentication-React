(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={form:"ProfileForm_form__1iqyB",control:"ProfileForm_control__1Hudh",action:"ProfileForm_action__AVOOv"}},15:function(e,t,n){e.exports={header:"MainNavigation_header__P3xXC",logo:"MainNavigation_logo__3d1IG"}},20:function(e,t,n){e.exports={profile:"UserProfile_profile__3x3-m"}},21:function(e,t,n){e.exports={starting:"StartingPageContent_starting__WLPiK"}},27:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o,c=n(18),r=n.n(c),i=n(7),a=n(11),s=n(1),l=n.n(s),j=n(0),u=l.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),d=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t},b=function(e){var t,n=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("expirationTime"),n=d(t);return n<=6e4?(localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),null):{token:e,duration:n}}();n&&(t=n.token);var c=Object(s.useState)(t),r=Object(a.a)(c,2),i=r[0],l=r[1],b=!!i,h=Object(s.useCallback)((function(){l(null),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),o&&clearTimeout(o)}),[]);Object(s.useEffect)((function(){n&&(console.log(n.duration),o=setTimeout(h,n.duration))}),[n,h]);var g={token:i,isLoggedIn:b,login:function(e,t){l(e),localStorage.setItem("token",e),localStorage.setItem("expirationTime",t);var n=d(t);o=setTimeout(h,n)},logout:h};return Object(j.jsx)(u.Provider,{value:g,children:e.children})},h=u,g=(n(27),n(2)),O=n(15),x=n.n(O),m=function(){var e=Object(s.useContext)(h),t=Object(g.g)(),n=e.isLoggedIn;return Object(j.jsxs)("header",{className:x.a.header,children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("div",{className:x.a.logo,children:"React Auth"})}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[!n&&Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/auth",children:"Login"})}),n&&Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/profile",children:"Profile"})}),n&&Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){e.logout(),t.replace("/login")},children:"Logout"})})]})})]})},p=function(e){return Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsx)("main",{children:e.children})]})},f=n(12),v=n.n(f),_=function(){var e=Object(s.useContext)(h),t=Object(s.useRef)(),n=Object(g.g)();return Object(j.jsxs)("form",{className:v.a.form,onSubmit:function(o){o.preventDefault();var c=t.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCdDFg9XMtigOaXW0H8_V1NwICbJ89pSTE",{method:"POST",body:JSON.stringify({idToken:e.token,password:c,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){n.replace("/"),console.log(e)}))},children:[Object(j.jsxs)("div",{className:v.a.control,children:[Object(j.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(j.jsx)("input",{type:"password",id:"new-password",minLength:"6",ref:t})]}),Object(j.jsx)("div",{className:v.a.action,children:Object(j.jsx)("button",{children:"Change Password"})})]})},w=n(20),S=n.n(w),k=function(){return Object(j.jsxs)("section",{className:S.a.profile,children:[Object(j.jsx)("h1",{children:"Your User Profile"}),Object(j.jsx)(_,{})]})},I=n(9),y=n.n(I),C=function(){var e=Object(s.useState)(!0),t=Object(a.a)(e,2),n=t[0],o=t[1],c=Object(s.useState)(!1),r=Object(a.a)(c,2),i=r[0],l=r[1],u=Object(g.g)(),d=Object(s.useContext)(h),b=Object(s.useRef)(),O=Object(s.useRef)();return Object(j.jsxs)("section",{className:y.a.auth,children:[Object(j.jsx)("h1",{children:n?"Login":"Sign Up"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t,o=b.current.value,c=O.current.value;console.log(o,c),l(!0),t=n?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCdDFg9XMtigOaXW0H8_V1NwICbJ89pSTE":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCdDFg9XMtigOaXW0H8_V1NwICbJ89pSTE",fetch(t,{method:"POST",body:JSON.stringify({email:o,password:c,returnSecureToken:!0}),headers:{"Content-type":"application/json"}}).then((function(e){return l(!1),e.ok?e.json():e.json().then((function(e){var t="Authentication failed";throw e&&e.error&&e.error.message&&(t=e.error.message),new Error(t)}))})).then((function(e){var t=new Date((new Date).getTime()+1e3*+e.expiresIn);d.login(e.idToken,t.toISOString()),u.replace("/")})).catch((function(e){alert(e.message)}))},children:[Object(j.jsxs)("div",{className:y.a.control,children:[Object(j.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(j.jsx)("input",{type:"email",id:"email",required:!0,ref:b})]}),Object(j.jsxs)("div",{className:y.a.control,children:[Object(j.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(j.jsx)("input",{type:"password",id:"password",required:!0,ref:O})]}),Object(j.jsxs)("div",{className:y.a.actions,children:[!i&&Object(j.jsx)("button",{children:n?"Login":"Create Account"}),i&&Object(j.jsx)("p",{children:"Loading Registration........"}),Object(j.jsx)("button",{type:"button",className:y.a.toggle,onClick:function(){o((function(e){return!e}))},children:n?"Create new account":"Login with existing account"})]})]})]})},N=function(){return Object(j.jsx)(C,{})},T=n(21),P=n.n(T),F=function(){return Object(j.jsx)("section",{className:P.a.starting,children:Object(j.jsx)("h1",{children:"Welcome on Board!"})})},L=function(){return Object(j.jsx)(F,{})};var A=function(){var e=Object(s.useContext)(h).isLoggedIn;return Object(j.jsx)(p,{children:Object(j.jsxs)(g.d,{children:[Object(j.jsx)(g.b,{path:"/",exact:!0,children:Object(j.jsx)(L,{})}),!e&&Object(j.jsx)(g.b,{path:"/auth",children:Object(j.jsx)(N,{})}),Object(j.jsxs)(g.b,{path:"/profile",children:[e&&Object(j.jsx)(k,{}),!e&&Object(j.jsx)(g.a,{to:"/auth"})]}),Object(j.jsx)(g.b,{path:"*",children:Object(j.jsx)(g.a,{to:"/"})})]})})};r.a.render(Object(j.jsx)(b,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(A,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={auth:"AuthForm_auth__3plU1",control:"AuthForm_control__3dq7F",actions:"AuthForm_actions__1wXgP",toggle:"AuthForm_toggle__2WkwN"}}},[[36,1,2]]]);
//# sourceMappingURL=main.cf6d1aeb.chunk.js.map