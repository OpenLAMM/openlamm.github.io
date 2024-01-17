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
import { List } from 'postcss/lib/list';

interface New {
  month: string;
  content: any;
}

const updates: New[] = [
  {
    month: '2023-12',
    content: [
      '1. <a href="https://arxiv.org/abs/2312.08962" target="_blank">DepictQA</a> released on Arxiv and <a href="https://depictqa.github.io/" target="_blank">here</a> is the project page.',
      '2. <a href="https://arxiv.org/abs/2312.07472" target="_blank">MP5</a> released on Arxiv!',
    ],
  },
  {
    month: '2023-11',
    content: [
      '1. <a href="https://arxiv.org/abs/2311.02684" target="_blank">Octavius</a> & <a href="https://arxiv.org/abs/2311.02692" target="_blank">ChEF</a> released on Arxiv!',
      '2. Camera ready version of LAMM is available on <a href="https://arxiv.org/abs/2306.06687" target="_blank">Arxiv</a>.',
    ],
  },
  {
    month: '2023-10',
    content: [
      '1. LAMM is accepted by NeurIPS2023 Datasets & Benchmark Track! See you in December!',
    ],
  },
  {
    month: '2023-09',
    content: [
      '1. Light training framework for V100 or RTX3090 is available! LLaMA2-based finetuning is also online.',
      '2. Our demo moved to <a href="https://openxlab.org.cn/apps/detail/LAMM/LAMM" target="_blank">OpenXLab</a>.',
    ],
  },
  {
    month: '2023-07',
    content: [
      '1.  Checkpoints & Leaderboard of LAMM on huggingface updated on new code base.',
      '2.  Evaluation code for both 2D and 3D tasks are ready.',
      '3.  Command line demo tools updated.',
    ],
  },
  {
    month: '2023-06',
    content: [
      '1. Watch demo video for LAMM at <a href="https://www.youtube.com/watch?v=M7XlIe8hhPk" target="_blank">YouTube</a> or <a href="https://www.bilibili.com/video/BV1kN411D7kt/" target="_blank">Bilibili</a>!',
      '2. Full paper with Appendix is available on <a href="https://arxiv.org/abs/2306.06687" target="_blank">Arxiv</a>.',
      '3. LAMM dataset released on <a href="https://huggingface.co/datasets/openlamm/LAMM_Dataset" target="_blank">Huggingface</a> & <a href="https://opendatalab.com/LAMM/LAMM" target="_blank">OpenDataLab</a> for Research community!',
      '4. LAMM code is available for Research community!',
    ],
  },
];

function Updates({ month, content }: (typeof updates)[0]) {
  return (
    <div className="flex flex-col p-1">
      <h4 className="mb-1 font-semibold">📆 [{month}]</h4>
      {content.map((item, index) => (
        <p
          key={index}
          className="mb-0 text-lg text-text-400"
          dangerouslySetInnerHTML={{ __html: item }}
        ></p>
      ))}
    </div>
  );
}

export function UpdatesList() {
  return (
    <section className="no-underline-links news-wrap mx-auto mt-14 flex w-full max-w-5xl flex-col p-4 py-0 md:flex-row md:gap-0">
      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="m-0">News</h3>
        </div>

        <div className="flex flex-col gap-4">
          {updates.map((upd) => (
            <Updates {...upd} key={upd.month} />
          ))}
        </div>
      </div>
    </section>
  );
}
