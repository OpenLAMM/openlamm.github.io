import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/datasets',
    component: ComponentCreator('/datasets', '15e'),
    exact: true
  },
  {
    path: '/Leaderboards',
    component: ComponentCreator('/Leaderboards', 'e27'),
    exact: true
  },
  {
    path: '/Model_system_card',
    component: ComponentCreator('/Model_system_card', 'd5b'),
    exact: true
  },
  {
    path: '/paper_list/ChEF',
    component: ComponentCreator('/paper_list/ChEF', '6c4'),
    exact: true
  },
  {
    path: '/paper_list/LAMM',
    component: ComponentCreator('/paper_list/LAMM', '55b'),
    exact: true
  },
  {
    path: '/paper_list/Octavius',
    component: ComponentCreator('/paper_list/Octavius', '8ef'),
    exact: true
  },
  {
    path: '/Team',
    component: ComponentCreator('/Team', 'b85'),
    exact: true
  },
  {
    path: '/Updates',
    component: ComponentCreator('/Updates', '555'),
    exact: true
  },
  {
    path: '/tutorial',
    component: ComponentCreator('/tutorial', '73e'),
    routes: [
      {
        path: '/tutorial',
        component: ComponentCreator('/tutorial', 'de1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial/Benchmark/custom',
        component: ComponentCreator('/tutorial/Benchmark/custom', 'c21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial/Benchmark/default',
        component: ComponentCreator('/tutorial/Benchmark/default', '12d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial/citations',
        component: ComponentCreator('/tutorial/citations', '39f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial/Datasets',
        component: ComponentCreator('/tutorial/Datasets', 'be8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial/Datasets/benchmark',
        component: ComponentCreator('/tutorial/Datasets/benchmark', '323'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial/Datasets/instruction',
        component: ComponentCreator('/tutorial/Datasets/instruction', '834'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial/installation',
        component: ComponentCreator('/tutorial/installation', 'ccd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial/Training',
        component: ComponentCreator('/tutorial/Training', 'df4'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b35'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
