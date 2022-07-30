import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [advantages, setAdvantages] = useState([]);

  const DATA = {
    products,
    setProducts,
    advantages,
    setAdvantages,
  };

  const memoData = React.useMemo(() => DATA, [products]);

  return <Context.Provider value={memoData}>{children}</Context.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
