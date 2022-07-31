import React, { useCallback, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './style.scss';
import WineCard from '../wineCard/index';
import Context from '../../context/Context';

export default function Recommended() {
  const { products } = useContext(Context);
  const generateId = useCallback(() => uuid(), []);

  return (
    <div className="recommended-content">
      <div className="recommended-title">
        <h1>Recomendados</h1>
      </div>
      <div className="products-content">
        <Slider
          dots
          infinite
          speed={500}
          slidesToShow={4}
          slidesToScroll={1}
        >
          { products.slice(0, 6)?.map((item) => <WineCard key={generateId()} obj={item} />)}
        </Slider>
      </div>
    </div>
  );
}
