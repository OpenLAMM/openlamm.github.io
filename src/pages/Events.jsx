import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
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
  containerId: string;
  time: string;
  location: string;
}
const publications: PAPER[] = [
  {
    id: 'https://icml-mfm-eai.github.io/',
    title: 'ICML MFM-EAI WorkShop',
    image: '/img/events/mfm-eai.png',
    author: '',
    pub: 'ICML(International Conference on Machine Learning) 2024',
    link: 'https://icml-mfm-eai.github.io/',
    containerId: 'MP5',
    time: 'Fri26 Jul',
    location: 'Messe Wien Exhibition Congress Center, Vienna',
  },
];
function Event({
  id,
  title,
  image,
  author,
  pub,
  link,
  containerId,
  time,
  location,
}: (typeof publications)[0]) {
  return (
    <Link
      to={id}
      id={containerId}
      className="group flex cursor-pointer items-start gap-2 rounded-lg border-2 border-solid border-gray-500 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary"
    >
      <img src={image} className="paper_image" />

      <div className="flex flex-col p-1">
        <h4 className="mb-1 font-bold">{title}</h4>
        <p className="mb-0 text-sm text-text-400">{author}</p>
        <p className="mb-0 text-sm text-text-400">{time}</p>
        <p className="mb-0 text-sm text-text-400">{location}</p>
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
          <h3 className="m-0">Events</h3>
        </div>

        <div className="flex flex-col gap-4">
          {publications.map((pub) => (
            <Event {...pub} key={pub.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default function ResearchPage() {
  return (
    <Layout>
      <PublicationList />
    </Layout>
  );
}
