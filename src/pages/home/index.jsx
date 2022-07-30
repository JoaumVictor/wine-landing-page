import React, { useContext, useEffect } from 'react';
import Context from '../../context/Context';

import './style.scss';
import Header from '../../components/header';
import getApi from '../../helper/getAPI';
import BannerHead from '../../components/banners/bannerHead';
import Recommended from '../../components/recommended';

export default function Home() {
  const getProducts = async (x) => getApi(x);

  const {
    setProducts, setAdvantages,
  } = useContext(Context);

  useEffect(() => {
    const fetchAPI = async () => {
      const productsList = await getProducts('products');
      const advantagesList = await getProducts('advantages');
      setProducts(productsList.items);
      setAdvantages(advantagesList[0].plans);
    };
    fetchAPI();
  }, []);

  return (
    <div className="home-container">
      <Header />
      <BannerHead />
      <Recommended />
    </div>
  );
}
