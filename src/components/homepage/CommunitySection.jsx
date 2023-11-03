import React , { useState }from 'react';
import clsx from 'clsx';
const githubUsernames = [
  'wangjiongw',
  'Coach257',
  'Zx55',
  'double125',
  'lnbxldn',
  'wtt0213',
  'lighten001',
  'fanhongxing',
  'Puck-U',
  'Zhoues',
  'yinzhenfei',
];

function Status({ className }) {
  const [status, setStatus] = useState({
    indicator: 'none',
    description: 'All Systems Operational',
  });
  return (
    <div
      className={clsx(
        'flex items-center gap-2 rounded-lg border border-transparent p-1 px-2 font-jakarta font-semibold text-gray-500 transition-colors',
        className
      )}
      target="_blank"
    >
      <div
        className={clsx(
          'h-4 w-4 rounded-full bg-[#2DB002]',
          status.indicator === 'none' ? 'bg-[#2DB002]' : 'bg-yellow-500'
        )}
      ></div>
      <div>{status.description}</div>
    </div>
  );
}


export default function CommunitySection() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <section className="no-underline-links">
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

            <div className='group relative' onMouseEnter={() => handleMouseEnter(username)} onMouseLeave={handleMouseLeave}>
              <a href={`https://github.com/${username}`}>
              {hoveredItem === username && <div className="tooltip">{username}</div>}
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
