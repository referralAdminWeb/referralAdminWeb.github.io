"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[430],{10178:function(le,R,e){e.d(R,{D:function(){return $}});var t=e(74165),h=e(15861),C=e(67294),V=e(48171);function $(B,y){var I=(0,V.J)(B),x=(0,C.useRef)(),_=(0,C.useCallback)(function(){x.current&&(clearTimeout(x.current),x.current=null)},[]),E=(0,C.useCallback)((0,h.Z)((0,t.Z)().mark(function n(){var c,a,l,o=arguments;return(0,t.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:for(c=o.length,a=new Array(c),l=0;l<c;l++)a[l]=o[l];if(!(y===0||y===void 0)){m.next=3;break}return m.abrupt("return",I.apply(void 0,a));case 3:return _(),m.abrupt("return",new Promise(function(u){x.current=setTimeout((0,h.Z)((0,t.Z)().mark(function f(){return(0,t.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.t0=u,p.next=3,I.apply(void 0,a);case 3:return p.t1=p.sent,(0,p.t0)(p.t1),p.abrupt("return");case 6:case"end":return p.stop()}},f)})),y)}));case 5:case"end":return m.stop()}},n)})),[I,_,y]);return(0,C.useEffect)(function(){return _},[_]),{run:E,cancel:_}}},48171:function(le,R,e){e.d(R,{J:function(){return C}});var t=e(74902),h=e(67294),C=function($){var B=(0,h.useRef)(null);return B.current=$,(0,h.useCallback)(function(){for(var y,I=arguments.length,x=new Array(I),_=0;_<I;_++)x[_]=arguments[_];return(y=B.current)===null||y===void 0?void 0:y.call.apply(y,[B].concat((0,t.Z)(x)))},[])}},81643:function(le,R,e){e.d(R,{Z:function(){return t}});const t=h=>h?typeof h=="function"?h():h:null},7134:function(le,R,e){e.d(R,{C:function(){return pe}});var t=e(67294),h=e(93967),C=e.n(h),V=e(9220),$=e(42550),B=e(74443),y=e(53124),I=e(35792),x=e(98675),_=e(25378),n=t.createContext({}),c=e(25446),a=e(14747),l=e(83559),o=e(83262);const b=r=>{const{antCls:v,componentCls:i,iconCls:s,avatarBg:O,avatarColor:g,containerSize:U,containerSizeLG:j,containerSizeSM:Z,textFontSize:z,textFontSizeLG:F,textFontSizeSM:oe,borderRadius:L,borderRadiusLG:W,borderRadiusSM:w,lineWidth:re,lineType:k}=r,H=(d,T,G)=>({width:d,height:d,borderRadius:"50%",[`&${i}-square`]:{borderRadius:G},[`&${i}-icon`]:{fontSize:T,[`> ${s}`]:{margin:0}}});return{[i]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,a.Wf)(r)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:g,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:O,border:`${(0,c.bf)(re)} ${k} transparent`,"&-image":{background:"transparent"},[`${v}-image-img`]:{display:"block"}}),H(U,z,L)),{"&-lg":Object.assign({},H(j,F,W)),"&-sm":Object.assign({},H(Z,oe,w)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},m=r=>{const{componentCls:v,groupBorderColor:i,groupOverlapping:s,groupSpace:O}=r;return{[`${v}-group`]:{display:"inline-flex",[v]:{borderColor:i},"> *:not(:first-child)":{marginInlineStart:s}},[`${v}-group-popover`]:{[`${v} + ${v}`]:{marginInlineStart:O}}}},u=r=>{const{controlHeight:v,controlHeightLG:i,controlHeightSM:s,fontSize:O,fontSizeLG:g,fontSizeXL:U,fontSizeHeading3:j,marginXS:Z,marginXXS:z,colorBorderBg:F}=r;return{containerSize:v,containerSizeLG:i,containerSizeSM:s,textFontSize:Math.round((g+U)/2),textFontSizeLG:j,textFontSizeSM:O,groupSpace:z,groupOverlapping:-Z,groupBorderColor:F}};var f=(0,l.I$)("Avatar",r=>{const{colorTextLightSolid:v,colorTextPlaceholder:i}=r,s=(0,o.IX)(r,{avatarBg:i,avatarColor:v});return[b(s),m(s)]},u),A=function(r,v){var i={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&v.indexOf(s)<0&&(i[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,s=Object.getOwnPropertySymbols(r);O<s.length;O++)v.indexOf(s[O])<0&&Object.prototype.propertyIsEnumerable.call(r,s[O])&&(i[s[O]]=r[s[O]]);return i};const p=(r,v)=>{const[i,s]=t.useState(1),[O,g]=t.useState(!1),[U,j]=t.useState(!0),Z=t.useRef(null),z=t.useRef(null),F=(0,$.sQ)(v,Z),{getPrefixCls:oe,avatar:L}=t.useContext(y.E_),W=t.useContext(n),w=()=>{if(!z.current||!Z.current)return;const S=z.current.offsetWidth,M=Z.current.offsetWidth;if(S!==0&&M!==0){const{gap:J=4}=r;J*2<M&&s(M-J*2<S?(M-J*2)/S:1)}};t.useEffect(()=>{g(!0)},[]),t.useEffect(()=>{j(!0),s(1)},[r.src]),t.useEffect(w,[r.gap]);const re=()=>{const{onError:S}=r;(S==null?void 0:S())!==!1&&j(!1)},{prefixCls:k,shape:H,size:d,src:T,srcSet:G,icon:P,className:X,rootClassName:ae,alt:Ee,draggable:ve,children:q,crossOrigin:se}=r,ee=A(r,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),D=(0,x.Z)(S=>{var M,J;return(J=(M=d!=null?d:W==null?void 0:W.size)!==null&&M!==void 0?M:S)!==null&&J!==void 0?J:"default"}),ce=Object.keys(typeof D=="object"?D||{}:{}).some(S=>["xs","sm","md","lg","xl","xxl"].includes(S)),me=(0,_.Z)(ce),Oe=t.useMemo(()=>{if(typeof D!="object")return{};const S=B.c4.find(J=>me[J]),M=D[S];return M?{width:M,height:M,fontSize:M&&(P||q)?M/2:18}:{}},[me,D]),N=oe("avatar",k),fe=(0,I.Z)(N),[he,ye,_e]=f(N,fe),Se=C()({[`${N}-lg`]:D==="large",[`${N}-sm`]:D==="small"}),Pe=t.isValidElement(T),Me=H||(W==null?void 0:W.shape)||"circle",xe=C()(N,Se,L==null?void 0:L.className,`${N}-${Me}`,{[`${N}-image`]:Pe||T&&U,[`${N}-icon`]:!!P},_e,fe,X,ae,ye),be=typeof D=="number"?{width:D,height:D,fontSize:P?D/2:18}:{};let ie;if(typeof T=="string"&&U)ie=t.createElement("img",{src:T,draggable:ve,srcSet:G,onError:re,alt:Ee,crossOrigin:se});else if(Pe)ie=T;else if(P)ie=P;else if(O||i!==1){const S=`scale(${i})`,M={msTransform:S,WebkitTransform:S,transform:S};ie=t.createElement(V.Z,{onResize:w},t.createElement("span",{className:`${N}-string`,ref:z,style:Object.assign({},M)},q))}else ie=t.createElement("span",{className:`${N}-string`,style:{opacity:0},ref:z},q);return delete ee.onError,delete ee.gap,he(t.createElement("span",Object.assign({},ee,{style:Object.assign(Object.assign(Object.assign(Object.assign({},be),Oe),L==null?void 0:L.style),ee.style),className:xe,ref:F}),ie))};var Q=t.forwardRef(p),te=e(50344),Y=e(96159),ge=e(55241);const de=r=>{const{size:v,shape:i}=t.useContext(n),s=t.useMemo(()=>({size:r.size||v,shape:r.shape||i}),[r.size,r.shape,v,i]);return t.createElement(n.Provider,{value:s},r.children)};var ne=r=>{var v,i,s,O;const{getPrefixCls:g,direction:U}=t.useContext(y.E_),{prefixCls:j,className:Z,rootClassName:z,style:F,maxCount:oe,maxStyle:L,size:W,shape:w,maxPopoverPlacement:re,maxPopoverTrigger:k,children:H,max:d}=r,T=g("avatar",j),G=`${T}-group`,P=(0,I.Z)(T),[X,ae,Ee]=f(T,P),ve=C()(G,{[`${G}-rtl`]:U==="rtl"},Ee,P,Z,z,ae),q=(0,te.Z)(H).map((D,ce)=>(0,Y.Tm)(D,{key:`avatar-key-${ce}`})),se=(d==null?void 0:d.count)||oe,ee=q.length;if(se&&se<ee){const D=q.slice(0,se),ce=q.slice(se,ee),me=(d==null?void 0:d.style)||L,Oe=((v=d==null?void 0:d.popover)===null||v===void 0?void 0:v.trigger)||k||"hover",N=((i=d==null?void 0:d.popover)===null||i===void 0?void 0:i.placement)||re||"top",fe=Object.assign(Object.assign({content:ce},d==null?void 0:d.popover),{classNames:{root:C()(`${G}-popover`,(O=(s=d==null?void 0:d.popover)===null||s===void 0?void 0:s.classNames)===null||O===void 0?void 0:O.root)},placement:N,trigger:Oe});return D.push(t.createElement(ge.Z,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},fe),t.createElement(Q,{style:me},`+${ee-se}`))),X(t.createElement(de,{shape:w,size:W},t.createElement("div",{className:ve,style:F},D)))}return X(t.createElement(de,{shape:w,size:W},t.createElement("div",{className:ve,style:F},q)))};const ue=Q;ue.Group=ne;var pe=ue},66330:function(le,R,e){e.d(R,{aV:function(){return x}});var t=e(67294),h=e(93967),C=e.n(h),V=e(92419),$=e(81643),B=e(53124),y=e(20136),I=function(n,c){var a={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&c.indexOf(l)<0&&(a[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(n);o<l.length;o++)c.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(n,l[o])&&(a[l[o]]=n[l[o]]);return a};const x=n=>{let{title:c,content:a,prefixCls:l}=n;return!c&&!a?null:t.createElement(t.Fragment,null,c&&t.createElement("div",{className:`${l}-title`},c),a&&t.createElement("div",{className:`${l}-inner-content`},a))},_=n=>{const{hashId:c,prefixCls:a,className:l,style:o,placement:b="top",title:m,content:u,children:f}=n,A=(0,$.Z)(m),p=(0,$.Z)(u),K=C()(c,a,`${a}-pure`,`${a}-placement-${b}`,l);return t.createElement("div",{className:K,style:o},t.createElement("div",{className:`${a}-arrow`}),t.createElement(V.G,Object.assign({},n,{className:c,prefixCls:a}),f||t.createElement(x,{prefixCls:a,title:A,content:p})))},E=n=>{const{prefixCls:c,className:a}=n,l=I(n,["prefixCls","className"]),{getPrefixCls:o}=t.useContext(B.E_),b=o("popover",c),[m,u,f]=(0,y.Z)(b);return m(t.createElement(_,Object.assign({},l,{prefixCls:b,hashId:u,className:C()(a,f)})))};R.ZP=E},55241:function(le,R,e){var t=e(67294),h=e(93967),C=e.n(h),V=e(21770),$=e(15105),B=e(81643),y=e(33603),I=e(96159),x=e(53124),_=e(83062),E=e(66330),n=e(20136),c=function(o,b){var m={};for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&b.indexOf(u)<0&&(m[u]=o[u]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,u=Object.getOwnPropertySymbols(o);f<u.length;f++)b.indexOf(u[f])<0&&Object.prototype.propertyIsEnumerable.call(o,u[f])&&(m[u[f]]=o[u[f]]);return m};const l=t.forwardRef((o,b)=>{var m,u,f,A,p,K;const{prefixCls:Q,title:te,content:Y,overlayClassName:ge,placement:de="top",trigger:Ce="hover",children:ne,mouseEnterDelay:ue=.1,mouseLeaveDelay:pe=.1,onOpenChange:r,overlayStyle:v={},styles:i,classNames:s}=o,O=c(o,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle","styles","classNames"]),{popover:g,getPrefixCls:U}=t.useContext(x.E_),j=U("popover",Q),[Z,z,F]=(0,n.Z)(j),oe=U(),L=C()(ge,z,F,(m=g==null?void 0:g.classNames)===null||m===void 0?void 0:m.root,s==null?void 0:s.root),W=C()((u=g==null?void 0:g.classNames)===null||u===void 0?void 0:u.body,s==null?void 0:s.body),[w,re]=(0,V.Z)(!1,{value:(f=o.open)!==null&&f!==void 0?f:o.visible,defaultValue:(A=o.defaultOpen)!==null&&A!==void 0?A:o.defaultVisible}),k=(P,X)=>{re(P,!0),r==null||r(P,X)},H=P=>{P.keyCode===$.Z.ESC&&k(!1,P)},d=P=>{k(P)},T=(0,B.Z)(te),G=(0,B.Z)(Y);return Z(t.createElement(_.Z,Object.assign({placement:de,trigger:Ce,mouseEnterDelay:ue,mouseLeaveDelay:pe},O,{prefixCls:j,classNames:{root:L,body:W},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign({},(p=g==null?void 0:g.styles)===null||p===void 0?void 0:p.root),g==null?void 0:g.style),v),i==null?void 0:i.root),body:Object.assign(Object.assign({},(K=g==null?void 0:g.styles)===null||K===void 0?void 0:K.body),i==null?void 0:i.body)},ref:b,open:w,onOpenChange:d,overlay:T||G?t.createElement(E.aV,{prefixCls:j,title:T,content:G}):null,transitionName:(0,y.m)(oe,"zoom-big",O.transitionName),"data-popover-inject":!0}),(0,I.Tm)(ne,{onKeyDown:P=>{var X,ae;t.isValidElement(ne)&&((ae=ne==null?void 0:(X=ne.props).onKeyDown)===null||ae===void 0||ae.call(X,P)),H(P)}})))});l._InternalPanelDoNotUseOrYouWillBeFired=E.ZP,R.Z=l},20136:function(le,R,e){var t=e(14747),h=e(50438),C=e(97414),V=e(79511),$=e(8796),B=e(83559),y=e(83262);const I=E=>{const{componentCls:n,popoverColor:c,titleMinWidth:a,fontWeightStrong:l,innerPadding:o,boxShadowSecondary:b,colorTextHeading:m,borderRadiusLG:u,zIndexPopup:f,titleMarginBottom:A,colorBgElevated:p,popoverBg:K,titleBorderBottom:Q,innerContentPadding:te,titlePadding:Y}=E;return[{[n]:Object.assign(Object.assign({},(0,t.Wf)(E)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:f,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"--antd-arrow-background-color":p,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:K,backgroundClip:"padding-box",borderRadius:u,boxShadow:b,padding:o},[`${n}-title`]:{minWidth:a,marginBottom:A,color:m,fontWeight:l,borderBottom:Q,padding:Y},[`${n}-inner-content`]:{color:c,padding:te}})},(0,C.ZP)(E,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:E.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},x=E=>{const{componentCls:n}=E;return{[n]:$.i.map(c=>{const a=E[`${c}6`];return{[`&${n}-${c}`]:{"--antd-arrow-background-color":a,[`${n}-inner`]:{backgroundColor:a},[`${n}-arrow`]:{background:"transparent"}}}})}},_=E=>{const{lineWidth:n,controlHeight:c,fontHeight:a,padding:l,wireframe:o,zIndexPopupBase:b,borderRadiusLG:m,marginXS:u,lineType:f,colorSplit:A,paddingSM:p}=E,K=c-a,Q=K/2,te=K/2-n,Y=l;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:b+30},(0,V.w)(E)),(0,C.wZ)({contentRadius:m,limitVerticalRadius:!0})),{innerPadding:o?0:12,titleMarginBottom:o?0:u,titlePadding:o?`${Q}px ${Y}px ${te}px`:0,titleBorderBottom:o?`${n}px ${f} ${A}`:"none",innerContentPadding:o?`${p}px ${Y}px`:0})};R.Z=(0,B.I$)("Popover",E=>{const{colorBgElevated:n,colorText:c}=E,a=(0,y.IX)(E,{popoverBg:n,popoverColor:c});return[I(a),x(a),(0,h._y)(a,"zoom-big")]},_,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})}}]);
