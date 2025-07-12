// src/components/products/AddOrUpdateProduct.jsx

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
    getProducts,
    createProductSuccess,
    updateProductSuccess,
} from './productSlice';
import { getCategories } from '../categories/categorySlice';
import ProductDetail from './ProductDetail';

const AddOrUpdateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id: productId } = useParams();

    const { products, loading: productLoading } = useSelector((state) => state.product);
    const { categories, loading: categoryLoading } = useSelector((state) => state.category);

    const [product, setProduct] = useState(null);
    const [errors, setErrors] = useState({});

    // Verileri yükle
    useEffect(() => {
        if (products.length === 0) dispatch(getProducts());
        if (categories.length === 0) dispatch(getCategories());
    }, [dispatch]);

    // Ürün ID varsa: mevcut ürün set edilir, yoksa boş form açılır
    useEffect(() => {
        const id = parseInt(productId, 10);
        if (productId && products.length > 0) {
            const existingProduct = products.find((p) => Number(p.id) === id);
            if (existingProduct) {
                setProduct({ ...existingProduct });
            }
        } else if (!productId) {
            setProduct({
                productName: '',
                categoryId: '',
                unitPrice: '',
                unitsInStock: '',
            });
        }
    }, [productId, products]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: name === 'categoryId' ? parseInt(value, 10) : value,
        }));
    };
    
    const validate = () => {
        const errors = {};

        if (!product.productName) errors.productName = "Ürün adı zorunludur";
        if (!product.categoryId) errors.categoryId = "Kategori seçimi zorunludur";
        if (!product.unitPrice) errors.unitPrice = "Fiyat zorunludur";
        if (!product.unitsInStock) errors.unitsInStock = "Stok bilgisi zorunludur";

        setErrors(errors);

        // Eğer hata yoksa true döner
        return Object.keys(errors).length === 0;
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (!product) return;

        if (!validate()) return; // Hatalar varsa kaydetme

        const action = product.id
            ? updateProductSuccess({ productId: product.id, updatedData: product })
            : createProductSuccess(product);

        dispatch(action).then(() => navigate('/'));
    };

    if (!product || productLoading || categoryLoading) {
        return <p>Yükleniyor...</p>;
    }



    return (
        <div>
            <ProductDetail
                product={product}
                categories={categories}
                onSave={handleSave}
                onChange={handleChange}
                errors={errors}
            />
        </div>
    );
};

export default AddOrUpdateProduct;
