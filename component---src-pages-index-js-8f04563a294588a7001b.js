(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QgiU:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};n.en.relativeTime=i;var a=function(e,r,a,s){for(var u,o,l,c=a.$locale().relativeTime||i,f=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=f.length,d=0;d<h;d+=1){var m=f[d];m.d&&(u=s?n(e).diff(a,m.d,!0):a.diff(e,m.d,!0));var $=(t.rounding||Math.round)(Math.abs(u));if(l=u>0,$<=m.r||!m.r){$<=1&&d>0&&(m=f[d-1]);var y=c[m.l];o="string"==typeof y?y.replace("%d",$):y($,r,m.l,l);break}}if(r)return o;var v=l?c.future:c.past;return"function"==typeof v?v(o):v.replace("%s",o)};r.to=function(t,e){return a(t,e,this,!0)},r.from=function(t,e){return a(t,e,this)};var s=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(s(this),t)},r.fromNow=function(t){return this.from(s(this),t)}}}()},RXBc:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),a=n("Wbzz"),s=n("6Gk8"),u=n("vDFs"),o=n("vrFN"),l=n("Wgwc"),c=n.n(l),f=n("QgiU"),h=n.n(f);c.a.extend(h.a);var d=c.a,m=function(t){var e=Object.assign({fontSize:12,color:"silver",display:"inline"},t.style);return i.a.createElement("div",{style:e},t.children)},$=function(t){var e=t.children;return i.a.createElement("div",{style:{marginTop:10}},e)},y=function(t){var e=t.children;return i.a.createElement(m,{style:{marginLeft:10}},e)},v=function(){var t=Object(a.useStaticQuery)("2023882863").allDevtoContentJson.nodes;return i.a.createElement("div",null,i.a.createElement("h2",null,"Blogs in dev.to"),i.a.createElement("p",null,"I wrote an engineering focus article here"),t.map((function(t,e){return i.a.createElement($,{key:e},i.a.createElement("a",{href:t.canonical_url},t.title),i.a.createElement(y,null,d(t.published_at).fromNow()))})))},p=function(){var t=Object(a.useStaticQuery)("3811199574").allPodcastContentJson.nodes;return i.a.createElement("div",null,i.a.createElement("h2",null,"Podcasts"),i.a.createElement("p",null,"I host a podcast name Mindful Coder. It is about software engineering and management."),t.map((function(t){return i.a.createElement($,{key:t.id},i.a.createElement("a",{href:t.url},t.title),i.a.createElement(y,null,c()(t.publishedDate).fromNow()))})))};e.default=function(t){var e,n=t.data,r=t.location,l=(null===(e=n.site.siteMetadata)||void 0===e?void 0:e.title)||"Title",c=n.allMarkdownRemark.nodes;return console.log("p:",c),i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{location:r,title:l},i.a.createElement(o.a,{title:"Chris' Dialogue"}),i.a.createElement(s.a,null),i.a.createElement("ol",{style:{listStyle:"none"}},c.map((function(t){var e=t.frontmatter.title||t.fields.slug;return i.a.createElement("li",{key:t.fields.slug},i.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},i.a.createElement("header",null,i.a.createElement("h2",null,i.a.createElement(a.Link,{to:t.fields.slug,itemProp:"url"},i.a.createElement("span",{itemProp:"headline"},e))),i.a.createElement("small",null,t.frontmatter.date)),i.a.createElement("section",null,i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},itemProp:"description"}))))}))),i.a.createElement("hr",null),i.a.createElement(v,null),i.a.createElement("hr",null),i.a.createElement(p,null)))}},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",a="week",s="month",u="quarter",o="year",l="date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+d(r,2,"0")+":"+d(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),a=n-i<0,u=e.clone().add(r+(a?-1:1),s);return+(-(r+(n-i)/(a?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:s,y:o,w:a,d:i,D:l,h:r,m:n,s:e,ms:t,Q:u}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",y={};y[$]=h;var v=function(t){return t instanceof w},p=function(t,e,n){var r;if(!t)return $;if("string"==typeof t)y[t]&&(r=t),e&&(y[t]=e,r=t);else{var i=t.name;y[i]=t,r=i}return!n&&r&&($=r),r||!n&&$},g=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},M=m;M.l=p,M.i=v,M.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function h(t){this.$L=p(t.locale,null,!0),this.parse(t)}var d=h.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return M},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return g(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<g(t)},d.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,u){var c=this,f=!!M.u(u)||u,h=M.p(t),d=function(t,e){var n=M.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return f?n:n.endOf(i)},m=function(t,e){return M.w(c.toDate()[t].apply(c.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},$=this.$W,y=this.$M,v=this.$D,p="set"+(this.$u?"UTC":"");switch(h){case o:return f?d(1,0):d(31,11);case s:return f?d(1,y):d(0,y+1);case a:var g=this.$locale().weekStart||0,w=($<g?$+7:$)-g;return d(f?v-w:v+(6-w),y);case i:case l:return m(p+"Hours",0);case r:return m(p+"Minutes",1);case n:return m(p+"Seconds",2);case e:return m(p+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(a,u){var c,f=M.p(a),h="set"+(this.$u?"UTC":""),d=(c={},c[i]=h+"Date",c[l]=h+"Date",c[s]=h+"Month",c[o]=h+"FullYear",c[r]=h+"Hours",c[n]=h+"Minutes",c[e]=h+"Seconds",c[t]=h+"Milliseconds",c)[f],m=f===i?this.$D+(u-this.$W):u;if(f===s||f===o){var $=this.clone().set(l,1);$.$d[d](m),$.init(),this.$d=$.set(l,Math.min(this.$D,$.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[M.p(t)]()},d.add=function(t,u){var l,c=this;t=Number(t);var f=M.p(u),h=function(e){var n=g(c);return M.w(n.date(n.date()+Math.round(e*t)),c)};if(f===s)return this.set(s,this.$M+t);if(f===o)return this.set(o,this.$y+t);if(f===i)return h(1);if(f===a)return h(7);var d=(l={},l[n]=6e4,l[r]=36e5,l[e]=1e3,l)[f]||1,m=this.$d.getTime()+t*d;return M.w(m,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=M.z(this),i=this.$locale(),a=this.$H,s=this.$m,u=this.$M,o=i.weekdays,l=i.months,c=function(t,r,i,a){return t&&(t[r]||t(e,n))||i[r].substr(0,a)},h=function(t){return M.s(a%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:M.s(u+1,2,"0"),MMM:c(i.monthsShort,u,l,3),MMMM:c(l,u),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,o,2),ddd:c(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:M.s(a,2,"0"),h:h(1),hh:h(2),a:d(a,s,!0),A:d(a,s,!1),m:String(s),mm:M.s(s,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:r};return n.replace(f,(function(t,e){return e||m[t]||r.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,l,c){var f,h=M.p(l),d=g(t),m=6e4*(d.utcOffset()-this.utcOffset()),$=this-d,y=M.m(this,d);return y=(f={},f[o]=y/12,f[s]=y,f[u]=y/3,f[a]=($-m)/6048e5,f[i]=($-m)/864e5,f[r]=$/36e5,f[n]=$/6e4,f[e]=$/1e3,f)[h]||$,c?y:M.a(y)},d.daysInMonth=function(){return this.endOf(s).$D},d.$locale=function(){return y[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=p(t,e,!0);return r&&(n.$L=r),n},d.clone=function(){return M.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},h}(),D=w.prototype;return g.prototype=D,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",s],["$y",o],["$D",l]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),g.extend=function(t,e){return t.$i||(t(e,w,g),t.$i=!0),g},g.locale=p,g.isDayjs=v,g.unix=function(t){return g(1e3*t)},g.en=y[$],g.Ls=y,g.p={},g}()}}]);
//# sourceMappingURL=component---src-pages-index-js-8f04563a294588a7001b.js.map