!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"ant-design-pro","b":"webpack","f":[["40.236b8b98.async.js",40],["p__BotUserData__TradersRanking__index.9b95f4c5.async.js",45],["p__BotUserData__NewUsers__index.2187e8a5.async.js",57],["p__BotTradingData__index.3656c2bb.async.js",82],["87.db0a2c13.async.js",87],["p__BotUserData__Traders__index.142c9d75.async.js",95],["t__plugin-layout__Layout.5012e1ab.chunk.css",301],["t__plugin-layout__Layout.eb6572be.async.js",301],["p__AdminList__index.014f57df.async.js",362],["p__User__Login__index.8567db40.async.js",366],["390.83388097.async.js",390],["p__VipList__index.d20a4d8e.chunk.css",401],["p__VipList__index.80c69fbe.async.js",401],["425.7ddf3900.async.js",425],["430.31288cc2.async.js",430],["p__Account__Setting__index.9d4acf5c.async.js",463],["482.190e11cd.async.js",482],["521.954d00aa.async.js",521],["p__404.f0515a6e.async.js",571],["p__Overall__index.fe8a47ba.chunk.css",671],["p__Overall__index.d4a398ea.async.js",671],["772.912babde.async.js",772],["889.b23904ea.async.js",889],["905.faaab627.async.js",905],["971.d2079398.async.js",971],["p__BotUserData__ChannelTraffic__index.3d9d89b6.async.js",997]],"r":{"/*":[18,23],"/":[6,7,13,14,23],"/overall":[4,14,16,19,20,21,22,24,6,7,13,23],"/vipList":[0,11,12,14,16,17,21,22,23,24,6,7,13],"/adminList":[8,14,17,21,22,23,6,7,13],"/botTradingData":[3,14,16,17,21,22,23,6,7,13],"/user/login":[9,14,21],"/account/setting":[14,15,21,6,7,13,23],"/botUserData/newUsers":[2,14,17,21,22,23,6,7,13],"/botUserData/channelTraffic":[14,17,21,22,23,25,6,7,13],"/botUserData/traders":[5,14,17,21,22,23,6,7,13],"/botUserData/tradersRanking":[0,1,14,16,17,21,22,23,24,6,7,13]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();