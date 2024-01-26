"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[3713],{6958:(t,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>k});n(7294);var e=n(3905);function r(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function l(t,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):function(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})),t}function i(t,a){if(null==t)return{};var n,e,r=function(t,a){if(null==t)return{};var n,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||(r[n]=t[n]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={},m="Leaderboards",d={type:"mdx",permalink:"/Leaderboards",source:"@site/src/pages/Leaderboards.md",title:"Leaderboards",description:"Visual performance of MLLMs on different Scenarios",frontMatter:{}},k=[{value:"Visual performance of MLLMs on different Scenarios",id:"visual-performance-of-mllms-on-different-scenarios",level:2},{value:"Results of Desiderata",id:"results-of-desiderata",level:2},{value:"Evaluation on GPT-4V and Bard",id:"evaluation-on-gpt-4v-and-bard",level:2},{value:"Quantitative results of MLLMs on Generalizability, Trustworthiness and Causality through Four Modalities",id:"quantitative-results-of-mllms-on-generalizability-trustworthiness-and-causality-through-four-modalities",level:2},{value:"Text",id:"text",level:3},{value:"Code",id:"code",level:3},{value:"Image",id:"image",level:3},{value:"Video",id:"video",level:3}],N={toc:k};function g(t){var{components:a}=t,n=i(t,["components"]);return(0,e.kt)("wrapper",l(function(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},e=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),e.forEach((function(a){r(t,a,n[a])}))}return t}({},N,n),{components:a,mdxType:"MDXLayout"}),(0,e.kt)("h1",{id:"leaderboards"},"Leaderboards"),(0,e.kt)("h2",{id:"visual-performance-of-mllms-on-different-scenarios"},"Visual performance of MLLMs on different Scenarios"),(0,e.kt)("p",null,"For each ",(0,e.kt)("em",{parentName:"p"},"Scenario"),", we conduct various experiments with diverse ",(0,e.kt)("em",{parentName:"p"},"Recipes"),", from which, the ",(0,e.kt)("em",{parentName:"p"},"Recipe")," behaving most reliably (",(0,e.kt)("em",{parentName:"p"},"i.e.")," stable to ",(0,e.kt)("em",{parentName:"p"},"Instruction")," variations) is selected as the default setting to evaluate the visual performance of all MLLMs."),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Scenario")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"CIFAR")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Flickr")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"VOC")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Omni")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"FSC")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"SQA")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"MM")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"SEED")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"MME")))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"LLaVA")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"89.40")),(0,e.kt)("td",{parentName:"tr",align:null},"80.80"),(0,e.kt)("td",{parentName:"tr",align:null},"26.01"),(0,e.kt)("td",{parentName:"tr",align:null},"26.62"),(0,e.kt)("td",{parentName:"tr",align:null},"24.11"),(0,e.kt)("td",{parentName:"tr",align:null},"46.55"),(0,e.kt)("td",{parentName:"tr",align:null},"43.13"),(0,e.kt)("td",{parentName:"tr",align:null},"46.45"),(0,e.kt)("td",{parentName:"tr",align:null},"50.17")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"LAMM")),(0,e.kt)("td",{parentName:"tr",align:null},"80.70"),(0,e.kt)("td",{parentName:"tr",align:null},"72.50"),(0,e.kt)("td",{parentName:"tr",align:null},"29.58"),(0,e.kt)("td",{parentName:"tr",align:null},"22.54"),(0,e.kt)("td",{parentName:"tr",align:null},"19.33"),(0,e.kt)("td",{parentName:"tr",align:null},"52.75"),(0,e.kt)("td",{parentName:"tr",align:null},"44.47"),(0,e.kt)("td",{parentName:"tr",align:null},"47.03"),(0,e.kt)("td",{parentName:"tr",align:null},"55.82")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"MiniGPT-4")),(0,e.kt)("td",{parentName:"tr",align:null},"80.80"),(0,e.kt)("td",{parentName:"tr",align:null},"71.50"),(0,e.kt)("td",{parentName:"tr",align:null},"26.51"),(0,e.kt)("td",{parentName:"tr",align:null},"30.60"),(0,e.kt)("td",{parentName:"tr",align:null},"22.52"),(0,e.kt)("td",{parentName:"tr",align:null},"47.0"),(0,e.kt)("td",{parentName:"tr",align:null},"54.34"),(0,e.kt)("td",{parentName:"tr",align:null},"46.48"),(0,e.kt)("td",{parentName:"tr",align:null},"57.12")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"mPLUG-owl")),(0,e.kt)("td",{parentName:"tr",align:null},"79.67"),(0,e.kt)("td",{parentName:"tr",align:null},"79.20"),(0,e.kt)("td",{parentName:"tr",align:null},"28.50"),(0,e.kt)("td",{parentName:"tr",align:null},"30.70"),(0,e.kt)("td",{parentName:"tr",align:null},"20.92"),(0,e.kt)("td",{parentName:"tr",align:null},"48.44"),(0,e.kt)("td",{parentName:"tr",align:null},"49.57"),(0,e.kt)("td",{parentName:"tr",align:null},"42.81"),(0,e.kt)("td",{parentName:"tr",align:null},"71.59")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Otter")),(0,e.kt)("td",{parentName:"tr",align:null},"81.34"),(0,e.kt)("td",{parentName:"tr",align:null},"71.30"),(0,e.kt)("td",{parentName:"tr",align:null},"27.15"),(0,e.kt)("td",{parentName:"tr",align:null},"26.41"),(0,e.kt)("td",{parentName:"tr",align:null},"20.00"),(0,e.kt)("td",{parentName:"tr",align:null},"50.22"),(0,e.kt)("td",{parentName:"tr",align:null},"53.91"),(0,e.kt)("td",{parentName:"tr",align:null},"36.40"),(0,e.kt)("td",{parentName:"tr",align:null},"63.78")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"LlaMA-Adapter2")),(0,e.kt)("td",{parentName:"tr",align:null},"70.17"),(0,e.kt)("td",{parentName:"tr",align:null},"79.50"),(0,e.kt)("td",{parentName:"tr",align:null},"31.60"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"32.00")),(0,e.kt)("td",{parentName:"tr",align:null},"21.26"),(0,e.kt)("td",{parentName:"tr",align:null},"54.34"),(0,e.kt)("td",{parentName:"tr",align:null},"57.06"),(0,e.kt)("td",{parentName:"tr",align:null},"35.41"),(0,e.kt)("td",{parentName:"tr",align:null},"69.90")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"InstructBLIP")),(0,e.kt)("td",{parentName:"tr",align:null},"84.27"),(0,e.kt)("td",{parentName:"tr",align:null},"79.40"),(0,e.kt)("td",{parentName:"tr",align:null},"27.65"),(0,e.kt)("td",{parentName:"tr",align:null},"30.75"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"25.04")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"55.18")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"65.73")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"50.81")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"72.0"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Shikra")),(0,e.kt)("td",{parentName:"tr",align:null},"68.71"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"94.70")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"55.23")),(0,e.kt)("td",{parentName:"tr",align:null},"22.89"),(0,e.kt)("td",{parentName:"tr",align:null},"22.43"),(0,e.kt)("td",{parentName:"tr",align:null},"45.21"),(0,e.kt)("td",{parentName:"tr",align:null},"63.26"),(0,e.kt)("td",{parentName:"tr",align:null},"49.79"),(0,e.kt)("td",{parentName:"tr",align:null},"70.28")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Kosmos-2")),(0,e.kt)("td",{parentName:"tr",align:null},"88.87"),(0,e.kt)("td",{parentName:"tr",align:null},"85.70"),(0,e.kt)("td",{parentName:"tr",align:null},"54.55"),(0,e.kt)("td",{parentName:"tr",align:null},"21.34"),(0,e.kt)("td",{parentName:"tr",align:null},"21.93"),(0,e.kt)("td",{parentName:"tr",align:null},"34.60"),(0,e.kt)("td",{parentName:"tr",align:null},"32.82"),(0,e.kt)("td",{parentName:"tr",align:null},"46.38"),(0,e.kt)("td",{parentName:"tr",align:null},"52.95")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Random Choice")),(0,e.kt)("td",{parentName:"tr",align:null},"10.0"),(0,e.kt)("td",{parentName:"tr",align:null},"25.00"),(0,e.kt)("td",{parentName:"tr",align:null},"25.00"),(0,e.kt)("td",{parentName:"tr",align:null},"10.94"),(0,e.kt)("td",{parentName:"tr",align:null},"20.00"),(0,e.kt)("td",{parentName:"tr",align:null},"35.80"),(0,e.kt)("td",{parentName:"tr",align:null},"27.57"),(0,e.kt)("td",{parentName:"tr",align:null},"24.27"),(0,e.kt)("td",{parentName:"tr",align:null},"50.00")))),(0,e.kt)("p",null,"*","CIFAR denotes CIFAR-10, Flickr denotes Flickr30k, VOC denotes VOC2012, Omni denotes Omnibenchmark, FSC denotes FSC147, SQA denotes ScienceQA, MM denotes MMbench, and SEED denotes Seedbench."),(0,e.kt)("h2",{id:"results-of-desiderata"},"Results of Desiderata"),(0,e.kt)("p",null,"We employ specialized ",(0,e.kt)("em",{parentName:"p"},"Recipes")," to assess the six dimensions of desiderata. All the six dimensions of desiderata except language performance and hallucination are evaluated on MMBench and ScienceQA. Language performance is evaluated on 250 samples random retrieved from ScienceQA and MMBench. Following POPE, hallucination is specifically assessed on the MSCOCO dataset."),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Desiderata")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Calibration")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"ICL")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Ins. Follow.")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Lang. Perf.")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Hallucination")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Robustness")))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"LLaVA")),(0,e.kt)("td",{parentName:"tr",align:null},"90.1"),(0,e.kt)("td",{parentName:"tr",align:null},"15.15"),(0,e.kt)("td",{parentName:"tr",align:null},"44.23"),(0,e.kt)("td",{parentName:"tr",align:null},"84.82"),(0,e.kt)("td",{parentName:"tr",align:null},"50.51"),(0,e.kt)("td",{parentName:"tr",align:null},"63.36")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"LAMM")),(0,e.kt)("td",{parentName:"tr",align:null},"76.36"),(0,e.kt)("td",{parentName:"tr",align:null},"40.17"),(0,e.kt)("td",{parentName:"tr",align:null},"40.01"),(0,e.kt)("td",{parentName:"tr",align:null},"79.08"),(0,e.kt)("td",{parentName:"tr",align:null},"57.42"),(0,e.kt)("td",{parentName:"tr",align:null},"57.98")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"MiniGPT-4")),(0,e.kt)("td",{parentName:"tr",align:null},"84.73"),(0,e.kt)("td",{parentName:"tr",align:null},"36.85"),(0,e.kt)("td",{parentName:"tr",align:null},"43.73"),(0,e.kt)("td",{parentName:"tr",align:null},"76.00"),(0,e.kt)("td",{parentName:"tr",align:null},"71.30"),(0,e.kt)("td",{parentName:"tr",align:null},"60.40")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"mPLUG-owl")),(0,e.kt)("td",{parentName:"tr",align:null},"84.15"),(0,e.kt)("td",{parentName:"tr",align:null},"33.45"),(0,e.kt)("td",{parentName:"tr",align:null},"36.73"),(0,e.kt)("td",{parentName:"tr",align:null},"88.44"),(0,e.kt)("td",{parentName:"tr",align:null},"52.26"),(0,e.kt)("td",{parentName:"tr",align:null},"51.05")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Otter")),(0,e.kt)("td",{parentName:"tr",align:null},"82.80"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"48.31")),(0,e.kt)("td",{parentName:"tr",align:null},"38.40"),(0,e.kt)("td",{parentName:"tr",align:null},"74.05"),(0,e.kt)("td",{parentName:"tr",align:null},"54.54"),(0,e.kt)("td",{parentName:"tr",align:null},"57.16")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"LlaMA-Adapter2")),(0,e.kt)("td",{parentName:"tr",align:null},"89.61"),(0,e.kt)("td",{parentName:"tr",align:null},"36.52"),(0,e.kt)("td",{parentName:"tr",align:null},"38.76"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"90.85")),(0,e.kt)("td",{parentName:"tr",align:null},"63.83"),(0,e.kt)("td",{parentName:"tr",align:null},"65.37")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"InstructBLIP")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"91.25")),(0,e.kt)("td",{parentName:"tr",align:null},"46.14"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"44.59")),(0,e.kt)("td",{parentName:"tr",align:null},"80.01"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"84.81")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"72.85"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Shikra")),(0,e.kt)("td",{parentName:"tr",align:null},"88.35"),(0,e.kt)("td",{parentName:"tr",align:null},"30.21"),(0,e.kt)("td",{parentName:"tr",align:null},"36.21"),(0,e.kt)("td",{parentName:"tr",align:null},"66.67"),(0,e.kt)("td",{parentName:"tr",align:null},"83.78"),(0,e.kt)("td",{parentName:"tr",align:null},"47.91")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Kosmos-2")),(0,e.kt)("td",{parentName:"tr",align:null},"89.19"),(0,e.kt)("td",{parentName:"tr",align:null},"10.72"),(0,e.kt)("td",{parentName:"tr",align:null},"17.62"),(0,e.kt)("td",{parentName:"tr",align:null},"45.86"),(0,e.kt)("td",{parentName:"tr",align:null},"50.50"),(0,e.kt)("td",{parentName:"tr",align:null},"22.69")))),(0,e.kt)("p",null,"*","ICL denotes In-context learning, Ins. Follow. denotes Instruction Following, and Lang. Perf. denotes Language Performance."),(0,e.kt)("h2",{id:"evaluation-on-gpt-4v-and-bard"},"Evaluation on GPT-4V and Bard"),(0,e.kt)("p",null,"We evaluate GPT-4V(ision) and Bard on MMBench and ScienceQA scenarios, as well as the desiderata including in-context learning, instruction following, hallucination, and robustness. We extract 30 data samples from ScienceQA and MMBench respectively for both scenario evaluations and each of the desideratum evaluation. We compare these two api-only models with three open-source MLLMs (LLaVA, Otter, and MiniGPT4) on the same data samples."),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"MLLM")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"ScienceQA")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"MMBench")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"ICL")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Ins. Follow.")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Robustness")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Hallucination")))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"GPT-4V")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"96.67")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"93.80")),(0,e.kt)("td",{parentName:"tr",align:null},"43.98"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"97.69")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"82.16")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"96.00"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Bard")),(0,e.kt)("td",{parentName:"tr",align:null},"90.00"),(0,e.kt)("td",{parentName:"tr",align:null},"71.43"),(0,e.kt)("td",{parentName:"tr",align:null},"39.61"),(0,e.kt)("td",{parentName:"tr",align:null},"71.41"),(0,e.kt)("td",{parentName:"tr",align:null},"71.05"),(0,e.kt)("td",{parentName:"tr",align:null},"88.88")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"LLaVA")),(0,e.kt)("td",{parentName:"tr",align:null},"50.00"),(0,e.kt)("td",{parentName:"tr",align:null},"43.33"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"47.99")),(0,e.kt)("td",{parentName:"tr",align:null},"36.67"),(0,e.kt)("td",{parentName:"tr",align:null},"34.18"),(0,e.kt)("td",{parentName:"tr",align:null},"36.67")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Otter")),(0,e.kt)("td",{parentName:"tr",align:null},"63.33"),(0,e.kt)("td",{parentName:"tr",align:null},"50.00"),(0,e.kt)("td",{parentName:"tr",align:null},"47.91"),(0,e.kt)("td",{parentName:"tr",align:null},"44.44"),(0,e.kt)("td",{parentName:"tr",align:null},"37.35"),(0,e.kt)("td",{parentName:"tr",align:null},"80.00")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"mPLUG-Owl")),(0,e.kt)("td",{parentName:"tr",align:null},"53.33"),(0,e.kt)("td",{parentName:"tr",align:null},"46.67"),(0,e.kt)("td",{parentName:"tr",align:null},"42.14"),(0,e.kt)("td",{parentName:"tr",align:null},"41.67"),(0,e.kt)("td",{parentName:"tr",align:null},"63.46"),(0,e.kt)("td",{parentName:"tr",align:null},"36.67")))),(0,e.kt)("p",null,"*","ICL denotes In-context learning, and Ins. Follow. denotes Instruction Following."),(0,e.kt)("h2",{id:"quantitative-results-of-mllms-on-generalizability-trustworthiness-and-causality-through-four-modalities"},"Quantitative results of MLLMs on Generalizability, Trustworthiness and Causality through Four Modalities"),(0,e.kt)("p",null,"We evaluated GPT-4, Gemini and 6 open-source LLMs and MLLMs on 3 properties (i.e. generalizability, trustworthiness and causality) through 4 modalities (i.e. ext, code, image, and video) to assess the reliability of MLLMs in supporting various downstream applications. Please refer to From GPT-4 to Gemini and Beyond: Assessing the Landscape of\nMLLMs on Generalizability, Trustworthiness and Causality\nthrough Four Modalities for more details."),(0,e.kt)("h3",{id:"text"},"Text"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Models\\Properties")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Generalization Capability")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Trustworthy")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Causality")))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Gemini Pro")),(0,e.kt)("td",{parentName:"tr",align:null},"59.09"),(0,e.kt)("td",{parentName:"tr",align:null},"14.29"),(0,e.kt)("td",{parentName:"tr",align:null},"31.11")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"GPT-4")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"83.33")),(0,e.kt)("td",{parentName:"tr",align:null},"80.95"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"82.22"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Mixtral")),(0,e.kt)("td",{parentName:"tr",align:null},"33.33"),(0,e.kt)("td",{parentName:"tr",align:null},"54.76"),(0,e.kt)("td",{parentName:"tr",align:null},"44.44")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Llama-2")),(0,e.kt)("td",{parentName:"tr",align:null},"29.55"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"95.24")),(0,e.kt)("td",{parentName:"tr",align:null},"37.78")))),(0,e.kt)("h3",{id:"code"},"Code"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Models\\Properties")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Generalization Capability")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Trustworthy")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Causality")))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Gemini Pro")),(0,e.kt)("td",{parentName:"tr",align:null},"56.86"),(0,e.kt)("td",{parentName:"tr",align:null},"38.88"),(0,e.kt)("td",{parentName:"tr",align:null},"75.00")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"GPT-4")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"88.24")),(0,e.kt)("td",{parentName:"tr",align:null},"58.33"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"91.67"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Mixtral")),(0,e.kt)("td",{parentName:"tr",align:null},"33.33"),(0,e.kt)("td",{parentName:"tr",align:null},"50"),(0,e.kt)("td",{parentName:"tr",align:null},"75.00")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Llama-2")),(0,e.kt)("td",{parentName:"tr",align:null},"21.57"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"61.11")),(0,e.kt)("td",{parentName:"tr",align:null},"58.33")))),(0,e.kt)("h3",{id:"image"},"Image"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Models\\Properties")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Generalization Capability")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Trustworthy")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Causality")))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Gemini Pro")),(0,e.kt)("td",{parentName:"tr",align:null},"87.71"),(0,e.kt)("td",{parentName:"tr",align:null},"73.33"),(0,e.kt)("td",{parentName:"tr",align:null},"56.25")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"GPT-4")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"94.52")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"93.33")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"81.25"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"LLaVA")),(0,e.kt)("td",{parentName:"tr",align:null},"66.86"),(0,e.kt)("td",{parentName:"tr",align:null},"80.61"),(0,e.kt)("td",{parentName:"tr",align:null},"50")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"LAMM")),(0,e.kt)("td",{parentName:"tr",align:null},"70.57"),(0,e.kt)("td",{parentName:"tr",align:null},"81.82"),(0,e.kt)("td",{parentName:"tr",align:null},"43.75")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Qwen-VL")),(0,e.kt)("td",{parentName:"tr",align:null},"67.25"),(0,e.kt)("td",{parentName:"tr",align:null},"81.21"),(0,e.kt)("td",{parentName:"tr",align:null},"46.88")))),(0,e.kt)("h3",{id:"video"},"Video"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Models\\Properties")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Generalization Capability")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Trustworthy")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"Causality")))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"Gemini Pro")),(0,e.kt)("td",{parentName:"tr",align:null},"66.67"),(0,e.kt)("td",{parentName:"tr",align:null},"53"),(0,e.kt)("td",{parentName:"tr",align:null},"44.33")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"GPT-4")),(0,e.kt)("td",{parentName:"tr",align:null},"52.08"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"100")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"50"))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"LLaVA")),(0,e.kt)("td",{parentName:"tr",align:null},"62.50"),(0,e.kt)("td",{parentName:"tr",align:null},"58"),(0,e.kt)("td",{parentName:"tr",align:null},"44.33")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"VideoChat")),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"78.13")),(0,e.kt)("td",{parentName:"tr",align:null},"53"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"td"},"50"))))))}g.isMDXComponent=!0}}]);