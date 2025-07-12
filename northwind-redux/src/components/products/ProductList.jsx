import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, getProductsFiltered } from './productSlice.js';
import { Table } from 'reactstrap';

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.product);
  const { currentCategory, currentCategoryId } = useSelector((state) => state.category);

  useEffect(() => {
    if (currentCategoryId) {
      dispatch(getProductsFiltered(currentCategoryId));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, currentCategoryId]);

  return (
    <div>
      <h4>
        Ürünler{' '}
        {currentCategory && (
          <span className="text-muted" style={{ fontSize: '0.9rem' }}>
            (Kategori: <strong>{currentCategory}</strong>)
          </span>
        )}
      </h4>

      {loading && <p>Yükleniyor...</p>}
      {error && <p className="text-danger">Hata: {error}</p>}

      {products.length === 0 && !loading && (
        <p className="text-warning">Hiç ürün bulunamadı.</p>
      )}

      <Table striped hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Ürün Adı</th>
            <th>Fiyat</th>
            <th>Stok</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id || index}>
              <th scope="row">{index + 1}</th>
              <td>{product.productName}</td>
              <td>{product.unitPrice} ₺</td>
              <td>{product.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
