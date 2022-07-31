import React from 'react';
import './style.scss';

export default function bannerBottom() {
  return (
    <div className="bannerBottom">
      <div className="mid-box">
        <div className="mid-box-left">
          <h1>Conheça o Clube Wine</h1>
          <button className="wineClub" type="button">Quero Conhecer</button>
        </div>
        <div className="mid-box-right">
          <div className="mid-box-right-one">
            <div className="mid-box-right-one-left">
              <h1>Fique por dentro de tudo no mundo do vinho</h1>
            </div>
            <div className="mid-box-right-one-right">
              <h1>Comprando da Winelist dos seus amigos ambos ganham</h1>
            </div>
          </div>
          <div className="mid-box-right-two">
            <div className="mid-box-right-two-left">
              <h1>Vinhos escolhidos por quem entende do assunto</h1>
            </div>
            <div className="mid-box-right-two-right">
              <button type="button">Ofertas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
