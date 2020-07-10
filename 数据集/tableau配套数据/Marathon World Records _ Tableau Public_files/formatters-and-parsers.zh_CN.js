
if ("undefined" != typeof process && "node" === process.release.name) {
  global.localizeGlobalNamespace = global;
} else {
  window.localizeGlobalNamespace = window;
}
localizeGlobalNamespace.Localize = localizeGlobalNamespace.Localize || {};
localizeGlobalNamespace.Localize.format = localizeGlobalNamespace.Localize.format || {};
localizeGlobalNamespace.Localize.format.localeData = {"firstDayOfWeek":"sun","prefer24HourTimeCycle":false,"narrowDayNames":{"sun":"日","mon":"一","tue":"二","wed":"三","thu":"四","fri":"五","sat":"六"},"wideDayNames":{"sun":"星期日","mon":"星期一","tue":"星期二","wed":"星期三","thu":"星期四","fri":"星期五","sat":"星期六"}};
localizeGlobalNamespace.Localize.initFormattersAndParsers = function() {
  /*!
 * Globalize Runtime v1.4.0 2018-07-17T20:38Z Released under the MIT license
 * http://git.io/TrdQbw
 */
!function(e,t){var r,a,n,w,i,u,o,P,s,x,E,H,c,l,f,m,p,g,h;r=e.TabGlobalize,a=r._createError,r._regexpEscape,n=r._runtimeKey,w=r._stringPad,i=r._validateParameterType,u=r._validateParameterPresence,o=r._validateParameterTypeString,P=function(e){return a("E_UNSUPPORTED","Unsupported {feature}.",{feature:e})},s=function(e,t){i(e,t,void 0===e||"number"==typeof e,"Number")},x=/^([^0]*)(0+)([^0]*)$/,E=function(e,t,r){var a;return a=Math.ceil(Math.log(Math.abs(e))/Math.log(10)),r(e,{exponent:a-=t})},H=function(e){return e[0]+e[e.length-1]!=="''"?e:"''"===e?"":e.replace(/''/g,"'").slice(1,-1)},c=function(e,t,r){var a,n,i,u,o,s,c,l,f,m,p,g,h,v,b,d,y,D,F,k,T,M,N,_;return t[1],s=t[2],o=t[3],i=t[4],c=t[5],u=t[6],b=t[7],p=t[8],d=t[9],v=t[15],n=t[16],l=t[17],D=t[18],f=t[19],a=t[20],isNaN(e)?l:(e<0?(g=t[12],m=t[13],y=t[14]):(g=t[11],m=t[0],y=t[10]),isFinite(e)?(-1!==g.indexOf("%")?e*=100:-1!==g.indexOf("‰")&&(e*=1e3),a&&(N=Math.abs(Math.floor(e)).toString().length-1,3<=(N=Math.min(N,a.maxExponent))&&(F=a[N]&&a[N].other),"0"===F?F=null:F&&(k=F.split("0").length-1,M=N-(k-1),e/=Math.pow(10,M))),e=isNaN(c*u)?function(e,t,r,a,n,i){e=a?n(e,i||{exponent:-a}):n(e);e=String(e),a&&/e-/.test(e)&&(e=(+e).toFixed(a).replace(/0+$/,"").replace(/\.$/,""));r&&((e=e.split("."))[1]=w(e[1]||"",r,!0),e=e.join("."));t&&((e=e.split("."))[0]=w(e[0],t),e=e.join("."));return e}(e,s,o,i,v,b):function(e,t,r,a){var n,i;r<t&&(r=t);if(n=E(e,t,a),i=E(e,r,a),e=(+(e=+n==+i?n:i)).toString(10),/e/.test(e))throw P({feature:"integers out of (1e21, 1e-7)"});0<t-e.replace(/^0+|\./g,"").length&&((e=e.split("."))[1]=w(e[1]||"",t-e[0].replace(/^0+/,"").length,!0),e=e.join("."));return e}(e,c,u,v),a&&F&&(_=r?r(+e):"other",F=a[N][_]||F,T=F.match(x),m+=T[1],y=T[3]+y),e=e.replace(/^-/,""),p&&(e=function(e,t,r){var a,n=t,i="",u=!!r;e=String(e).split("."),a=e[0].length;for(;n<a;)i=e[0].slice(a-n,a)+(i.length?",":"")+i,a-=n,u&&(n=r,u=!1);return e[0]=e[0].slice(0,a)+(i.length?",":"")+i,e.join(".")}(e,p,d)),h=m,h+=e,(h+=y).replace(/('([^']|'')+'|'')|./g,function(e,t){return t?H(t):(e=e.replace(/[.,\-+E%\u2030]/,function(e){return D[e]}),f&&(e=e.replace(/[0-9]/,function(e){return f[+e]})),e)})):m+n+y)},l=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g,f=/[\-\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D\u2212]/g,m=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,p=function(e){return e.replace(l,"").replace(f,"-").replace(m," ")},g=function(e,t){var r,a,n,i,u,o,s,c,l,f;return r=[["nan"],["prefix","infinity","suffix"],["prefix","number","suffix"],["negativePrefix","infinity","negativeSuffix"],["negativePrefix","number","negativeSuffix"]],n=t[0],a=t[1]||{},l=t[2],e=p(e),f=e,!r.some(function(e){var r=f;return e.every(function(e){return null!==r.match(l[e])&&(r=r.replace(l[e],(t=e,function(e){switch(e=e.split("").map(function(e){return n[e]||a[e]||e}).join(""),t){case"infinity":u=1/0;break;case"nan":u=NaN;break;case"number":e=e.replace(/,/g,""),u=+e;break;case"prefix":case"negativePrefix":o=e;break;case"suffix":c=e;break;case"negativeSuffix":c=e,i=!0;break;default:throw new Error("Internal error")}return""})),!0);var t})&&!r.length})||isNaN(u)?NaN:(-1!==(s=""+o+c).indexOf("%")?u/=100:-1!==s.indexOf("‰")&&(u/=1e3),i&&(u*=-1),u)},h=function(e){return isNaN(e)?NaN:Math[e<0?"ceil":"floor"](e)},r._createErrorUnsupportedFeature=P,r._looseMatching=p,r._numberFormat=c,r._numberFormatterFn=function(t,r){return function(e){return u(e,"value"),s(e,"value"),c(e,t,r)}},r._numberParse=g,r._numberParserFn=function(t){return function(e){return u(e,"value"),o(e,"value"),g(e,t)}},r._numberRound=function(n){return n="truncate"===(n=n||"round")?h:Math[n],function(e,t){var r,a;if(e=+e,isNaN(e))return NaN;if("object"==typeof t&&t.exponent){if(a=1,0==(r=+t.exponent))return n(e);if("number"!=typeof r||r%1!=0)return NaN}else{if(1===(a=+t||1))return n(e);if(isNaN(a))return NaN;r=+(a=a.toExponential().split("e"))[1],a=+a[0]}return(e=e.toString().split("e"))[0]=+e[0]/a,e[1]=e[1]?+e[1]-r:-r,(e=(e=n(+(e[0]+"e"+e[1]))).toString().split("e"))[0]=+e[0]*a,e[1]=e[1]?+e[1]+r:r,+(e[0]+"e"+e[1])}},r._removeLiteralQuotes=H,r._validateParameterPresence=u,r._validateParameterTypeNumber=s,r._validateParameterTypeString=o,r.numberFormatter=r.prototype.numberFormatter=function(e){return e=e||{},t=n("numberFormatter",this._locale,[e]),r[t].runtimeKey=t,r[t];var t},r.numberParser=r.prototype.numberParser=function(e){return e=e||{},r[n("numberParser",this._locale,[e])]},r.formatNumber=r.prototype.formatNumber=function(e,t){return u(e,"value"),s(e,"value"),this.numberFormatter(t)(e)},r.parseNumber=r.prototype.parseNumber=function(e,t){return u(e,"value"),o(e,"value"),this.numberParser(t)(e)}}(localizeGlobalNamespace),function(t){var r,a,v=t._createErrorUnsupportedFeature,n=t._looseMatching,b=t._regexpEscape,d=t._removeLiteralQuotes,i=t._runtimeKey,u=t._stringPad,o=t._validateParameterPresence,s=t._validateParameterType,c=t._validateParameterTypeString,l=function(e,t){s(e,t,void 0===e||e instanceof Date,"Date")},y=function(){function r(e,t,r){Object.defineProperty(e,t,{value:r})}function a(e,t){for(var r=0,a=e.getTime();r<t.length-1&&a>=t[r];)r++;return r}function n(e){var t=this.getTimezoneOffset(),r=e();this.original.setTime(new Date(this.getTime()));var a=this.getTimezoneOffset();return a-t&&this.original.setMinutes(this.original.getMinutes()+a-t),r}var i=function(e,t){if(r(this,"original",new Date(e.getTime())),r(this,"local",new Date(e.getTime())),r(this,"timeZoneData",t),r(this,"setWrap",n),!(t.untils&&t.offsets&&t.isdsts))throw new Error("Invalid IANA data");this.setTime(this.local.getTime()-60*this.getTimezoneOffset()*1e3)};return i.prototype.clone=function(){return new i(this.original,this.timeZoneData)},["getFullYear","getMonth","getDate","getDay","getHours","getMinutes","getSeconds","getMilliseconds"].forEach(function(e){var t="getUTC"+e.substr(3);i.prototype[e]=function(){return this.local[t]()}}),i.prototype.valueOf=i.prototype.getTime=function(){return this.local.getTime()+60*this.getTimezoneOffset()*1e3},i.prototype.getTimezoneOffset=function(){var e=a(this.original,this.timeZoneData.untils);return this.timeZoneData.offsets[e]},["setFullYear","setMonth","setDate","setHours","setMinutes","setSeconds","setMilliseconds"].forEach(function(e){var r="setUTC"+e.substr(3);i.prototype[e]=function(e){var t=this.local;return this.setWrap(function(){return t[r](e)})}}),i.prototype.setTime=function(e){return this.local.setTime(e)},i.prototype.isDST=function(){var e=a(this.original,this.timeZoneData.untils);return Boolean(this.timeZoneData.isdsts[e])},i.prototype.inspect=function(){var e=a(this.original,this.timeZoneData.untils),t=this.timeZoneData.abbrs;return this.local.toISOString().replace(/Z$/,"")+" "+(t&&t[e]+" "||-1*this.getTimezoneOffset()+" ")+(this.isDST()?"(daylight savings)":"")},i.prototype.toDate=function(){return new Date(this.getTime())},["toISOString","toJSON","toUTCString"].forEach(function(e){i.prototype[e]=function(){return this.toDate()[e]()}}),i}(),p=function(e,t){return(e.getDay()-t+7)%7},D=function(e,t){switch(e=e instanceof y?e.clone():new Date(e.getTime()),t){case"year":e.setMonth(0);case"month":e.setDate(1);case"day":e.setHours(0);case"hour":e.setMinutes(0);case"minute":e.setSeconds(0);case"second":e.setMilliseconds(0)}return e},g=function(e){return Math.floor((t=D(e,"year"),(e.getTime()-t.getTime())/864e5));var t},h=(r={era:"G",year:"yY",quarter:"qQ",month:"ML",week:"wW",day:"dDF",weekday:"ecE",dayperiod:"a",hour:"hHkK",minute:"m",second:"sSA",zone:"zvVOxX"},a=(a=function(t,r,e){return e.split("").forEach(function(e){t[e]=r}),t})||function(e,t,r){return e[r]=t,e},Object.keys(r).reduce(function(e,t){return a(e,t,r[t])},{})),F=/([a-z])\1*|'([^']|'')+'|''|./gi,k=function(e,t,r,a){var n,i=e.getTimezoneOffset();return n=Math.abs(i),a=a||{1:function(e){return u(e,1)},2:function(e){return u(e,2)}},t.split(";")[0<i?1:0].replace(":",r).replace(/HH?/,function(e){return a[e.length](Math.floor(n/60))}).replace(/mm/,function(){return a[2](Math.floor(n%60))}).replace(/ss/,function(){return a[2](Math.floor(n%1*60))})},T=["sun","mon","tue","wed","thu","fri","sat"],f=function(s,c,l){var f=[],m=l.timeSeparator;return l.timeZoneData&&(s=new y(s,l.timeZoneData())),l.pattern.replace(F,function(e){var t,r,a,n,i,u=e.charAt(0),o=e.length;switch("j"===u&&(u=l.preferredTime),"Z"===u&&(o<4?(u="x",o=4):o<5?(u="O",o=4):(u="X",o=5)),"z"===u&&(s.isDST&&(n=s.isDST()?l.daylightTzName:l.standardTzName),n||(u="O",o<4&&(o=1))),u){case"G":n=l.eras[s.getFullYear()<0?0:1];break;case"y":n=s.getFullYear(),2===o&&(n=+(n=String(n)).substr(n.length-2));break;case"Y":(n=new Date(s.getTime())).setDate(n.getDate()+7-p(s,l.firstDay)-l.firstDay-l.minDays),n=n.getFullYear(),2===o&&(n=+(n=String(n)).substr(n.length-2));break;case"Q":case"q":n=Math.ceil((s.getMonth()+1)/3),2<o&&(n=l.quarters[u][o][n]);break;case"M":case"L":n=s.getMonth()+1,2<o&&(n=l.months[u][o][n]);break;case"w":n=p(D(s,"year"),l.firstDay),n=Math.ceil((g(s)+n)/7)-(7-n>=l.minDays?0:1);break;case"W":n=p(D(s,"month"),l.firstDay),n=Math.ceil((s.getDate()+n)/7)-(7-n>=l.minDays?0:1);break;case"d":n=s.getDate();break;case"D":n=g(s)+1;break;case"F":n=Math.floor(s.getDate()/7)+1;break;case"e":case"c":if(o<=2){n=p(s,l.firstDay)+1;break}case"E":n=T[s.getDay()],n=l.days[u][o][n];break;case"a":n=l.dayPeriods[s.getHours()<12?"am":"pm"];break;case"h":n=s.getHours()%12||12;break;case"H":n=s.getHours();break;case"K":n=s.getHours()%12;break;case"k":n=s.getHours()||24;break;case"m":n=s.getMinutes();break;case"s":n=s.getSeconds();break;case"S":n=Math.round(s.getMilliseconds()*Math.pow(10,o-3));break;case"A":n=Math.round(((i=s)-D(i,"day"))*Math.pow(10,o-3));break;case"z":break;case"v":if(l.genericTzName){n=l.genericTzName;break}case"V":if(l.timeZoneName){n=l.timeZoneName;break}"v"===e&&(o=1);case"O":0===s.getTimezoneOffset()?n=l.gmtZeroFormat:(o<4?(t=s.getTimezoneOffset(),t=l.hourFormat[t%60-t%1==0?0:1]):t=l.hourFormat,n=k(s,t,m,c),n=l.gmtFormat.replace(/\{0\}/,n));break;case"X":if(0===s.getTimezoneOffset()){n="Z";break}case"x":t=s.getTimezoneOffset(),1===o&&t%60-t%1!=0&&(o+=1),4!==o&&5!==o||t%1!=0||(o-=2),n=k(s,n=["+HH;-HH","+HHmm;-HHmm","+HH:mm;-HH:mm","+HHmmss;-HHmmss","+HH:mm:ss;-HH:mm:ss"][o-1],":");break;case":":n=m;break;case"'":n=d(e);break;default:n=e}"number"==typeof n&&(n=c[o](n)),r=h[u],"literal"===(a=r||"literal")&&f.length&&"literal"===f[f.length-1].type?f[f.length-1].value+=n:f.push({type:a,value:n})}),f},M=function(e,t){var r,a,n,i=e.getDate();e.setDate(1),e.setMonth(t),r=e,a=i,n=new Date(r.getFullYear(),r.getMonth()+1,0).getDate(),r.setDate(a<1?1:a<n?a:n)},N=function(e,t,r){return e<t||r<e},m=function(e,t,i){var u,o,s,c,l,f,m,p,r,a,g=new Date,h=[];if(i.timeZoneData&&(g=new y(g,i.timeZoneData())),!t.length)return null;if(!t.every(function(e){var t,r,a,n;if("literal"===e.type)return!0;switch(r=e.type.charAt(0),n=e.type.length,"j"===r&&(r=i.preferredTimeData),r){case"G":h.push(0),l=+e.value;break;case"y":if(a=e.value,2===n){if(N(a,0,99))return!1;t=100*Math.floor(g.getFullYear()/100),(a+=t)>g.getFullYear()+20&&(a-=100)}g.setFullYear(a),h.push(0);break;case"Y":throw v({feature:"year pattern `"+r+"`"});case"Q":case"q":break;case"M":case"L":if(a=n<=2?e.value:+e.value,N(a,1,12))return!1;c=a,h.push(1);break;case"w":case"W":break;case"d":o=e.value,h.push(2);break;case"D":s=e.value,h.push(2);break;case"F":break;case"e":case"c":case"E":break;case"a":u=e.value;break;case"h":if(a=e.value,N(a,1,12))return!1;f=m=!0,g.setHours(12===a?0:a),h.push(3);break;case"K":if(a=e.value,N(a,0,11))return!1;f=m=!0,g.setHours(a),h.push(3);break;case"k":if(a=e.value,N(a,1,24))return!1;f=!0,g.setHours(24===a?0:a),h.push(3);break;case"H":if(a=e.value,N(a,0,23))return!1;f=!0,g.setHours(a),h.push(3);break;case"m":if(a=e.value,N(a,0,59))return!1;g.setMinutes(a),h.push(4);break;case"s":if(a=e.value,N(a,0,59))return!1;g.setSeconds(a),h.push(5);break;case"A":g.setHours(0),g.setMinutes(0),g.setSeconds(0);case"S":a=Math.round(e.value*Math.pow(10,3-n)),g.setMilliseconds(a),h.push(6);break;case"z":case"Z":case"O":case"v":case"V":case"X":case"x":"number"==typeof e.value&&(p=e.value)}return!0}))return null;if(f&&!(!u^m))return null;if(0===l&&g.setFullYear(-1*g.getFullYear()+1),void 0!==c&&M(g,c-1),void 0!==o){if(N(o,1,(a=g,new Date(a.getFullYear(),a.getMonth()+1,0).getDate())))return null;g.setDate(o)}else if(void 0!==s){if(N(s,1,(r=g.getFullYear(),1===new Date(r,1,29).getMonth()?366:365)))return null;g.setMonth(0),g.setDate(s)}return m&&"pm"===u&&g.setHours(g.getHours()+12),void 0!==p&&g.setMinutes(g.getMinutes()+p-g.getTimezoneOffset()),h=Math.max.apply(null,h),(g=D(g,["year","month","day","hour","minute","second","milliseconds"][h]))instanceof y&&(g=g.toDate()),g},_=function(f,m,p){var g,e,h=[],v=["abbreviated","wide","narrow"];return g=p.digitsRe,f=n(f),e=p.pattern.match(F).every(function(e){var t,r,a,n,i={};function u(e,t){var r,a,n=f.match(e);return t=t||function(e){return+e},!!n&&(a=n[1],n.length<6?(r=a?1:3,i.value=60*t(n[r])):n.length<10?(r=a?[1,3]:[5,7],i.value=60*t(n[r[0]])+t(n[r[1]])):(r=a?[1,3,5]:[7,9,11],i.value=60*t(n[r[0]])+t(n[r[1]])+t(n[r[2]])/60),a&&(i.value*=-1),!0)}function o(){if(1===r)return a=!0,n=g}function s(){if(1===r||2===r)return a=!0,n=new RegExp("^("+g.source+"){1,2}")}function c(){if(2===r)return a=!0,n=new RegExp("^("+g.source+"){2}")}function l(e){var t=p[e.join("/")];return t&&t.some(function(e){var t=e[1];if(t.test(f))return i.value=e[0],n=e[1],!0}),null}switch(i.type=e,t=e.charAt(0),r=e.length,"Z"===t&&(r<4?(t="x",r=4):r<5?(t="O",r=4):(t="X",r=5)),"z"===t&&p.standardOrDaylightTzName&&(i.value=null,n=p.standardOrDaylightTzName),"v"===t&&(p.genericTzName?(i.value=null,n=p.genericTzName):(t="V",r=4)),"V"===t&&p.timeZoneName&&(i.value=2===r?p.timeZoneName:null,n=p.timeZoneNameRe),t){case"G":l(["gregorian/eras",r<=3?"eraAbbr":4===r?"eraNames":"eraNarrow"]);break;case"y":case"Y":a=!0,n=1===r?new RegExp("^("+g.source+")+"):2===r?new RegExp("^("+g.source+"){1,2}"):new RegExp("^("+g.source+"){"+r+",}");break;case"Q":case"q":o()||c()||l(["gregorian/quarters","Q"===t?"format":"stand-alone",v[r-3]]);break;case"M":case"L":s()||l(["gregorian/months","M"===t?"format":"stand-alone",v[r-3]]);break;case"D":r<=3&&(a=!0,n=new RegExp("^("+g.source+"){"+r+",3}"));break;case"W":case"F":o();break;case"e":case"c":if(r<=2){o()||c();break}case"E":6===r?l(["gregorian/days",["c"===t?"stand-alone":"format"],"short"])||l(["gregorian/days",["c"===t?"stand-alone":"format"],"abbreviated"]):l(["gregorian/days",["c"===t?"stand-alone":"format"],v[r<3?0:r-3]]);break;case"a":l(["gregorian/dayPeriods/format/wide"]);break;case"w":(function(){if(1===r)return a=!0,n=new RegExp("^("+g.source+"){1,2}")})()||c();break;case"d":case"h":case"H":case"K":case"k":case"j":case"m":case"s":s();break;case"S":a=!0,n=new RegExp("^("+g.source+"){"+r+"}");break;case"A":a=!0,n=new RegExp("^("+g.source+"){"+(r+5)+"}");break;case"v":case"V":case"z":if(n&&n.test(f))break;if("V"===t&&2===r)break;case"O":if(f===p["timeZoneNames/gmtZeroFormat"])i.value=0,n=p["timeZoneNames/gmtZeroFormatRe"];else if(!p["timeZoneNames/hourFormat"].some(function(e){if(u(e,m))return n=e,!0}))return null;break;case"X":if("Z"===f){i.value=0,n=/^Z/;break}case"x":if(!p.x.some(function(e){if(u(e))return n=e,!0}))return null;break;case"'":i.type="literal",n=new RegExp("^"+b(d(e)));break;default:i.type="literal",n=new RegExp("^"+b(e))}return!(!n||(f=f.replace(n,function(e){return i.lexeme=e,a&&(i.value=m(e)),""}),!i.lexeme||a&&isNaN(i.value)||(h.push(i),0)))}),""!==f&&(e=!1),e?h:[]};function w(e){return void 0!==e.skeleton||void 0!==e.date||void 0!==e.time||void 0!==e.datetime||void 0!==e.raw}t._dateFormat=f,t._dateFormatterFn=function(t){return function(e){return t(e).map(function(e){return e.value}).join("")}},t._dateParser=m,t._dateParserFn=function(r,a,n){return function(e){var t;return o(e,"value"),c(e,"value"),t=_(e,r,n),m(0,t,a)||null}},t._dateTokenizer=_,t._dateToPartsFormatterFn=function(t,r){return function(e){return o(e,"value"),l(e,"value"),f(e,t,r)}},t._validateParameterTypeDate=l,t.dateFormatter=t.prototype.dateFormatter=function(e){return w(e=e||{})||(e.skeleton="yMd"),t[i("dateFormatter",this._locale,[e])]},t.dateToPartsFormatter=t.prototype.dateToPartsFormatter=function(e){return w(e=e||{})||(e.skeleton="yMd"),t[i("dateToPartsFormatter",this._locale,[e])]},t.dateParser=t.prototype.dateParser=function(e){return w(e=e||{})||(e.skeleton="yMd"),t[i("dateParser",this._locale,[e])]},t.formatDate=t.prototype.formatDate=function(e,t){return o(e,"value"),l(e,"value"),this.dateFormatter(t)(e)},t.formatDateToParts=t.prototype.formatDateToParts=function(e,t){return o(e,"value"),l(e,"value"),this.dateToPartsFormatter(t)(e)},t.parseDate=t.prototype.parseDate=function(e,t){return o(e,"value"),c(e,"value"),this.dateParser(t)(e)}}(localizeGlobalNamespace.TabGlobalize),function(e,t){var r,l,a,f,m;r=e.TabGlobalize,l=r._formatMessage,a=r._runtimeKey,f=r._validateParameterPresence,m=r._validateParameterTypeNumber,r._relativeTimeFormatterFn=function(o,s,c){return function(e){return f(e,"value"),m(e,"value"),r=o,a=s,(u=(n=c)["relative-type-"+(t=e)])||(i=t<=0?n["relativeTime-type-past"]:n["relativeTime-type-future"],t=Math.abs(t),u=i["relativeTimePattern-count-"+a(t)],l(u,[r(t)]));var t,r,a,n,i,u}},r.formatRelativeTime=r.prototype.formatRelativeTime=function(e,t,r){return f(e,"value"),m(e,"value"),this.relativeTimeFormatter(t,r)(e)},r.relativeTimeFormatter=r.prototype.relativeTimeFormatter=function(e,t){return t=t||{},r[a("relativeTimeFormatter",this._locale,[e,t])]}}(localizeGlobalNamespace),function(e,t){var r,v,a,b,d;r=e.TabGlobalize,v=r._formatMessage,a=r._runtimeKey,b=r._validateParameterPresence,d=r._validateParameterTypeNumber,r._unitFormatterFn=function(p,g,h){return function(e){return b(e,"value"),d(e,"value"),t=e,r=p,a=g,m=(n=h).compoundUnitPattern,n=n.unitProperties,o=r(t),f=a(t),n instanceof Array?(u=n[0],c=n[1],i=v(u[f],[t]),s=v(c.one,[""]).trim(),v(m,[i,s])):(l=n[f],v(l,[o]));var t,r,a,n,i,u,o,s,c,l,f,m}},r.formatUnit=r.prototype.formatUnit=function(e,t,r){return this.unitFormatter(t,r)(e)},r.unitFormatter=r.prototype.unitFormatter=function(e,t){return t=t||{},r[a("unitFormatter",this._locale,[e,t])]}}(localizeGlobalNamespace);
;
  (function( root, factory ) {
    root.Localize = root.Localize || {};
    root.Localize.format = root.Localize.format || {};
    root.Localize.format.fmt = new root.TabGlobalize('zh-Hans');
    factory( root.TabGlobalize, root.Localize );
  }(localizeGlobalNamespace, function( Globalize, Localize ) {
  // tslint:disable-next-line:no-reference
/// <reference path="./Types.ts" />
/**
 * The runtime code for Localize. Note that this file is very different from the other TypeScript
 * files. It is used at runtime in the browser, not at build time in node. Because of this there are
 * some special considerations:
 *
 *   1. Don't pollute the global scope. Everything is wrapped in the initRuntime function and the
 *      localize.ts instance is injected.
 *   2. You can only reference other TypeScript files if importing interfaces or types and they must
 *      be imported via the Types reference (to avoid this file becoming a module).
 *   3. You can't debug through vscode like you would in a normal test. You'll need to write
 *      'debugger;' lines to set breakpoints, instead of setting breakpoints in the gutters through
 *      the vscode UI.
 *
 * We could make this experience better for developers by separating the build and runtime into two
 * different compiles and tests. This would make the dev experience more straightforward, but it's
 * more work to do and a more complicated build system. Unless this file grows significantly, we're
 * probably okay as is.
 *
 * Note that we do actually compile this separately than the rest of the TypeScript code. This is
 * because the rest of the code should be able to use the newest Node definitions, like Promises,
 * but we can't rely on those types in the browser. We also target ES6 for the node files, but ES5
 * for this file.
 */
function initRuntime(localize) {
    // The threshold at which to start reporting as the next type of unit. For example,
    // if the difference in two dates is 55 seconds, say "1 minute" instead of "55 seconds"
    var secondToMinuteThreshold = 45;
    var minuteToHourThreshold = 45;
    var hoursToDayThreshold = 22;
    var daysToWeekThreshold = 5;
    var weekToMonthThreshold = 4;
    var monthsToYearThreshold = 11;
    // With leap year days, there are 146097 days in 400 years.
    var yearPerDay = 400 / 146097;
    localize.format.formatRelativeTime = function formatRelativeTime(num, options) {
        var normalizedUnit = options.form === 'long' ? options.unit : options.unit + "-" + options.form;
        return localize.format.fmt.formatRelativeTime(num, normalizedUnit, options.numberFormatOptions);
    };
    localize.format.formatBestFitRelativeTime = function formatBestFitRelativeTime(toDate, options, fromDate) {
        if (fromDate === void 0) { fromDate = new Date(); }
        var fromMilliseconds = fromDate.getTime();
        var toMilliseconds = toDate.getTime();
        var milliseconds = Math.round(toMilliseconds - fromMilliseconds);
        var format = function (num, unit) {
            return localize.format.formatRelativeTime(num, { unit: unit, form: options.form, numberFormatOptions: options.numberFormatOptions });
        };
        var seconds = Math.round(milliseconds / 1000);
        if (Math.abs(seconds) < secondToMinuteThreshold) {
            return format(seconds, 'second');
        }
        var minutes = Math.round(seconds / 60);
        if (Math.abs(minutes) < minuteToHourThreshold) {
            return format(minutes, 'minute');
        }
        var hours = Math.round(minutes / 60);
        if (Math.abs(hours) < hoursToDayThreshold) {
            return format(hours, 'hour');
        }
        var days = Math.round(hours / 24);
        if (Math.abs(days) < daysToWeekThreshold) {
            return format(days, 'day');
        }
        var weeks = Math.round(days / 7);
        if (Math.abs(weeks) < weekToMonthThreshold) {
            return format(weeks, 'week');
        }
        var yearsFraction = days * yearPerDay;
        var months = Math.round(yearsFraction * 12);
        if (Math.abs(months) < monthsToYearThreshold) {
            return format(months, 'month');
        }
        var years = Math.round(yearsFraction);
        return format(years, 'year');
    };
    localize.format.formatUnit = function formatUnit(value, opts) {
        var numberFormatOptions = opts.numberFormatOptions;
        var formatUnitOptions = {};
        if (numberFormatOptions === undefined) {
            formatUnitOptions = { form: opts.form };
        }
        else {
            formatUnitOptions = { form: opts.form, numberFormatter: localize.format.fmt.numberFormatter(numberFormatOptions) };
        }
        return localize.format.fmt.formatUnit(value, opts.unit, formatUnitOptions);
    };
    localize.format.formatDate = function formatDate(date, options) {
        return localize.format.fmt.formatDate(date, options);
    };
    localize.format.formatNumber = function formatNumber(num, options) {
        return localize.format.fmt.formatNumber(num, options);
    };
    localize.format.parseDate = function parseDate(str, options) {
        return localize.format.fmt.parseDate(str, options);
    };
    localize.format.parseNumber = function parseNumber(str, options) {
        return localize.format.fmt.parseNumber(str, options);
    };
    // Setup backwards compatibility with Localize <8.2
    localize.fmt = localize.format.fmt;
    localize.localeData = localize.format.localeData;
    localize.formatBestFitRelativeTime = localize.format.formatBestFitRelativeTime;
}
//# sourceMappingURL=FormatRuntime.js.map;
  initRuntime(Localize);
  var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var numberRound = Globalize._numberRound;
var numberFormat = Globalize._numberFormat;
var numberFormatterFn = Globalize._numberFormatterFn;
var validateParameterTypeString = Globalize._validateParameterTypeString;
var numberParse = Globalize._numberParse;
var numberParserFn = Globalize._numberParserFn;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeDate = Globalize._validateParameterTypeDate;
var dateToPartsFormat = Globalize._dateToPartsFormat;
var dateToPartsFormatterFn = Globalize._dateToPartsFormatterFn;
var dateFormat = Globalize._dateFormat;
var dateFormatterFn = Globalize._dateFormatterFn;
var dateTokenizer = Globalize._dateTokenizer;
var dateParse = Globalize._dateParse;
var dateParserFn = Globalize._dateParserFn;
var relativeTimeFormatterFn = Globalize._relativeTimeFormatterFn;

Globalize.b889296548 = numberFormatterFn(["",,1,0,0,,,,3,,"%","#,##0%","-#,##0%%","-","%",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b2049621926 = numberFormatterFn(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound("truncate"),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a947502874 = numberFormatterFn(["",,4,0,0,,,,,,"","0000","-0000","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a41198362 = numberFormatterFn(["",,2,0,0,,,,,,"","00","-00","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b268067681 = numberFormatterFn(["",,1,0,9,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1740144685 = numberFormatterFn(["",,1,0,3,1,15,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1165098376 = numberFormatterFn(["",,1,1,9,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1522702342 = numberFormatterFn(["",,1,0,0,,,,,,"","0","-0","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1951609136 = numberFormatterFn(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a274325494 = numberFormatterFn(["",,1,0,0,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a1392834108 = numberFormatterFn(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a1105924033 = numberParserFn([{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},,{"infinity":/^∞/,"nan":/^NaN/,"negativePrefix":/^-/,"negativeSuffix":/^/,"number":/^\d+/,"prefix":/^/,"suffix":/^/}]);
Globalize.a284540823 = numberParserFn([{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},,{"infinity":/^∞/,"nan":/^NaN/,"negativePrefix":/^-/,"negativeSuffix":/^/,"number":/^((\d{1,3}(,\d{3})+|\d+)(\.\d+|\.)?|((\d{1,3}(,\d{3})+|\d+))?\.\d+)/,"prefix":/^/,"suffix":/^/}]);
Globalize.b1234768562 = pluralGeneratorFn(function(n
/*``*/) {
  return 'other';
});
Globalize.a724511932 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"}),"2":Globalize("zh-Hans").numberFormatter({"raw":"00"})}, {"pattern":"y年M月d日EEEE zzzz ah:mm:ss","timeSeparator":":","days":{"E":{"4":{"sun":"星期日","mon":"星期一","tue":"星期二","wed":"星期三","thu":"星期四","fri":"星期五","sat":"星期六"}}},"gmtFormat":"GMT{0}","gmtZeroFormat":"GMT","hourFormat":"+HH:mm;-HH:mm","dayPeriods":{"am":"上午","pm":"下午"}});
Globalize.a578924993 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"}),"2":Globalize("zh-Hans").numberFormatter({"raw":"00"}),"4":Globalize("zh-Hans").numberFormatter({"raw":"0000"})}, {"pattern":"yyyy/M/d ah:mm","timeSeparator":":","dayPeriods":{"am":"上午","pm":"下午"}});
Globalize.a68964310 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"}),"2":Globalize("zh-Hans").numberFormatter({"raw":"00"})}, {"pattern":"y年M月d日 ah:mm:ss","timeSeparator":":","dayPeriods":{"am":"上午","pm":"下午"}});
Globalize.a1858011032 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"}),"2":Globalize("zh-Hans").numberFormatter({"raw":"00"})}, {"pattern":"ah:mm","timeSeparator":":","dayPeriods":{"am":"上午","pm":"下午"}});
Globalize.a184028449 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"}),"2":Globalize("zh-Hans").numberFormatter({"raw":"00"})}, {"pattern":"M月d日 ah:mm","timeSeparator":":","dayPeriods":{"am":"上午","pm":"下午"}});
Globalize.a549372321 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"}),"2":Globalize("zh-Hans").numberFormatter({"raw":"00"}),"4":Globalize("zh-Hans").numberFormatter({"raw":"0000"})}, {"pattern":"yyyy/M/d HH:mm","timeSeparator":":"});
Globalize.a290728239 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"})}, {"pattern":"y年M月d日EEEE","timeSeparator":":","days":{"E":{"4":{"sun":"星期日","mon":"星期一","tue":"星期二","wed":"星期三","thu":"星期四","fri":"星期五","sat":"星期六"}}}});
Globalize.a769132304 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"}),"2":Globalize("zh-Hans").numberFormatter({"raw":"00"}),"4":Globalize("zh-Hans").numberFormatter({"raw":"0000"})}, {"pattern":"yyyy/M/d ah:mm:ss","timeSeparator":":","dayPeriods":{"am":"上午","pm":"下午"}});
Globalize.b1688847898 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"}),"4":Globalize("zh-Hans").numberFormatter({"raw":"0000"})}, {"pattern":"yyyy/M/d","timeSeparator":":"});
Globalize.b147000528 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"}),"2":Globalize("zh-Hans").numberFormatter({"raw":"00"}),"4":Globalize("zh-Hans").numberFormatter({"raw":"0000"})}, {"pattern":"yyyy/M/d HH:mm:ss","timeSeparator":":"});
Globalize.b185336951 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"})}, {"pattern":"y年M月d日","timeSeparator":":"});
Globalize.a1584489903 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"}),"2":Globalize("zh-Hans").numberFormatter({"raw":"00"})}, {"pattern":"y年M月d日 z ah:mm:ss","timeSeparator":":","gmtFormat":"GMT{0}","gmtZeroFormat":"GMT","hourFormat":["+H;-H","+H:mm;-H:mm"],"dayPeriods":{"am":"上午","pm":"下午"}});
Globalize.b687096899 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"}),"2":Globalize("zh-Hans").numberFormatter({"raw":"00"})}, {"pattern":"y/M/d ah:mm","timeSeparator":":","dayPeriods":{"am":"上午","pm":"下午"}});
Globalize.a1150706210 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"})}, {"pattern":"y年M月d日","timeSeparator":":"});
Globalize.b1249489494 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"})}, {"pattern":"y/M/d","timeSeparator":":"});
Globalize.b105433859 = dateToPartsFormatterFn({"4":Globalize("zh-Hans").numberFormatter({"raw":"0000"})}, {"pattern":"yyyy年MMMM","timeSeparator":":","months":{"M":{"4":{"1":"一月","2":"二月","3":"三月","4":"四月","5":"五月","6":"六月","7":"七月","8":"八月","9":"九月","10":"十月","11":"十一月","12":"十二月"}}}});
Globalize.a1566444690 = dateToPartsFormatterFn({"1":Globalize("zh-Hans").numberFormatter({"raw":"0"}),"2":Globalize("zh-Hans").numberFormatter({"raw":"00"})}, {"pattern":"y/M/d ah:mm","timeSeparator":":","dayPeriods":{"am":"上午","pm":"下午"}});
Globalize.a1703507074 = dateToPartsFormatterFn({}, {"pattern":"ccccc","timeSeparator":":","days":{"c":{"5":{"sun":"日","mon":"一","tue":"二","wed":"三","thu":"四","fri":"五","sat":"六"}}}});
Globalize.b384200342 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"skeleton":"yyyyMdHm"}));
Globalize.a1988388847 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"skeleton":"yyyyMd"}));
Globalize.b433702102 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"skeleton":"MMMdhm"}));
Globalize.a438139241 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"skeleton":"yMdhm"}));
Globalize.b420263675 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"datetime":"full"}));
Globalize.b2009097695 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"skeleton":"hm"}));
Globalize.a439714296 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"datetime":"long"}));
Globalize.a1042010616 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"date":"full"}));
Globalize.b1815402348 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"datetime":"short"}));
Globalize.a977017991 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"skeleton":"yyyyMdHms"}));
Globalize.a1901988587 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"date":"long"}));
Globalize.b548766241 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"datetime":"medium"}));
Globalize.b1039006522 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"skeleton":"yyyyMMMM"}));
Globalize.a1893150823 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"skeleton":"yyyyMdhms"}));
Globalize.b354647670 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"skeleton":"yyyyMdhm"}));
Globalize.a575201625 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"skeleton":"EEEEE"}));
Globalize.a242521618 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"date":"medium"}));
Globalize.a565427713 = dateFormatterFn(Globalize("zh-Hans").dateToPartsFormatter({"date":"short"}));
Globalize.a1541514115 = dateParserFn(Globalize("zh-Hans").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"y年M月d日","digitsRe":/\d/});
Globalize.b1311031818 = dateParserFn(Globalize("zh-Hans").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"yyyy/M/d HH:mm:ss","digitsRe":/\d/});
Globalize.b1150745061 = dateParserFn(Globalize("zh-Hans").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"yyyy/M/d HH:mm","digitsRe":/\d/});
Globalize.b1121192389 = dateParserFn(Globalize("zh-Hans").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"yyyy/M/d ah:mm","digitsRe":/\d/,"gregorian/dayPeriods/format/wide":[["am",/^上午/],["pm",/^下午/]]});
Globalize.a47928544 = dateParserFn(Globalize("zh-Hans").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"yyyy/M/d","digitsRe":/\d/});
Globalize.b1923957194 = dateParserFn(Globalize("zh-Hans").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"y年M月d日EEEE zzzz ah:mm:ss","digitsRe":/\d/,"gregorian/days/format/wide":[["sun",/^星期日/],["mon",/^星期一/],["tue",/^星期二/],["wed",/^星期三/],["thu",/^星期四/],["fri",/^星期五/],["sat",/^星期六/]],"timeZoneNames/gmtZeroFormat":"GMT","timeZoneNames/hourFormat":[/^GMT\+((\d){2}):((\d){2})|GMT-((\d){2}):((\d){2})/],"timeZoneNames/gmtZeroFormatRe":/^GMT/,"x":[/^\+((\d){2})((\d){2})((\d){2})|-((\d){2})((\d){2})((\d){2})/,/^\+((\d){2})((\d){2})|-((\d){2})((\d){2})/],"gregorian/dayPeriods/format/wide":[["am",/^上午/],["pm",/^下午/]]});
Globalize.b1063979223 = dateParserFn(Globalize("zh-Hans").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"y年M月d日 z ah:mm:ss","digitsRe":/\d/,"timeZoneNames/gmtZeroFormat":"GMT","timeZoneNames/hourFormat":[/^GMT\+((\d){1,2}):((\d){2})|GMT-((\d){1,2}):((\d){2})/,/^GMT\+((\d){1,2})|GMT-((\d){1,2})/],"timeZoneNames/gmtZeroFormatRe":/^GMT/,"x":[/^\+((\d){2})((\d){2})|-((\d){2})((\d){2})/,/^\+((\d){2})|-((\d){2})/],"gregorian/dayPeriods/format/wide":[["am",/^上午/],["pm",/^下午/]]});
Globalize.a1805740752 = dateParserFn(Globalize("zh-Hans").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"y年M月d日 ah:mm:ss","digitsRe":/\d/,"gregorian/dayPeriods/format/wide":[["am",/^上午/],["pm",/^下午/]]});
Globalize.a1570736041 = dateParserFn(Globalize("zh-Hans").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"y年M月d日EEEE","digitsRe":/\d/,"gregorian/days/format/wide":[["sun",/^星期日/],["mon",/^星期一/],["tue",/^星期二/],["wed",/^星期三/],["thu",/^星期四/],["fri",/^星期五/],["sat",/^星期六/]]});
Globalize.b1864253284 = dateParserFn(Globalize("zh-Hans").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"y年M月d日","digitsRe":/\d/});
Globalize.b394898986 = dateParserFn(Globalize("zh-Hans").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"yyyy/M/d ah:mm:ss","digitsRe":/\d/,"gregorian/dayPeriods/format/wide":[["am",/^上午/],["pm",/^下午/]]});
Globalize.b223953296 = dateParserFn(Globalize("zh-Hans").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"y/M/d","digitsRe":/\d/});
Globalize.b1185261181 = dateParserFn(Globalize("zh-Hans").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"y/M/d ah:mm","digitsRe":/\d/,"gregorian/dayPeriods/format/wide":[["am",/^上午/],["pm",/^下午/]]});
Globalize.a1485363312 = relativeTimeFormatterFn(Globalize("zh-Hans").numberFormatter({}), Globalize("zh-Hans").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}秒后"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}秒前"},"relative-type-0":"现在"});
Globalize.a98814480 = relativeTimeFormatterFn(Globalize("zh-Hans").numberFormatter({}), Globalize("zh-Hans").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}分钟后"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}分钟前"},"relative-type-0":"此刻"});
Globalize.a397511328 = relativeTimeFormatterFn(Globalize("zh-Hans").numberFormatter({}), Globalize("zh-Hans").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}小时后"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}小时前"},"relative-type-0":"这一时间 / 此时"});
Globalize.a191657554 = relativeTimeFormatterFn(Globalize("zh-Hans").numberFormatter({}), Globalize("zh-Hans").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}天后"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}天前"},"relative-type--2":"前天","relative-type--1":"昨天","relative-type-0":"今天","relative-type-1":"明天","relative-type-2":"后天"});
Globalize.a691641520 = relativeTimeFormatterFn(Globalize("zh-Hans").numberFormatter({}), Globalize("zh-Hans").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}周后"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}周前"},"relative-type--1":"上周","relative-type-0":"本周","relative-type-1":"下周"});
Globalize.a1009623030 = relativeTimeFormatterFn(Globalize("zh-Hans").numberFormatter({}), Globalize("zh-Hans").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}个月后"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}个月前"},"relative-type--1":"上个月","relative-type-0":"本月","relative-type-1":"下个月"});
Globalize.b361013383 = relativeTimeFormatterFn(Globalize("zh-Hans").numberFormatter({}), Globalize("zh-Hans").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}年后"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}年前"},"relative-type--1":"去年","relative-type-0":"今年","relative-type-1":"明年"});
  }));
}
if (localizeGlobalNamespace.TabGlobalize) { localizeGlobalNamespace.Localize.initFormattersAndParsers(); }
