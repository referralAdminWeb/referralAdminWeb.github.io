"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[671],{53607:function(ee,G,a){a.r(G),a.d(G,{default:function(){return fe}});var z=a(15009),l=a.n(z),W=a(99289),d=a.n(W),Q=a(5574),o=a.n(Q),E=a(65763),f=a(29933),Z=a(90930),T=a(37476),$=a(5966),P=a(64317),O=a(2453),c=a(4393),B=a(55054),g=a(71230),D=a(15746),x=a(28036),v=a(72051),h=a(38925),n=a(9220),t=a(67294),s=a(63430),j=a(80854),e={line2:"line2___oCLNr",label:"label___WETYo",row:"row___rsldH"},F=a(12095),R=a(34157),ae=a(80652),r=a(85893),ne=function(){var k=(0,t.useState)([]),U=o()(k,2),V=U[0],J=U[1];return(0,t.useEffect)(function(){var Y=function(){var N=d()(l()().mark(function L(){var C,w,_,i;return l()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,(0,R.h0)({page:1,pageSize:100});case 3:w=u.sent,_=[],(C=w.data)!==null&&C!==void 0&&C.list&&(i=w.data.list.reverse(),i.forEach(function(m){_.push({date:m.date,platform:"Total",value:m.total}),_.push({date:m.date,platform:"Web",value:m.web}),_.push({date:m.date,platform:"Tg Bot",value:m.tgBot}),_.push({date:m.date,platform:"App",value:m.app}),_.push({date:m.date,platform:"Android",value:m.android}),_.push({date:m.date,platform:"IOS",value:m.ios})})),J(_),u.next=13;break;case 9:return u.prev=9,u.t0=u.catch(0),console.error(u.t0),u.abrupt("return",!1);case 13:case"end":return u.stop()}},L,null,[[0,9]])}));return function(){return N.apply(this,arguments)}}();Y()},[]),(0,r.jsx)(ae.Z,{data:V,xField:"date",yField:"value",colorField:"platform"})},le=ne,ie=function(){var k=(0,t.useState)([]),U=o()(k,2),V=U[0],J=U[1];return(0,t.useEffect)(function(){var Y=function(){var N=d()(l()().mark(function L(){var C,w,_,i;return l()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,(0,R.Ul)({page:1,pageSize:100});case 3:w=u.sent,_=[],(C=w.data)!==null&&C!==void 0&&C.list&&(i=w.data.list.reverse(),i.forEach(function(m){_.push({date:m.date,platform:"Total",value:m.total}),_.push({date:m.date,platform:"Web",value:m.web}),_.push({date:m.date,platform:"Tg Bot",value:m.tgBot}),_.push({date:m.date,platform:"App",value:m.app}),_.push({date:m.date,platform:"Android",value:m.android}),_.push({date:m.date,platform:"IOS",value:m.ios})})),J(_),u.next=13;break;case 9:return u.prev=9,u.t0=u.catch(0),console.error(u.t0),u.abrupt("return",!1);case 13:case"end":return u.stop()}},L,null,[[0,9]])}));return function(){return N.apply(this,arguments)}}();Y()},[]),(0,r.jsx)(ae.Z,{data:V,xField:"date",yField:"value",colorField:"platform"})},ue=ie,te=a(14175),de=function(){var k=(0,t.useState)([]),U=o()(k,2),V=U[0],J=U[1];return(0,t.useEffect)(function(){var Y=function(){var N=d()(l()().mark(function L(){var C,w,_;return l()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.prev=0,y.next=3,(0,te.O)();case 3:C=y.sent,w=[],C.data&&(_=C.data,_.forEach(function(u){w.push({date:u.date,chain:u.chain,value:Number(u.totalVol)})})),J(w),y.next=13;break;case 9:return y.prev=9,y.t0=y.catch(0),console.error(y.t0),y.abrupt("return",!1);case 13:case"end":return y.stop()}},L,null,[[0,9]])}));return function(){return N.apply(this,arguments)}}();Y()},[]),(0,r.jsx)(ae.Z,{data:V,xField:"date",yField:"value",colorField:"chain"})},oe=de,me=function(){var k=(0,t.useState)([]),U=o()(k,2),V=U[0],J=U[1];return(0,t.useEffect)(function(){var Y=function(){var N=d()(l()().mark(function L(){var C,w;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,(0,te.O)();case 3:C=i.sent,w=[],C.data&&(w=C.data),J(w),i.next=13;break;case 9:return i.prev=9,i.t0=i.catch(0),console.error(i.t0),i.abrupt("return",!1);case 13:case"end":return i.stop()}},L,null,[[0,9]])}));return function(){return N.apply(this,arguments)}}();Y()},[]),(0,r.jsx)(ae.Z,{data:V,xField:"date",yField:"totalTxns",colorField:"chain"})},pe=me,se=f.Z.Divider,ve=function(){var k=(0,t.useState)(!1),U=o()(k,2),V=U[0],J=U[1],Y=(0,t.useState)(!1),N=o()(Y,2),L=N[0],C=N[1],w=(0,t.useState)(void 0),_=o()(w,2),i=_[0],y=_[1],u=(0,t.useState)(void 0),m=o()(u,2),S=m[0],ce=m[1],X=(0,t.useRef)(),b=(0,j.useIntl)(),he=[{title:b.formatMessage({id:"pages.overall.commission.chain",defaultMessage:"Chain"}),dataIndex:"chain",key:"chain"},{title:b.formatMessage({id:"pages.overall.commission.totalCommission",defaultMessage:"Total Commission"}),dataIndex:"totalCommission",key:"totalCommission",render:function(I,M){return(0,E.B)(M.totalCommission,6)+" "+M.symbol}},{title:b.formatMessage({id:"pages.overall.commission.totalUnclaimedCommission",defaultMessage:"Total Unclaimed Commission"}),dataIndex:"totalUnclaimedCommission",key:"totalUnclaimedCommission",render:function(I,M){return(0,E.B)(M.totalUnclaimedCommission,6)+" "+M.symbol}}],ge=function(){var H=d()(l()().mark(function I(M){var K,q;return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.prev=0,p.next=3,(0,F.V8)(M.target.value);case 3:K=p.sent,K!==void 0&&(q={guid:K.guid,tgUsername:K.tgUsername,email:K.email},y(q)),p.next=11;break;case 7:p.prev=7,p.t0=p.catch(0),y(void 0),O.ZP.error(b.formatMessage({id:"pages.overall.user.notFound"}));case 11:case"end":return p.stop()}},I,null,[[0,7]])}));return function(M){return H.apply(this,arguments)}}(),_e=function(){var H=d()(l()().mark(function I(M){var K,q;return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(i!=null){p.next=3;break}return O.ZP.error(b.formatMessage({id:"pages.overall.user.null"})),p.abrupt("return",!1);case 3:return p.prev=3,p.next=6,(0,F.fA)(i==null?void 0:i.guid,M.vip,M.remark);case 6:return O.ZP.success(b.formatMessage({id:"pages.overall.newSvip.add.success"})),X==null||(K=X.current)===null||K===void 0||K.resetFields(),j.history.push("/vipList"),p.abrupt("return",!0);case 12:if(p.prev=12,p.t0=p.catch(3),console.error(p.t0),p.t0!="this user is already VIP"){p.next=20;break}return O.ZP.error(b.formatMessage({id:"pages.overall.newSvip.add.exists"})),X==null||(q=X.current)===null||q===void 0||q.resetFields(),y(void 0),p.abrupt("return",!1);case 20:return O.ZP.error(b.formatMessage({id:"pages.overall.newSvip.add.error"})),p.abrupt("return",!1);case 22:case"end":return p.stop()}},I,null,[[3,12]])}));return function(M){return H.apply(this,arguments)}}();return(0,t.useEffect)(function(){var H=function(){var I=d()(l()().mark(function M(){var K;return l()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,F.ig)();case 3:K=A.sent,ce(K),A.next=12;break;case 7:return A.prev=7,A.t0=A.catch(0),console.error(A.t0),O.ZP.error(b.formatMessage({id:"pages.overall.data.error"})),A.abrupt("return",!1);case 12:case"end":return A.stop()}},M,null,[[0,7]])}));return function(){return I.apply(this,arguments)}}();H()},[]),(0,r.jsxs)(Z._z,{children:[(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(n.Z,{onResize:function(I){J(I.width<596)},children:(0,r.jsxs)(f.Z.Group,{direction:V?"column":"row",children:[(0,r.jsx)(f.Z,{children:(0,r.jsx)(B.Z,{title:b.formatMessage({id:"pages.overall.totalInvitee",defaultMessage:"Total Invitee"}),value:S?S.totalinvitee:"-"})}),(0,r.jsx)(se,{type:V?"horizontal":"vertical"}),(0,r.jsx)(f.Z,{children:(0,r.jsx)(B.Z,{title:b.formatMessage({id:"pages.overall.24HNewInvitee",defaultMessage:"24H New Invitee"}),value:S?S.newInvitee24H:"-"})}),(0,r.jsx)(se,{type:V?"horizontal":"vertical"}),(0,r.jsx)(f.Z,{children:(0,r.jsx)(B.Z,{title:b.formatMessage({id:"pages.overall.traders24H"}),value:S?S.swapUserCount24H:"-"})}),(0,r.jsx)(se,{type:V?"horizontal":"vertical"}),(0,r.jsx)(f.Z,{children:(0,r.jsx)(B.Z,{title:b.formatMessage({id:"pages.overall.total24HVolume",defaultMessage:"Total 24H Volume"}),value:S?"$ "+(0,E.B)(S.totalVolume24H,6):"-"})})]})},"resize-observer"),(0,r.jsxs)(g.Z,{gutter:{xs:8,sm:16,md:24,lg:32},className:e.line2,children:[(0,r.jsx)(D.Z,{span:8,push:16,children:(0,r.jsx)(c.Z,{title:"VIP",extra:(0,r.jsx)("div",{children:(0,r.jsx)(x.ZP,{type:"link",onClick:function(){C(!0)},children:b.formatMessage({id:"pages.overall.vip.newVip"})})}),children:S&&(0,r.jsx)(s.Z,{data:S.vipCountList,angleField:"count",colorField:"vip",innerRadius:.6,label:{text:"count",style:{fontWeight:"bold"}},legend:{color:{title:!1,position:"right",rowPadding:5}},animate:[{type:"text",style:{text:`Total
`+S.totalVipCount,x:"50%",y:"50%",textAlign:"center",fontSize:24}}]})})}),(0,r.jsx)(D.Z,{span:16,pull:8,children:(0,r.jsx)(c.Z,{title:b.formatMessage({id:"pages.overall.commission.title",defaultMessage:"Commission"}),extra:(0,r.jsx)("div",{children:S?S.startTime+" - now":"-"}),children:S&&(0,r.jsx)(v.Z,{columns:he,dataSource:S.commissionList,pagination:!1})})})]}),(0,r.jsxs)(g.Z,{gutter:{xs:8,sm:16,md:24,lg:32},className:e.line2,children:[(0,r.jsx)(D.Z,{span:12,children:(0,r.jsx)(c.Z,{title:"New Users on Platforms",children:(0,r.jsx)(le,{})})}),(0,r.jsx)(D.Z,{span:12,children:(0,r.jsx)(c.Z,{title:"Traders",children:(0,r.jsx)(ue,{})})})]}),(0,r.jsxs)(g.Z,{gutter:{xs:8,sm:16,md:24,lg:32},className:e.line2,children:[(0,r.jsx)(D.Z,{span:12,children:(0,r.jsx)(c.Z,{title:"Trading Volumes",children:(0,r.jsx)(oe,{})})}),(0,r.jsx)(D.Z,{span:12,children:(0,r.jsx)(c.Z,{title:"Transactions",children:(0,r.jsx)(pe,{})})})]})]}),(0,r.jsxs)(T.Y,{title:"Add SVIP",layout:"horizontal",formRef:X,labelCol:{span:8},wrapperCol:{span:16},open:L,onFinish:_e,onOpenChange:function(I){var M;X==null||(M=X.current)===null||M===void 0||M.resetFields(),C(I)},children:[(0,r.jsx)($.Z,{width:"md",name:"refCode",label:b.formatMessage({id:"pages.overall.newSvip.refCode"}),placeholder:b.formatMessage({id:"pages.overall.newSvip.refCode.placeholder"}),fieldProps:{onBlur:ge,maxLength:16},rules:[{required:!0,message:"Please enter refCode!"}]}),(0,r.jsx)(P.Z,{width:"md",name:"vip",label:b.formatMessage({id:"pages.overall.newSvip.vip"}),valueEnum:{vip1:b.formatMessage({id:"pages.overall.vip.list.vip1"}),vip2:b.formatMessage({id:"pages.overall.vip.list.vip2"}),vip3:b.formatMessage({id:"pages.overall.vip.list.vip3"}),svip:b.formatMessage({id:"pages.overall.vip.list.svip"})},rules:[{required:!0,message:"Please select vip!"}]}),(0,r.jsx)($.Z,{width:"md",name:"remark",label:b.formatMessage({id:"pages.overall.newSvip.remark"}),placeholder:b.formatMessage({id:"pages.overall.newSvip.remark.placeholder"}),fieldProps:{maxLength:64}}),i&&(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsxs)("div",{style:{width:400},children:[(0,r.jsx)(h.Z,{message:"User Found",type:"success",showIcon:!0}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(g.Z,{className:e.row,children:[(0,r.jsx)(D.Z,{className:e.label,span:6,children:"Guid:"}),(0,r.jsx)(D.Z,{span:12,children:i==null?void 0:i.guid})]}),(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(D.Z,{className:e.label,span:6,children:"Tg Username:"}),(0,r.jsx)(D.Z,{span:12,children:i==null?void 0:i.tgUsername})]}),(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(D.Z,{className:e.label,span:6,children:"Email:"}),(0,r.jsx)(D.Z,{span:12,children:i==null?void 0:i.email})]})]})]})})]})]})},fe=ve},14175:function(ee,G,a){a.d(G,{O:function(){return $},m:function(){return Z}});var z=a(15009),l=a.n(z),W=a(97857),d=a.n(W),Q=a(99289),o=a.n(Q),E=a(80854),f="https://api.avevip.com";function Z(O,c,B){return T.apply(this,arguments)}function T(){return T=o()(l()().mark(function O(c,B,g){var D;return l()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return B&&(c.sortField=B,c.sortDesc=g),v.next=3,(0,E.request)(f+"/api/tradingData/getTradingList",{method:"GET",params:d()({},c)});case 3:if(D=v.sent,D.code===0){v.next=6;break}throw D.msg;case 6:return v.abrupt("return",D);case 7:case"end":return v.stop()}},O)})),T.apply(this,arguments)}function $(){return P.apply(this,arguments)}function P(){return P=o()(l()().mark(function O(){var c;return l()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,E.request)(f+"/api/tradingData/getAllTradingList",{method:"GET"});case 2:if(c=g.sent,c.code===0){g.next=5;break}throw c.msg;case 5:return g.abrupt("return",c);case 6:case"end":return g.stop()}},O)})),P.apply(this,arguments)}},12095:function(ee,G,a){a.d(G,{DJ:function(){return O},Nq:function(){return D},V8:function(){return Z},fA:function(){return B},ig:function(){return v},zc:function(){return $}});var z=a(97857),l=a.n(z),W=a(15009),d=a.n(W),Q=a(99289),o=a.n(Q),E=a(80854),f="https://api.avevip.com";function Z(n){return T.apply(this,arguments)}function T(){return T=o()(d()().mark(function n(t){var s;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,E.request)(f+"/api/user/getUserByRef",{method:"GET",params:{refCode:t}});case 2:if(s=e.sent,s.code===0){e.next=5;break}throw s.msg;case 5:return e.abrupt("return",s.data);case 6:case"end":return e.stop()}},n)})),T.apply(this,arguments)}function $(n,t,s){return P.apply(this,arguments)}function P(){return P=o()(d()().mark(function n(t,s,j){var e;return d()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return s&&(t.sortField=s,t.sortDesc=j),R.next=3,(0,E.request)(f+"/api/user/getVipPageList",{method:"GET",params:l()({},t)});case 3:if(e=R.sent,e.code===0){R.next=6;break}throw e.msg;case 6:return R.abrupt("return",e);case 7:case"end":return R.stop()}},n)})),P.apply(this,arguments)}function O(n){return c.apply(this,arguments)}function c(){return c=o()(d()().mark(function n(t){var s;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,E.request)(f+"/api/user/getVipDetail",{method:"GET",params:{guid:t}});case 2:if(s=e.sent,s.code===0){e.next=5;break}throw s.msg;case 5:return e.abrupt("return",s.data);case 6:case"end":return e.stop()}},n)})),c.apply(this,arguments)}function B(n,t,s){return g.apply(this,arguments)}function g(){return g=o()(d()().mark(function n(t,s,j){var e;return d()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,(0,E.request)(f+"/api/user/addSvip",{method:"POST",data:{guid:t,vip:s,remark:j}});case 2:if(e=R.sent,e.code===0){R.next=5;break}throw e.msg;case 5:return R.abrupt("return");case 6:case"end":return R.stop()}},n)})),g.apply(this,arguments)}function D(n,t){return x.apply(this,arguments)}function x(){return x=o()(d()().mark(function n(t,s){var j;return d()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,(0,E.request)(f+"/api/user/updateUser",{method:"POST",data:l()({guid:t},s)});case 2:return j=F.sent,F.abrupt("return",j);case 4:case"end":return F.stop()}},n)})),x.apply(this,arguments)}function v(){return h.apply(this,arguments)}function h(){return h=o()(d()().mark(function n(){var t;return d()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,(0,E.request)(f+"/api/overall/data",{method:"GET"});case 2:if(t=j.sent,t.code===0){j.next=5;break}throw t.msg;case 5:return j.abrupt("return",t.data);case 6:case"end":return j.stop()}},n)})),h.apply(this,arguments)}},34157:function(ee,G,a){a.d(G,{$P:function(){return D},HJ:function(){return B},Ul:function(){return O},_y:function(){return $},h0:function(){return Z}});var z=a(15009),l=a.n(z),W=a(97857),d=a.n(W),Q=a(99289),o=a.n(Q),E=a(80854),f="https://api.avevip.com";function Z(v,h,n){return T.apply(this,arguments)}function T(){return T=o()(l()().mark(function v(h,n,t){var s;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n&&(h.sortField=n,h.sortDesc=t),e.next=3,(0,E.request)(f+"/api/userData/getNewUserList",{method:"GET",params:d()({},h)});case 3:if(s=e.sent,s.code===0){e.next=6;break}throw s.msg;case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}},v)})),T.apply(this,arguments)}function $(v,h,n){return P.apply(this,arguments)}function P(){return P=o()(l()().mark(function v(h,n,t){var s;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n&&(h.sortField=n,h.sortDesc=t),e.next=3,(0,E.request)(f+"/api/userData/getChannelTrafficList",{method:"GET",params:d()({},h)});case 3:if(s=e.sent,s.code===0){e.next=6;break}throw s.msg;case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}},v)})),P.apply(this,arguments)}function O(v,h,n){return c.apply(this,arguments)}function c(){return c=o()(l()().mark(function v(h,n,t){var s;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n&&(h.sortField=n,h.sortDesc=t),e.next=3,(0,E.request)(f+"/api/userData/getTradersList",{method:"GET",params:d()({},h)});case 3:if(s=e.sent,s.code===0){e.next=6;break}throw s.msg;case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}},v)})),c.apply(this,arguments)}function B(v,h,n){return g.apply(this,arguments)}function g(){return g=o()(l()().mark(function v(h,n,t){var s;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,E.request)(f+"/api/userData/get24HTraderRanking",{method:"GET",params:d()({},h)});case 2:if(s=e.sent,s.code===0){e.next=5;break}throw s.msg;case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}},v)})),g.apply(this,arguments)}function D(v){return x.apply(this,arguments)}function x(){return x=o()(l()().mark(function v(h){var n;return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,E.request)(f+"/api/userData/getUserAndUpInfo",{method:"GET",params:{guid:h}});case 2:if(n=s.sent,n.code===0){s.next=5;break}throw n.msg;case 5:return s.abrupt("return",n);case 6:case"end":return s.stop()}},v)})),x.apply(this,arguments)}},65763:function(ee,G,a){a.d(G,{B:function(){return l}});var z=a(90482);function l(W,d){if(!W)return"";var Q=new z.Z(W),o=W.split(".");if(o.length!==2)return W;for(var E=o[0],f=o[1],Z=0,T="",$=0;$<f.length;$++){var P=f[$];if(T.length>=d)break;P=="0"&&T.length==0?Z=Z+1:T=T+P}return Z>3?E+".0{"+Z+"}"+T:E+"."+"0".repeat(Z)+T}}}]);
