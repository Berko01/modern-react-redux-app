import React from 'react';
import { Row, Col } from 'reactstrap';
import CategoryList from '../categories/CategoryList';
import ProductList from '../products/ProductList';

const Dashboard = () => {
  return (
    <div className="p-3">
      <Row>
        <Col xs="12" md="3">
          <CategoryList />
        </Col>
        <Col xs="12" md="9">
          <ProductList />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

