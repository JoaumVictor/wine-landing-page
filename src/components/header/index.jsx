import React from 'react';
import './style.scss';
import images from '../../img';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { RiShoppingBag2Fill } from 'react-icons/ri';

export default function Header() {
  const infos = ['clube', 'loja', 'produtores', 'ofertas', 'eventos', 'baixe o app'];
  return (
    <header className='header-container'>
      <a href="/">
        <img className='logotipo' src={ images.logo} alt="logotipo" />
      </a>
      { infos.map((each) => <p className='links-header'>{ each }</p>) }
      <a className="links-icons" href='/'>
        <BsSearch />
      </a>
      <a className="links-icons" href='/'>
        <AiOutlineUser />
      </a>
      <a className="links-icons" href='/'>
        <RiShoppingBag2Fill />
      </a>
    </header>
  )
}
