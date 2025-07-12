import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from 'reactstrap';

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
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Diğer
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem href="/settings">Ayarlar</DropdownItem>
                  <DropdownItem href="/help">Yardım</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/logout">Çıkış Yap</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Kullanıcı: Berkin</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navi;
