"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[366],{5966:function(Pe,Y,e){var p=e(97685),i=e(1413),S=e(91),L=e(21770),_=e(53025),P=e(55241),J=e(97435),k=e(67294),K=e(45456),o=e(85893),T=["fieldProps","proFieldProps"],ee=["fieldProps","proFieldProps"],N="text",V=function(s){var t=s.fieldProps,d=s.proFieldProps,c=(0,S.Z)(s,T);return(0,o.jsx)(K.Z,(0,i.Z)({valueType:N,fieldProps:t,filedConfig:{valueType:N},proFieldProps:d},c))},te=function(s){var t=(0,L.Z)(s.open||!1,{value:s.open,onChange:s.onOpenChange}),d=(0,p.Z)(t,2),c=d[0],b=d[1];return(0,o.jsx)(_.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(u){var M,I=u.getFieldValue(s.name||[]);return(0,o.jsx)(P.Z,(0,i.Z)((0,i.Z)({getPopupContainer:function(a){return a&&a.parentNode?a.parentNode:a},onOpenChange:function(a){return b(a)},content:(0,o.jsxs)("div",{style:{padding:"4px 0"},children:[(M=s.statusRender)===null||M===void 0?void 0:M.call(s,I),s.strengthText?(0,o.jsx)("div",{style:{marginTop:10},children:(0,o.jsx)("span",{children:s.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},s.popoverProps),{},{open:c,children:s.children}))}})},ne=function(s){var t=s.fieldProps,d=s.proFieldProps,c=(0,S.Z)(s,ee),b=(0,k.useState)(!1),B=(0,p.Z)(b,2),u=B[0],M=B[1];return t!=null&&t.statusRender&&c.name?(0,o.jsx)(te,{name:c.name,statusRender:t==null?void 0:t.statusRender,popoverProps:t==null?void 0:t.popoverProps,strengthText:t==null?void 0:t.strengthText,open:u,onOpenChange:M,children:(0,o.jsx)("div",{children:(0,o.jsx)(K.Z,(0,i.Z)({valueType:"password",fieldProps:(0,i.Z)((0,i.Z)({},(0,J.Z)(t,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(E){var a;t==null||(a=t.onBlur)===null||a===void 0||a.call(t,E),M(!1)},onClick:function(E){var a;t==null||(a=t.onClick)===null||a===void 0||a.call(t,E),M(!0)}}),proFieldProps:d,filedConfig:{valueType:N}},c))})}):(0,o.jsx)(K.Z,(0,i.Z)({valueType:"password",fieldProps:t,proFieldProps:d,filedConfig:{valueType:N}},c))},H=V;H.Password=ne,H.displayName="ProFormComponent",Y.Z=H},34994:function(Pe,Y,e){e.d(Y,{A:function(){return a}});var p=e(1413),i=e(53025),S=e(67294),L=e(78733),_=e(9105),P=e(4942),J=e(97685),k=e(87462),K=e(50756),o=e(57080),T=function(g,W){return S.createElement(o.Z,(0,k.Z)({},g,{ref:W,icon:K.Z}))},ee=S.forwardRef(T),N=ee,V=e(21770),te=e(48874),ne=e(28459),H=e(78957),C=e(93967),s=e.n(C),t=e(66758),d=e(2514),c=e(98082),b=function(g){return(0,P.Z)({},g.componentCls,{"&-title":{marginBlockEnd:g.marginXL,fontWeight:"bold"},"&-container":(0,P.Z)({flexWrap:"wrap",maxWidth:"100%"},"> div".concat(g.antCls,"-space-item"),{maxWidth:"100%"}),"&-twoLine":(0,P.Z)((0,P.Z)((0,P.Z)((0,P.Z)({display:"block",width:"100%"},"".concat(g.componentCls,"-title"),{width:"100%",margin:"8px 0"}),"".concat(g.componentCls,"-container"),{paddingInlineStart:16}),"".concat(g.antCls,"-space-item,").concat(g.antCls,"-form-item"),{width:"100%"}),"".concat(g.antCls,"-form-item"),{"&-control":{display:"flex",alignItems:"center",justifyContent:"flex-end","&-input":{alignItems:"center",justifyContent:"flex-end","&-content":{flex:"none"}}}})})};function B(y){return(0,c.Xj)("ProFormGroup",function(g){var W=(0,p.Z)((0,p.Z)({},g),{},{componentCls:".".concat(y)});return[b(W)]})}var u=e(85893),M=S.forwardRef(function(y,g){var W=S.useContext(t.Z),n=W.groupProps,v=(0,p.Z)((0,p.Z)({},n),y),me=v.children,ie=v.collapsible,D=v.defaultCollapsed,Ce=v.style,Ze=v.labelLayout,de=v.title,ce=de===void 0?y.label:de,pe=v.tooltip,he=v.align,ue=he===void 0?"start":he,xe=v.direction,ye=v.size,Se=ye===void 0?32:ye,je=v.titleStyle,f=v.titleRender,r=v.spaceProps,m=v.extra,q=v.autoFocus,ve=(0,V.Z)(function(){return D||!1},{value:y.collapsed,onChange:y.onCollapse}),X=(0,J.Z)(ve,2),z=X[0],ae=X[1],fe=(0,S.useContext)(ne.ZP.ConfigContext),ge=fe.getPrefixCls,F=(0,d.zx)(y),O=F.ColWrapper,re=F.RowWrapper,U=ge("pro-form-group"),oe=B(U),le=oe.wrapSSR,w=oe.hashId,$=ie&&(0,u.jsx)(N,{style:{marginInlineEnd:8},rotate:z?void 0:90}),Z=(0,u.jsx)(te.G,{label:$?(0,u.jsxs)("div",{children:[$,ce]}):ce,tooltip:pe}),h=(0,S.useCallback)(function(l){var G=l.children;return(0,u.jsx)(H.Z,(0,p.Z)((0,p.Z)({},r),{},{className:s()("".concat(U,"-container ").concat(w),r==null?void 0:r.className),size:Se,align:ue,direction:xe,style:(0,p.Z)({rowGap:0},r==null?void 0:r.style),children:G}))},[ue,U,xe,w,Se,r]),x=f?f(Z,y):Z,A=(0,S.useMemo)(function(){var l=[],G=S.Children.toArray(me).map(function(R,Ie){var Me;return S.isValidElement(R)&&R!==null&&R!==void 0&&(Me=R.props)!==null&&Me!==void 0&&Me.hidden?(l.push(R),null):Ie===0&&S.isValidElement(R)&&q?S.cloneElement(R,(0,p.Z)((0,p.Z)({},R.props),{},{autoFocus:q})):R});return[(0,u.jsx)(re,{Wrapper:h,children:G},"children"),l.length>0?(0,u.jsx)("div",{style:{display:"none"},children:l}):null]},[me,re,h,q]),j=(0,J.Z)(A,2),Q=j[0],se=j[1];return le((0,u.jsx)(O,{children:(0,u.jsxs)("div",{className:s()(U,w,(0,P.Z)({},"".concat(U,"-twoLine"),Ze==="twoLine")),style:Ce,ref:g,children:[se,(ce||pe||m)&&(0,u.jsx)("div",{className:"".concat(U,"-title ").concat(w).trim(),style:je,onClick:function(){ae(!z)},children:m?(0,u.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"},children:[x,(0,u.jsx)("span",{onClick:function(G){return G.stopPropagation()},children:m})]}):x}),(0,u.jsx)("div",{style:{display:ie&&z?"none":void 0},children:Q})]})}))});M.displayName="ProForm-Group";var I=M,E=e(62370);function a(y){return(0,u.jsx)(L.I,(0,p.Z)({layout:"vertical",contentRender:function(W,n){return(0,u.jsxs)(u.Fragment,{children:[W,n]})}},y))}a.Group=I,a.useForm=i.Z.useForm,a.Item=E.Z,a.useWatch=i.Z.useWatch,a.ErrorList=i.Z.ErrorList,a.Provider=i.Z.Provider,a.useFormInstance=i.Z.useFormInstance,a.EditOrReadOnlyContext=_.A},48874:function(Pe,Y,e){e.d(Y,{G:function(){return s}});var p=e(1413),i=e(4942),S=e(87462),L=e(67294),_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"},P=_,J=e(78370),k=function(d,c){return L.createElement(J.Z,(0,S.Z)({},d,{ref:c,icon:P}))},K=L.forwardRef(k),o=K,T=e(28459),ee=e(83062),N=e(93967),V=e.n(N),te=e(98082),ne=function(d){return(0,i.Z)({},d.componentCls,{display:"inline-flex",alignItems:"center",maxWidth:"100%","&-icon":{display:"block",marginInlineStart:"4px",cursor:"pointer","&:hover":{color:d.colorPrimary}},"&-title":{display:"inline-flex",flex:"1"},"&-subtitle ":{marginInlineStart:8,color:d.colorTextSecondary,fontWeight:"normal",fontSize:d.fontSize,whiteSpace:"nowrap"},"&-title-ellipsis":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",wordBreak:"keep-all"}})};function H(t){return(0,te.Xj)("LabelIconTip",function(d){var c=(0,p.Z)((0,p.Z)({},d),{},{componentCls:".".concat(t)});return[ne(c)]})}var C=e(85893),s=L.memo(function(t){var d=t.label,c=t.tooltip,b=t.ellipsis,B=t.subTitle,u=(0,L.useContext)(T.ZP.ConfigContext),M=u.getPrefixCls,I=M("pro-core-label-tip"),E=H(I),a=E.wrapSSR,y=E.hashId;if(!c&&!B)return(0,C.jsx)(C.Fragment,{children:d});var g=typeof c=="string"||L.isValidElement(c)?{title:c}:c,W=(g==null?void 0:g.icon)||(0,C.jsx)(o,{});return a((0,C.jsxs)("div",{className:V()(I,y),onMouseDown:function(v){return v.stopPropagation()},onMouseLeave:function(v){return v.stopPropagation()},onMouseMove:function(v){return v.stopPropagation()},children:[(0,C.jsx)("div",{className:V()("".concat(I,"-title"),y,(0,i.Z)({},"".concat(I,"-title-ellipsis"),b)),children:d}),B&&(0,C.jsx)("div",{className:"".concat(I,"-subtitle ").concat(y).trim(),children:B}),c&&(0,C.jsx)(ee.Z,(0,p.Z)((0,p.Z)({},g),{},{children:(0,C.jsx)("span",{className:"".concat(I,"-icon ").concat(y).trim(),children:W})}))]}))})},95091:function(Pe,Y,e){e.r(Y),e.d(Y,{default:function(){return je}});var p=e(15009),i=e.n(p),S=e(97857),L=e.n(S),_=e(99289),P=e.n(_),J=e(5574),k=e.n(J),K=e(23303),o=e(1413),T=e(67294),ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},N=ee,V=e(91146),te=function(r,m){return T.createElement(V.Z,(0,o.Z)((0,o.Z)({},r),{},{ref:m,icon:N}))},ne=T.forwardRef(te),H=ne,C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},s=C,t=function(r,m){return T.createElement(V.Z,(0,o.Z)((0,o.Z)({},r),{},{ref:m,icon:s}))},d=T.forwardRef(t),c=d,b=e(91),B=e(10915),u=e(28459),M=e(93967),I=e.n(M),E=e(34994),a=e(4942),y=e(98082),g=function(r){return(0,a.Z)((0,a.Z)({},r.componentCls,{"&-container":{display:"flex",flex:"1",flexDirection:"column",height:"100%",paddingInline:32,paddingBlock:24,overflow:"auto",background:"inherit"},"&-top":{textAlign:"center"},"&-header":{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",lineHeight:"44px",a:{textDecoration:"none"}},"&-title":{position:"relative",insetBlockStart:"2px",color:"@heading-color",fontWeight:"600",fontSize:"33px"},"&-logo":{width:"44px",height:"44px",marginInlineEnd:"16px",verticalAlign:"top",img:{width:"100%"}},"&-desc":{marginBlockStart:"12px",marginBlockEnd:"40px",color:r.colorTextSecondary,fontSize:r.fontSize},"&-main":{minWidth:"328px",maxWidth:"580px",margin:"0 auto","&-other":{marginBlockStart:"24px",lineHeight:"22px",textAlign:"start"}}}),"@media (min-width: @screen-md-min)",(0,a.Z)({},"".concat(r.componentCls,"-container"),{paddingInline:0,paddingBlockStart:32,paddingBlockEnd:24,backgroundRepeat:"no-repeat",backgroundPosition:"center 110px",backgroundSize:"100%"}))};function W(f){return(0,y.Xj)("LoginForm",function(r){var m=(0,o.Z)((0,o.Z)({},r),{},{componentCls:".".concat(f)});return[g(m)]})}var n=e(85893),v=["logo","message","contentStyle","title","subTitle","actions","children","containerStyle","otherStyle"];function me(f){var r,m=f.logo,q=f.message,ve=f.contentStyle,X=f.title,z=f.subTitle,ae=f.actions,fe=f.children,ge=f.containerStyle,F=f.otherStyle,O=(0,b.Z)(f,v),re=(0,B.YB)(),U=O.submitter===!1?!1:(0,o.Z)((0,o.Z)({searchConfig:{submitText:re.getMessage("loginForm.submitText","\u767B\u5F55")}},O.submitter),{},{submitButtonProps:(0,o.Z)({size:"large",style:{width:"100%"}},(r=O.submitter)===null||r===void 0?void 0:r.submitButtonProps),render:function(j,Q){var se,l=Q.pop();if(typeof(O==null||(se=O.submitter)===null||se===void 0?void 0:se.render)=="function"){var G,R;return O==null||(G=O.submitter)===null||G===void 0||(R=G.render)===null||R===void 0?void 0:R.call(G,j,Q)}return l}}),oe=(0,T.useContext)(u.ZP.ConfigContext),le=oe.getPrefixCls("pro-form-login"),w=W(le),$=w.wrapSSR,Z=w.hashId,h=function(j){return"".concat(le,"-").concat(j," ").concat(Z)},x=(0,T.useMemo)(function(){return m?typeof m=="string"?(0,n.jsx)("img",{src:m}):m:null},[m]);return $((0,n.jsxs)("div",{className:I()(h("container"),Z),style:ge,children:[(0,n.jsxs)("div",{className:"".concat(h("top")," ").concat(Z).trim(),children:[X||x?(0,n.jsxs)("div",{className:"".concat(h("header")),children:[x?(0,n.jsx)("span",{className:h("logo"),children:x}):null,X?(0,n.jsx)("span",{className:h("title"),children:X}):null]}):null,z?(0,n.jsx)("div",{className:h("desc"),children:z}):null]}),(0,n.jsxs)("div",{className:h("main"),style:(0,o.Z)({width:328},ve),children:[(0,n.jsxs)(E.A,(0,o.Z)((0,o.Z)({isKeyPressSubmit:!0},O),{},{submitter:U,children:[q,fe]})),ae?(0,n.jsx)("div",{className:h("main-other"),style:F,children:ae}):null]})]}))}var ie=e(5966),D=e(80854),Ce=e(38925),Ze=e(28248),de=e(2453),ce=e(62679),pe=e(73935),he=e(67610),ue=(0,ce.kc)(function(f){var r=f.token;return{action:{marginLeft:"8px",color:"rgba(0, 0, 0, 0.2)",fontSize:"24px",verticalAlign:"middle",cursor:"pointer",transition:"color 0.3s","&:hover":{color:r.colorPrimaryActive}},lang:{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,borderRadius:r.borderRadius,":hover":{backgroundColor:r.colorBgTextHover}},container:{display:"flex",flexDirection:"column",height:"100vh",overflow:"auto",backgroundImage:"url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",backgroundSize:"100% 100%"}}}),xe=function(){var r=ue(),m=r.styles;return(0,n.jsx)("div",{className:m.lang,"data-lang":!0,children:D.SelectLang&&(0,n.jsx)(D.SelectLang,{})})},ye=function(r){var m=r.content;return(0,n.jsx)(Ce.Z,{style:{marginBottom:24},message:m,type:"error",showIcon:!0})},Se=function(){var r=(0,T.useState)(void 0),m=k()(r,2),q=m[0],ve=m[1],X=(0,D.useModel)("@@initialState"),z=X.initialState,ae=X.setInitialState,fe=ue(),ge=fe.styles,F=(0,D.useIntl)(),O=Ze.Z.useModal(),re=k()(O,2),U=re[0],oe=re[1],le=function(){var $=P()(i()().mark(function Z(){var h,x;return i()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,z==null||(h=z.fetchUserInfo)===null||h===void 0?void 0:h.call(z);case 2:x=j.sent,x&&(0,pe.flushSync)(function(){ae(function(Q){return L()(L()({},Q),{},{userInfo:x})})});case 4:case"end":return j.stop()}},Z)}));return function(){return $.apply(this,arguments)}}(),w=function(){var $=P()(i()().mark(function Z(h){var x,A,j,Q;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,(0,K.x4)(L()({},h));case 3:if(x=l.sent,console.log(x),!(x.code===0&&x.data&&x.data.token)){l.next=13;break}return A=F.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),de.ZP.success(A),l.next=10,le();case 10:return j=new URL(window.location.href).searchParams,D.history.push(j.get("redirect")||"/"),l.abrupt("return");case 13:if(!(x.code===-2&&x.msg=="this user is disabled")){l.next=16;break}return U.error({title:F.formatMessage({id:"pages.login.account.banned"})}),l.abrupt("return");case 16:ve(x),l.next=24;break;case 19:l.prev=19,l.t0=l.catch(0),Q=F.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),console.log(l.t0),de.ZP.error(Q);case 24:case"end":return l.stop()}},Z,null,[[0,19]])}));return function(h){return $.apply(this,arguments)}}();return(0,n.jsxs)("div",{className:ge.container,children:[(0,n.jsx)(D.Helmet,{children:(0,n.jsxs)("title",{children:[F.formatMessage({id:"menu.login",defaultMessage:"\u767B\u5F55\u9875"}),"- ",he.Z.title]})}),(0,n.jsx)(xe,{}),(0,n.jsx)("div",{style:{flex:"1",padding:"32px 0"},children:(0,n.jsxs)(me,{contentStyle:{minWidth:280,maxWidth:"75vw"},logo:(0,n.jsx)("img",{alt:"logo",src:"https://ave.ai/static/img/avedex_mobile_logo.654ecc49.png"}),title:"Ave.ai",initialValues:{autoLogin:!0},onFinish:function(){var $=P()(i()().mark(function Z(h){return i()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,w(h);case 2:case"end":return A.stop()}},Z)}));return function(Z){return $.apply(this,arguments)}}(),children:[(0,n.jsx)("div",{style:{margin:24,marginTop:12,textAlign:"center"},children:(0,n.jsx)(D.FormattedMessage,{id:"pages.login.welcome",defaultMessage:"Welcome to use Ave Commission Management System!"})}),q!==void 0&&q.code!==0&&(0,n.jsx)(ye,{content:F.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF"})}),(0,n.jsx)(ie.Z,{name:"username",fieldProps:{size:"large",prefix:(0,n.jsx)(H,{})},placeholder:F.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D:"}),rules:[{required:!0,message:(0,n.jsx)(D.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,n.jsx)(ie.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,n.jsx)(c,{})},placeholder:F.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801:"}),rules:[{required:!0,message:(0,n.jsx)(D.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})]})}),oe]})},je=Se}}]);