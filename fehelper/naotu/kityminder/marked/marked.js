!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).marked=t()}(this,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}var n,r=(function(e){e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},getDefaults:function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}},changeDefaults:function(t){e.exports.defaults=t}}}(n={exports:{}}),n.exports),s=(r.defaults,r.getDefaults,r.changeDefaults,/[&<>"']/),i=/[&<>"']/g,l=/[<>"']|&(?!#?\w+;)/,a=/[<>"']|&(?!#?\w+;)/g,o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},h=function(e){return o[e]},u=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function c(e){return e.replace(u,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}var p=/(^|[^\[])\^/g,g=/[^\w:]/g,f=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,d={},k=/^[^:]+:\/*[^\/]*$/,b=/^([^:]+:)[\s\S]*$/,m=/^([^:]+:\/*[^\/]*)[\s\S]*$/;function x(e,t,n){var r=e.length;if(0===r)return"";for(var s=0;s<r;){var i=e.charAt(r-s-1);if(i!==t||n){if(i===t||!n)break;s++}else s++}return e.substr(0,r-s)}var _=function(e,t){if(t){if(s.test(e))return e.replace(i,h)}else if(l.test(e))return e.replace(a,h);return e},y=c,w=function(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},v=x,$={exec:function(){}},S=function(e,t){e=e.source||e,t=t||"";var n={replace:function(t,r){return r=(r=r.source||r).replace(p,"$1"),e=e.replace(t,r),n},getRegex:function(){return new RegExp(e,t)}};return n},z=w,A={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:$,table:$,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};A.def=S(A.def).replace("label",A._label).replace("title",A._title).getRegex(),A.bullet=/(?:[*+-]|\d{1,9}\.)/,A.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,A.item=S(A.item,"gm").replace(/bull/g,A.bullet).getRegex(),A.list=S(A.list).replace(/bull/g,A.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+A.def.source+")").getRegex(),A._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",A._comment=/<!--(?!-?>)[\s\S]*?-->/,A.html=S(A.html,"i").replace("comment",A._comment).replace("tag",A._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),A.paragraph=S(A._paragraph).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",A._tag).getRegex(),A.blockquote=S(A.blockquote).replace("paragraph",A.paragraph).getRegex(),A.normal=z({},A),A.gfm=z({},A.normal,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),A.pedantic=z({},A.normal,{html:S("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",A._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:$,paragraph:S(A.normal._paragraph).replace("hr",A.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",A.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var R={escape:/^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:$,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:$,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};R.em=S(R.em).replace(/punctuation/g,R._punctuation).getRegex(),R._escapes=/\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g,R._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,R._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,R.autolink=S(R.autolink).replace("scheme",R._scheme).replace("email",R._email).getRegex(),R._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,R.tag=S(R.tag).replace("comment",A._comment).replace("attribute",R._attribute).getRegex(),R._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,R._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,R._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,R.link=S(R.link).replace("label",R._label).replace("href",R._href).replace("title",R._title).getRegex(),R.reflink=S(R.reflink).replace("label",R._label).getRegex(),R.normal=z({},R),R.pedantic=z({},R.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:S(/^!?\[(label)\]\((.*?)\)/).replace("label",R._label).getRegex(),reflink:S(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",R._label).getRegex()}),R.gfm=z({},R.normal,{escape:S(R.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),R.gfm.url=S(R.gfm.url,"i").replace("email",R.gfm._extended_email).getRegex(),R.breaks=z({},R.gfm,{br:S(R.br).replace("{2,}","*").getRegex(),text:S(R.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var Z={block:A,inline:R},L=r.defaults,q=Z.block,C=v,O=function(e,t){var n=e.replace(/\|/g,function(e,t,n){for(var r=!1,s=t;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"}).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},P=_,D=function(){function e(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||L,this.rules=q.normal,this.options.pedantic?this.rules=q.pedantic:this.options.gfm&&(this.rules=q.gfm)}e.lex=function(t,n){return new e(n).lex(t)};var n=e.prototype;return n.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)},n.token=function(e,t){var n,r,s,i,l,a,o,h,u,c,p,g,f,d,k,b;for(e=e.replace(/^ +$/gm,"");e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e)){var m=this.tokens[this.tokens.length-1];e=e.substring(s[0].length),m&&"paragraph"===m.type?m.text+="\n"+s[0].trimRight():(s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?s:C(s,"\n")}))}else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2]?s[2].trim():s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if((s=this.rules.nptable.exec(e))&&(a={type:"table",header:O(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===a.align.length){for(e=e.substring(s[0].length),p=0;p<a.align.length;p++)/^ *-+: *$/.test(a.align[p])?a.align[p]="right":/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null;for(p=0;p<a.cells.length;p++)a.cells[p]=O(a.cells[p],a.header.length);this.tokens.push(a)}else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),o={type:"list_start",ordered:d=(i=s[2]).length>1,start:d?+i:"",loose:!1},this.tokens.push(o),h=[],n=!1,f=(s=s[0].match(this.rules.item)).length,p=0;p<f;p++)c=(a=s[p]).length,~(a=a.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(c-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+c+"}","gm"),"")),p!==f-1&&(l=q.bullet.exec(s[p+1])[0],(i.length>1?1===l.length:l.length>1||this.options.smartLists&&l!==i)&&(e=s.slice(p+1).join("\n")+e,p=f-1)),r=n||/\n\n(?!\s*$)/.test(a),p!==f-1&&(n="\n"===a.charAt(a.length-1),r||(r=n)),r&&(o.loose=!0),b=void 0,(k=/^\[[ xX]\] /.test(a))&&(b=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),u={type:"list_item_start",task:k,checked:b,loose:r},h.push(u),this.tokens.push(u),this.token(a,!1),this.tokens.push({type:"list_item_end"});if(o.loose)for(f=h.length,p=0;p<f;p++)h[p].loose=!0;this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):P(s[0]):s[0]});else if(t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),g=s[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[g]||(this.tokens.links[g]={href:s[2],title:s[3]});else if((s=this.rules.table.exec(e))&&(a={type:"table",header:O(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===a.align.length){for(e=e.substring(s[0].length),p=0;p<a.align.length;p++)/^ *-+: *$/.test(a.align[p])?a.align[p]="right":/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null;for(p=0;p<a.cells.length;p++)a.cells[p]=O(a.cells[p].replace(/^ *\| *| *\| *$/g,""),a.header.length);this.tokens.push(a)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2].charAt(0)?1:2,text:s[1]});else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens},t(e,null,[{key:"rules",get:function(){return q}}]),e}(),E=r.defaults,j=function(e,t,n){if(e){var r;try{r=decodeURIComponent(c(n)).replace(g,"").toLowerCase()}catch(e){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!f.test(n)&&(n=function(e,t){d[" "+e]||(k.test(e)?d[" "+e]=e+"/":d[" "+e]=x(e,"/",!0));var n=-1===(e=d[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(b,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(m,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},I=_,T=function(){function e(e){this.options=e||E}var t=e.prototype;return t.code=function(e,t,n){var r=(t||"").match(/\S*/)[0];if(this.options.highlight){var s=this.options.highlight(e,r);null!=s&&s!==e&&(n=!0,e=s)}return r?'<pre><code class="'+this.options.langPrefix+I(r,!0)+'">'+(n?e:I(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:I(e,!0))+"</code></pre>"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,n){if(null===(e=j(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<a href="'+I(e)+'"';return t&&(r+=' title="'+t+'"'),r+">"+n+"</a>"},t.image=function(e,t,n){if(null===(e=j(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+(this.options.xhtml?"/>":">")},t.text=function(e){return e},e}(),U=function(){function e(){this.seen={}}return e.prototype.slug=function(e){var t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){var n=t;do{this.seen[n]++,t=n+"-"+this.seen[n]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t},e}(),B=r.defaults,F=Z.inline,N=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,r=0,s=0;s<n;s++)if("\\"===e[s])s++;else if(e[s]===t[0])r++;else if(e[s]===t[1]&&--r<0)return s;return-1},X=_,G=function(){function e(e,t){if(this.options=t||B,this.links=e,this.rules=F.normal,this.options.renderer=this.options.renderer||new T,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=F.pedantic:this.options.gfm&&(this.options.breaks?this.rules=F.breaks:this.rules=F.gfm)}e.output=function(t,n,r){return new e(n,r).output(t)};var n=e.prototype;return n.output=function(t){for(var n,r,s,i,l,a,o="";t;)if(l=this.rules.escape.exec(t))t=t.substring(l[0].length),o+=X(l[1]);else if(l=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(l[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(l[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(l[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(l[0])&&(this.inRawBlock=!1),t=t.substring(l[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):X(l[0]):l[0];else if(l=this.rules.link.exec(t)){var h=N(l[2],"()");if(h>-1){var u=(0===l[0].indexOf("!")?5:4)+l[1].length+h;l[2]=l[2].substring(0,h),l[0]=l[0].substring(0,u).trim(),l[3]=""}t=t.substring(l[0].length),this.inLink=!0,s=l[2],this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s))?(s=n[1],i=n[3]):i="":i=l[3]?l[3].slice(1,-1):"",s=s.trim().replace(/^<([\s\S]*)>$/,"$1"),o+=this.outputLink(l,{href:e.escapes(s),title:e.escapes(i)}),this.inLink=!1}else if((l=this.rules.reflink.exec(t))||(l=this.rules.nolink.exec(t))){if(t=t.substring(l[0].length),n=(l[2]||l[1]).replace(/\s+/g," "),!(n=this.links[n.toLowerCase()])||!n.href){o+=l[0].charAt(0),t=l[0].substring(1)+t;continue}this.inLink=!0,o+=this.outputLink(l,n),this.inLink=!1}else if(l=this.rules.strong.exec(t))t=t.substring(l[0].length),o+=this.renderer.strong(this.output(l[4]||l[3]||l[2]||l[1]));else if(l=this.rules.em.exec(t))t=t.substring(l[0].length),o+=this.renderer.em(this.output(l[6]||l[5]||l[4]||l[3]||l[2]||l[1]));else if(l=this.rules.code.exec(t))t=t.substring(l[0].length),o+=this.renderer.codespan(X(l[2].trim(),!0));else if(l=this.rules.br.exec(t))t=t.substring(l[0].length),o+=this.renderer.br();else if(l=this.rules.del.exec(t))t=t.substring(l[0].length),o+=this.renderer.del(this.output(l[1]));else if(l=this.rules.autolink.exec(t))t=t.substring(l[0].length),s="@"===l[2]?"mailto:"+(r=X(this.mangle(l[1]))):r=X(l[1]),o+=this.renderer.link(s,null,r);else if(this.inLink||!(l=this.rules.url.exec(t))){if(l=this.rules.text.exec(t))t=t.substring(l[0].length),this.inRawBlock?o+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):X(l[0]):l[0]):o+=this.renderer.text(X(this.smartypants(l[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===l[2])s="mailto:"+(r=X(l[0]));else{do{a=l[0],l[0]=this.rules._backpedal.exec(l[0])[0]}while(a!==l[0]);r=X(l[0]),s="www."===l[1]?"http://"+r:r}t=t.substring(l[0].length),o+=this.renderer.link(s,null,r)}return o},e.escapes=function(t){return t?t.replace(e.rules._escapes,"$1"):t},n.outputLink=function(e,t){var n=t.href,r=t.title?X(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,X(e[1]))},n.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.mangle=function(e){if(!this.options.mangle)return e;for(var t,n=e.length,r="",s=0;s<n;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r},t(e,null,[{key:"rules",get:function(){return F}}]),e}(),M=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),V=r.defaults,H=w,J=y,K=function(){function e(e){this.tokens=[],this.token=null,this.options=e||V,this.options.renderer=this.options.renderer||new T,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new U}e.parse=function(t,n){return new e(n).parse(t)};var t=e.prototype;return t.parse=function(e){this.inline=new G(e.links,this.options),this.inlineText=new G(e.links,H({},this.options,{renderer:new M})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},t.next=function(){return this.token=this.tokens.pop(),this.token},t.peek=function(){return this.tokens[this.tokens.length-1]||0},t.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},t.tok=function(){var e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,J(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var t,n,r,s,i="";for(r="",t=0;t<this.token.header.length;t++)r+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(i+=this.renderer.tablerow(r),t=0;t<this.token.cells.length;t++){for(n=this.token.cells[t],r="",s=0;s<n.length;s++)r+=this.renderer.tablecell(this.inline.output(n[s]),{header:!1,align:this.token.align[s]});e+=this.renderer.tablerow(r)}return this.renderer.table(i,e);case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok();return this.renderer.blockquote(e);case"list_start":e="";for(var l=this.token.ordered,a=this.token.start;"list_end"!==this.next().type;)e+=this.tok();return this.renderer.list(e,l,a);case"list_item_start":e="";var o=this.token.loose,h=this.token.checked,u=this.token.task;if(this.token.task)if(o)if("text"===this.peek().type){var c=this.peek();c.text=this.renderer.checkbox(h)+" "+c.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(h)});else e+=this.renderer.checkbox(h);for(;"list_item_end"!==this.next().type;)e+=o||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,u,h);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var p='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(p);console.log(p)}},e}(),Q=w,W=function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},Y=_,ee=r.getDefaults,te=r.changeDefaults,ne=r.defaults;function re(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){var r=function(){n||(n=t,t=null),t=Q({},re.defaults,t||{}),W(t);var r,s,i=t.highlight,l=0;try{r=D.lex(e,t)}catch(e){return{v:n(e)}}s=r.length;var a=function(e){if(e)return t.highlight=i,n(e);var s;try{s=K.parse(r,t)}catch(t){e=t}return t.highlight=i,e?n(e):n(null,s)};if(!i||i.length<3)return{v:a()};if(delete t.highlight,!s)return{v:a()};for(;l<r.length;l++)!function(e){"code"!==e.type?--s||a():i(e.text,e.lang,function(t,n){return t?a(t):null==n||n===e.text?--s||a():(e.text=n,e.escaped=!0,void(--s||a()))})}(r[l]);return{v:void 0}}();if("object"==typeof r)return r.v}try{return t=Q({},re.defaults,t||{}),W(t),K.parse(D.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||re.defaults).silent)return"<p>An error occurred:</p><pre>"+Y(e.message+"",!0)+"</pre>";throw e}}return re.options=re.setOptions=function(e){return Q(re.defaults,e),te(re.defaults),re},re.getDefaults=ee,re.defaults=ne,re.Parser=K,re.parser=K.parse,re.Renderer=T,re.TextRenderer=M,re.Lexer=D,re.lexer=D.lex,re.InlineLexer=G,re.inlineLexer=G.output,re.Slugger=U,re.parse=re,re});