import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(prev => !prev);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">Northwind</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/products">Ürünler</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/categories">Kategoriler</NavLink>
              </NavItem>
            </Nav>

            <Nav className="ms-auto" navbar>
              <CartSummary />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navi;
