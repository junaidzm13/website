"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[6403],{9701:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var p=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,u=p.length;-1!==t.code.indexOf(r=n(a,u));)++u;return p[u]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function p(u){for(var c=0;c<u.length&&!(r>=o.length);c++){var i=u[c];if("string"===typeof i||i.content&&"string"===typeof i.content){var s=o[r],l=t.tokenStack[s],g="string"===typeof i?i:i.content,f=n(a,s),k=g.indexOf(f);if(k>-1){++r;var m=g.substring(0,k),h=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),y=g.substring(k+f.length),d=[];m&&d.push.apply(d,p([m])),d.push(h),y&&d.push.apply(d,p([y])),"string"===typeof i?u.splice.apply(u,[c,1].concat(d)):i.content=d}}else i.content&&p(i.content)}return u}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.b2c98e45.chunk.js.map