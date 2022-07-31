import React from 'react';
import './style.scss';
import footerOptions from '../../helper/footer';
import logotipo from '../../img/wine-logotipo.svg';
import pag1 from '../../img/rodape/pag1.webp';
import pag2 from '../../img/rodape/pag2.svg';

export default function Footer() {
  return (
    <footer>
      <div className="footer-info-box" />
      <div className="rodape-box">
        <img className="logo" src={logotipo} alt="logotipo-wine" />
        <img className="pag1" src={pag1} alt="métodos de pagamento" />
        <img className="pag2" src={pag2} alt="métodos de pagamento" />
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
