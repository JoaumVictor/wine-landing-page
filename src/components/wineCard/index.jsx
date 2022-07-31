import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';
import premium from '../../img/premium.png';

export default function WineCard({ obj }) {
  const {
    country,
    name,
    price,
    image,
    type,
  } = obj;

  const getWineYear = (wineName) => wineName.slice(-4);
  const getName = (wineName) => wineName.slice(0, wineName.length - 5);

  return (
    <div className="wine-card">
      {country === 'Espanha' && <img className="premium" src={premium} alt="premium" />}
      <p className="city">{`${country} | ${getWineYear(name)} `}</p>
      <p className="bold">{getName(name)}</p>
      <img className="wine" src={image} alt="wine" />
      <p className="bold price">{`R$ ${price.toFixed(2)}`}</p>
      <p>{type}</p>
      <button type="button">Mais Informações</button>
    </div>
  );
}

WineCard.propTypes = {
  obj: PropTypes.shape({
    classification: PropTypes.string,
    country: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    sommelierComment: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};
