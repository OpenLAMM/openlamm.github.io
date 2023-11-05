import React from 'react';
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
      <UpdatesList />
      <PublicationList />
      <PreprintList />

      <CommunitySection />

      <HomeFooter />
    </Layout>
  );
}
