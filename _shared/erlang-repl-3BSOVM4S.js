import{c,i as n,j as a,k as r,m as o,p as i}from"/myst-online-media-testing/build/_shared/chunk-RMYRWJKG.js";var u=c((f,t)=>{n();a();r();i();o();function d(e){return e?typeof e=="string"?e:e.source:null}function s(...e){return e.map(b=>d(b)).join("")}function l(e){return{name:"Erlang REPL",keywords:{built_in:"spawn spawn_link self",keyword:"after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"},contains:[{className:"meta",begin:"^[0-9]+> ",relevance:10},e.COMMENT("%","$"),{className:"number",begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",relevance:0},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:s(/\?(::)?/,/([A-Z]\w*)/,/((::)[A-Z]\w*)*/)},{begin:"->"},{begin:"ok"},{begin:"!"},{begin:"(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",relevance:0},{begin:"[A-Z][a-zA-Z0-9_']*",relevance:0}]}}t.exports=l});export default u();