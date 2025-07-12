

import { Routes, Route } from 'react-router-dom';
import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
import CartDetail from '../cart/CartDetail';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import NotFound from '../toolbox/NotFound';

const App = () => {
  return (
    <>
      <Navi />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Dashboard />} />
          <Route path="/products" element={<Dashboard />} />
          <Route path="/cart" element={<CartDetail />} />
          <Route path="/product/add" element={<AddOrUpdateProduct />} />
          <Route path="/product/:id" element={<AddOrUpdateProduct />} />

          <Route path="*" element={<NotFound />} /> {}
        </Routes>
      </div>
    </>
  );
};

export default App;
