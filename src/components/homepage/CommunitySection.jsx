import React, { useState } from 'react';
const githubUsernames = [
  'wangjiongw',
  'Coach257',
  'Zx55',
  'IranQin',
  'Zhoues',
  'double125',
  'lnbxldn',
  'wtt0213',
  'lighten001',
  'fanhongxing',
  'Puck-U',
  'yinzhenfei',
  'dhuip',
];

export default function CommunitySection() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <section className="no-underline-links join-lamm-wrap">
      <hr className="my-2 !bg-gray-300" />
      <div className="mx-auto flex w-full flex-col items-center justify-center px-4 pt-4">
        <h2 className="text-3xl">
          Join <span className="text-primary-100">LAMM</span>
        </h2>
        <p className="mb-10 text-zinc-500">
          Engage with our ever-growing community to get the latest updates,
          product support, and more.
        </p>

        <div className="mx-auto mb-2 flex flex-wrap -space-x-1.5">
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
  );
}

export const Contributors = () => {
  return githubUsernames;
};
