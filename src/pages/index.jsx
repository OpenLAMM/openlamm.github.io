import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/homepage/HeroSection';
import APIReferenceSection from '../components/homepage/APIReferenceSection';
import CommunitySection from '../components/homepage/CommunitySection';
import HomeFooter from '../components/homepage/HomeFooter';
import ResourcesSection from '../components/homepage/ResourcesSection';
import HelpSection from '../components/homepage/HelpSection';
import Head from '@docusaurus/Head';
import {PublicationList, PreprintList} from '../components/homepage/GuidesAndSamples';
import SDKs from '../components/homepage/SDKs';
import VideoSection from '../components/homepage/VideoSection';

export default function Homepage() {
  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <Head>
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>

      

      <HeroSection />

      
      <PublicationList />
      <PreprintList />

      {/* <SDKs /> */}
      
      {/* <APIReferenceSection /> */}
      {/* <VideoSection /> */}

      {/* <div className="z-0">
        <ResourcesSection />
        <HelpSection className="-mb-48" />
      </div> */}

      <CommunitySection />

      <HomeFooter />
    </Layout>
  );
}
