import React from 'react';
import './style.scss';
import combos from '../../../helper/comboAPI';
import ComboCard from '../../comboCard';

export default function BannerMid() {
  return (
    <div className="bannerMid">
      <div className="box-image" />
      <div className="box-info">
        <h1 className="titles-box-info">Compre seus vinhos com descontos exclusivos.</h1>
        <h1 className="titles-box-info">Sócio garante 15% em todos os produtos da Wine.</h1>
        <div className="box-combos">
          <ComboCard obj={combos.combo1} />
          <ComboCard obj={combos.combo2} />
        </div>
        <h1 className="titles-box-info">Não dá para perder.</h1>
      </div>
    </div>
  );
}
