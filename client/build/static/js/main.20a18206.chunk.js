(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(14),s=c.n(r),o=c(2),i=c(16),a=c(12),l=c.n(a),u=c(13),j=c(3),d=c(7),b=c(6),p=c(0),O=function(){return Object(p.jsx)("div",{className:"left-nav-container",children:Object(p.jsx)("div",{className:"icons",children:Object(p.jsxs)("div",{className:"icons-bis",children:[Object(p.jsx)(d.b,{exact:!0,to:"/",activeClassName:"active-left-nav",children:Object(p.jsx)("img",{src:"./img/icons/home.svg",alt:"homeIcon"})}),Object(p.jsx)("br",{}),Object(p.jsx)(d.b,{exact:!0,to:"/trending",activeClassName:"active-left-nav",children:Object(p.jsx)("img",{src:"./img/icons/rocket.svg",alt:"trendingIcon"})}),Object(p.jsx)("br",{}),Object(p.jsx)(d.b,{exact:!0,to:"/profil",activeClassName:"active-left-nav",children:Object(p.jsx)("img",{src:"./img/icons/user.svg",alt:"profilIcon"})}),Object(p.jsx)("br",{})]})})})},m=c(4),h=c.n(m),f="GET_POSTS",x="GET_ALL_POSTS",g="LIKE_POST",v="UNLIKE_POST",w="UPDATE_POST",y="DELETE_POST",k="EDIT_COMMENT",N="DELETE_COMMENT",S="GET_TRENDS",_="GET_POST_ERRORS",E=function(e){return function(t){return h()({method:"GET",url:"".concat("https://gusnetwork.herokuapp.com/","api/post/")}).then((function(c){var n=c.data.slice(0,e);t({type:f,playload:n}),t({type:x,playload:c.data})})).catch((function(e){console.error(e)}))}},C=function(e){return function(t){return console.log("addpost action"),h()({method:"POST",url:"".concat("https://gusnetwork.herokuapp.com/","api/post/"),data:e}).then((function(e){console.log(e.data),e.data?t({type:_,playload:e.data}):t({type:_,playload:""})}))}};function T(e){return e?e.charAt(0).toUpperCase()+e.slice(1):null}function I(e){var t=Date.parse(e);return new Date(t).toLocaleDateString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit",weekday:"long",year:"numeric",month:"short",day:"numeric"}).toString()}function R(e){return new Date(e).toLocaleDateString("fr-FR",{hour:"2-digit",minute:"2-digit",weekday:"long",year:"numeric",month:"short",day:"numeric"}).toString()}function L(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}var F="GET_USER",P="UPLOAD_PICTURE",D="UPDATE_BIO",U="FOLLOW_USER",H="UNFOLLOW_USER",A="GET_USER_ERRORS",M=function(e){var t=e.idToFollow,c=e.type,r=Object(o.c)((function(e){return e.userReducer})),s=Object(o.b)(),i=Object(n.useState)(!1),a=Object(j.a)(i,2),l=a[0],u=a[1];return Object(n.useEffect)((function(){L(r.followings)||(r.followings.includes(t)?u(!0):u(!1))}),[r,t]),Object(p.jsxs)(p.Fragment,{children:[l&&!L(r)&&Object(p.jsxs)("span",{onClick:function(){var e,c;s((e=r._id,c=t,console.log("idtounfollow:  ",c),console.log("followerId : ",e),function(t){return console.log("coucou unfollow"),h()({method:"PATCH",url:"".concat("https://gusnetwork.herokuapp.com/","api/user/unfollow/")+e,data:{idToUnfollow:c}}).then((function(e){console.log("then unfollo"),t({type:"UNFOLLOW_USER",playload:{idToUnfollow:c}})})).catch((function(e){return console.log(e)}))})),u(!1)},children:["suggestion"===c&&Object(p.jsx)("button",{className:"unfollow-btn",children:"Abonn\xe9"}),"card"===c&&Object(p.jsx)("img",{src:"./img/icons/checked.svg",alt:"checkicon"})]}),!1===l&&!L(r)&&Object(p.jsxs)("span",{onClick:function(){s(function(e,t){return function(c){return h()({method:"PATCH",url:"".concat("https://gusnetwork.herokuapp.com/","api/user/follow/")+e,data:{idToFollow:t}}).then((function(e){console.log("coucou follow"),c({type:"FOLLOW_USER",playload:{idToFollow:t}})})).catch((function(e){return console.log(e)}))}}(r._id,t)),u(!0)},children:["suggestion"===c&&Object(p.jsx)("button",{className:"follow-btn",children:"Suivre"}),"card"===c&&Object(p.jsx)("img",{src:"./img/icons/check.svg",alt:"checkicon"})]})]})},G=Object(n.createContext)(),V=function(e){var t=e.comment,c=e.postId,r=Object(o.b)(),s=Object(n.useState)(!1),i=Object(j.a)(s,2),a=i[0],l=i[1],u=Object(n.useState)(!1),d=Object(j.a)(u,2),b=d[0],O=d[1],m=Object(n.useState)(!1),f=Object(j.a)(m,2),x=f[0],g=f[1],v=Object(n.useContext)(G),w=function(){r(function(e,t){return function(c){return h()({method:"PATCH",url:"".concat("https://gusnetwork.herokuapp.com/","api/post/delete-comment-post/").concat(e),data:{commentId:t}}).then((function(n){c({type:N,playload:{postId:e,commentId:t}})})).catch((function(e){return console.log(e)}))}}(c,t._id))};return Object(n.useEffect)((function(){v===t.commenterId&&l(!0)}),[v,t.commenterId]),Object(p.jsxs)("div",{className:"edit-comment",children:[a&&!1===b&&Object(p.jsx)("span",{onClick:function(){return O(!b)},children:Object(p.jsx)("img",{src:"./img/icons/edit.svg",alt:"edit"})}),a&&b&&Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x&&(r(function(e,t,c){return function(n){return h()({method:"PATCH",url:"".concat("https://gusnetwork.herokuapp.com/","api/post/edit-comment-post/").concat(e),data:{commentId:t,text:c}}).then((function(r){n({type:k,playload:{postId:e,commentId:t,text:c}})})).catch((function(e){return console.log(e)}))}}(c,t._id,x)),g(""),O(!1))},action:"",className:"edit-comment-form",children:[Object(p.jsx)("label",{htmlFor:"text",onClick:function(){return O(!b)},children:"Editer"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",name:"text",onChange:function(e){return g(e.target.value)},defaultValue:t.text}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"btn",children:[Object(p.jsx)("span",{onClick:function(){window.confirm("Voulez-vous supprimer ce commentaire")&&w()},children:Object(p.jsx)("img",{src:"./img/icons/trash.svg",alt:"trash"})}),Object(p.jsx)("input",{type:"submit",value:"Valider modifications"})]})]})]})},z=function(e){var t=e.post,c=Object(o.c)((function(e){return e.usersReducer})),r=Object(o.c)((function(e){return e.userReducer})),s=Object(o.b)(),i=Object(n.useState)(""),a=Object(j.a)(i,2),l=a[0],u=a[1];return Object(p.jsxs)("div",{className:"comments-container",children:[t.comments.map((function(e,n){return Object(p.jsxs)("div",{className:e.commenterId===r._id?"comment-container client":"comment-container",children:[Object(p.jsx)("div",{className:"left-part",children:Object(p.jsx)("img",{src:!L(c[0])&&c.map((function(t){return t._id===e.commenterId?t.picture:null})).join(""),alt:"commenter-pic"})}),Object(p.jsxs)("div",{className:"right-part",children:[Object(p.jsxs)("div",{className:"comment-header",children:[Object(p.jsxs)("div",{className:"pseudo",children:[Object(p.jsx)("h3",{children:e.commenterPseudo}),e.commenterId!==r._id&&Object(p.jsx)(M,{idToFollow:e.commenterId,type:"card"})]}),Object(p.jsx)("span",{children:R(e.timestamp)})]}),Object(p.jsx)("p",{children:e.text}),Object(p.jsx)(V,{comment:e,postId:t._id})]})]},n)})),r._id&&Object(p.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),console.log(l),l&&s(function(e,t,c,n){return function(r){return h()({method:"PATCH",url:"".concat("https://gusnetwork.herokuapp.com/","api/post/comment-post/").concat(e),data:{commenterId:t,text:c,commenterPseudo:n}}).then((function(t){r({type:"ADD_COMMENT",playload:{postId:e}})})).catch((function(e){return console.log(e)}))}}(t._id,r._id,l,r.pseudo)).then((function(){s(E())})).then((function(){return u("")}))},className:"comment-form",children:[Object(p.jsx)("input",{type:"text",name:"text",onChange:function(e){return u(e.target.value)},value:l,placeholder:"Laisser un commentaire"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"submit",value:"Envoyer"})]})]})},B=function(e){var t=Object(o.b)(),c=function(){var c;t((c=e.postId,function(e){return h()({method:"DELETE",url:"".concat("https://gusnetwork.herokuapp.com/","api/post/").concat(c)}).then((function(t){e({type:y,playload:{postId:c}})})).catch((function(e){return console.log(e)}))}))};return Object(p.jsx)("div",{onClick:function(){window.confirm("Voulez-vous supprimer ce post ?")&&c()},children:Object(p.jsx)("img",{src:"./img/icons/trash.svg",alt:"delete"})})},q=c(37),W=(c(74),function(e){var t=e.post,c=Object(n.useState)(!1),r=Object(j.a)(c,2),s=r[0],i=r[1],a=Object(n.useContext)(G),l=Object(o.b)();return Object(n.useEffect)((function(){t.likers.includes(a)?i(!0):i(!1)}),[a,t.likers,s]),Object(p.jsxs)("div",{className:"like-container",children:[null===a&&Object(p.jsx)(q.a,{trigger:Object(p.jsx)("img",{src:"./img/icons/heart.svg",alt:"like"}),position:["bottom center","bottom right","bottom left"],closeOnDocumentClick:!0,children:"Connectez-vous pour int\xe9ragir"}),a&&!1===s&&Object(p.jsx)("img",{onClick:function(){var e,c;l((e=t._id,c=a,function(t){return h()({method:"PATCH",url:"".concat("https://gusnetwork.herokuapp.com/","api/post/like-post/")+e,data:{id:c}}).then((function(n){t({type:g,playload:{postId:e,userId:c}})})).catch((function(e){return console.log(e)}))})),i(!0)},src:"./img/icons/heart.svg",alt:"like"}),a&&s&&Object(p.jsx)("img",{onClick:function(){var e,c;l((e=t._id,c=a,function(t){return h()({method:"PATCH",url:"".concat("https://gusnetwork.herokuapp.com/","api/post/unlike-post/")+e,data:{id:c}}).then((function(n){t({type:v,playload:{postId:e,userId:c}})})).catch((function(e){return console.log(e)}))})),i(!1)},src:"./img/icons/heart-filled.svg",alt:"like filed"}),Object(p.jsx)("span",{children:t.likers.length})]})}),J=function(e){var t=e.post,c=Object(n.useState)(!0),r=Object(j.a)(c,2),s=r[0],i=r[1],a=Object(n.useState)(!1),l=Object(j.a)(a,2),u=l[0],d=l[1],b=Object(n.useState)(null),O=Object(j.a)(b,2),m=O[0],f=O[1],x=Object(n.useState)(!1),g=Object(j.a)(x,2),v=g[0],y=g[1],k=Object(o.c)((function(e){return e.usersReducer})),N=Object(o.c)((function(e){return e.userReducer})),S=Object(o.b)();return Object(n.useEffect)((function(){!L(k[0])&&i(!1)}),[k,u]),Object(p.jsx)("li",{className:"card-container",children:s?Object(p.jsx)("i",{className:"fas fa-spinner fa-spin"}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"card-left",children:Object(p.jsx)("img",{src:!L(k[0])&&k.map((function(e){return e._id===t.posterId?e.picture:null})).join(""),alt:"poster-pic"})}),Object(p.jsxs)("div",{className:"card-right",children:[Object(p.jsxs)("div",{className:"card-header",children:[Object(p.jsxs)("div",{className:"pseudo",children:[Object(p.jsx)("h3",{children:!L(k[0])&&k.map((function(e){return e._id===t.posterId?e.pseudo:null}))}),t.posterId!==N._id&&Object(p.jsx)(M,{type:"card",idToFollow:t.posterId})]}),Object(p.jsx)("span",{children:I(t.createdAt)})]}),!1===u&&Object(p.jsx)("p",{children:t.message}),u&&Object(p.jsxs)("div",{className:"update-post",children:[Object(p.jsx)("textarea",{defaultValue:t.message,onChange:function(e){return f(e.target.value)}}),Object(p.jsx)("div",{className:"button-container",children:Object(p.jsx)("button",{className:"btn",onClick:function(){var e,c;m&&S((e=t._id,c=m,function(t){return h()({method:"PUT",url:"".concat("https://gusnetwork.herokuapp.com/","api/post/").concat(e),data:{message:c}}).then((function(n){t({type:w,playload:{message:c,postId:e}})})).catch((function(e){return console.log(e)}))})),d(!1)},children:"Valider les modifications"})})]}),t.picture&&Object(p.jsx)("img",{src:t.picture,alt:"card-pic",className:"card-pic"}),t.video&&Object(p.jsx)("iframe",{width:"500",height:"300",src:t.video,frameBorder:"0",allow:"accelerometer ; autoplay; clipboard-write ; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:t._id}),N._id===t.posterId&&Object(p.jsxs)("div",{className:"button-container",children:[Object(p.jsx)("div",{onClick:function(){return d(!u)},children:Object(p.jsx)("img",{src:"./img/icons/edit.svg",alt:"edit"})}),Object(p.jsx)(B,{postId:t._id})]}),Object(p.jsxs)("div",{className:"card-footer",children:[Object(p.jsxs)("div",{className:"comment-icon",children:[Object(p.jsx)("img",{onClick:function(){return y(!v)},src:"./img/icons/message1.svg",alt:"messageicon"}),Object(p.jsx)("span",{children:t.comments.length})]}),Object(p.jsx)(W,{post:t}),Object(p.jsx)("img",{src:"./img/icons/share.svg",alt:"shareicon"})]}),v&&Object(p.jsx)(z,{post:t})]})]})},t._id)},K=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(5),i=Object(j.a)(s,2),a=i[0],l=i[1],u=Object(o.b)(),d=Object(o.c)((function(e){return e.postReducer})),b=function(){window.innerHeight+document.documentElement.scrollTop+1>document.scrollingElement.scrollHeight&&r(!0)};return Object(n.useEffect)((function(){return c&&(u(E(a)),r(!1),l(a+5)),window.addEventListener("scroll",b),function(){return window.removeEventListener("scroll",b)}}),[c,u,a]),Object(p.jsx)("div",{className:"thread-container",children:Object(p.jsx)("ul",{children:!L(d[0])&&d.map((function(e,t){return Object(p.jsx)(J,{post:e},t)}))})})},Q=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),i=Object(j.a)(s,2),a=i[0],b=i[1],O=Object(n.useState)(null),m=Object(j.a)(O,2),h=m[0],f=m[1],x=Object(n.useState)(""),g=Object(j.a)(x,2),v=g[0],w=g[1],y=Object(n.useState)(),k=Object(j.a)(y,2),N=k[0],S=k[1],_=Object(o.c)((function(e){return e.userReducer})),T=Object(o.c)((function(e){return e.errorReducer.postError})),I=Object(o.b)(),F=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a||h||v)){e.next=12;break}return(t=new FormData).append("posterId",_._id),t.append("message",a),N&&t.append("file",N),t.append("video",v),e.next=8,I(C(t));case 8:I(E()),P(),e.next=13;break;case 12:alert("Veuillez entrer un message");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){b(""),f(null),w(""),S()};return Object(n.useEffect)((function(){L(_)||r(!1),function(){for(var e=a.split(" "),t=0;t<e.length;t++)if(e[t].includes("https://www.yout")||e[t].includes("https://yout")){var c=e[t].replace("watch?v=","embed/");w(c.split("&")[0]),e.splice(t,1),b(e.join(" ")),f("")}}()}),[_,a,v]),Object(p.jsx)("div",{className:"post-container",children:c?Object(p.jsx)("i",{className:"fas fa-spinner fa-pulse"}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"data",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:_.followings?_.followings.length:0})," ",_.followings&&_.followings.length>1?"abonnements":"abonnement"]}),Object(p.jsxs)("p",{children:[_.followers?_.followers.length:0,Object(p.jsxs)("span",{children:[" ",(_.followers&&_.followers.length,"abonn\xe9s")]})]})]}),Object(p.jsx)(d.b,{exact:!0,to:"/profil",children:Object(p.jsx)("div",{className:"user-info",children:Object(p.jsx)("img",{src:_.picture,alt:"userPic"})})}),Object(p.jsxs)("div",{className:"post-form",children:[Object(p.jsx)("textarea",{name:"message",id:"message",placeholder:"Quoi de neuf ?",onChange:function(e){return b(e.target.value)},value:a}),a||h||v.length>30?Object(p.jsxs)("li",{className:"card-container",children:[Object(p.jsx)("div",{className:"card-left",children:Object(p.jsx)("img",{src:_.picture,alt:"user"})}),Object(p.jsxs)("div",{className:"card-right",children:[Object(p.jsxs)("div",{className:"card-header",children:[Object(p.jsx)("div",{className:"pseudo",children:Object(p.jsx)("h3",{children:_.pseudo})}),Object(p.jsx)("span",{children:R(Date.now())})]}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("p",{children:a}),h&&Object(p.jsx)("img",{src:h,alt:""}),v&&Object(p.jsx)("iframe",{title:"video",src:v,frameBorder:"0",allow:"acceleromter; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})]})]})]}):null,Object(p.jsxs)("div",{className:"footer-form",children:[Object(p.jsxs)("div",{className:"icon",children:[L(v)&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{src:"./img/icons/picture.svg",alt:"picIcon"}),Object(p.jsx)("input",{type:"file",id:"file-upload",name:"file",accept:".jpg, .jpeg, .png",onChange:function(e){return function(e){console.log(e.target.files),f(URL.createObjectURL(e.target.files[0])),S(e.target.files[0]),w("")}(e)}})]}),v&&Object(p.jsx)("button",{onClick:function(){return w("")},children:"Supprimer la vid\xe9o"})]}),!L(T.format)&&Object(p.jsx)("p",{children:T.format}),!L(T.maxSize)&&Object(p.jsx)("p",{children:T.maxSize}),Object(p.jsxs)("div",{className:"btn-send",children:[a||h||v.length>20?Object(p.jsx)("button",{className:"cancel",onClick:P,children:"Annuler le message"}):null,Object(p.jsx)("button",{className:"send",onClick:F,children:"Envoyer"})]})]})]})]})})},X=function(){console.log("https://gusnetwork.herokuapp.com/");var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),o=Object(j.a)(s,2),i=o[0],a=o[1];return Object(p.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var t=document.querySelector(".email.error"),n=document.querySelector(".password.error");h()({method:"POST",url:"".concat("https://gusnetwork.herokuapp.com/","api/user/login"),withCredentials:!0,data:{email:c,password:i}}).then((function(e){console.log(e),e.data.errors?(t.innerHTML=e.data.errors.email,n.innerHTML=e.data.errors.password):window.location="/"})).catch((function(e){return console.log(e)}))},id:"sign-up-form",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",id:"email",name:"email",onChange:function(e){return r(e.target.value)},value:c}),Object(p.jsx)("div",{className:"email error"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"password",children:"Mot de passe"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"password",id:"password",name:"password",onChange:function(e){return a(e.target.value)},value:i}),Object(p.jsx)("div",{className:"password error"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"submit",value:"Se connecter"})]})},Y=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),o=Object(j.a)(s,2),i=o[0],a=o[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),O=b[0],m=b[1],f=Object(n.useState)(""),x=Object(j.a)(f,2),g=x[0],v=x[1],w=Object(n.useState)(""),y=Object(j.a)(w,2),k=y[0],N=y[1],S=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n,s,o,a,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c=document.getElementById("terms"),n=document.querySelector(".pseudo.error"),s=document.querySelector(".email.error"),o=document.querySelector(".password.error"),a=document.querySelector(".password-confirm.error"),u=document.querySelector(".terms.error"),a.innerHTML="",u.innerHTML="",g===k&&c.checked){e.next=14;break}g!==k&&(a.innerHTML="Les mots de passent ne correspondent pas"),c.checked||(u.innerHTML="Veuillez valider les conditions g\xe9n\xe9rales"),e.next=16;break;case 14:return e.next=16,h()({method:"POST",url:"".concat("https://gusnetwork.herokuapp.com/","api/user/register "),data:{pseudo:i,email:O,password:g}}).then((function(e){console.log(e),e.data.errors?(n.innerHTML=e.data.errors.pseudo,s.innerHTML=e.data.errors.email,o.innerHTML=e.data.errors.password):r(!0)})).catch((function(e){console.log(e)}));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:c?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(X,{}),Object(p.jsx)("span",{}),Object(p.jsx)("h4",{className:"success",children:"Enregistrement r\xe9ussi, veuillez vous connecter"})]}):Object(p.jsxs)("form",{action:"",onSubmit:S,id:"sign-up-form",children:[Object(p.jsx)("label",{htmlFor:"pseudo",children:"Pseudo"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",id:"pseudo",name:"pseudo",onChange:function(e){return a(e.target.value)},value:i}),Object(p.jsx)("div",{className:"pseudo error"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",id:"email",name:"email",onChange:function(e){return m(e.target.value)},value:O}),Object(p.jsx)("div",{className:"email error"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"password",children:"Mot de passe"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"password",id:"password",name:"password",onChange:function(e){return v(e.target.value)},value:g}),Object(p.jsx)("div",{className:"password error"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"password-conf",children:"Confirmer le mot de passe"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"password",id:"password-conf",name:"password",onChange:function(e){return N(e.target.value)},value:k}),Object(p.jsx)("div",{className:"password-confirm error"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"checkbox",id:"terms"}),Object(p.jsxs)("label",{htmlFor:"terms",children:["J'accepte les"," ",Object(p.jsx)("a",{href:"/",target:"_blank",rel:"noopener noreferrer",children:"conditions g\xe9n\xe9rales"})]}),Object(p.jsx)("div",{className:"terms error"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"submit",value:"Valider inscription"})]})})},Z=function(e){var t=Object(n.useState)(e.signup),c=Object(j.a)(t,2),r=c[0],s=c[1],o=Object(n.useState)(e.signin),i=Object(j.a)(o,2),a=i[0],l=i[1],u=function(e){"register"===e.target.id?(l(!1),s(!0)):"login"===e.target.id&&(s(!1),l(!0))};return Object(p.jsx)("div",{className:"connection-form",children:Object(p.jsxs)("div",{className:"form-container",children:[Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{onClick:u,id:"register",className:r?"active-btn":null,children:"S'inscrire"}),Object(p.jsx)("li",{onClick:u,id:"login",className:a?"active-btn":null,children:"Se connecter"})]}),r&&Object(p.jsx)(Y,{}),a&&Object(p.jsx)(X,{})]})})},$=function(){var e=Object(o.c)((function(e){return e.allPostsReducer})),t=Object(o.c)((function(e){return e.usersReducer})),c=Object(o.c)((function(e){return e.trendingReducer})),r=Object(o.b)();return Object(n.useEffect)((function(){if(!L(e[0])){var t=Object.keys(e).map((function(t){return e[t]})).sort((function(e,t){return t.likers.length-e.likers.length}));t.length=3,r(function(e){return function(t){t({type:S,playload:e})}}(t))}}),[e]),Object(p.jsxs)("div",{className:"trending-container",children:[Object(p.jsx)("h4",{children:"Trending"}),Object(p.jsx)(d.b,{exact:!0,to:"/trending",children:Object(p.jsx)("ul",{children:c.length&&c.map((function(e){return Object(p.jsxs)("li",{children:[Object(p.jsxs)("div",{children:[e.picture&&Object(p.jsx)("img",{src:e.picture,alt:"userPic"}),e.video&&Object(p.jsx)("iframe",{title:"video",src:e.video,frameBorder:"0",allow:"acceleromter; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}),L(e.picture)&&L(e.video)&&Object(p.jsx)("img",{src:t[0]&&t.map((function(t){return t._id===e.posterId?t.picture:null})).join(""),alt:"userPict"})]}),Object(p.jsxs)("div",{className:"trend-content",children:[Object(p.jsx)("p",{children:e.message}),Object(p.jsx)("span",{children:"Lire"})]})]},e.id)}))})})]})},ee=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!0),i=Object(j.a)(s,2),a=i[0],l=i[1],u=Object(n.useState)([]),d=Object(j.a)(u,2),b=d[0],O=d[1],m=Object(o.c)((function(e){return e.usersReducer})),h=Object(o.c)((function(e){return e.userReducer}));return Object(n.useEffect)((function(){!a||L(m[0])||L(h._id)||(!function(){var e=[];m.map((function(t){return t._id===h._id||t.followers.includes(h._id)?null:e.push(t._id)})),e.sort((function(){return.5-Math.random()})),window.innerHeight>780?e.length=5:window.innerHeight>720?e.length=4:window.innerHeight>615?e.length=3:window.innerHeight>540?e.length=1:e.length=0,O(e)}(),r(!1),l(!1))}),[h,m,a]),Object(p.jsxs)("div",{className:"get-friends-container",children:[Object(p.jsx)("h4",{children:"Suggestions"}),c?Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)("i",{className:"fa fa-spinner fa-pulse"})}):Object(p.jsx)("ul",{children:b&&b.map((function(e){for(var t=0;t<m.length;t++)if(e===m[t]._id)return Object(p.jsxs)("li",{className:"user-hint",children:[Object(p.jsx)("img",{src:m[t].picture,alt:"userpic"}),Object(p.jsx)("p",{children:m[t].pseudo}),Object(p.jsx)(M,{idToFollow:m[t]._id,type:"suggestion"})]},e)}))})]})},te=function(){var e=Object(n.useContext)(G);return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)(O,{}),Object(p.jsxs)("div",{className:"main",children:[Object(p.jsx)("div",{className:"home-header",children:e?Object(p.jsx)(Q,{}):Object(p.jsx)(Z,{signin:!0,signup:!1})}),Object(p.jsx)(K,{})]}),Object(p.jsx)("div",{className:"right-side",children:Object(p.jsx)("div",{className:"right-side-container",children:Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)($,{}),e&&Object(p.jsx)(ee,{})]})})})]})},ce=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.userReducer})),c=Object(n.useState)(),r=Object(j.a)(c,2),s=r[0],i=r[1];return Object(p.jsxs)("form",{action:"",onSubmit:function(c){c.preventDefault();var n=new FormData;n.append("name",t.pseudo),n.append("userId",t._id),n.append("file",s),e(function(e,t){return function(c){return h.a.post("".concat("https://gusnetwork.herokuapp.com/","api/user/upload"),e).then((function(e){if(!e.data)return c({type:A,playload:""}),h.a.get("".concat("https://gusnetwork.herokuapp.com/","api/user/").concat(t)).then((function(e){c({type:P,playload:e.data.picture})}));c({type:A,playload:e.data})})).catch((function(e){return console.log("error dispatch")}))}}(n,t._id))},className:"upload-pic",children:[Object(p.jsx)("label",{htmlFor:"file",children:"Changer d'image"}),Object(p.jsx)("input",{type:"file",name:"file",id:"file",accept:".jpg, .jpeg, .png",onChange:function(e){return i(e.target.files[0])}}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"submit",value:"Envoyer"})]})},ne=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),i=Object(j.a)(s,2),a=i[0],l=i[1],u=Object(o.c)((function(e){return e.userReducer})),d=Object(o.c)((function(e){return e.usersReducer})),b=Object(o.c)((function(e){return e.errorReducer.userError})),m=Object(o.b)(),f=Object(n.useState)(!1),x=Object(j.a)(f,2),g=x[0],v=x[1],w=Object(n.useState)(!1),y=Object(j.a)(w,2),k=y[0],N=y[1],S=function(){m(function(e,t){return function(c){return h()({method:"PUT",url:"".concat("https://gusnetwork.herokuapp.com/","api/user/")+e,data:{bio:t}}).then((function(e){c({type:D,playload:t})})).catch((function(e){return console.log(e)}))}}(u._id,c)),l(!1)};return Object(p.jsxs)("div",{className:"profil-container",children:[Object(p.jsx)(O,{}),Object(p.jsxs)("h1",{children:["Profil de ",T(u.pseudo)]}),Object(p.jsxs)("div",{className:"update-container",children:[Object(p.jsxs)("div",{className:"left-part",children:[Object(p.jsx)("h3",{children:"Photo"}),Object(p.jsx)("img",{src:u.picture,alt:"profilImage"}),Object(p.jsx)(ce,{}),Object(p.jsx)("p",{children:b.maxSize}),Object(p.jsx)("p",{children:b.format})]}),Object(p.jsxs)("div",{className:"right-part",children:[Object(p.jsxs)("div",{className:"bio-update",children:[Object(p.jsx)("h3",{children:"Bio"}),!1===a&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{onClick:function(){return l(!a)},children:u.bio}),Object(p.jsx)("button",{onClick:function(){return l(!a)},children:"Modifier Bio"})]}),a&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("textarea",{type:"text",defaultValue:u.bio,onChange:function(e){return r(e.target.value)}}),Object(p.jsx)("button",{onClick:function(){return S()},children:"Valider les modifications"})]})]}),Object(p.jsxs)("h4",{children:["Membre depuis le ",I(u.createdAt)]}),Object(p.jsxs)("h5",{onClick:function(){return v(!0)},children:["Abonnements :"," ",u.followings?u.followings.length:"0"]}),Object(p.jsxs)("h5",{onClick:function(){return N(!0)},children:["Abonn\xe9s : ",u.followers?u.followers.length:"0"]})]})]}),g&&Object(p.jsx)("div",{className:"popup-profil-container",children:Object(p.jsxs)("div",{className:"modal",children:[Object(p.jsx)("h3",{children:"Abonnements"}),Object(p.jsx)("span",{onClick:function(){return v(!1)},className:"cross",children:"\u2715"}),Object(p.jsx)("ul",{children:d.map((function(e){for(var t=0;t<u.followings.length;t++)if(e._id===u.followings[t])return Object(p.jsxs)("li",{children:[Object(p.jsx)("img",{src:e.picture,alt:"user-pic"}),Object(p.jsx)("h4",{children:e.pseudo}),Object(p.jsx)("div",{className:"follow-handler",children:Object(p.jsx)(M,{type:"suggestion",idToFollow:e._id})})]},e._id);return null}))})]})}),k&&Object(p.jsx)("div",{className:"popup-profil-container",children:Object(p.jsxs)("div",{className:"modal",children:[Object(p.jsx)("h3",{children:"Abonn\xe9s"}),Object(p.jsx)("span",{onClick:function(){return N(!1)},className:"cross",children:"\u2715"}),Object(p.jsx)("ul",{children:d.map((function(e){for(var t=0;t<u.followers.length;t++)if(e._id===u.followers[t])return Object(p.jsxs)("li",{children:[Object(p.jsx)("img",{src:e.picture,alt:"user-pic"}),Object(p.jsx)("h4",{children:e.pseudo}),Object(p.jsx)("div",{className:"follow-handler",children:Object(p.jsx)(M,{type:"suggestion",idToFollow:e._id})})]},e._id);return null}))})]})})]})},re=function(){var e=Object(n.useContext)(G);return Object(p.jsx)("div",{className:"profil-page",children:e?Object(p.jsx)(ne,{}):Object(p.jsxs)("div",{className:"log-container",children:[Object(p.jsx)(Z,{signin:!1,signup:!0}),Object(p.jsx)("div",{className:"img-container",children:Object(p.jsx)("img",{src:"./img/log.svg",alt:"log-img"})})]})})},se=function(){var e=Object(n.useContext)(G),t=Object(o.c)((function(e){return e.trendingReducer}));return console.log(t),Object(p.jsxs)("div",{className:"trending-page",children:[Object(p.jsx)(O,{}),Object(p.jsx)("div",{className:"main",children:Object(p.jsx)("ul",{children:!L(t[0])&&t.map((function(e){return Object(p.jsx)(J,{post:e},e._id)}))})}),Object(p.jsx)("div",{className:"right-side",children:Object(p.jsxs)("div",{className:"right-side-container",children:[Object(p.jsx)($,{}),e&&Object(p.jsx)(ee,{})]})})]})},oe=c(38),ie=c.n(oe),ae=function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()({method:"GET",url:"".concat("https://gusnetwork.herokuapp.com/","api/user/logout"),withCredentials:!0}).then((function(){return e="jwt",void("undefined"!==window&&ie.a.remove(e,{expires:1}));var e})).catch((function(e){return console.log(e)}));case 2:window.location="/";case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("li",{onClick:e,children:Object(p.jsx)("img",{src:"./img/icons/logout.svg",alt:"Logout"})})},le=function(){var e=Object(n.useContext)(G),t=Object(o.c)((function(e){return e.userReducer}));return Object(p.jsx)("nav",{children:Object(p.jsxs)("div",{className:"nav-container",children:[Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)(d.b,{exact:!0,to:"/",children:Object(p.jsxs)("div",{className:"logo",children:[Object(p.jsx)("img",{src:"./img/iconGus.png",alt:"Logo-Gus"}),Object(p.jsx)("h3",{children:"The Gus Network"})]})})}),e?Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{}),Object(p.jsx)("li",{className:"welcome",children:Object(p.jsx)(d.b,{exact:!0,to:"/profil",children:Object(p.jsxs)("h5",{children:["Bienvenue ",T(t.pseudo)]})})}),Object(p.jsx)(ae,{})]}):Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{exact:!0,to:"/profil",children:Object(p.jsx)("img",{src:"./img/icons/login.svg",alt:"login"})})})]})]})})},ue=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(le,{}),Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{path:"/",exact:!0,component:te}),Object(p.jsx)(b.b,{path:"/profil",exact:!0,component:re}),Object(p.jsx)(b.b,{path:"/trending",exact:!0,component:se}),Object(p.jsx)(b.a,{to:"/"})]})]})})},je=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],r=t[1],s=void 0===r?n.useState:r,i=Object(o.b)();return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()({method:"GET",url:"".concat("https://gusnetwork.herokuapp.com/","jwtid"),withCredentials:!0}).then((function(e){s(e.data)})).catch((function(e){return console.log("No token ")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),c&&i(function(e){return function(t){return h.a.get("".concat("https://gusnetwork.herokuapp.com/","api/user/").concat(e)).then((function(e){t({type:F,playload:e.data})})).catch((function(e){console.log("error dispatch GET_USER"+e)}))}}(c))}),[c]),Object(p.jsx)(G.Provider,{value:c,children:Object(p.jsx)(ue,{})})},de=c(39),be=c(22),pe=c(5),Oe={};var me="GET_USERS",he={};var fe={};var xe={postError:[],userError:[]};var ge={};var ve={};var we=Object(i.combineReducers)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return t.playload;case P:return Object(pe.a)(Object(pe.a)({},e),{},{picture:t.playload});case D:return Object(pe.a)(Object(pe.a)({},e),{},{bio:t.playload});case U:return Object(pe.a)(Object(pe.a)({},e),{},{followings:[t.playload.idToFollow].concat(Object(be.a)(e.followings))});case H:return Object(pe.a)(Object(pe.a)({},e),{},{followings:e.followings.filter((function(e){return e!==t.playload.idToUnfollow}))});default:return e}},usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;return t.type===me?t.playload:e},postReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.playload;case g:return e.map((function(e){return e._id===t.playload.postId?Object(pe.a)(Object(pe.a)({},e),{},{likers:[t.playload.userId].concat(Object(be.a)(e.likers))}):e}));case v:return e.map((function(e){return e._id===t.playload.postId?Object(pe.a)(Object(pe.a)({},e),{},{likers:e.likers.filter((function(e){return e!==t.playload.userId}))}):e}));case w:return e.map((function(e){return e._id===t.playload.postId?Object(pe.a)(Object(pe.a)({},e),{},{message:t.playload.message}):e}));case y:return e.filter((function(e){return e._id!==t.playload.postId}));case k:return e.map((function(e){return e._id===t.playload.postId?Object(pe.a)(Object(pe.a)({},e),{},{comments:e.comments.map((function(e){return e._id===t.playload.commentId?Object(pe.a)(Object(pe.a)({},e),{},{text:t.playload.text}):e}))}):e}));case N:return e.map((function(e){return e._id===t.playload.postId?Object(pe.a)(Object(pe.a)({},e),{},{comments:e.comments.filter((function(e){return e._id!==t.playload.commentId}))}):e}));default:return e}},errorReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{postError:t.playload,userError:[]};case A:return{userError:t.playload,postError:[]};default:return e}},allPostsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;return t.type===x?t.playload:e},trendingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;return t.type===S?t.playload:e}}),ye=c(40),ke=(c(75),Object(i.createStore)(we,Object(ye.composeWithDevTools)(Object(i.applyMiddleware)(de.a))));ke.dispatch((function(e){return h.a.get("".concat("https://gusnetwork.herokuapp.com/","api/user")).then((function(t){e({type:me,playload:t.data})})).catch((function(e){console.log(e)}))})),ke.dispatch(E()),s.a.render(Object(p.jsx)(o.a,{store:ke,children:Object(p.jsx)(je,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.20a18206.chunk.js.map