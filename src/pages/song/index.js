import PublicProfile from '@/components/PublicProfile';
import CallToAction from '@/components/callToAction';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Song } from '@/components/song';
import Head from 'next/head';
import React from 'react';

const SongPage = () => {
  return (
    <>
      <Head>
        <title>Mosh NFT - Profile</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Header />
      <Song />
      <div className='mt-20'></div>
      <CallToAction />
      <Footer />
    </>
  );
};

export default SongPage;