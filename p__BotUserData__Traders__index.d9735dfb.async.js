"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[95],{84339:function(k,L,_){_.r(L);var A=_(15009),i=_.n(A),I=_(99289),E=_.n(I),R=_(93463),d=_(90930),o=_(38521),c=_(94272),B=_(67294),D=_(85893),W=function(){var j=(0,B.useRef)(),P=(0,c.useIntl)(),C=[{title:"ID",dataIndex:"id",hideInSearch:!0,hidden:!0},{title:P.formatMessage({id:"date"}),dataIndex:"date",hideInSearch:!0},{title:"Total",dataIndex:"total",hideInSearch:!0},{title:"Web",dataIndex:"web",hideInSearch:!0},{title:"App",dataIndex:"app",hideInSearch:!0},{title:"TG Bot",dataIndex:"tgBot",hideInSearch:!0}];return(0,D.jsx)(d._z,{children:(0,D.jsx)(o.Z,{actionRef:j,rowKey:"id",search:{labelWidth:120},request:function(){var T=E()(i()().mark(function w(m,K){var g,y,h,U,f,O,b,v,p;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:f=!1,O="",l.t0=i()().keys(K);case 3:if((l.t1=l.t0()).done){l.next=11;break}return b=l.t1.value,O=b,v=K[b],(v==null?void 0:v.toString())=="descend"&&(f=!0),l.abrupt("break",11);case 11:return m.page=m==null?void 0:m.current,delete m.current,l.next=15,(0,R.Ul)(m,O,f);case 15:return p=l.sent,console.log({data:(g=p.data)===null||g===void 0?void 0:g.list,success:p.code==0,total:(y=p.data)===null||y===void 0?void 0:y.total}),l.abrupt("return",{data:(h=p.data)===null||h===void 0?void 0:h.list,success:p.code==0,total:(U=p.data)===null||U===void 0?void 0:U.total});case 18:case"end":return l.stop()}},w)}));return function(w,m){return T.apply(this,arguments)}}(),columns:C})})};L.default=W},93463:function(k,L,_){_.d(L,{$P:function(){return w},HJ:function(){return C},Ul:function(){return j},_y:function(){return W},eD:function(){return U},h0:function(){return B},hP:function(){return G},pE:function(){return y},tA:function(){return v}});var A=_(15009),i=_.n(A),I=_(97857),E=_.n(I),R=_(99289),d=_.n(R),o=_(94272),c=_(91529);function B(n,e,u){return D.apply(this,arguments)}function D(){return D=d()(i()().mark(function n(e,u,a){var t;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u&&(e.sortField=u,e.sortDesc=a),r.next=3,(0,o.request)(c.h+"/api/userData/getNewUserList",{method:"GET",params:E()({},e)});case 3:if(t=r.sent,t.code===0){r.next=6;break}throw t.msg;case 6:return r.abrupt("return",t);case 7:case"end":return r.stop()}},n)})),D.apply(this,arguments)}function W(n,e,u){return M.apply(this,arguments)}function M(){return M=d()(i()().mark(function n(e,u,a){var t;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u&&(e.sortField=u,e.sortDesc=a),r.next=3,(0,o.request)(c.h+"/api/userData/getChannelTrafficList",{method:"GET",params:E()({},e)});case 3:if(t=r.sent,t.code===0){r.next=6;break}throw t.msg;case 6:return r.abrupt("return",t);case 7:case"end":return r.stop()}},n)})),M.apply(this,arguments)}function j(n,e,u){return P.apply(this,arguments)}function P(){return P=d()(i()().mark(function n(e,u,a){var t;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u&&(e.sortField=u,e.sortDesc=a),r.next=3,(0,o.request)(c.h+"/api/userData/getTradersList",{method:"GET",params:E()({},e)});case 3:if(t=r.sent,t.code===0){r.next=6;break}throw t.msg;case 6:return r.abrupt("return",t);case 7:case"end":return r.stop()}},n)})),P.apply(this,arguments)}function C(n,e,u){return T.apply(this,arguments)}function T(){return T=d()(i()().mark(function n(e,u,a){var t;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,o.request)(c.h+"/api/userData/get24HTraderRanking",{method:"GET",params:E()({},e)});case 2:if(t=r.sent,t.code===0){r.next=5;break}throw t.msg;case 5:return r.abrupt("return",t);case 6:case"end":return r.stop()}},n)})),T.apply(this,arguments)}function w(n){return m.apply(this,arguments)}function m(){return m=d()(i()().mark(function n(e){var u;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.request)(c.h+"/api/userData/getUserAndUpInfo",{method:"GET",params:{guid:e}});case 2:if(u=t.sent,u.code===0){t.next=5;break}throw u.msg;case 5:return t.abrupt("return",u);case 6:case"end":return t.stop()}},n)})),m.apply(this,arguments)}function K(){return g.apply(this,arguments)}function g(){return g=_asyncToGenerator(_regeneratorRuntime().mark(function n(){var e;return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,request(host+"/api/userData/getAllChainTradersList",{method:"GET"});case 2:if(e=a.sent,e.code===0){a.next=5;break}throw e.msg;case 5:return a.abrupt("return",e);case 6:case"end":return a.stop()}},n)})),g.apply(this,arguments)}function y(n,e,u){return h.apply(this,arguments)}function h(){return h=d()(i()().mark(function n(e,u,a){var t;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,o.request)(c.h+"/api/userData/getUserDailyTradingPageList",{method:"GET",params:{guid:e,chain:u,page:a}});case 2:if(t=r.sent,t.code===0){r.next=5;break}throw t.msg;case 5:return r.abrupt("return",t);case 6:case"end":return r.stop()}},n)})),h.apply(this,arguments)}function U(n,e){return f.apply(this,arguments)}function f(){return f=d()(i()().mark(function n(e,u){var a;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,o.request)(c.h+"/api/userData/getUserDailyStatisticalOfTier1PageList",{method:"GET",params:{guid:e,page:u}});case 2:if(a=s.sent,a.code===0){s.next=5;break}throw a.msg;case 5:return s.abrupt("return",a);case 6:case"end":return s.stop()}},n)})),f.apply(this,arguments)}function O(n,e){return b.apply(this,arguments)}function b(){return b=_asyncToGenerator(_regeneratorRuntime().mark(function n(e,u){var a;return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,request(host+"/api/userData/getTradersDailyPageList",{method:"GET",params:{page:e,pageSize:u}});case 2:if(a=s.sent,a.code===0){s.next=5;break}throw a.msg;case 5:return s.abrupt("return",a);case 6:case"end":return s.stop()}},n)})),b.apply(this,arguments)}function v(n,e){return p.apply(this,arguments)}function p(){return p=d()(i()().mark(function n(e,u){var a;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,o.request)(c.h+"/api/userData/getTradersMonthlyPageList",{method:"GET",params:{page:e,pageSize:u}});case 2:if(a=s.sent,a.code===0){s.next=5;break}throw a.msg;case 5:return s.abrupt("return",a);case 6:case"end":return s.stop()}},n)})),p.apply(this,arguments)}function G(n,e){return l.apply(this,arguments)}function l(){return l=d()(i()().mark(function n(e,u){var a;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,o.request)(c.h+"/api/userData/getNewUserMonthlyPageList",{method:"GET",params:{page:e,pageSize:u}});case 2:if(a=s.sent,a.code===0){s.next=5;break}throw a.msg;case 5:return s.abrupt("return",a);case 6:case"end":return s.stop()}},n)})),l.apply(this,arguments)}}}]);
