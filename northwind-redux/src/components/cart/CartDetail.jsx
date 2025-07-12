// src/components/cart/CartDetail.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'reactstrap';
import { removeFromCart } from './cartSlice';
import alertify from 'alertifyjs';

const CartDetail = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    alertify.error('Ürün sepetten çıkarıldı');
  };

  return (
    <div>
      <h2>Sepet</h2>

      {cartItems.length === 0 ? (
        <p className="text-warning">Sepetiniz boş</p>
      ) : (
        <Table striped hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün Adı</th>
              <th>Adet</th>
              <th>Fiyat</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.id || index}>
                <th scope="row">{index + 1}</th>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice} ₺</td>
                <td>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default CartDetail;
