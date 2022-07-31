import React, { useEffect, useCallback } from 'react';
import ScrollReveal from 'scrollreveal';
import './style.scss';

export default function BannerHead() {
  const reveal = useCallback(() => {
    ScrollReveal().reveal('.bannerHeadTitle', { delay: 1500 });
  }, []);

  useEffect(() => {
    reveal();
  }, []);

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
