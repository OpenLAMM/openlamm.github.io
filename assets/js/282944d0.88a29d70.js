"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[8929],{4920:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});a(7294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={title:"Default Benchmark",sidebar_position:1},p=void 0,s={unversionedId:"Benchmark/default",id:"Benchmark/default",title:"Default Benchmark",description:"LAMM-Benchmark",source:"@site/docs/tutorial/Benchmark/default.mdx",sourceDirName:"Benchmark",slug:"/Benchmark/default",permalink:"/tutorial/Benchmark/default",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Default Benchmark",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Training",permalink:"/tutorial/Training/"},next:{title:"Custom Benchmark",permalink:"/tutorial/Benchmark/custom"}},c={},m=[{value:"LAMM-Benchmark",id:"lamm-benchmark",level:2},{value:"ChEF",id:"chef",level:2},{value:"Download Evaluated MLLMs",id:"download-evaluated-mllms",level:3},{value:"Visual Performance Evaluation",id:"visual-performance-evaluation",level:3},{value:"Desiderata",id:"desiderata",level:3}],d={toc:m};function u(e){var{components:t}=e,o=i(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},d,o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"lamm-benchmark"},"LAMM-Benchmark"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"LAMM Benchmark",src:a(9020).Z,width:"1608",height:"981"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notes"),": LAMM-Benchmark has now been fully implemented using ChEF, and we highly recommend using the latest ChEF evaluation method for benchmarking in your work. ChEF supports the common 2D and 3D tasks evaluation and locating tasks evaluation in LAMM. Please note that the GPT rank metric in LAMM is no longer applicable."),(0,n.kt)("p",null,"To evaluate LAMM/Octavius on LAMM-Benchmark in 2D common tasks, use the pre-defined model config (",(0,n.kt)("inlineCode",{parentName:"p"},"src/config/ChEF/models/lamm.yaml")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"src/config/ChEF/models/octavius_2d+3d.yaml"),") and the pre-defined recipes config (",(0,n.kt)("inlineCode",{parentName:"p"},"src/config/ChEF/scenario_recipes/LAMM/"),")."),(0,n.kt)("p",null,"For example, to evaluate LAMM on ScienceQA, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"python eval.py --model_cfg config/ChEF/models/lamm.yaml  --recipe_cfg config/ChEF/scenario_recipes/LAMM/ScienceQA.yaml\n")),(0,n.kt)("p",null,"If you want to automately running all the evaluations sequentially, you can run"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sh tools/LAMM/eval_lamm2d.sh\nsh tools/LAMM/eval_lamm3d.sh\n")),(0,n.kt)("p",null,"To evaluate Octavius on ScanNet Detection, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sh tools/Octavius/octavius_ChEF.sh\n")),(0,n.kt)("h2",{id:"chef"},"ChEF"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ChEF Benchmark",src:a(2583).Z,width:"1803",height:"955"})),(0,n.kt)("h3",{id:"download-evaluated-mllms"},"Download Evaluated MLLMs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"LLM"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Vision Encoder"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Language Model"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/salesforce/LAVIS"},"InstructBLIP")),(0,n.kt)("td",{parentName:"tr",align:"left"},"EVA-G"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Vicuna 7B"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://storage.googleapis.com/sfr-vision-language-research/LAVIS/models/InstructBLIP/instruct_blip_vicuna7b_trimmed.pth"},"instruct_blip_vicuna7b_trimmed"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/microsoft/unilm/tree/master/kosmos-2"},"Kosmos2")),(0,n.kt)("td",{parentName:"tr",align:"left"},"CLIP ViT-L/14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Decoder 1.3B"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://conversationhub.blob.core.windows.net/beit-share-public/kosmos-2/kosmos-2.pt?sv=2021-10-04&st=2023-06-08T11%3A16%3A02Z&se=2033-06-09T11%3A16%3A00Z&sr=c&sp=r&sig=N4pfCVmSeq4L4tS8QbrFVsX6f6q844eft8xSuXdxU48%3D"},"kosmos-2.pt"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/OpenGVLab/LAMM"},"LAMM")),(0,n.kt)("td",{parentName:"tr",align:"left"},"CLIP ViT-L/14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Vicuna 13B"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://huggingface.co/openlamm/lamm_13b_lora32_186k"},"lamm_13b_lora32_186k"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/ml-lab/LLaMA-Adapter-2"},"LLaMA-Adapter-v2")),(0,n.kt)("td",{parentName:"tr",align:"left"},"CLIP ViT-L/14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LLaMA 7B"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/ml-lab/LLaMA-Adapter-2"},"LORA-BIAS-7B"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/haotian-liu/LLaVA"},"LLaVA")),(0,n.kt)("td",{parentName:"tr",align:"left"},"CLIP ViT-L/14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MPT 7B"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://huggingface.co/liuhaotian/LLaVA-Lightning-MPT-7B-preview"},"LLaVA-Lightning-MPT-7B"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Vision-CAIR/MiniGPT-4"},"MiniGPT-4")),(0,n.kt)("td",{parentName:"tr",align:"left"},"EVA-G"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Vicuna 7B"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://huggingface.co/Vision-CAIR/MiniGPT-4"},"MiniGPT-4"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/X-PLUG/mPLUG-Owl"},"mPLUG-Owl")),(0,n.kt)("td",{parentName:"tr",align:"left"},"CLIP ViT-L/14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LLaMA 7B"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://huggingface.co/MAGAer13/mplug-owl-llama-7b"},"mplug-owl-llama-7b"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Luodian/Otter"},"Otter")),(0,n.kt)("td",{parentName:"tr",align:"left"},"CLIP ViT-L/14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LLaMA 7B"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://huggingface.co/luodian/OTTER-Image-LLaMA7B-LA-InContext"},"OTTER-9B-LA-InContext"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/shikras/shikra"},"Shikra")),(0,n.kt)("td",{parentName:"tr",align:"left"},"CLIP ViT-L/14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LLaMA 7B"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://huggingface.co/shikras/shikra-7b-delta-v1"},"shikra-7b"))))),(0,n.kt)("p",null,"Organize them as below:"),(0,n.kt)("p",null,"..."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ckpt\n\u251c\u2500\u2500 epcl_vit-L_256tokens\n\u251c\u2500\u2500\n\u2502   \u251c\u2500\u2500 lamm_2d               # saved checkpoints in training\n\u2502   \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 ...\n")),(0,n.kt)("h3",{id:"visual-performance-evaluation"},"Visual Performance Evaluation"),(0,n.kt)("p",null,"We provide several recipes and model configs in ",(0,n.kt)("inlineCode",{parentName:"p"},"src/configs/ChEF"),"."),(0,n.kt)("p",null,"For example, to evaluate LAMM on CIFAR10 using the default recipe, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"python tools/eval.py --model_cfg config/ChEF/models/lamm.yaml --recipe_cfg config/ChEF/scenario_recipes/CIFAR10/default.yaml\n")),(0,n.kt)("p",null,"Besides, you would like to conduct evaluation with your custom model, dataset or metric, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/tutorial/Benchmark/custom"},"Custom ChEF Evaluation")),(0,n.kt)("h3",{id:"desiderata"},"Desiderata"),(0,n.kt)("p",null,"ChEF sets up several new evaluations to quantify the ",(0,n.kt)("strong",{parentName:"p"},"desiderata")," (desired capabilities) that a competent MLLM model should possess, as a reliable agent that can perform real-world multimodal interactions."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Calibration")),(0,n.kt)("p",null,"Calibration evaluates how the uncertainty about each MLLM\u2019s prediction is aligned with its accuracy, as highlighted by HELM. ChEF provides the calibration evaluation on ",(0,n.kt)("inlineCode",{parentName:"p"},"MMBench")," (",(0,n.kt)("inlineCode",{parentName:"p"},"src/config/ChEF/desiderata_recipes/Calibration/MMBench.yaml"),") and ",(0,n.kt)("inlineCode",{parentName:"p"},"ScienceQA")," (",(0,n.kt)("inlineCode",{parentName:"p"},"src/config/ChEF/desiderata_recipes/Calibration/ScienceQA.yaml"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"python tools/ChEF/eval_calibration.py --model_cfg model_cfg --recipe_cfg recipe_cfg\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"In-context Learning")),(0,n.kt)("p",null,"In-context learning evaluates the crucial in-context learning (ICL) ability of an MLLM. ChEF provides the in-context learning evaluation on ",(0,n.kt)("inlineCode",{parentName:"p"},"MMBench")," (",(0,n.kt)("inlineCode",{parentName:"p"},"src/config/ChEF/desiderata_recipes/ICL/MMBench.yaml"),") and ",(0,n.kt)("inlineCode",{parentName:"p"},"ScienceQA")," (",(0,n.kt)("inlineCode",{parentName:"p"},"src/config/ChEF/desiderata_recipes/ICL/ScienceQA.yaml"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"python tools/ChEF/eval_icl.py --model_cfg model_cfg --recipe_cfg recipe_cfg\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Instruction Following")),(0,n.kt)("p",null,"Instruction following evaluates how exactly the MLLM relies on the given instructions. ChEF provides the instruction following evaluation on ",(0,n.kt)("inlineCode",{parentName:"p"},"MMBench")," (",(0,n.kt)("inlineCode",{parentName:"p"},"src/config/ChEF/desiderata_recipes/Insfollow/MMBench.yaml"),") and ",(0,n.kt)("inlineCode",{parentName:"p"},"ScienceQA")," (",(0,n.kt)("inlineCode",{parentName:"p"},"src/config/ChEF/desiderata_recipes/Insfollow/ScienceQA.yaml"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"python tools/ChEF/eval_insfollow.py --model_cfg model_cfg --recipe_cfg recipe_cfg\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Language Performance")),(0,n.kt)("p",null,"Language performance evaluates the quality of the generated sentences. ChEF uses the GPT-based metric. Before evaluate the language performance, please first finish the inference on MMBench and ScienceQA, using the default recipes. ",(0,n.kt)("inlineCode",{parentName:"p"},"MMBench_recipe")," (",(0,n.kt)("inlineCode",{parentName:"p"},"src/config/ChEF/scenario_recipes/MMBench/default.yaml"),"), ",(0,n.kt)("inlineCode",{parentName:"p"},"ScienceQA_recipe")," (",(0,n.kt)("inlineCode",{parentName:"p"},"src/config/ChEF/scenario_recipes/ScienceQA/default.yaml"),")"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"python tools/desiderata/eval_langperf.py --base-data-path dataset_path --answer-path results_path --response-dir output_path\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Robustness")),(0,n.kt)("p",null,"Robustness measures how robust an MLLM is to corruption in the multimodal inputs. ChEF provides the robustness evaluation on ",(0,n.kt)("inlineCode",{parentName:"p"},"MMBench")," (",(0,n.kt)("inlineCode",{parentName:"p"},"src/config/ChEF/desiderata_recipes/Robust/MMBench.yaml"),") and ",(0,n.kt)("inlineCode",{parentName:"p"},"ScienceQA")," (",(0,n.kt)("inlineCode",{parentName:"p"},"src/config/ChEF/desiderata_recipes/Robust/ScienceQA.yaml"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"python tools/ChEF/eval_robust.py --model_cfg model_cfg --recipe_cfg recipe_cfg\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hallucination")),(0,n.kt)("p",null,"Hallucination evaluates how an MLLM avoids mentioning visual objects that do not exist in the images. ChEF uses ",(0,n.kt)("inlineCode",{parentName:"p"},"POPE")," (",(0,n.kt)("inlineCode",{parentName:"p"},"src/config/ChEF/desiderata_recipes/Hallucination"),") for hallucination evaluation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"python tools/ChEF/eval_hallucination.py --model_cfg model_cfg --recipe_cfg recipe_cfg\n")))}u.isMDXComponent=!0},9020:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LAMM-Benchmark-58928bdb41121c5872f961975fce9e15.png"},2583:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ChEF-b022afe6ece492202e4ec920b9982431.png"}}]);