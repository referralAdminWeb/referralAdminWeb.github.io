"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[57],{97475:function(W,D,u){u.r(D);var M=u(15009),_=u.n(M),A=u(99289),f=u.n(A),I=u(34157),o=u(90930),m=u(38521),c=u(80854),O=u(67294),g=u(85893),L=function(){var U=(0,O.useRef)(),b=(0,c.useIntl)(),B=[{title:"ID",dataIndex:"id",hideInSearch:!0,hidden:!0},{title:b.formatMessage({id:"date"}),dataIndex:"date",hideInSearch:!0},{title:"Total",dataIndex:"total",hideInSearch:!0},{title:"Web",dataIndex:"web",hideInSearch:!0},{title:"App",dataIndex:"app",hideInSearch:!0},{title:"TG Bot",dataIndex:"tgBot",hideInSearch:!0}];return(0,g.jsx)(o._z,{children:(0,g.jsx)(m.Z,{actionRef:U,rowKey:"id",search:{labelWidth:120},request:function(){var E=f()(_()().mark(function P(d,R){var p,v,h,n,t,a,s,r,i;return _()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:t=!1,a="",l.t0=_()().keys(R);case 3:if((l.t1=l.t0()).done){l.next=11;break}return s=l.t1.value,a=s,r=R[s],(r==null?void 0:r.toString())=="descend"&&(t=!0),l.abrupt("break",11);case 11:return d.page=d==null?void 0:d.current,delete d.current,l.next=15,(0,I.h0)(d,a,t);case 15:return i=l.sent,console.log({data:(p=i.data)===null||p===void 0?void 0:p.list,success:i.code==0,total:(v=i.data)===null||v===void 0?void 0:v.total}),l.abrupt("return",{data:(h=i.data)===null||h===void 0?void 0:h.list,success:i.code==0,total:(n=i.data)===null||n===void 0?void 0:n.total});case 18:case"end":return l.stop()}},P)}));return function(P,d){return E.apply(this,arguments)}}(),columns:B})})};D.default=L},34157:function(W,D,u){u.d(D,{$P:function(){return P},HJ:function(){return B},Ul:function(){return U},_y:function(){return L},h0:function(){return O},oX:function(){return R},pE:function(){return v}});var M=u(15009),_=u.n(M),A=u(97857),f=u.n(A),I=u(99289),o=u.n(I),m=u(80854),c="https://api.avevip.com";function O(n,t,a){return g.apply(this,arguments)}function g(){return g=o()(_()().mark(function n(t,a,s){var r;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a&&(t.sortField=a,t.sortDesc=s),e.next=3,(0,m.request)(c+"/api/userData/getNewUserList",{method:"GET",params:f()({},t)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},n)})),g.apply(this,arguments)}function L(n,t,a){return T.apply(this,arguments)}function T(){return T=o()(_()().mark(function n(t,a,s){var r;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a&&(t.sortField=a,t.sortDesc=s),e.next=3,(0,m.request)(c+"/api/userData/getChannelTrafficList",{method:"GET",params:f()({},t)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},n)})),T.apply(this,arguments)}function U(n,t,a){return b.apply(this,arguments)}function b(){return b=o()(_()().mark(function n(t,a,s){var r;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a&&(t.sortField=a,t.sortDesc=s),e.next=3,(0,m.request)(c+"/api/userData/getTradersList",{method:"GET",params:f()({},t)});case 3:if(r=e.sent,r.code===0){e.next=6;break}throw r.msg;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},n)})),b.apply(this,arguments)}function B(n,t,a){return E.apply(this,arguments)}function E(){return E=o()(_()().mark(function n(t,a,s){var r;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.request)(c+"/api/userData/get24HTraderRanking",{method:"GET",params:f()({},t)});case 2:if(r=e.sent,r.code===0){e.next=5;break}throw r.msg;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}},n)})),E.apply(this,arguments)}function P(n){return d.apply(this,arguments)}function d(){return d=o()(_()().mark(function n(t){var a;return _()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,m.request)(c+"/api/userData/getUserAndUpInfo",{method:"GET",params:{guid:t}});case 2:if(a=r.sent,a.code===0){r.next=5;break}throw a.msg;case 5:return r.abrupt("return",a);case 6:case"end":return r.stop()}},n)})),d.apply(this,arguments)}function R(){return p.apply(this,arguments)}function p(){return p=o()(_()().mark(function n(){var t;return _()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,m.request)(c+"/api/userData/getAllChainTradersList",{method:"GET"});case 2:if(t=s.sent,t.code===0){s.next=5;break}throw t.msg;case 5:return s.abrupt("return",t);case 6:case"end":return s.stop()}},n)})),p.apply(this,arguments)}function v(n,t,a){return h.apply(this,arguments)}function h(){return h=o()(_()().mark(function n(t,a,s){var r;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.request)(c+"/api/userData/getUserDailyTradingPageList",{method:"GET",params:{guid:t,chain:a,page:s}});case 2:if(r=e.sent,r.code===0){e.next=5;break}throw r.msg;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}},n)})),h.apply(this,arguments)}}}]);