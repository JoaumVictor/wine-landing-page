import React,
{
  useCallback, useContext,
} from 'react';
import { v4 as uuid } from 'uuid';

import './style.scss';
import WineCard from '../wineCard/index';
import Context from '../../context/Context';

export default function Recommended() {
  const { products } = useContext(Context);

  const generateId = useCallback(() => uuid(), []);

  return (
    <div className="recommended-content">
      <h1>Recomendados</h1>
      <div className="products-content">
        { products.slice(0, 4)?.map((item) => <WineCard key={generateId()} obj={item} />)}
      </div>
    </div>
  );
}
