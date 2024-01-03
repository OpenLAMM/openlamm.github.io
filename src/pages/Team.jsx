import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Github } from '@styled-icons/boxicons-logos';
import { Home24Regular } from '@fluentui/react-icons';
import { Contributors } from '../components/homepage/CommunitySection';
import { Twitter } from '@styled-icons/boxicons-logos';

const githubUsernames = Contributors();

const Item = ({
  image,
  imgWidth,
  name,
  organization,
  organizationb,
  githubLink,
  homepageLink,
  twitterLink,
}) => {
  const style = imgWidth
    ? {
        flex: 'none',
        maxWidth: 'none',
        width: imgWidth,
      }
    : {};
  return (
    <div className="team-item">
      <div className="team-item-image" style={{ backgroundImage: image }}>
        <img src={image} alt={name} mode="aspectFit" style={style} />
      </div>
      <div className="team-item-info">
        <h2 className="text-center">{name}</h2>
        <div className="team-item-organization">
          <div className="text-center">{organization}</div>
          {organizationb && <div className="text-center">{organizationb}</div>}
        </div>
        <p></p>
        <div className="padding-top:10px; text-center">
          {twitterLink && (
            <a
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="margin-right: 15px;"
            >
              <Twitter className="h-10 w-10 text-zinc-400 hover:text-primary" />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="margin-right: 15px;"
            >
              <Github className="h-10 w-10 text-zinc-400 hover:text-primary" />
            </a>
          )}
          {homepageLink && (
            <a
              href={homepageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="margin-right: 15px;"
            >
              <Home24Regular className="h-10 w-10 text-zinc-400 hover:text-primary" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ItemList = ({ items }) => {
  return (
    <div className="team-item-list">
      {items.map((item, index) => (
        <Item
          key={index}
          imgWidth={item.imgWidth}
          image={item.image}
          name={item.name}
          organization={item.organization}
          organizationb={item.organizationb}
          githubLink={item.githubLink}
          homepageLink={item.homepageLink}
          twitterLink={item.twitter}
        />
      ))}
    </div>
  );
};

const items = [
  {
    image: '/img/group/yzf.png',
    imgWidth: '120%',
    name: 'Zhenfei Yin',
    organization: 'University of Sydney',
    organizationb: 'Shanghai AI Laboratory',
    githubLink: 'https://github.com/yinzhenfei',
    twitter: 'https://x.com/9ldrohjze56jsh9?s=21',
    homepageLink:
      'https://scholar.google.com/citations?hl=zh-CN&user=ngPR1dIAAAAJ',
  },
  {
    image: '/img/group/wj.jpg',
    name: 'Jiong Wang',
    organization: 'Fudan University',
    organizationb: 'Shanghai AI Laboratory',
    githubLink: 'https://github.com/wangjiongw',
    homepageLink: 'https://wangjiongw.github.io/',
  },
  {
    image: '/img/group/szl.jpg',
    imgWidth: '110%',
    name: 'Zhelun Shi',
    organization: 'Beihang University',
    organizationb: 'Shanghai AI Laboratory',
    githubLink: 'https://github.com/Coach257',
    homepageLink:
      'https://scholar.google.com/citations?hl=zh-CN&user=EDLcoVkAAAAJ',
  },
  {
    image: '/img/group/czr.jpg',
    imgWidth: '110%',
    name: 'Zeren Chen',
    organization: 'Beihang University',
    organizationb: 'Shanghai AI Laboratory',
    githubLink: 'https://github.com/Zx55',
    homepageLink:
      'https://scholar.google.com/citations?hl=zh-CN&user=fdDOA-0AAAAJ',
  },
  {
    image: '/img/group/qyr.png',
    imgWidth: '110%',
    name: 'Yiran Qin',
    organization: 'The Chinese University of Hong Kong, Shenzhen',
    organizationb: 'Shanghai AI Laboratory',
    githubLink: 'https://github.com/IranQin',
    homepageLink: '',
  },
  {
    image: '/img/group/zes.jpg',
    imgWidth: '110%',
    name: 'Enshen Zhou',
    organization: 'Beihang University',
    organizationb: 'Shanghai AI Laboratory',
    githubLink: 'https://github.com/Zhoues',
    homepageLink:
      'https://scholar.google.com/citations?user=8Wd7-NAAAAAJ&hl=zh-CN',
  },
  {
    image: '/img/group/gjj.jpg',
    imgWidth: '100%',
    name: 'Jinjin Gu',
    organization: 'University of Sydney',
    organizationb: 'Shanghai AI Laboratory',
    githubLink: '',
    homepageLink: 'https://www.jasongt.com',
  },
  {
    image: '/img/group/yzy.jpg',
    imgWidth: '110%',
    name: 'Zhiyuan You',
    organization: 'The Chinese University of Hong Kong',
    organizationb:
      'Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences',
    githubLink: '',
    homepageLink: 'https://zhiyuanyou.github.io',
  },
];

const advisor = [
  {
    image: '/img/group/sj.jpg',
    imgWidth: '113%',
    name: 'Jing Shao',
    organization: 'Shanghai AI Laboratory',
    twitter: 'https://twitter.com/Amanda_JShao',
    githubLink: '',
    homepageLink: 'https://amandajshao.github.io/',
  },
  {
    image: '/img/group/sl.jpg',
    name: 'Lu Sheng',
    organization: 'Beihang University',
    githubLink: '',
    twitter: 'https://twitter.com/SHENGLui1989',
    homepageLink: 'https://scholar.google.com.hk/citations?user=_8lB7xcAAAAJ',
  },
  {
    image: '/img/group/zrm.png',
    name: 'Ruimao Zhang',
    organization: 'The Chinese University of Hong Kong, Shenzhen',
    twitter: '',
    githubLink: '',
    homepageLink: 'http://zhangruimao.site/',
  },

  {
    image: '/img/group/xtf.jpg',
    name: 'Tianfan Xue',
    organization: 'The Chinese University of Hong Kong',
    organizationb: 'Shanghai AI Laboratory',
    twitter: '',
    githubLink: '',
    homepageLink: 'https://tianfan.info',
  },
  {
    image: '/img/group/dc.png',
    name: 'Chao Dong',
    organization:
      'Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences',
    organizationb: 'Shanghai AI Laboratory',
    twitter: '',
    githubLink: '',
    homepageLink: 'https://xpixel.group/2010/01/20/chaodong.html',
  },

  {
    image: '/img/group/qy.jpg',
    name: 'Yu Qiao',
    imgWidth: '100%',
    organization: 'Shanghai AI Laboratory',
    githubLink: '',
    homepageLink:
      'https://scholar.google.com/citations?hl=zh-CN&user=gFtI-8QAAAAJ',
  },
  {
    image: '/img/group/oywl.jpg',
    // imgWidth: '110%',
    name: 'Wanli Ouyang',
    organization: 'Shanghai AI Laboratory',
    twitter: 'https://twitter.com/ouyang_wanli',
    githubLink: '',
    homepageLink: 'https://wlouyang.github.io/',
  },
];

export default function Homepage() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <Layout>
      <section className="no-underline-links p- my-2 mx-auto mt-5 flex w-full max-w-5xl flex-col gap-10 py-0 md:flex-row md:gap-0">
        <div className="flex-1">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="m-0">Organizer</h2>
          </div>
          <ItemList items={items} />
        </div>
      </section>

      <section className="no-underline-links p- my-2 mx-auto flex w-full max-w-5xl flex-col gap-10 py-0 md:flex-row md:gap-0">
        <div className="flex-1">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="m-0">Advisor Committee</h2>
          </div>
          <ItemList items={advisor} />
        </div>
      </section>

      <section className="no-underline-links my-2 mx-auto flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">
        <div className="flex-1">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="m-0">Contributors</h2>
          </div>
          <div className="mx-auto mb-10 flex flex-wrap -space-x-1.5">
            <p className="mb-10 text-zinc-500"></p>
            {githubUsernames.map((username) => (
              <div
                className="group relative"
                onMouseEnter={() => handleMouseEnter(username)}
                onMouseLeave={handleMouseLeave}
              >
                <a href={`https://github.com/${username}`}>
                  {hoveredItem === username && (
                    <div className="tooltip">{username}</div>
                  )}
                  <img
                    key={username}
                    src={`https://github.com/${username}.png?size=60`}
                    alt={`User ${username}`}
                    loading="lazy"
                    className="h-6 w-6 rounded-full border-2 border-solid border-white transition group-hover:-translate-y-2 group-hover:scale-150 lg:h-12 lg:w-12"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="no-underline-links my-10 mx-auto flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">
        <div className="flex-1">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="m-0">Acknowledge</h2>
          </div>
          <p>
            We thanks the great works including{' '}
            <a href="https://github.com/openai/CLIP">CLIP</a>,{' '}
            <a href="https://arxiv.org/abs/2212.04098">EPCL</a>,{' '}
            <a href="https://github.com/facebookresearch/llama">LLaMA</a>,{' '}
            <a href="https://github.com/lm-sys/FastChat">Vicuna</a>,{' '}
            <a href="https://github.com/Dao-AILab/flash-attention/">
              FlashAttention
            </a>
            ,{' '}
            <a href="https://github.com/facebookresearch/xformers">xformers</a>,{' '}
            <a href="https://github.com/ModelTC/lightllm">lightllm</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
