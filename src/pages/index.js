import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://arxiv.org/pdf/2306.06687.pdf">
            paper
          </Link>
          &nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/OpenLAMM/LAMM">
            code
          </Link>
          &nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="https://opendatalab.com/LAMM/download">
            data
          </Link>
          &nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="https://huggingface.co/openlamm">
            Models
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* add video */}
        <div className="video-container" style={{display: 'flex', justifyContent: 'center'}}>
          <iframe
            width="1070"
            height="602"
            src="https://www.youtube.com/embed/M7XlIe8hhPk"
            title="Introducing LAMM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
