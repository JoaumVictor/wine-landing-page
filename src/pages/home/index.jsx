import React from 'react';
import Header from '../../components/header';
import './style.scss';
import MktTop from '../../components/banners/mktTop/index';

export default function Home() {
  return (
    <div className='home-container'>
      <MktTop />
      <Header />
      <h1>ESSA É A PÁGINA DE HOME</h1>
    </div>
  )
}
