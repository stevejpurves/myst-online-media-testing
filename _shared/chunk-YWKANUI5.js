import{a as H}from"/myst-online-media-testing/build/_shared/chunk-YQWGS2LE.js";import{c as z,i as g,j as p,k as d,m as h,p as m}from"/myst-online-media-testing/build/_shared/chunk-RMYRWJKG.js";var A=z((B,f)=>{g();p();d();m();h();var R=H();f.exports=n;n.displayName="cshtml";n.aliases=["razor"];function n(l){l.register(R),function(s){var v=/\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source,w=/@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source+"|"+/'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;function o(a,S){for(var i=0;i<S;i++)a=a.replace(/<self>/g,function(){return"(?:"+a+")"});return a.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,"(?:"+w+")").replace(/<comment>/g,"(?:"+v+")")}var r=o(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source,2),y=o(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source,2),e=o(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source,2),b=o(/<(?:[^<>'"@/]|<str>|<comment>|<self>)*>/.source,2),c=/(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?/.source,t=/(?!\d)[^\s>\/=$<%]+/.source+c+/\s*\/?>/.source,k=/\B@?/.source+"(?:"+/<([a-zA-Z][\w:]*)/.source+c+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+t+"|"+o(/<\1/.source+c+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+t+"|<self>")+")*"+/<\/\1\s*>/.source,2))+")*"+/<\/\1\s*>/.source+"|"+/</.source+t+")";s.languages.cshtml=s.languages.extend("markup",{});var x=s.languages.insertBefore("csharp","string",{html:{pattern:RegExp(k),greedy:!0,inside:s.languages.cshtml}},{csharp:s.languages.extend("csharp",{})}),u={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:x};s.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp(/(^|[^@])@/.source+"(?:"+[e,/(?:code|functions)\s*/.source+e,/(?:for|foreach|lock|switch|using|while)\s*/.source+r+/\s*/.source+e,/do\s*/.source+e+/\s*while\s*/.source+r+/(?:\s*;)?/.source,/try\s*/.source+e+/\s*catch\s*/.source+r+/\s*/.source+e+/\s*finally\s*/.source+e,/if\s*/.source+r+/\s*/.source+e+"(?:"+/\s*else/.source+"(?:"+/\s+if\s*/.source+r+")?"+/\s*/.source+e+")*"].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:u}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:u}},value:{pattern:RegExp(/(^|[^@])@/.source+/(?:await\b\s*)?/.source+"(?:"+/\w+\b/.source+"|"+r+")(?:"+/[?!]?\.\w+\b/.source+"|"+r+"|"+y+"|"+b+r+")*"),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:u}},"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),s.languages.razor=s.languages.cshtml}(l)}});export{A as a};
