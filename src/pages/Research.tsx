import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {
  AppsAddInRegular,
  ArrowRightFilled,
  DocumentRegular,
  OpenRegular,
  RecordRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import clsx from 'clsx';
import { ChevronRight, GitHub } from 'react-feather';

interface PAPER {
  id: string;
  title: string;
  image: any;
  author: string;
  pub: string;
  link: string;
  containerId: string;
  tags: any;
}
const publications: PAPER[] = [
  {
    id: 'https://iranqin.github.io/MP5.github.io/',
    title:
      'MP5: A Multi-modal Open-ended Embodied System in Minecraft via Active Perception',
    image: '/img/MP5.png',
    author:
      'Yiran Qin*, Enshen Zhou*, Qichang Liu*, Zhenfei Yin, Lu Sheng†, Ruimao Zhang†, Yu Qiao, Jing Shao‡',
    pub: 'CVPR (The IEEE/CVF Conference on Computer Vision and Pattern Recognition), 2024',
    link: 'https://iranqin.github.io/MP5.github.io/',
    containerId: 'MP5',
    tags: ['Simulation', 'MineCraft', 'Planning', 'MLLM'],
  },
  {
    id: '/paper_list/Octavius',
    title: 'Octavius: Mitigating Task Interference in MLLMs via MoE',
    image: '/logo/Octavius_arch.png',
    author:
      'Zeren Chen*, Ziqin Wang*, Zhen Wang*, Huayang Liu, Zhenfei Yin‡, Si Liu, Lu Sheng†, Wanli Ouyang, Yu Qiao, Jing Shao†',
    pub: 'ICLR (The International Conference on Learning Representations), 2024',
    link: 'https://arxiv.org/abs/2306.06687',
    containerId: 'Octavius',
    tags: ['MLLM', 'Trainning', '3D Vision'],
  },
  {
    id: 'https://arxiv.org/abs/2401.15071',
    // title:
    //   'From GPT-4 to Gemini and Beyond: Assessing the Landscape of MLLMs on Generalizability, Trustworthiness and Causality through Four Modalities',
    title:
      'From GPT-4 to Gemini and Beyond: Assessing the Landscape of MLLMs on Generalizability, Trustworthiness and Causality through Four Modalities',
    image: '/img/MLLMs.png',
    author:
      'Chaochao Lu, Chen Qian, Guodong Zheng, Hongxing Fan, Hongzhi Gao, Jie Zhang, Jing Shao†, Jingyi Deng, Jinlan Fu, Kexin Huang, Kunchang Li, Lijun Li, Limin Wang, Lu Sheng, Meiqi Chen, Ming Zhang, Qibing Ren, Sirui Chen, Tao Gui, Wanli Ouyang, Yali Wang, Yan Teng, Yaru Wang, Yi Wang, Yinan He, Yingchun Wang, Yixu Wang, Yongting Zhang, Yu Qiao†, Yujiong Shen, Yurong Mou, Yuxi Chen, Zaibin Zhang, Zhelun Shi, Zhenfei Yin‡, Zhipin Wang',
    pub: 'Technical Report, 2024',
    link: 'https://arxiv.org/abs/2401.15071',
    containerId: 'MLLMs',
    tags: ['MLLM', 'Evaluation', 'Human Value', 'Casual Reasoning'],
  },
  {
    id: 'https://sites.google.com/view/rh20t-primitive/main',
    title:
      'RH20T-P: A Primitive-Level Robotic Dataset Towards Composable Generalization Agents',
    image: '/img/rh20t.png',
    author:
      'Zeren Chen*, Zhelun Shi*, Xiaoya Lu*, Lehan He*, Sucheng Qian, Hao Shu Fang, Zhenfei Yin‡, Wanli Ouyang, Jing Shao†, Yu Qiao, Cewu Lu†, Lu Sheng†',
    pub: 'Arxiv 2024',
    link: 'https://sites.google.com/view/rh20t-primitive/main',
    containerId: 'rh20t',
    tags: ['Robot Arm', 'Manipulation', 'MLLM', 'Planning', 'Executing'],
  },
  {
    id: 'https://openlamm.github.io/ch3ef/',
    title:
      'Assessment of Multimodal Large Language Models in Alignment with Human Values',
    image: '/img/ch3ef.png',
    author:
      'Zhelun Shi*, Zhipin Wang*, Hongxing Fan*, Zaibin Zhang, Lijun Li, Yongting Zhang, Zhenfei Yin, Lu Sheng†, Yu Qiao, Jing Shao†',
    pub: 'Arxiv 2024',
    link: 'https://openlamm.github.io/ch3ef/',
    containerId: 'ch3ef',
    tags: ['MLLM', 'Evaluation', 'Human Value'],
  },
  {
    id: 'https://sites.google.com/view/minedreamer/main',
    title:
      'MineDreamer: Learning to Follow Instructions via Chain-of-Imagination for Simulated-World Control ',
    image: '/img/mineDreamer.png',
    author:
      'Enshen Zhou*, Yiran Qin*, Zhenfei Yin, Yuzhou Huang, Ruimao Zhang†, Lu Sheng†, Yu Qiao, Jing Shao‡',
    pub: 'Arxiv 2024',
    link: 'https://sites.google.com/view/minedreamer/main',
    containerId: 'mineDreamer',
    tags: ['Simulation', 'MineCraft', 'MLLM', ' World Model', 'Executing'],
  },
  {
    id: '/paper_list/ChEF',
    title:
      'ChEF: A Comprehensive Evaluation Framework for Standardized Assessment of Multimodal Large Language Models',
    image: '/img/ChEF.png',
    author:
      'Zhelun Shi*, Zhipin Wang*, Hongxing Fan*, Zhenfei Yin, Lu Sheng†, Yu Qiao, Jing Shao†',
    pub: 'Arxiv, 2023',
    link: 'https://arxiv.org/abs/2306.06687',
    containerId: 'ChEF',
    tags: ['MLLM', 'Evaluation'],
  },
  {
    id: '/paper_list/LAMM',
    title:
      'LAMM: Language-Assisted Multi-Modal Instruction-Tuning Dataset, Framework, and Benchmark',
    image: '/img/LAMM.png',
    author:
      'Zhenfei Yin*, Jiong Wang*, JianJian Cao*, Zhelun Shi*,  Dingning Liu, Mukai Li, Lu Sheng, Lei Bai†, Xiaoshui Huang, Zhiyong Wang, Jing Shao†, Wanli Ouyang',
    pub: 'NeurIPS (The Annual Conference on Neural Information Processing Systems), 2023',
    link: 'https://arxiv.org/abs/2306.06687',
    containerId: 'LAMM',
    tags: ['MLLM', 'Training', 'Evaluation', '3D Vision'],
  },
];
function Publish({
  id,
  title,
  image,
  author,
  pub,
  link,
  tags,
  containerId,
}: (typeof publications)[0]) {
  return (
    <Link
      to={id}
      id={containerId}
      className="group flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary"
    >
      <img src={image} className="paper_image" />

      <div className="flex flex-col p-1">
        <h4 className="mb-1 font-bold">{title}</h4>
        <p className="mb-0 text-sm text-text-400">{author}</p>
        <i className="mb-0 text-sm text-text-400">{pub}</i>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-primary px-2 py-1 text-xs font-semibold text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <ChevronRight className="ml-auto h-5 w-5 self-center opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}
export function PublicationList() {
  return (
    <section className="no-underline-links my-10 mx-auto flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">
      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="m-0">Publications</h3>
        </div>

        <div className="flex flex-col gap-4">
          {publications.map((pub) => (
            <Publish {...pub} key={pub.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default function ResearchPage() {
  return (
    <Layout>
      <PublicationList />
    </Layout>
  );
}
