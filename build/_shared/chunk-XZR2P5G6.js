import{c as i,i as n,j as a,k as r,m as s,p as o}from"/myst-online-media-testing/build/_shared/chunk-RMYRWJKG.js";var u=i((b,l)=>{n();a();r();o();s();l.exports=t;t.displayName="openqasm";t.aliases=["qasm"];function t(e){e.languages.openqasm={comment:/\/\*[\s\S]*?\*\/|\/\/.*/,string:{pattern:/"[^"\r\n\t]*"|'[^'\r\n\t]*'/,greedy:!0},keyword:/\b(?:CX|OPENQASM|U|barrier|boxas|boxto|break|const|continue|ctrl|def|defcal|defcalgrammar|delay|else|end|for|gate|gphase|if|in|include|inv|kernel|lengthof|let|measure|pow|reset|return|rotary|stretchinf|while)\b|#pragma\b/,"class-name":/\b(?:angle|bit|bool|creg|fixed|float|int|length|qreg|qubit|stretch|uint)\b/,function:/\b(?:cos|exp|ln|popcount|rotl|rotr|sin|sqrt|tan)\b(?=\s*\()/,constant:/\b(?:euler|pi|tau)\b|π|𝜏|ℇ/,number:{pattern:/(^|[^.\w$])(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?(?:dt|ns|us|µs|ms|s)?/i,lookbehind:!0},operator:/->|>>=?|<<=?|&&|\|\||\+\+|--|[!=<>&|~^+\-*/%]=?|@/,punctuation:/[(){}\[\];,:.]/},e.languages.qasm=e.languages.openqasm}});export{u as a};