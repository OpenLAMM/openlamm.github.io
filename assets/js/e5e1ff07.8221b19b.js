"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[336],{3637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>j,contentTitle:()=>k,default:()=>w,frontMatter:()=>g,metadata:()=>h,toc:()=>v});r(7294);var n=r(3905),o=r(5607),i=r(368),a=r(4843);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=l("CardSection"),d=l("Card"),b={toc:[]};function f(e){var{components:t}=e,r=u(e,["components"]);return(0,n.kt)("wrapper",s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}({},b,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)(p,{id:"Quickstart",title:"Quickstart",description:"Learn how to prepare the dataset, model, environment, and start training and evaluation.",mdxType:"CardSection"},(0,n.kt)(d,{title:"Datasets",icon:(0,n.kt)(o.$3m,{mdxType:"Database24Regular"}),to:"/tutorial/datasets",description:"Prepare dataset for instruction tuning and benchmark.",mdxType:"Card"}),(0,n.kt)(d,{title:"Installation",icon:(0,n.kt)(i.S5o,{mdxType:"Settings24Regular"}),to:"/tutorial/installation",description:"Prepare the environment.",mdxType:"Card"}),(0,n.kt)(d,{title:"Training",icon:(0,n.kt)(a.TrainingIcon,{mdxType:"TrainingIcon"}),to:"/tutorial/training",description:"Train MLLMs with provided scripts.",mdxType:"Card"}),(0,n.kt)(d,{title:"Benchmark",icon:(0,n.kt)(a.TestBeakerIcon,{mdxType:"TestBeakerIcon"}),to:"/tutorial/benchmark/default",description:"Evaluate MLLMs with LAMM-Benchmark or ChEF.",mdxType:"Card"})))}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function O(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}f.isMDXComponent=!0;const g={slug:"/",sidebar_position:1,sidebar_class_name:"guide_sidebar_index"},k="Tutorial",h={unversionedId:"tutorial",id:"tutorial",title:"Tutorial",description:"Our code is here.",source:"@site/docs/tutorial/tutorial.mdx",sourceDirName:".",slug:"/",permalink:"/tutorial/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1,sidebar_class_name:"guide_sidebar_index"},sidebar:"tutorialSidebar",next:{title:"Datasets",permalink:"/tutorial/Datasets/"}},j={},v=[],P={toc:v};function w(e){var{components:t}=e,r=O(e,["components"]);return(0,n.kt)("wrapper",m(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){y(e,t,r[t])}))}return e}({},P,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tutorial"},"Tutorial"),(0,n.kt)("p",null,"Our code is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenGVLab/LAMM"},"here"),"."),(0,n.kt)(f,{mdxType:"ProductSection"}),(0,n.kt)("p",null,"Once you have successfully configured the environment, the entire directory structure should be as follows: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"LAMM\n\u251c\u2500\u2500 ckpt \n\u2502   \u251c\u2500\u2500 lamm_2d               # saved checkpoints in training\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 data                      # dataset folder, see `Dataset Preparation` section for detail\n\u2502\xa0\xa0 \u251c\u2500\u2500 LAMM                  # LAMM dataset\n\u2502\xa0\xa0 \u251c\u2500\u2500 Octavius              # Octavius dataset\n\u2502   \u251c\u2500\u2500 ChEF                  # ChEF dataset  \n\u2502   \u2514\u2500\u2500 ...                   # your custom dataset\n\u251c\u2500\u2500 docs                      # document\n\u251c\u2500\u2500 images                    # readme assets\n\u251c\u2500\u2500 model_zoo                 # see `Model Preparation for Training` for detail \n\u2502   \u251c\u2500\u2500 vicuna_ckpt           # Vicuna-7B/13B\n\u2502   \u251c\u2500\u2500 epcl_vit-L_256tokens  # EPCL pretraining checkpoints (Optional)\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 requirements              # python environment requirements \n\u251c\u2500\u2500 src\n\u2514\u2500\u2500 ...\n")))}w.isMDXComponent=!0}}]);