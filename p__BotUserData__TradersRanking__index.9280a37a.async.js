"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[45],{95506:function(S,b,r){r.r(b);var T=r(15009),d=r.n(T),E=r(99289),v=r.n(E),B=r(5574),o=r.n(B),c=r(34157),p=r(65763),g=r(90930),m=r(38521),P=r(20040),D=r(80854),j=r(2453),C=r(28036),I=r(78957),U=r(74656),W=r(26915),A=r(85265),u=r(67294),t=r(85893),i=[{label:"RefCode",value:"refCode"},{label:"Guid",value:"guid"},{label:"Email",value:"email"},{label:"TgUsername",value:"tgUsername"}],h=function(){var L=(0,u.useRef)(),n=(0,u.useState)("refCode"),$=o()(n,2),w=$[0],z=$[1],Q=(0,u.useState)(""),G=o()(Q,2),K=G[0],X=G[1],Y=(0,u.useState)(!1),Z=o()(Y,2),q=Z[0],V=Z[1],ee=(0,u.useState)(),x=o()(ee,2),_e=x[0],y=x[1],re=(0,u.useState)(),k=o()(re,2),H=k[0],N=k[1],ne=j.ZP.useMessage(),F=o()(ne,2),J=F[0],ue=F[1],R=(0,D.useIntl)(),te=[{title:R.formatMessage({id:"rank"}),dataIndex:"rank",hideInSearch:!0},{title:R.formatMessage({id:"name"}),hideInSearch:!0,render:function(_,e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(C.ZP,{type:"link",onClick:function(){ae(e)},children:e.name})})}},{title:"24H Volume(Txns/Vol)",hideInSearch:!0,render:function(_,e){return e.totalTxns+"/$"+(0,p.B)(e.totalVol,3)}},{title:"Ref1 Name",dataIndex:"ref1Name",hideInSearch:!0},{renderFormItem:function(){return(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,t.jsx)("div",{style:{marginRight:10},children:R.formatMessage({id:"pages.searchUser"})}),(0,t.jsxs)(I.Z.Compact,{children:[(0,t.jsx)(U.Z,{options:i,onChange:function(e){z(e)},value:w}),(0,t.jsx)(W.Z,{value:K,onChange:function(e){X(e.target.value)}})]})]})}}],ae=function(){var l=v()(d()().mark(function _(e){var a;return d()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return y(e),J.loading("load..."),f.prev=2,f.next=5,(0,c.$P)(e.guid);case 5:a=f.sent,N(a.data),V(!0),f.next=14;break;case 10:f.prev=10,f.t0=f.catch(2),j.ZP.error(R.formatMessage({id:"pages.vipList.getVipDetail.error"})),y(void 0);case 14:J.destroy();case 15:case"end":return f.stop()}},_,null,[[2,10]])}));return function(e){return l.apply(this,arguments)}}(),se=[{title:"Guid",render:function(_,e){return e.user.guid}},{title:"Tg Username",render:function(_,e){return e.user.tgUsername}},{title:"Email",render:function(_,e){return e.user.email}},{title:R.formatMessage({id:"pages.vipList.refCode"}),render:function(_,e){return e.user.refCode}},{title:R.formatMessage({id:"pages.vipList.vipLevel"}),render:function(_,e){return e.user.vip}},{},{title:R.formatMessage({id:"pages.vipList.remark"}),render:function(_,e){return e.user.remark}},{},{title:"Up Guid",render:function(_,e){var a;return(a=e.up)===null||a===void 0?void 0:a.guid}},{title:"Up Tg Username",render:function(_,e){var a;return(a=e.up)===null||a===void 0?void 0:a.tgUsername}},{title:"Up Email",render:function(_,e){var a;return(a=e.up)===null||a===void 0?void 0:a.email}},{title:"Up RefCode",render:function(_,e){var a;return(a=e.up)===null||a===void 0?void 0:a.refCode}},{title:"Up Level",render:function(_,e){var a;return(a=e.up)===null||a===void 0?void 0:a.vip}},{},{title:"Up Remark",render:function(_,e){var a;return(a=e.up)===null||a===void 0?void 0:a.remark}}];return(0,t.jsxs)(g._z,{children:[(0,t.jsx)(m.Z,{actionRef:L,rowKey:"rank",pagination:!1,request:v()(d()().mark(function l(){var _,e,a,M;return d()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return a={},K.length>0&&(a[w]=K),O.next=4,(0,c.HJ)(a);case 4:return M=O.sent,console.log({data:M.data,success:M.code==0,total:(_=M.data)===null||_===void 0?void 0:_.length}),O.abrupt("return",{data:M.data,success:M.code==0,total:(e=M.data)===null||e===void 0?void 0:e.length});case 7:case"end":return O.stop()}},l)})),columns:te,onReset:function(){X("")}}),(0,t.jsx)(A.Z,{width:600,open:q,onClose:function(){y(void 0),N(void 0),V(!1)},closable:!1,children:H&&(0,t.jsx)(P.ZP,{column:2,title:"View",dataSource:H,columns:se})})]})};b.default=h},34157:function(S,b,r){r.d(b,{$P:function(){return W},HJ:function(){return I},Ul:function(){return j},_y:function(){return P},h0:function(){return g}});var T=r(15009),d=r.n(T),E=r(97857),v=r.n(E),B=r(99289),o=r.n(B),c=r(80854),p="https://api.avevip.com";function g(u,t,i){return m.apply(this,arguments)}function m(){return m=o()(d()().mark(function u(t,i,h){var s;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i&&(t.sortField=i,t.sortDesc=h),n.next=3,(0,c.request)(p+"/api/userData/getNewUserList",{method:"GET",params:v()({},t)});case 3:if(s=n.sent,s.code===0){n.next=6;break}throw s.msg;case 6:return n.abrupt("return",s);case 7:case"end":return n.stop()}},u)})),m.apply(this,arguments)}function P(u,t,i){return D.apply(this,arguments)}function D(){return D=o()(d()().mark(function u(t,i,h){var s;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i&&(t.sortField=i,t.sortDesc=h),n.next=3,(0,c.request)(p+"/api/userData/getChannelTrafficList",{method:"GET",params:v()({},t)});case 3:if(s=n.sent,s.code===0){n.next=6;break}throw s.msg;case 6:return n.abrupt("return",s);case 7:case"end":return n.stop()}},u)})),D.apply(this,arguments)}function j(u,t,i){return C.apply(this,arguments)}function C(){return C=o()(d()().mark(function u(t,i,h){var s;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i&&(t.sortField=i,t.sortDesc=h),n.next=3,(0,c.request)(p+"/api/userData/getTradersList",{method:"GET",params:v()({},t)});case 3:if(s=n.sent,s.code===0){n.next=6;break}throw s.msg;case 6:return n.abrupt("return",s);case 7:case"end":return n.stop()}},u)})),C.apply(this,arguments)}function I(u,t,i){return U.apply(this,arguments)}function U(){return U=o()(d()().mark(function u(t,i,h){var s;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.request)(p+"/api/userData/get24HTraderRanking",{method:"GET",params:v()({},t)});case 2:if(s=n.sent,s.code===0){n.next=5;break}throw s.msg;case 5:return n.abrupt("return",s);case 6:case"end":return n.stop()}},u)})),U.apply(this,arguments)}function W(u){return A.apply(this,arguments)}function A(){return A=o()(d()().mark(function u(t){var i;return d()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,c.request)(p+"/api/userData/getUserAndUpInfo",{method:"GET",params:{guid:t}});case 2:if(i=s.sent,i.code===0){s.next=5;break}throw i.msg;case 5:return s.abrupt("return",i);case 6:case"end":return s.stop()}},u)})),A.apply(this,arguments)}},65763:function(S,b,r){r.d(b,{B:function(){return d}});var T=r(90482);function d(E,v){if(!E)return"";var B=new T.Z(E),o=E.split(".");if(o.length!==2)return E;for(var c=o[0],p=o[1],g=0,m="",P=0;P<p.length;P++){var D=p[P];if(m.length>=v)break;D=="0"&&m.length==0?g=g+1:m=m+D}return g>3?c+".0{"+g+"}"+m:c+"."+"0".repeat(g)+m}}}]);
