import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory, getCategories } from './categorySlice';

const CategoryList = () => {
  const dispatch = useDispatch();

  const { categories, currentCategory, loading, error } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(changeCategory(category)); 
  };


  return (
    <div>
      <h4>Kategoriler</h4>

      {loading && <p>Yükleniyor...</p>}
      {error && <p className="text-danger">Hata: {error}</p>}

      <ul className="list-group">
        {categories.map((category, index) => (
          <li
            key={index}
            className={
              'list-group-item' + (category.categoryName === currentCategory ? ' active' : '')
            }
            onClick={() => handleCategoryClick(category)}
            style={{ cursor: 'pointer' }}
          >
            {category.categoryName}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default CategoryList;
