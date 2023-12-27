import React from 'react';
import Link from '@docusaurus/Link';
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
}

const publications: PAPER[] = [
  {
    id: '/paper_list/LAMM',
    title:
      'LAMM: Language-Assisted Multi-Modal Instruction-Tuning Dataset, Framework, and Benchmark',
    image: '/img/LAMM.png',
    author:
      'Zhenfei Yin*, Jiong Wang*, JianJian Cao*, Zhelun Shi*,  Dingning Liu, Mukai Li, Lu Sheng, Lei Bai†, Xiaoshui Huang, Zhiyong Wang, Jing Shao†, Wanli Ouyang',
    pub: 'NeurIPS, 2023, Datasets and Benchmarks Track',
    link: 'https://arxiv.org/abs/2306.06687',
  },
];

const preprint: PAPER[] = [
  {
    id: '/paper_list/ChEF',
    title:
      'ChEF: A Comprehensive Evaluation Framework for Standardized Assessment of Multimodal Large Language Models',
    image: '/img/ChEF.png',
    author:
      'Zhelun Shi*, Zhipin Wang*, Hongxing Fan*, Zhenfei Yin, Lu Sheng†, Yu Qiao, Jing Shao†',
    pub: 'Arxiv, 2023',
    link: 'https://arxiv.org/abs/2306.06687',
  },
  {
    id: '/paper_list/Octavius',
    title: 'Octavius: Mitigating Task Interference in MLLMs via MoE',
    image: '/logo/Octavius_arch.png',
    author:
      'Zeren Chen*, Ziqin Wang*, Zhen Wang*, Huayang Liu, Zhenfei Yin, Si Liu, Lu Sheng†, Wanli Ouyang, Yu Qiao, Jing Shao†',
    pub: 'Arxiv, 2023',
    link: 'https://arxiv.org/abs/2306.06687',
  },
  {
    id: 'https://iranqin.github.io/MP5.github.io/',
    title:
      'MP5: A Multi-modal Open-ended Embodied System in Minecraft via Active Perception',
    image: '/img/MP5.png',
    author:
      'Yiran Qin*, Enshen Zhou*, Qichang Liu*, Zhenfei Yin, Lu Sheng†, Ruimao Zhang†, Yu Qiao, Jing Shao',
    pub: 'Arxiv 2023',
    link: 'https://iranqin.github.io/MP5.github.io/',
  },
  {
    id: 'https://depictqa.github.io/',
    title:
      'DepictQA: Depicting Beyond Scores: Advancing Image Quality Assessment through Multi-modal Language Models',
    image: '/img/DepictQA.png',
    author:
      'Zhiyuan You*, Zheyuan Li*, Jinjin Gu*, Zhenfei Yin, Tianfan Xue+, Chao Dong+',
    pub: 'Arxiv, 2023',
    link: 'https://depictqa.github.io/',
  },
];

function Publish({
  id,
  title,
  image,
  author,
  pub,
  link,
}: (typeof publications)[0]) {
  return (
    <Link
      to={id}
      className="group flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary"
    >
      <img src={image} className="paper_image" />

      <div className="flex flex-col p-1">
        <h4 className="mb-1 font-semibold">{title}</h4>
        <p className="mb-0 text-sm text-text-400">{author}</p>
        <i className="mb-0 text-sm text-text-400">{pub}</i>
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

export function PreprintList() {
  return (
    <section className="no-underline-links my-10 mx-auto mt-2 flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">
      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="m-0">Preprints</h3>
        </div>

        <div className="flex flex-col gap-4">
          {preprint.map((pub) => (
            <Publish {...pub} key={pub.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
