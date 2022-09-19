import{_ as b,o as C,c as f,a as m,w as v,V as y,b as t,d as n,e as B,r as x}from"./app.7b797feb.js";const E={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:r,createElementVNode:i,openBlock:k,createElementBlock:d}=y,g={style:{width:"200px"}};function o(e,a){const c=p("api-select");return k(),d("div",null,[i("div",g,[r(c,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),api:e.getApi},null,8,["modelValue","api"])])])}const{defineComponent:s}=y;return{render:o,...s({setup(e,{expose:a}){a();const u={value:"",getApi:()=>new Promise((_,F)=>{setTimeout(()=>_([{value:1,label:"\u9009\u98791"},{value:2,label:"\u9009\u98792",disabled:!0}]),1e3)})};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}})}}(),"render-demo-1":function(){const{resolveComponent:p,createVNode:r,createElementVNode:i,openBlock:k,createElementBlock:d}=y,g={style:{width:"200px"}};function o(e,a){const c=p("api-select");return k(),d("div",null,[i("div",g,[r(c,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),api:e.getApi,allowSearch:"",isSearch:""},null,8,["modelValue","api"])])])}const{defineComponent:s}=y;return{render:o,...s({setup(e,{expose:a}){a();const u={value:"",getApi:()=>new Promise((_,F)=>{setTimeout(()=>_([{value:1,label:"\u9009\u98791"},{value:2,label:"\u9009\u98792",disabled:!0}]),1e3)})};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}})}}()}},O='{"title":"ApiSelect","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u8FDB\u9636","slug":"\u8FDB\u9636"},{"level":3,"title":"\u8FDC\u7A0B\u641C\u7D22","slug":"\u8FDC\u7A0B\u641C\u7D22"},{"level":2,"title":"\u914D\u5408SearchForm","slug":"\u914D\u5408searchform"}],"relativePath":"components/api-select/index.md"}',D=t("h1",{id:"apiselect",tabindex:"-1"},[n("ApiSelect "),t("a",{class:"header-anchor",href:"#apiselect","aria-hidden":"true"},"#")],-1),A=t("p",null,"\u5E38\u7528\u5728SearchFrom\u4E2D, \u652F\u6301\u914D\u7F6E\u5316\u548C\u8FDC\u7A0B\u52A0\u8F7D",-1),w=t("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[n("\u57FA\u7840\u7528\u6CD5 "),t("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),S=t("p",null,[t("code",null,"v-model"),n("\u3001"),t("code",null,"api"),n("\u5FC5\u4F20")],-1),V=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
 `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n("200px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("api-select")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":api"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("getApi"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("api-select")]),t("span",{class:"token punctuation"},">")]),n(`
 `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token string"},"''"),n(`
