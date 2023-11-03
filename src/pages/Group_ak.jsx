import React from 'react';
import Layout from '@theme/Layout';
import 
{
Github,
} from '@styled-icons/boxicons-logos';
import {
  Home24Regular
} from '@fluentui/react-icons';
const Item = ({ image, name, organization, githubLink, homepageLink }) => {
  return (
    <div className="team-item">
      <img src={image} alt={name} className="team-item-image" />
      <div className="team-item-info">
        <h2 className="text-center">{name}</h2>
        <p className="text-center">{organization}</p>
        <div className="text-center">
          {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className='margin-right: 15px;'><Github className="h-10 w-10 text-zinc-400 hover:text-primary"/></a>}
          {homepageLink && <a href={homepageLink} target="_blank" rel="noopener noreferrer" className='margin-right: 15px;'><Home24Regular className="h-10 w-10 text-zinc-400 hover:text-primary"/></a>}
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
          image={item.image}
          name={item.name}
          organization={item.organization}
          githubLink={item.githubLink}
          homepageLink={item.homepageLink}
        />
      ))}
    </div>
  );
};

const items = [
  {
    image: 'https://github.com/Coach257.png', 
    name: 'Zhelun Shi', 
    organization: 'PJLab | BUAA', 
    githubLink: 'https://github.com/Coach257', 
    homepageLink: 'https://github.com/Coach257',
  },
  {
    image: '/img/czrlogo.jpg', 
    name: 'Zeren Chen', 
    organization: 'PJLab | BUAA', 
    githubLink: 'https://github.com/Zx55', 
    homepageLink: 'https://github.com/Zx55',
  },
  {
    image: '/img/czrlogo.jpg', 
    name: 'Zeren Chen', 
    organization: 'PJLab | BUAA', 
    githubLink: 'https://github.com/Zx55', 
    homepageLink: 'https://github.com/Zx55',
  },
  {
    image: '/img/czrlogo.jpg', 
    name: 'Zeren Chen', 
    organization: 'PJLab | BUAA', 
    githubLink: 'https://github.com/Zx55', 
    homepageLink: 'https://github.com/Zx55',
  },
  {
    image: '/img/czrlogo.jpg', 
    name: 'Zeren Chen', 
    organization: 'PJLab | BUAA', 
    githubLink: 'https://github.com/Zx55', 
    homepageLink: 'https://github.com/Zx55',
  },
  {
    image: '/img/czrlogo.jpg', 
    name: 'Zeren Chen', 
    organization: 'PJLab | BUAA', 
    githubLink: 'https://github.com/Zx55', 
    homepageLink: 'https://github.com/Zx55',
  },
  {
    image: '/img/czrlogo.jpg', 
    name: 'Zeren Chen', 
    organization: 'PJLab | BUAA', 
    githubLink: 'https://github.com/Zx55', 
    homepageLink: 'https://github.com/Zx55',
  },
  {
    image: '/img/czrlogo.jpg', 
    name: 'Zeren Chen', 
    organization: 'PJLab | BUAA', 
    githubLink: 'https://github.com/Zx55', 
    homepageLink: 'https://github.com/Zx55',
  },
  {
    image: '/img/czrlogo.jpg', 
    name: 'Zeren Chen', 
    organization: 'PJLab | BUAA', 
    githubLink: 'https://github.com/Zx55', 
    homepageLink: 'https://github.com/Zx55',
  },
  {
    image: '/img/czrlogo.jpg', 
    name: 'Zeren Chen', 
    organization: 'PJLab | BUAA', 
    githubLink: 'https://github.com/Zx55', 
    homepageLink: 'https://github.com/Zx55',
  }

]

export default function Homepage() {
  return (
    <Layout>
      <section className="no-underline-links my-10 mx-auto flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">
      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="m-0">Contact</h2>
        </div>
        <p>
          Contact Say something.
        </p>
      </div>
      </section>

      <section className="no-underline-links my-10 mx-auto flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">
      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="m-0">Team</h2>
        </div>
        <ItemList items={items} />
      </div>
      </section>

      <section className="no-underline-links my-10 mx-auto flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">
      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="m-0">Acknowledge</h2>
        </div>
        <p>
          Acknowledge Say something.
        </p>
      </div>
      </section>

    </Layout>
  );
}
