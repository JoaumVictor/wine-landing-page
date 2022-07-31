import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

export default function ComboCard({ obj }) {
  const {
    name, price, image, oldPrice, quantity, priceUnity, ml, id,
  } = obj;
  return (
    <div className={`combo-card ${id}`}>
      <h1 className="combo-card-title">{ name }</h1>
      <span className="combo-card-description">{`${quantity} Itens | ${ml}ml | R$${priceUnity} cada`}</span>
      <img src={image} alt={name} />
      <p className="partner">
        <span>Sócio Wine</span>
        <p>{`R$${price}`}</p>
      </p>
      <p className="noPartner">{`Não sócio R$${oldPrice}`}</p>
      <button type="button">Mais Informações</button>
    </div>
  );
}

ComboCard.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  ml: PropTypes.number,
  name: PropTypes.string,
  oldPrice: PropTypes.number,
  price: PropTypes.number,
  priceUnity: PropTypes.number,
  quantity: PropTypes.number,
}.isRequired;
