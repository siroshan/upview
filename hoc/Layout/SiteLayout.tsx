import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useViewport } from '../../context/viewPortContext';
import NavBar from '../../components/NavBar';

const SiteLayout = ({ children }: { children: ReactNode }) => {

  const { width } = useViewport();
  
  return (
    <div>
      <Head>
        {/* <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' /> */}
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='theme-color' content='#e3b7a0' />
        {/* <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#FF582A' /> */}

        {/* SEO */}
        <meta
          name='description'
          content="content here"
        />
        <meta property='og:title' content={'Fitness Zone'} />
        <meta
          property='og:description'
          content={
            "content here"
          }
        />
        <meta name='og:type' content={'website'} />
        <meta
          property='og:url'
          content={typeof window != 'undefined' ? window.location.href : ''}
        />
        <meta property='og:image' content={'/logo.jepg'} />
        <meta property='og:image:alt' content={'Red Circle'} />
        <meta property='og:image:secure_url' content={'/logo.jpeg'} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:description'
          content={"content here"}
        />
        <meta name='twitter:title' content={'add content here'} />
        <meta name='twitter:image' content={'/logo.jpeg'} />
      </Head>

       <NavBar /> 
      <main className='main'>{children}</main>
    </div>
  );
};

export default SiteLayout;
