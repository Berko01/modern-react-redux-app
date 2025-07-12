// src/components/products/ProductDetail.jsx

import React from 'react';
import TextInput from '../toolbox/TextInput';
import SelectInput from '../toolbox/SelectInput';

const ProductDetail = ({ product, categories, onSave, onChange, errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? 'Ürün Güncelle' : 'Ürün Ekle'}</h2>

      <TextInput
        name="productName"
        label="Ürün Adı"
        value={product.productName || ''}
        onChange={onChange}
        error={errors.productName}
      />

      <SelectInput
        name="categoryId"
        label="Kategori"
        value={product.categoryId || ''}
        defaultOption="Kategori Seçiniz"
        options={categories.map((cat) => ({
          value: cat.id,
          text: cat.categoryName,
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />

      <TextInput
        name="unitPrice"
        label="Fiyat"
        value={product.unitPrice || ''}
        onChange={onChange}
        error={errors.unitPrice}
      />

      <TextInput
        name="unitsInStock"
        label="Stok"
        value={product.unitsInStock || ''}
        onChange={onChange}
        error={errors.unitsInStock}
      />

      <button type="submit" className="btn btn-success">Kaydet</button>
    </form>
  );
};

export default ProductDetail;
