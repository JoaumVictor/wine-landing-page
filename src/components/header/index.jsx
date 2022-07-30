import React from 'react';
import './style.scss';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { RiShoppingBag2Fill } from 'react-icons/ri';
import images from '../../img';

export default function Header() {
  const infos = ['Clube', 'Loja', 'Ofertas', 'Eventos', 'Baixe o App'];
  return (
    <header className="header-container">
      <a className="logo-content" href="/">
        <img className="logotipo" src={images.logo} alt="logotipo" />
      </a>
      <div className="links-content">
        { infos.map((each) => <p className="links-header">{ each }</p>) }
        <a className="links-icons" href="/">
          <BsSearch />
        </a>
        <a className="links-icons" href="/">
          <AiOutlineUser />
        </a>
        <a className="links-icons" href="/">
          <RiShoppingBag2Fill />
        </a>
      </div>
    </header>
  );
}
