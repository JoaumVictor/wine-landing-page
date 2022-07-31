import React from 'react';
import './style.scss';
import footerOptions from '../../helper/footer';
import logotipo from '../../img/wine-logotipo.svg';

export default function Footer() {
  return (
    <footer>
      <div className="footer-info-box">
        <h1>
          infos
        </h1>
      </div>
      <div className="rodape-box">
        <img src={logotipo} alt="" />
        <div className="column">
          <h2>Loja</h2>
          { footerOptions.loja.map((option) => <a href="/" key={option}>{ option }</a>)}
        </div>
        <div className="column">
          <h2>Clube Wine</h2>
          { footerOptions.wineClub.map((option) => <a href="/" key={option}>{ option }</a>)}
        </div>
        <div className="column">
          <h2>Minha conta</h2>
          { footerOptions.myAccount.map((option) => <a href="/" key={option}>{ option }</a>)}
        </div>
        <div className="column">
          <h2>Conheça também</h2>
          { footerOptions.knowToo.map((option) => <a href="/" key={option}>{ option }</a>)}
        </div>

      </div>
    </footer>
  );
}
