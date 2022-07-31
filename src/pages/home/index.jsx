import React, { useContext, useEffect } from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import Context from '../../context/Context';

import './style.scss';
import Header from '../../components/header';
import getApi from '../../helper/getAPI';
import BannerHead from '../../components/banners/bannerHead';
import Recommended from '../../components/recommended';
import BannerMid from '../../components/banners/bannerMid';

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
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection>
            <Header />
            <BannerHead />
          </FullpageSection>

          <FullpageSection>
            <Recommended />
          </FullpageSection>

          <FullpageSection>
            <BannerMid />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}
