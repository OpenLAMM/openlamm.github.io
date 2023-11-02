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


interface Guide {
  title: string;
  image: any;
  text: string;
  link: string;
}

const guides: Guide[] = [
  {
    title: 'LAMM: Language-Assisted Multi-Modal Instruction-Tuning Dataset, Framework, and Benchmark',
    image: '/img/LAMM.png',
    text: '',
    link: '/guides/capabilities/recording',
  },
  {
    title: 'ChEF: A Comprehensive Evaluation Framework for Standardized Assessment of Multimodal Large Language Models',
    image: '/img/ChEF.svg',
    text: '',
    link: '/guides/migration/twilio/concepts-twilio-vs-dyte',
  },
  {
    title: 'Octavius: Mitigating Task Interference in MLLMs via MoE',
    image: '/img/LAMM.png',
    text: '',
    link: '/guides/capabilities/breakoutroom/create-breakout-rooms',
  },
];

function Guide({ title, image, text,  link }: (typeof guides)[0]) {
  return (
    <Link
      to={link}
      className="group flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary"
    >
      <img src={image} className="h-6 w-6" />

      <div className="flex flex-col">
        <h4 className="mb-1 font-semibold">{title}</h4>
        <p className="mb-0 text-sm text-text-400">{text}</p>
      </div>

      <ChevronRight className="ml-auto h-5 w-5 self-center opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}


export default function GuidesAndSamples() {
  return (
    <section className="no-underline-links my-40 mx-auto flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">
      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="m-0">PAPER LIST</h3>

          {/* <Link to="/guides" className="font-jakarta text-sm font-semibold">
            View more guides <ArrowRightFilled className="ml-1" />
          </Link> */}
        </div>

        <div className="flex flex-col gap-4">
          {guides.map((guide) => (
            <Guide {...guide} key={guide.title} />
          ))}
        </div>
      </div>

      <div
        className={clsx(
          'mx-8 block flex-shrink-0 bg-gradient-to-b from-transparent via-secondary-700 to-transparent',
          'hidden w-px md:block'
        )}
      />
    </section>
  );
}
