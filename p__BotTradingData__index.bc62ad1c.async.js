"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[82],{50212:function(C,h,e){e.r(h);var T=e(15009),s=e.n(T),o=e(97857),O=e.n(o),p=e(99289),u=e.n(p),c=e(5574),b=e.n(c),l=e(14175),r=e(65763),E=e(90930),d=e(38521),g=e(94272),n=e(48096),v=e(67294),t=e(85893),D=[{key:"solana",label:"Solana"},{key:"bsc",label:"BSC"},{key:"eth",label:"ETH"},{key:"base",label:"BASE"},{key:"core",label:"CORE"},{key:"ton",label:"TON"},{key:"tron",label:"TRON"},{key:"sui",label:"SUI"}],L=function(){var K=(0,v.useRef)(),V=(0,v.useState)("solana"),y=b()(V,2),S=y[0],x=y[1],N=(0,g.useIntl)(),G=function(m){var _;x(m),(_=K.current)===null||_===void 0||_.reload()},Z=[{title:"ID",dataIndex:"id",hideInSearch:!0,hidden:!0},{title:"Date",dataIndex:"date",hideInSearch:!0},{title:"Chain",dataIndex:"chain",hideInSearch:!0},{title:"Total(Txns/Vol)",hideInSearch:!0,render:function(m,_){return _.totalTxns+"/$"+(0,r.B)(_.totalVol,3)}},{title:"Bot(Txns/Vol)",hideInSearch:!0,render:function(m,_){return _.tgBotTxns+"/$"+(0,r.B)(_.tgBotVol,3)}},{title:"Web(Txns/Vol)",hideInSearch:!0,render:function(m,_){return _.webTxns+"/$"+(0,r.B)(_.webVol,3)}},{title:"App(Txns/Vol)",hideInSearch:!0,render:function(m,_){return _.appTxns+"/$"+(0,r.B)(_.appVol,3)}}];return(0,t.jsxs)(E._z,{children:[(0,t.jsx)(n.Z,{activeKey:S,items:D,onChange:G}),(0,t.jsx)(d.Z,{actionRef:K,rowKey:"id",search:!1,request:function(){var f=u()(s()().mark(function m(_,$){var M,A,U,j,W,I,R,B,P;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:W=!1,I="",a.t0=s()().keys($);case 3:if((a.t1=a.t0()).done){a.next=11;break}return R=a.t1.value,I=R,B=$[R],(B==null?void 0:B.toString())=="descend"&&(W=!0),a.abrupt("break",11);case 11:return _.page=_==null?void 0:_.current,delete _.current,a.next=15,(0,l.m)(O()({chain:S},_),I,W);case 15:return P=a.sent,console.log({data:(M=P.data)===null||M===void 0?void 0:M.list,success:P.code==0,total:(A=P.data)===null||A===void 0?void 0:A.total}),a.abrupt("return",{data:(U=P.data)===null||U===void 0?void 0:U.list,success:P.code==0,total:(j=P.data)===null||j===void 0?void 0:j.total});case 18:case"end":return a.stop()}},m)}));return function(m,_){return f.apply(this,arguments)}}(),columns:Z})]})};h.default=L},14175:function(C,h,e){e.d(h,{O:function(){return E},m:function(){return l}});var T=e(15009),s=e.n(T),o=e(97857),O=e.n(o),p=e(99289),u=e.n(p),c=e(94272),b="https://api.avevip.com";function l(g,n,v){return r.apply(this,arguments)}function r(){return r=u()(s()().mark(function g(n,v,t){var D;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return v&&(n.sortField=v,n.sortDesc=t),i.next=3,(0,c.request)(b+"/api/tradingData/getTradingList",{method:"GET",params:O()({},n)});case 3:if(D=i.sent,D.code===0){i.next=6;break}throw D.msg;case 6:return i.abrupt("return",D);case 7:case"end":return i.stop()}},g)})),r.apply(this,arguments)}function E(){return d.apply(this,arguments)}function d(){return d=u()(s()().mark(function g(){var n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.request)(b+"/api/tradingData/getAllTradingList",{method:"GET"});case 2:if(n=t.sent,n.code===0){t.next=5;break}throw n.msg;case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}},g)})),d.apply(this,arguments)}},65763:function(C,h,e){e.d(h,{B:function(){return s}});var T=e(90482);function s(o,O){if(!o)return"";var p=new T.Z(o),u=o.split(".");if(u.length!==2)return o;for(var c=u[0],b=u[1],l=0,r="",E=0;E<b.length;E++){var d=b[E];if(r.length>=O)break;d=="0"&&r.length==0?l=l+1:r=r+d}return l>3?c+".0{"+l+"}"+r:c+"."+"0".repeat(l)+r}}}]);
