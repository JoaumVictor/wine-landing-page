import React from 'react';
import ScrollReveal from 'scrollreveal';
import './style.scss';

export default function BannerHead() {
  ScrollReveal().reveal('.bannerHeadTitle', { delay: 1500 });
  return (
    <div className="bannerHead">
      <h1 className="bannerHeadTitle">
        Experimente os vinhos mais incríveis
        <br />
        ao redor do mundo.
      </h1>
    </div>
  );
}