`),t("span",{class:"token comment"},"// \u6B64\u5904\u4F7F\u7528axios\u7684api"),n(`
`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"getApi"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Promise"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("resolve"),t("span",{class:"token punctuation"},","),n(" reject")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
            `),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token string-property property"},'"value"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token string-property property"},'"label"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"\u9009\u98791"'),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token string-property property"},'"value"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token string-property property"},'"label"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"\u9009\u98792"'),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token string-property property"},'"disabled"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
            `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"1000"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),N=B('<h2 id="\u8FDB\u9636" tabindex="-1">\u8FDB\u9636 <a class="header-anchor" href="#\u8FDB\u9636" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">valueType</td><td style="text-align:center;"><code>object | string</code></td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">\u662F</td></tr><tr><td style="text-align:center;">api</td><td style="text-align:center;"><code>(params?: any) =&gt; Promise&lt;OptionItem[]&gt;</code></td><td style="text-align:center;">-</td><td style="text-align:center;"><code>axios</code>\u8BF7\u6C42</td></tr><tr><td style="text-align:center;">multiple</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;"><code>false</code></td><td style="text-align:center;">\u662F\u5426\u591A\u9009</td></tr><tr><td style="text-align:center;">allowSearch?</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;"><code>false</code></td><td style="text-align:center;">\u662F\u5426\u53EF\u4EE5\u641C\u7D22</td></tr><tr><td style="text-align:center;">modelValue?</td><td style="text-align:center;"><code>string|number | OptionItem | (string | number | OptionItem)[];</code></td><td style="text-align:center;">-</td><td style="text-align:center;">\u7EC4\u4EF6\u7ED1\u5B9A\u7684v-model</td></tr><tr><td style="text-align:center;">labelField?</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">label</td><td style="text-align:center;">label\u7684key\uFF0C\u4E0Earco-select\u4E00\u81F4</td></tr><tr><td style="text-align:center;">valueField?</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">value</td><td style="text-align:center;">value\u7684key\uFF0C\u4E0Earco-select\u4E00\u81F4</td></tr><tr><td style="text-align:center;">resultField?</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">-</td><td style="text-align:center;">api\u8BF7\u6C42response\u4E0Bdata\u7684key</td></tr><tr><td style="text-align:center;">isSearch?</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;"><code>false</code></td><td style="text-align:center;">\u662F\u5426\u641C\u7D22\u540E\u52A0\u8F7D\u6570\u636E\uFF0CallowSearch\u9700\u8BBE\u7F6E\u4E3Atrue</td></tr></tbody></table><h3 id="\u8FDC\u7A0B\u641C\u7D22" tabindex="-1">\u8FDC\u7A0B\u641C\u7D22 <a class="header-anchor" href="#\u8FDC\u7A0B\u641C\u7D22" aria-hidden="true">#</a></h3><p>\u4F7F\u7528<code>allowSearch</code>\u3001<code>isSearch</code>\u5C5E\u6027\u6765\u5B9E\u73B0\u8FDC\u7A0B\u641C\u7D22</p>',4),j=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
 `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n("200px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("api-select")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":api"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("getApi"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"allowSearch"),n(),t("span",{class:"token attr-name"},"isSearch"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("api-select")]),t("span",{class:"token punctuation"},">")]),n(`
 `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"const"),n(" value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token string"},"''"),n(`
`),t("span",{class:"token comment"},"// \u6B64\u5904\u4F7F\u7528axios\u7684api"),n(`
`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"getApi"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Promise"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("resolve"),t("span",{class:"token punctuation"},","),n(" reject")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
            `),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token string-property property"},'"value"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token string-property property"},'"label"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"\u9009\u98791"'),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token string-property property"},'"value"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token string-property property"},'"label"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"\u9009\u98792"'),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token string-property property"},'"disabled"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
            `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"1000"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),P=t("h2",{id:"\u914D\u5408searchform",tabindex:"-1"},[n("\u914D\u5408SearchForm "),t("a",{class:"header-anchor",href:"#\u914D\u5408searchform","aria-hidden":"true"},"#")],-1);function q(p,r,i,k,d,g){const o=x("render-demo-0"),s=x("demo"),h=x("render-demo-1");return C(),f("div",null,[D,A,w,S,m(s,{sourceCode:`<template>
 <div style="width:200px">
  <api-select v-model="value" :api="getApi"></api-select>
 </div>
</template>
<script lang="ts" setup>
const value = ''
// \u6B64\u5904\u4F7F\u7528axios\u7684api
const getApi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            {
                "value": 1,
                "label": "\u9009\u98791"
            },
            {
                "value": 2,
                "label": "\u9009\u98792",
                "disabled": true
            }
        ]), 1000);
    });
}
<\/script>
`},{highlight:v(()=>[V]),default:v(()=>[m(o)]),_:1}),N,m(s,{sourceCode:`<template>
 <div style="width:200px">
  <api-select v-model="value" :api="getApi" allowSearch isSearch></api-select>
 </div>
</template>
<script lang="ts" setup>
const value = ''
// \u6B64\u5904\u4F7F\u7528axios\u7684api
const getApi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            {
                "value": 1,
                "label": "\u9009\u98791"
            },
            {
                "value": 2,
                "label": "\u9009\u98792",
                "disabled": true
            }
        ]), 1000);
    });
}
<\/script>
`},{highlight:v(()=>[j]),default:v(()=>[m(h)]),_:1}),P])}var $=b(E,[["render",q]]);export{O as __pageData,$ as default};
