"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[8217],{9369:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});a(7294);var n=a(3905);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function r(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}const o={title:"Datasets",sidebar_position:2},c=void 0,l={unversionedId:"Datasets/datasets",id:"Datasets/datasets",title:"Datasets",description:"We divide the dataset into two categories: the instruction dataset and the benchmark dataset.",source:"@site/docs/tutorial/Datasets/datasets.mdx",sourceDirName:"Datasets",slug:"/Datasets/",permalink:"/tutorial/Datasets/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Datasets",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/tutorial/"},next:{title:"Instruction Tuning",permalink:"/tutorial/Datasets/instruction"}},u={},d=[{value:"Instruction Data",id:"instruction-data",level:2},{value:"LAMM",id:"lamm",level:3},{value:"Octavius",id:"octavius",level:3},{value:"Benchmark Data",id:"benchmark-data",level:2},{value:"LAMM",id:"lamm-1",level:3},{value:"ChEF",id:"chef",level:3}],p={toc:d};function m(t){var{components:e}=t,o=r(t,["components"]);return(0,n.kt)("wrapper",s(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},p,o),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We divide the dataset into two categories: the instruction dataset and the benchmark dataset."),(0,n.kt)("h2",{id:"instruction-data"},"Instruction Data"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"LAMM Dataset",src:a(9324).Z,width:"1948",height:"1850"})),(0,n.kt)("h3",{id:"lamm"},"LAMM"),(0,n.kt)("p",null,"LAMM-Dataset is a comprehensive multi-modal instruction tuning dataset, which contains 186K language-image instruction-response pairs, and 10K lanuage-3D instruction-response pairs.In LAMM-Dataset, the instruction-response pairs are gathered from 8 image datasets and 4 point cloud datasets. Here we design four type of multi-modal instruction-response pairs,"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"C1: n-round daily dialogue focuses on multi-modal daily conversations."),(0,n.kt)("li",{parentName:"ul"},"C2: n-round factual knowledge dialogue aims at factual knowledge reasoning."),(0,n.kt)("li",{parentName:"ul"},"C3: 1-round detailed description aims to elaborate images and 3D scenes in texts."),(0,n.kt)("li",{parentName:"ul"},"C4: 1-round visual task dialogue transfers various vision tasks into instruction-response pairs, aiming at enhancing generalizability towards domain tasks in other modalities.")),(0,n.kt)("h3",{id:"octavius"},"Octavius"),(0,n.kt)("p",null,"Octavius additionally integrates generated COCO detection instruction data into original LAMM2D-Dataset as supplement in instruction tuning. For 3D point cloud data, Octavius constructs an novel instruction dataset based on the ScanRefer dataset that includes captioning, VQA and classification tasks, referred to as \u201cScan2Inst\u201d, for 3D instruction tuning."),(0,n.kt)("h2",{id:"benchmark-data"},"Benchmark Data"),(0,n.kt)("h3",{id:"lamm-1"},"LAMM"),(0,n.kt)("p",null,"LAMM-Benchmark evaluates 9 common image tasks, using a total of 11 datasets with over 62,439 samples, and 3 common point cloud tasks, by utilizing 3 datasets with over 12,788 data samples, while existing works only provide quantitative results on fine-tuning and evaluating specific datasets such as ScienceQA, and most works only conduct demonstration or user studies."),(0,n.kt)("h3",{id:"chef"},"ChEF"),(0,n.kt)("p",null,"ChEF evaluates MLLMs across 9 datasets including including CIFAR-10 for classification, Omnibenchmark for fine-grained classification, VOC2012 for object detection, FSC147 for object counting, Flickr30k for image captioning and ScienceQA for multimodal question-answering. We also evaluate the MLLMs on several multi-task datasets including MME, MMbench, and Seedbench. Based on ScienceQA and MMbench, we build ScienceQA_C and MMbench_C dataset by adding corruptions to images and text, to evaluate MLLM's Robustness, which is one of the six desiderata."))}m.isMDXComponent=!0},9324:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/LAMM-Dataset-c2980e90c273a8844e235fc9cf535d2e.png"}}]);