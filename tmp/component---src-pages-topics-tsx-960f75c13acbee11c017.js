(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/Twm":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("zLVn"),l=a("FdF9"),r=a("yKII"),c=a.n(r),i=function(e){var t=e.children,a=e.plain,r=e.columns,i=e.className,o=Object(n.a)(e,["children","plain","columns","className"]);return l.default.createElement("ol",Object.assign({className:[a?c.a.plain:c.a.boxed,r?c.a["cols"+r]:"",i].filter(Boolean).join(" ")},o),t)}},"4YH7":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));var n=a("zLVn"),l=a("FdF9"),r=a("Wbzz"),c=a("dDWc"),i=a.n(c),o=function(e){var t=e.id,a=e.children,r=e.chunky,c=Object(n.a)(e,["id","children","chunky"]);return l.default.createElement("ol",Object.assign({className:i.a.alphabet+" "+(r?i.a.chunkyAlphabet:""),id:t||"a-to-z"},c),r?l.Children.map(a,(function(e){return Object(l.isValidElement)(e)?Object(l.cloneElement)(e,{chunky:!0}):e})):a)},u=function(e){var t,a=e.children,c=e.label,o=e.to,u=e.chunky,s=Object(n.a)(e,["children","label","to","chunky"]);return t=o?"#"===o[0]?l.default.createElement("a",{href:o,"aria-label":c},a):l.default.createElement(r.Link,{to:o,"aria-label":c},a):l.default.createElement("span",{"aria-label":c},a),l.default.createElement("li",Object.assign({className:i.a.letter+" "+(u?i.a.chunkyLetter:"")},s),t)}},DZST:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("FdF9"),l=(a("N802"),function(e){var t=e.heading,a=e.lead,l=e.cta,r=e.preheading;return n.default.createElement("div",{className:"page-header"},n.default.createElement("h1",{className:"page-header__heading"},r&&n.default.createElement("span",{className:"page-header__pre-heading"},r),t),a&&n.default.createElement("p",{className:"page-header__lead"},a),l&&n.default.createElement("p",{className:"page-header__cta"},l))})},Dl9i:function(e,t,a){"use strict";a.r(t);a("E9XD");var n=a("FdF9"),l=a("Wbzz"),r=a("EYVc"),c=a("DZST"),i=a("4XLq"),o=a("7R1l"),u=a("/Twm"),s=a("4YH7"),d=a("q5g9"),m=a.n(d),p="abcdefghijklmnopqrstuvwxyz".split("");t.default=function(e){var t=e.data.allTopics.nodes,a=Object(n.useMemo)((function(){var e=t.map((function(e){return{slug:e.slug,name:e.topicName,isAlias:!1}})),a=t.reduce((function(e,t){return e.concat(t.aliases.map((function(e){return{slug:t.slug,name:e,isAlias:!0}})))}),[]);return e.concat(a).sort((function(e,t){return e.name.localeCompare(t.name)}))}),[t]),d=Object(n.useMemo)((function(){return p.map((function(e){return{letter:e,topics:a.filter((function(t){return t.name[0].toLowerCase()===e}))}}))}),[p,a]),f=Object(n.useMemo)((function(){return d.filter((function(e){return e.topics.length>0}))}),[d]);return n.default.createElement(i.a,null,n.default.createElement(o.a,{title:"Health topics A to Z"}),n.default.createElement(r.b,null,n.default.createElement(r.a,{to:"https://www.nice.org.uk/"},"NICE"),n.default.createElement(r.a,{to:"/",elementType:l.Link},"CKS"),n.default.createElement(r.a,null,"Health topics A to Z")),n.default.createElement(c.a,{heading:"Health topics A to Z",lead:"There are over 370 topics, with focus on the most common and significant presentations in primary care."}),n.default.createElement(s.a,{id:"a-to-z","aria-label":"Letters A to Z",tabIndex:-1},d.map((function(e){var t=e.letter,a=e.topics;return n.default.createElement(s.b,{key:"alphabet_"+t,to:a.length>0&&"#"+t,label:"Letter '"+t.toUpperCase()+"'"+(0===a.length?" (no topics)":"")},t.toUpperCase())}))),n.default.createElement("nav",{"aria-label":"Health topics A to Z"},n.default.createElement("ol",{className:m.a.topics,"aria-label":"Letters A to Z with matching topics"},f.map((function(e){var t=e.letter,a=e.topics;return n.default.createElement("li",{key:t,className:m.a.letter},n.default.createElement("h2",{id:t,className:m.a.letterHeading,tabIndex:-1,"aria-label":"Topics starting with '"+t.toUpperCase()+"'"},t.toUpperCase()),n.default.createElement(u.a,{"aria-labelledby":t},a.map((function(e){var t=e.slug,a=e.name,r=e.isAlias;return n.default.createElement("li",{key:a},n.default.createElement(l.Link,{to:"/topics/"+t+"/","data-alias":r},a))}))))})))))}},N802:function(e,t,a){},dDWc:function(e,t,a){e.exports={alphabet:"Alphabet-module--alphabet--3R8aM",chunkyAlphabet:"Alphabet-module--chunkyAlphabet--1WIqV",letter:"Alphabet-module--letter--2tWSS",chunkyLetter:"Alphabet-module--chunkyLetter--VyB0u"}},q5g9:function(e,t,a){e.exports={topics:"topics-module--topics--EFZZS",letter:"topics-module--letter--3cgAq",letterHeading:"topics-module--letterHeading--1a7sv"}},yKII:function(e,t,a){e.exports={base:"ColumnList-module--base--3t8gx",boxed:"ColumnList-module--boxed--WKNky ColumnList-module--base--3t8gx",cols2:"ColumnList-module--cols2--3aYRh",plain:"ColumnList-module--plain--2z5rd ColumnList-module--base--3t8gx",cols3:"ColumnList-module--cols3--38Ray"}}}]);
//# sourceMappingURL=component---src-pages-topics-tsx-960f75c13acbee11c017.js.map