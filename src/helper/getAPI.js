import axios from 'axios';

const URLS = {
  products: 'https://wine-back-test.herokuapp.com/products',
  advantages: 'https://wine-club-proxy.herokuapp.com/modalities',
};

const getApi = async (order) => {
  let response;
  if (order === 'products') {
    response = await axios.get(URLS.products);
  } else {
    response = await axios.get(URLS.advantages);
  }
  return response.data;
};

export default getApi;
