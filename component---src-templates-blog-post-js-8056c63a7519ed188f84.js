"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{8771:function(e,t,l){var n=l(7294),a=l(1883),r=l(6162);const i=e=>{let{children:t}=e;return n.createElement("div",{style:{marginTop:20}},t)},o=e=>{let{children:t}=e;return n.createElement("div",{style:{marginLeft:50,display:"flex",flexDirection:"column"}},t)},c=e=>{let{children:t}=e;return n.createElement("h2",{style:{display:"block",marginTop:0}},t)};t.Z=()=>{var e,t,l;const m=(0,a.useStaticQuery)("1033745147"),s=null===(e=m.site.siteMetadata)||void 0===e?void 0:e.author,u=null==m||null===(t=m.avatar)||void 0===t||null===(l=t.childImageSharp)||void 0===l?void 0:l.fixed;return n.createElement("div",{className:"bio"},u&&n.createElement(r.Z,{fixed:u,alt:(null==s?void 0:s.name)||"",className:"bio-avatar",imgStyle:{borderRadius:"50%"},loading:"eager"}),(null==s?void 0:s.name)&&n.createElement(o,{style:{marginLeft:50,display:"flex",flexDirection:"column"}},n.createElement("div",null,n.createElement(c,null,"Hi. I'm ",s.name,".")),n.createElement("div",null,(null==s?void 0:s.summary)||null),n.createElement(i,null,"I am currently working at"," ",n.createElement("a",{href:"https://www.thoughtworks.com/"},"ThoughtWorks"))))}},4982:function(e,t,l){l.r(t);var n=l(7294),a=l(1883),r=l(8771),i=l(7820),o=l(9357);t.default=e=>{var t;let{data:l,location:c}=e;const m=l.markdownRemark,s=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",{previous:u,next:d}=l;return n.createElement(n.Fragment,null,n.createElement(i.Z,{location:c,title:s},n.createElement(o.Z,{title:m.frontmatter.title,description:m.frontmatter.description||m.excerpt}),n.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h1",{itemProp:"headline"},m.frontmatter.title),n.createElement("p",null,m.frontmatter.date)),n.createElement("section",{dangerouslySetInnerHTML:{__html:m.html},itemProp:"articleBody"}),n.createElement("hr",null),n.createElement("footer",null,n.createElement(r.Z,null))),n.createElement("nav",{className:"blog-post-nav"},n.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.createElement("li",null,u&&n.createElement(a.Link,{to:u.fields.slug,rel:"prev"},"← ",u.frontmatter.title)),n.createElement("li",null,d&&n.createElement(a.Link,{to:d.fields.slug,rel:"next"},d.frontmatter.title," →"))))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-8056c63a7519ed188f84.js.map