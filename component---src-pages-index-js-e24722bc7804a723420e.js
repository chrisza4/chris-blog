(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{7484:function(t){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",u="quarter",o="year",l="date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+f(r,2,"0")+":"+f(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,u=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:a,y:o,w:s,d:i,D:l,h:r,m:n,s:e,ms:t,Q:u}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",y={};y[$]=d;var p=function(t){return t instanceof D},v=function(t,e,n){var r;if(!t)return $;if("string"==typeof t)y[t]&&(r=t),e&&(y[t]=e,r=t);else{var i=t.name;y[i]=t,r=i}return!n&&r&&($=r),r||!n&&$},g=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},M=m;M.l=v,M.i=p,M.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function d(t){this.$L=v(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return M},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return g(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<g(t)},f.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,u){var c=this,h=!!M.u(u)||u,d=M.p(t),f=function(t,e){var n=M.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return h?n:n.endOf(i)},m=function(t,e){return M.w(c.toDate()[t].apply(c.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},$=this.$W,y=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case o:return h?f(1,0):f(31,11);case a:return h?f(1,y):f(0,y+1);case s:var g=this.$locale().weekStart||0,D=($<g?$+7:$)-g;return f(h?p-D:p+(6-D),y);case i:case l:return m(v+"Hours",0);case r:return m(v+"Minutes",1);case n:return m(v+"Seconds",2);case e:return m(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,u){var c,h=M.p(s),d="set"+(this.$u?"UTC":""),f=(c={},c[i]=d+"Date",c[l]=d+"Date",c[a]=d+"Month",c[o]=d+"FullYear",c[r]=d+"Hours",c[n]=d+"Minutes",c[e]=d+"Seconds",c[t]=d+"Milliseconds",c)[h],m=h===i?this.$D+(u-this.$W):u;if(h===a||h===o){var $=this.clone().set(l,1);$.$d[f](m),$.init(),this.$d=$.set(l,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[M.p(t)]()},f.add=function(t,u){var l,c=this;t=Number(t);var h=M.p(u),d=function(e){var n=g(c);return M.w(n.date(n.date()+Math.round(e*t)),c)};if(h===a)return this.set(a,this.$M+t);if(h===o)return this.set(o,this.$y+t);if(h===i)return d(1);if(h===s)return d(7);var f=(l={},l[n]=6e4,l[r]=36e5,l[e]=1e3,l)[h]||1,m=this.$d.getTime()+t*f;return M.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=M.z(this),i=this.$locale(),s=this.$H,a=this.$m,u=this.$M,o=i.weekdays,l=i.months,c=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return M.s(s%12||12,t,"0")},f=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:M.s(u+1,2,"0"),MMM:c(i.monthsShort,u,l,3),MMMM:c(l,u),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,o,2),ddd:c(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:M.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:r};return n.replace(h,(function(t,e){return e||m[t]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,l,c){var h,d=M.p(l),f=g(t),m=6e4*(f.utcOffset()-this.utcOffset()),$=this-f,y=M.m(this,f);return y=(h={},h[o]=y/12,h[a]=y,h[u]=y/3,h[s]=($-m)/6048e5,h[i]=($-m)/864e5,h[r]=$/36e5,h[n]=$/6e4,h[e]=$/1e3,h)[d]||$,c?y:M.a(y)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return y[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return M.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}(),S=D.prototype;return g.prototype=S,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",a],["$y",o],["$D",l]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),g.extend=function(t,e){return t.$i||(t(e,D,g),t.$i=!0),g},g.locale=v,g.isDayjs=p,g.unix=function(t){return g(1e3*t)},g.en=y[$],g.Ls=y,g.p={},g}()},4110:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};n.en.relativeTime=i;var s=function(e,r,s,a){for(var u,o,l,c=s.$locale().relativeTime||i,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],d=h.length,f=0;f<d;f+=1){var m=h[f];m.d&&(u=a?n(e).diff(s,m.d,!0):s.diff(e,m.d,!0));var $=(t.rounding||Math.round)(Math.abs(u));if(l=u>0,$<=m.r||!m.r){$<=1&&f>0&&(m=h[f-1]);var y=c[m.l];o="string"==typeof y?y.replace("%d",$):y($,r,m.l,l);break}}if(r)return o;var p=l?c.future:c.past;return"function"==typeof p?p(o):p.replace("%s",o)};r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var a=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(a(this),t)},r.fromNow=function(t){return this.from(a(this),t)}}}()},10:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return v}});var r=n(7294),i=n(1883),s=n(8771),a=n(3581),u=n(9357),o=n(7484),l=n.n(o),c=n(4110),h=n.n(c);l().extend(h());var d=l();var f=t=>{const e={fontSize:12,color:"silver",display:"inline",...t.style};return r.createElement("div",{style:e},t.children)};const m=t=>{let{children:e}=t;return r.createElement("div",{style:{marginTop:10}},e)},$=t=>{let{children:e}=t;return r.createElement(f,{style:{marginLeft:10}},e)};var y=()=>{const t=(0,i.useStaticQuery)("2023882863").allDevtoContentJson.nodes;return r.createElement("div",null,r.createElement("h2",null,"Blogs in dev.to"),r.createElement("p",null,"I wrote an engineering focus article here"),t.map(((t,e)=>r.createElement(m,{key:e},r.createElement("a",{href:t.canonical_url},t.title),r.createElement($,null,d(t.published_at).fromNow())))))};var p=()=>{const t=(0,i.useStaticQuery)("3811199574").allPodcastContentJson.nodes;return r.createElement("div",null,r.createElement("h2",null,"Podcasts"),r.createElement("p",null,"I host a podcast name Mindful Coder. It is about software engineering and management."),t.map((t=>r.createElement(m,{key:t.id},r.createElement("a",{href:t.url},t.title),r.createElement($,null,l()(t.publishedDate).fromNow())))))};var v=t=>{var e;let{data:n,location:o}=t;const l=(null===(e=n.site.siteMetadata)||void 0===e?void 0:e.title)||"Title",c=n.allMarkdownRemark.nodes;return r.createElement(r.Fragment,null,r.createElement(a.Z,{location:o,title:l},r.createElement(u.Z,{title:"Chris' Dialogue"}),r.createElement(s.Z,null),r.createElement("ol",{style:{listStyle:"none"}},c.map((t=>{const e=t.frontmatter.title||t.fields.slug;return r.createElement("li",{key:t.fields.slug},r.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h2",null,r.createElement(i.Link,{to:t.fields.slug,itemProp:"url"},r.createElement("span",{itemProp:"headline"},e))),r.createElement("small",null,t.frontmatter.date)),r.createElement("section",null,r.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},itemProp:"description"}))))}))),r.createElement("hr",null),r.createElement(y,null),r.createElement("hr",null),r.createElement(p,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e24722bc7804a723420e.js.map