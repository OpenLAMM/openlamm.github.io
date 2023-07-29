import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <a href="/LAMM-Dataset">LAMM-Dataset</a>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        LAMM-Dataset is a comprehensive multi-modal instruction tuning dataset, which contains 186,098 language-image instruction-response pairs, and 10,262 lanuage-3D instruction-response pairs.
      </>
    ),
  },
  {
    title: <a href="/LAMM-Benchmark">Benchmark</a>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        LAMM-Benchmark evaluates 9 common image tasks, using a total of 11 datasets with over 62,439 samples, and 3 common point cloud tasks, by utilizing 3 datasets with over 12,788 data samples
      </>
    ),
  },
  {
    title: <a href="/Leaderboard">Leaderboard</a>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Comparison of Multimodal Large Language Models on 2D & 3D vision tasks
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
