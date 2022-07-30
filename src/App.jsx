import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home';
import Products from './pages/products/index';

export default  function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  );
}
