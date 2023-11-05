import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {
  Linkedin,
  Twitter,
  Youtube,
  Github,
} from '@styled-icons/boxicons-logos';
import BrowserOnly from '@docusaurus/BrowserOnly';

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

export default function Footer() {
  return (
      <div className="mx-auto flex items-center w-full max-w-[1080px] flex-col px-6 py-12">
        {/* <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <img src="/logo/LAMM-logo-light.png" alt="LAMM" className="h-20 w-fit lg:h-12" />

          <Safety className="hidden lg:flex" />
          <BrowserOnly>
            {() => {
              return <Status className="lg:hidden" />;
            }}
          </BrowserOnly>
        </div> */}

        {/* <div className="grid grid-cols-2 gap-6 gap-y-12 md:justify-between lg:flex lg:flex-wrap">
          <Links name="Product" links={products} />
          <Links name="Developers" links={developers} />
          <Links name="Usecases" links={usecases} />
          <Links name="Company" links={company} />
          <Links name="Compare" links={comparisons} />
        </div> */}

        {/* <hr className="my-2 !bg-gray-300" /> */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          {/* <BrowserOnly>
            {() => {
              return <Status className="hidden lg:flex" />;
            }}
          </BrowserOnly> */}
          {/* <Safety className="flex w-full max-w-full lg:hidden" /> */}

          <div className="flex items-center gap-4">
            
            {/* <Link
              href="https://linkedin.com/company/dyteio"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link> */}
            {/* <Link href="https://twitter.com/dyte_io" aria-label="Twitter">
              <Twitter className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=M7XlIe8hhPk"
              aria-label="LAMM YouTube Channel"
            >
              <Youtube className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link> */}
          

          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            {/* <Link
              href="https://dyte.io/privacy-policy"
              className="text-inherit hover:text-black hover:underline"
            >
              Privacy Policy
            </Link>
            &bull;
            <Link
              href="https://dyte.io/terms-of-service"
              className="text-inherit hover:text-black hover:underline"
            >
              Terms of Service
            </Link>
            &bull;
            <Link
              href="https://dyte.io/website-terms-of-use"
              className="text-inherit hover:text-black hover:underline"
            >
              Website Terms of Use
            </Link> */}
            
            <span className="text-inherit">
              &copy; {new Date().getFullYear()} LAMM. Built with Dyte.
              <Link
              href="https://github.com/OpenLAMM/LAMM"
              aria-label="LAMM GitHub Organization"
            >
              <Github className="h-7 w-7 text-zinc-400 hover:text-primary pl-1"/>
            </Link>
            </span>
            
          </div>
          </div>
        </div>
      </div>
  );
}