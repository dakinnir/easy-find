import React  from "react";
import '../css/InputField.css'

const InputField = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="form-group">
    {/* If there's a label present */}
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputField;