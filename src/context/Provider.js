import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const Provider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState('');

  const validation = () => {
    const MIN_LENGTH = 6;
    const requiredPassword = password.length > MIN_LENGTH;
    const requiredEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validateEmail = requiredEmail.test(email);

    const isValid = requiredPassword && validateEmail;
    if (isValid) {
      setBtn(false);
    } else {
      setBtn(true);
    }
  };

  useEffect(() => {
    validation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const userData = {
    email,
    setEmail,
    password,
    setPassword,
    btn,
    setBtn,
  };

  return (
    <Context.Provider value={userData}>
      {children}
    </Context.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
