"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[997],{15374:function(N,w,l){l.r(w);var O=l(15009),i=l.n(O),R=l(99289),b=l.n(R),A=l(93463),d=l(90930),o=l(38521),c=l(94272),C=l(67294),D=l(85893),B=function(){var k=(0,C.useRef)(),m=(0,c.useIntl)(),S=[{title:"ID",dataIndex:"id",hideInSearch:!0,hidden:!0},{title:m.formatMessage({id:"date"}),dataIndex:"date",hideInSearch:!0},{title:m.formatMessage({id:"pages.vipReferral"}),dataIndex:"vipReferral",hideInSearch:!0},{title:m.formatMessage({id:"pages.userReferral"}),dataIndex:"userReferral",hideInSearch:!0},{title:m.formatMessage({id:"pages.communityReferral"}),dataIndex:"communityReferral",hideInSearch:!0},{title:"Buy Bot",dataIndex:"buyBot",hideInSearch:!0},{title:"Token Scanner",dataIndex:"tokenScanner",hideInSearch:!0},{title:"Token Finder",dataIndex:"tokenFinder",hideInSearch:!0},{title:"Web Link",dataIndex:"webLink",hideInSearch:!0},{title:"IOS Lite",dataIndex:"iosLite",hideInSearch:!0},{title:"KOLHunter",dataIndex:"kolHunter",hideInSearch:!0},{title:"H5",dataIndex:"h5",hideInSearch:!0}];return(0,D.jsx)(d._z,{children:(0,D.jsx)(o.Z,{actionRef:k,rowKey:"id",search:{labelWidth:120},request:function(){var v=b()(i()().mark(function M(p,W){var h,P,f,E,y,I,T,L,g;return i()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:y=!1,I="",_.t0=i()().keys(W);case 3:if((_.t1=_.t0()).done){_.next=11;break}return T=_.t1.value,I=T,L=W[T],(L==null?void 0:L.toString())=="descend"&&(y=!0),_.abrupt("break",11);case 11:return p.page=p==null?void 0:p.current,delete p.current,_.next=15,(0,A._y)(p,I,y);case 15:return g=_.sent,console.log({data:(h=g.data)===null||h===void 0?void 0:h.list,success:g.code==0,total:(P=g.data)===null||P===void 0?void 0:P.total}),_.abrupt("return",{data:(f=g.data)===null||f===void 0?void 0:f.list,success:g.code==0,total:(E=g.data)===null||E===void 0?void 0:E.total});case 18:case"end":return _.stop()}},M)}));return function(M,p){return v.apply(this,arguments)}}(),columns:S})})};w.default=B},93463:function(N,w,l){l.d(w,{$P:function(){return M},AM:function(){return E},HJ:function(){return S},RV:function(){return F},Ul:function(){return k},VU:function(){return V},_y:function(){return B},ey:function(){return J},h0:function(){return C},hP:function(){return z},pE:function(){return P},tA:function(){return H}});var O=l(15009),i=l.n(O),R=l(97857),b=l.n(R),A=l(99289),d=l.n(A),o=l(94272),c=l(91529);function C(s,a,u){return D.apply(this,arguments)}function D(){return D=d()(i()().mark(function s(a,u,t){var r;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u&&(a.sortField=u,a.sortDesc=t),e.next=3,(0,o.request)(c.h+"/api/userData/getNewUserList",{method:"GET",params:b()({},a)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},s)})),D.apply(this,arguments)}function B(s,a,u){return U.apply(this,arguments)}function U(){return U=d()(i()().mark(function s(a,u,t){var r;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u&&(a.sortField=u,a.sortDesc=t),e.next=3,(0,o.request)(c.h+"/api/userData/getChannelTrafficList",{method:"GET",params:b()({},a)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},s)})),U.apply(this,arguments)}function k(s,a,u){return m.apply(this,arguments)}function m(){return m=d()(i()().mark(function s(a,u,t){var r;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u&&(a.sortField=u,a.sortDesc=t),e.next=3,(0,o.request)(c.h+"/api/userData/getTradersList",{method:"GET",params:b()({},a)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},s)})),m.apply(this,arguments)}function S(s,a,u){return v.apply(this,arguments)}function v(){return v=d()(i()().mark(function s(a,u,t){var r;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)(c.h+"/api/userData/get24HTraderRanking",{method:"GET",params:b()({},a)});case 2:if(r=e.sent,r.code===0){e.next=5;break}throw r.msg;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}},s)})),v.apply(this,arguments)}function M(s){return p.apply(this,arguments)}function p(){return p=d()(i()().mark(function s(a){var u;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,o.request)(c.h+"/api/userData/getUserAndUpInfo",{method:"GET",params:{guid:a}});case 2:if(u=r.sent,u.code===0){r.next=5;break}throw u.msg;case 5:return r.abrupt("return",u);case 6:case"end":return r.stop()}},s)})),p.apply(this,arguments)}function W(){return h.apply(this,arguments)}function h(){return h=_asyncToGenerator(_regeneratorRuntime().mark(function s(){var a;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,request(host+"/api/userData/getAllChainTradersList",{method:"GET"});case 2:if(a=t.sent,a.code===0){t.next=5;break}throw a.msg;case 5:return t.abrupt("return",a);case 6:case"end":return t.stop()}},s)})),h.apply(this,arguments)}function P(s,a,u){return f.apply(this,arguments)}function f(){return f=d()(i()().mark(function s(a,u,t){var r;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)(c.h+"/api/userData/getUserDailyTradingPageList",{method:"GET",params:{guid:a,chain:u,page:t}});case 2:if(r=e.sent,r.code===0){e.next=5;break}throw r.msg;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}},s)})),f.apply(this,arguments)}function E(s,a,u){return y.apply(this,arguments)}function y(){return y=d()(i()().mark(function s(a,u,t){var r;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)(c.h+"/api/userData/getUserDailyTradingMonthlyPageList",{method:"GET",params:{guid:a,chain:u,page:t}});case 2:if(r=e.sent,r.code===0){e.next=5;break}throw r.msg;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}},s)})),y.apply(this,arguments)}function I(s,a){return T.apply(this,arguments)}function T(){return T=_asyncToGenerator(_regeneratorRuntime().mark(function s(a,u){var t;return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,request(host+"/api/userData/getUserDailyStatisticalOfTier1PageList",{method:"GET",params:{guid:a,page:u}});case 2:if(t=n.sent,t.code===0){n.next=5;break}throw t.msg;case 5:return n.abrupt("return",t);case 6:case"end":return n.stop()}},s)})),T.apply(this,arguments)}function L(s,a){return g.apply(this,arguments)}function g(){return g=_asyncToGenerator(_regeneratorRuntime().mark(function s(a,u){var t;return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,request(host+"/api/userData/getTradersDailyPageList",{method:"GET",params:{page:a,pageSize:u}});case 2:if(t=n.sent,t.code===0){n.next=5;break}throw t.msg;case 5:return n.abrupt("return",t);case 6:case"end":return n.stop()}},s)})),g.apply(this,arguments)}function H(s,a){return _.apply(this,arguments)}function _(){return _=d()(i()().mark(function s(a,u){var t;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.request)(c.h+"/api/userData/getTradersMonthlyPageList",{method:"GET",params:{page:a,pageSize:u}});case 2:if(t=n.sent,t.code===0){n.next=5;break}throw t.msg;case 5:return n.abrupt("return",t);case 6:case"end":return n.stop()}},s)})),_.apply(this,arguments)}function z(s,a){return j.apply(this,arguments)}function j(){return j=d()(i()().mark(function s(a,u){var t;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.request)(c.h+"/api/userData/getNewUserMonthlyPageList",{method:"GET",params:{page:a,pageSize:u}});case 2:if(t=n.sent,t.code===0){n.next=5;break}throw t.msg;case 5:return n.abrupt("return",t);case 6:case"end":return n.stop()}},s)})),j.apply(this,arguments)}function F(s,a,u){return G.apply(this,arguments)}function G(){return G=d()(i()().mark(function s(a,u,t){var r;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)(c.h+"/api/userData/getTierDailyStatisticaPageList",{method:"GET",params:{guid:a,tier:u,page:t}});case 2:if(r=e.sent,r.code===0){e.next=5;break}throw r.msg;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}},s)})),G.apply(this,arguments)}function V(s,a,u){return $.apply(this,arguments)}function $(){return $=d()(i()().mark(function s(a,u,t){var r;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)(c.h+"/api/userData/getTierMonthlyStatisticaPageList",{method:"GET",params:{guid:a,tier:u,page:t}});case 2:if(r=e.sent,r.code===0){e.next=5;break}throw r.msg;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}},s)})),$.apply(this,arguments)}function J(s,a){return K.apply(this,arguments)}function K(){return K=d()(i()().mark(function s(a,u){var t;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.request)(c.h+"/api/userData/getUserLoginCountryCountByDate",{method:"GET",params:{date:a,dateType:u}});case 2:if(t=n.sent,t.code===0){n.next=5;break}throw t.msg;case 5:return n.abrupt("return",t);case 6:case"end":return n.stop()}},s)})),K.apply(this,arguments)}}}]);
