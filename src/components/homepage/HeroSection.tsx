import React from 'react';
import Link from '@docusaurus/Link';
import {
  ChatMultipleRegular,
  BookInformation20Regular,
  EmojiSmileSlight20Regular,
  VideoRegular,
  Database24Regular,
  List24Regular,
} from '@fluentui/react-icons';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';
import { Github } from '@styled-icons/boxicons-logos';
import VideoSection from './VideoSection';

import ImgSwiper from '../../components/homepage/ImgSwiper';
const PRODUCTS = [
  {
    title: 'Tutorial',
    link: '/tutorial',
    icon: BookInformation20Regular,
    lightImage: '',
    darkImage: '',
    text: 'Learn how to prepare the dataset, model, environment, and start training and evaluation.',
  },
  {
    title: 'Datasets',
    link: '/datasets',
    icon: Database24Regular,
    lightImage: '',
    darkImage: '',
    text: 'Download the datasets.',
  },
  {
    title: 'Models',
    link: '/Model_system_card',
    icon: EmojiSmileSlight20Regular,
    lightImage: '',
    darkImage: '',
    text: 'Use LAMM Models.',
  },
  {
    title: 'Leaderboards',
    beta: false,
    link: '/Leaderboards',
    icon: List24Regular,
    lightImage: '',
    darkImage: '',
    text: 'View the leaderboards of multimodal large language models.',
  },
];

function HeroProduct({
  link,
  title,
  icon: Icon,
  text,
  lightImage,
  darkImage,
  beta,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group relative cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800'
      )}
    >
      <div className="p-6 !pb-0">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p className="mb-0 text-sm text-zinc-400">{text}</p>
      </div>
      <div className="p-6 !pb-0"></div>
      {/* <ThemedImage
        sources={{
          light: lightImage,
          dark: darkImage,
        }}
        alt={title}
        className="mt-1 w-full transition-transform group-hover:scale-110"
      /> */}
    </Link>
  );
}

export default function HeroSection() {
  return (
    <>
      <section className="no-underline-links lg:py-0" id="HeroSection">
        <div className="flex flex-col items-center justify-between py-14 px-4">
          {/* <h2 className="mb-8 max-w-5xl text-center font-jakarta text-5xl font-bold">
            LAMM: Multi-Modal Large Language Models and Applications as AI
            Agents
          </h2> */}
          <p className="max-w-5xl font-jakarta text-xl">
            <b>LAMM</b> (pronounced as /læm/, means cute lamb to show
            appreciation to LLaMA), is a growing open-source community aimed at
            helping researchers and developers quickly train and evaluate
            Multi-modal Large Language Models (MLLM), and futher build
            multi-modal AI agents capable of bridging the gap between ideas and
            execution, enabling seamless interaction between humans and AI
            machines. <br /> <br />
            As one of the very first open-source endeavors in the MLLM field,
            our goal is to create an ecosystem where every researcher and
            developer can apply, study, and even contribute. We work on various
            aspects including MLLM datasets, frameworks, benchmarks,
            optimizations, and applications as AI Agents. As a fully transparent
            open-source community, any form of collaboration is welcome! <br />
            Please feel free to contact{' '}
            <a href="mailto: zyin7056@uni.sydney.edu.au">Zhenfei Yin</a> or{' '}
            <a href="mailto: shaojing@pjlab.org.cn">Jing Shao</a>!
          </p>
        </div>
      </section>
      {/* <VideoSection /> */}

      <ImgSwiper />
      <div className="pt-20"></div>

      <section className="mx-auto grid w-full max-w-5xl grid-cols-1 grid-rows-2 gap-6 px-4 md:grid-cols-2">
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
      </section>
    </>
  );
}
