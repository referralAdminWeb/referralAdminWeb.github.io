"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[671],{62088:function(G,I,r){r.r(I),r.d(I,{default:function(){return J}});var x=r(15009),M=r.n(x),R=r(99289),d=r.n(R),L=r(5574),v=r.n(L),g=r(65763),p=r(29933),P=r(90930),y=r(37476),w=r(5966),E=r(64317),O=r(2453),D=r(4393),B=r(55054),T=r(71230),Z=r(15746),A=r(28036),W=r(72051),V=r(38925),m=r(9220),t=r(67294),i=r(73025),l=r(80854),a={line2:"line2___oCLNr",label:"label___WETYo",row:"row___rsldH"},u=r(12095),e=r(85893),z=p.Z.Divider,k=function(){var Q=(0,t.useState)(!1),N=v()(Q,2),F=N[0],_=N[1],q=(0,t.useState)(!1),K=v()(q,2),ee=K[0],H=K[1],re=(0,t.useState)(void 0),X=v()(re,2),f=X[0],$=X[1],ae=(0,t.useState)(void 0),Y=v()(ae,2),h=Y[0],se=Y[1],b=(0,t.useRef)(),n=(0,l.useIntl)(),te=[{title:n.formatMessage({id:"pages.overall.commission.chain",defaultMessage:"Chain"}),dataIndex:"chain",key:"chain"},{title:n.formatMessage({id:"pages.overall.commission.totalCommission",defaultMessage:"Total Commission"}),dataIndex:"totalCommission",key:"totalCommission",render:function(j,o){return(0,g.B)(o.totalCommission,6)+" "+o.symbol}},{title:n.formatMessage({id:"pages.overall.commission.totalUnclaimedCommission",defaultMessage:"Total Unclaimed Commission"}),dataIndex:"totalUnclaimedCommission",key:"totalUnclaimedCommission",render:function(j,o){return(0,g.B)(o.totalUnclaimedCommission,6)+" "+o.symbol}}],ne=function(){var S=d()(M()().mark(function j(o){var C,U;return M()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,(0,u.V8)(o.target.value);case 3:C=s.sent,C!==void 0&&(U={guid:C.guid,tgUsername:C.tgUsername,email:C.email},$(U)),s.next=11;break;case 7:s.prev=7,s.t0=s.catch(0),$(void 0),O.ZP.error(n.formatMessage({id:"pages.overall.user.notFound"}));case 11:case"end":return s.stop()}},j,null,[[0,7]])}));return function(o){return S.apply(this,arguments)}}(),le=function(){var S=d()(M()().mark(function j(o){var C,U;return M()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(f!=null){s.next=3;break}return O.ZP.error(n.formatMessage({id:"pages.overall.user.null"})),s.abrupt("return",!1);case 3:return s.prev=3,s.next=6,(0,u.fA)(f==null?void 0:f.guid,o.vip,o.remark);case 6:return O.ZP.success(n.formatMessage({id:"pages.overall.newSvip.add.success"})),b==null||(C=b.current)===null||C===void 0||C.resetFields(),l.history.push("/vipList"),s.abrupt("return",!0);case 12:if(s.prev=12,s.t0=s.catch(3),console.error(s.t0),s.t0!="this user is already VIP"){s.next=20;break}return O.ZP.error(n.formatMessage({id:"pages.overall.newSvip.add.exists"})),b==null||(U=b.current)===null||U===void 0||U.resetFields(),$(void 0),s.abrupt("return",!1);case 20:return O.ZP.error(n.formatMessage({id:"pages.overall.newSvip.add.error"})),s.abrupt("return",!1);case 22:case"end":return s.stop()}},j,null,[[3,12]])}));return function(o){return S.apply(this,arguments)}}();return(0,t.useEffect)(function(){var S=function(){var j=d()(M()().mark(function o(){var C;return M()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,(0,u.ig)();case 3:C=c.sent,se(C),c.next=12;break;case 7:return c.prev=7,c.t0=c.catch(0),console.error(c.t0),O.ZP.error(n.formatMessage({id:"pages.overall.data.error"})),c.abrupt("return",!1);case 12:case"end":return c.stop()}},o,null,[[0,7]])}));return function(){return j.apply(this,arguments)}}();S()},[]),(0,e.jsxs)(P._z,{children:[(0,e.jsxs)(D.Z,{children:[(0,e.jsx)(m.Z,{onResize:function(j){_(j.width<596)},children:(0,e.jsxs)(p.Z.Group,{direction:F?"column":"row",children:[(0,e.jsx)(p.Z,{children:(0,e.jsx)(B.Z,{title:n.formatMessage({id:"pages.overall.totalInvitee",defaultMessage:"Total Invitee"}),value:h?h.totalinvitee:"-"})}),(0,e.jsx)(z,{type:F?"horizontal":"vertical"}),(0,e.jsx)(p.Z,{children:(0,e.jsx)(B.Z,{title:n.formatMessage({id:"pages.overall.24HNewInvitee",defaultMessage:"24H New Invitee"}),value:h?h.newInvitee24H:"-"})}),(0,e.jsx)(z,{type:F?"horizontal":"vertical"}),(0,e.jsx)(p.Z,{children:(0,e.jsx)(B.Z,{title:n.formatMessage({id:"pages.overall.total24HVolume",defaultMessage:"Total 24H Volume"}),value:h?"$ "+(0,g.B)(h.totalVolume24H,6):"-"})})]})},"resize-observer"),(0,e.jsxs)(T.Z,{gutter:{xs:8,sm:16,md:24,lg:32},className:a.line2,children:[(0,e.jsx)(Z.Z,{span:8,push:16,children:(0,e.jsx)(D.Z,{title:"VIP",extra:(0,e.jsx)("div",{children:(0,e.jsx)(A.ZP,{type:"link",onClick:function(){H(!0)},children:n.formatMessage({id:"pages.overall.vip.newVip"})})}),children:h&&(0,e.jsx)(i.Z,{data:h.vipCountList,angleField:"count",colorField:"vip",innerRadius:.6,label:{text:"count",style:{fontWeight:"bold"}},legend:{color:{title:!1,position:"right",rowPadding:5}},animate:[{type:"text",style:{text:`Total
`+h.totalVipCount,x:"50%",y:"50%",textAlign:"center",fontSize:24}}]})})}),(0,e.jsx)(Z.Z,{span:16,pull:8,children:(0,e.jsx)(D.Z,{title:n.formatMessage({id:"pages.overall.commission.title",defaultMessage:"Commission"}),extra:(0,e.jsx)("div",{children:h?h.startTime+" - now":"-"}),children:h&&(0,e.jsx)(W.Z,{columns:te,dataSource:h.commissionList,pagination:!1})})})]})]}),(0,e.jsxs)(y.Y,{title:"Add SVIP",layout:"horizontal",formRef:b,labelCol:{span:8},wrapperCol:{span:16},open:ee,onFinish:le,onOpenChange:function(j){var o;b==null||(o=b.current)===null||o===void 0||o.resetFields(),H(j)},children:[(0,e.jsx)(w.Z,{width:"md",name:"refCode",label:n.formatMessage({id:"pages.overall.newSvip.refCode"}),placeholder:n.formatMessage({id:"pages.overall.newSvip.refCode.placeholder"}),fieldProps:{onBlur:ne,maxLength:16},rules:[{required:!0,message:"Please enter refCode!"}]}),(0,e.jsx)(E.Z,{width:"md",name:"vip",label:n.formatMessage({id:"pages.overall.newSvip.vip"}),valueEnum:{vip1:n.formatMessage({id:"pages.overall.vip.list.vip1"}),vip2:n.formatMessage({id:"pages.overall.vip.list.vip2"}),vip3:n.formatMessage({id:"pages.overall.vip.list.vip3"}),svip:n.formatMessage({id:"pages.overall.vip.list.svip"})},rules:[{required:!0,message:"Please select vip!"}]}),(0,e.jsx)(w.Z,{width:"md",name:"remark",label:n.formatMessage({id:"pages.overall.newSvip.remark"}),placeholder:n.formatMessage({id:"pages.overall.newSvip.remark.placeholder"}),fieldProps:{maxLength:64}}),f&&(0,e.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,e.jsxs)("div",{style:{width:400},children:[(0,e.jsx)(V.Z,{message:"User Found",type:"success",showIcon:!0}),(0,e.jsxs)("div",{children:[(0,e.jsxs)(T.Z,{className:a.row,children:[(0,e.jsx)(Z.Z,{className:a.label,span:6,children:"Guid:"}),(0,e.jsx)(Z.Z,{span:12,children:f==null?void 0:f.guid})]}),(0,e.jsxs)(T.Z,{children:[(0,e.jsx)(Z.Z,{className:a.label,span:6,children:"Tg Username:"}),(0,e.jsx)(Z.Z,{span:12,children:f==null?void 0:f.tgUsername})]}),(0,e.jsxs)(T.Z,{children:[(0,e.jsx)(Z.Z,{className:a.label,span:6,children:"Email:"}),(0,e.jsx)(Z.Z,{span:12,children:f==null?void 0:f.email})]})]})]})})]})]})},J=k},12095:function(G,I,r){r.d(I,{DJ:function(){return O},Nq:function(){return Z},V8:function(){return P},fA:function(){return B},ig:function(){return W},zc:function(){return w}});var x=r(97857),M=r.n(x),R=r(15009),d=r.n(R),L=r(99289),v=r.n(L),g=r(80854),p="https://api.avevip.com";function P(m){return y.apply(this,arguments)}function y(){return y=v()(d()().mark(function m(t){var i;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,g.request)(p+"/api/user/getUserByRef",{method:"GET",params:{refCode:t}});case 2:if(i=a.sent,i.code===0){a.next=5;break}throw i.msg;case 5:return a.abrupt("return",i.data);case 6:case"end":return a.stop()}},m)})),y.apply(this,arguments)}function w(m,t){return E.apply(this,arguments)}function E(){return E=v()(d()().mark(function m(t,i){var l;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,g.request)(p+"/api/user/getVipPageList",M()({method:"GET",params:M()({},t)},i||{}));case 2:if(l=u.sent,l.code===0){u.next=5;break}throw l.msg;case 5:return u.abrupt("return",l);case 6:case"end":return u.stop()}},m)})),E.apply(this,arguments)}function O(m){return D.apply(this,arguments)}function D(){return D=v()(d()().mark(function m(t){var i;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,g.request)(p+"/api/user/getVipDetail",{method:"GET",params:{guid:t}});case 2:if(i=a.sent,i.code===0){a.next=5;break}throw i.msg;case 5:return a.abrupt("return",i.data);case 6:case"end":return a.stop()}},m)})),D.apply(this,arguments)}function B(m,t,i){return T.apply(this,arguments)}function T(){return T=v()(d()().mark(function m(t,i,l){var a;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.request)(p+"/api/user/addSvip",{method:"POST",data:{guid:t,vip:i,remark:l}});case 2:if(a=e.sent,a.code===0){e.next=5;break}throw a.msg;case 5:return e.abrupt("return");case 6:case"end":return e.stop()}},m)})),T.apply(this,arguments)}function Z(m,t){return A.apply(this,arguments)}function A(){return A=v()(d()().mark(function m(t,i){var l;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,g.request)(p+"/api/user/updateUser",{method:"POST",data:M()({guid:t},i)});case 2:return l=u.sent,u.abrupt("return",l);case 4:case"end":return u.stop()}},m)})),A.apply(this,arguments)}function W(){return V.apply(this,arguments)}function V(){return V=v()(d()().mark(function m(){var t;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,g.request)(p+"/api/overall/data",{method:"GET"});case 2:if(t=l.sent,t.code===0){l.next=5;break}throw t.msg;case 5:return l.abrupt("return",t.data);case 6:case"end":return l.stop()}},m)})),V.apply(this,arguments)}},65763:function(G,I,r){r.d(I,{B:function(){return M}});var x=r(90482);function M(R,d){if(!R)return"";var L=new x.Z(R),v=R.split(".");if(v.length!==2)return R;for(var g=v[0],p=v[1],P=0,y="",w=0;w<p.length;w++){var E=p[w];if(y.length>=d)break;E=="0"&&y.length==0?P=P+1:y=y+E}return P>3?g+".0{"+P+"}"+y:g+"."+"0".repeat(P)+y}}}]);