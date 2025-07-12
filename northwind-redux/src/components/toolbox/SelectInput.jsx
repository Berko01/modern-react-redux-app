// src/components/common/SelectInput.jsx

import React from 'react';

const SelectInput = ({
  name,
  label,
  value,
  onChange,
  options = [],
  defaultOption = 'Seçiniz',
  error = '',
}) => {
  return (
    <div className="form-group mb-3">
      {label && <label htmlFor={name} className="form-label">{label}</label>}
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`form-select${error ? ' is-invalid' : ''}`}
      >
        <option value="">{defaultOption}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SelectInput;
