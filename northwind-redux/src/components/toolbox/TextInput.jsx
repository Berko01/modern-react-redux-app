import React from "react";

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  const wrapperClass = error ? "form-group has-error" : "form-group";

  return (
    <div className={wrapperClass}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="text"
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextInput;
