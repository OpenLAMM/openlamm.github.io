/*
 * @version: 1.0
 * @author: fengziwei
 * @creatTime: 2023-11-24
 * @updateTime: 2023-12-08
 * @lastEditors: fengziwei
 * @Description :
 */
import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/homepage/HeroSection';
import CommunitySection from '../components/homepage/CommunitySection';
import HomeFooter from '../components/homepage/HomeFooter';
import Head from '@docusaurus/Head';
import {
  PublicationList,
  PreprintList,
} from '../components/homepage/GuidesAndSamples';
import { UpdatesList } from '../components/homepage/update';

export default function Homepage() {
  const [bgHeight, setBgHeight] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      const titleHeight = document
        .querySelector('.homepage-title')
        .getBoundingClientRect().height;
      const heroSectionHejght = document
        .querySelector('#HeroSection')
        .getBoundingClientRect().height;
      setBgHeight(titleHeight + heroSectionHejght);
    }, 500);
  }, []);
  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <div
        className="noise-bg homepage-bg"
        style={{ height: `${bgHeight}px` }}
      ></div>
      <h2 className="homepage-title mb-8 max-w-5xl px-4 pt-16 text-center font-jakarta text-5xl font-bold">
        LAMM: Multi-Modal Large Language Models and Applications as AI Agents
      </h2>
      <div className="homepage-content">
        <Head>
          <link rel="prefetch" href="/assets/css/elements.min.css" />
        </Head>
        <HeroSection />
        <UpdatesList />
        <PublicationList />
        <PreprintList />
      </div>
      <CommunitySection />
      <HomeFooter />
    </Layout>
  );
}
