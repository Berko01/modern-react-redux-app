import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from 'reactstrap';
import { removeFromCart } from './cartSlice';

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Sepet <Badge color="secondary">{totalQuantity}</Badge>
      </DropdownToggle>
      <DropdownMenu end style={{ minWidth: '250px' }}>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <DropdownItem
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                {item.productName}{' '}
                <Badge color="info" pill>
                  {item.quantity}
                </Badge>
              </span>
              <Badge
                color="danger"
                pill
                style={{ cursor: 'pointer' }}
                onClick={() => handleRemove(item.id)}
              >
                x
              </Badge>
            </DropdownItem>
          ))
        ) : (
          <DropdownItem disabled>Sepetiniz boş</DropdownItem>
        )}
        <DropdownItem divider />
        <DropdownItem href="/cart">Sepete Git</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default CartSummary;
