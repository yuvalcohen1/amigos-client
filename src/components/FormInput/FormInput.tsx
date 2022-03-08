import React, { FC } from "react";
import "./FormInput.css";

interface Props {
  type: string;
  placeholder: string;
  onChange: (e?: any) => any;
  value?: any;
  label?: string;
  required?: boolean;
  name?: string;
}

const FormInput: FC<Props> = (props) => {
  const { label, placeholder, type, required, value, name, onChange } = props;
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        className="form-input"
        type={type}
        placeholder={placeholder}
        required={required ? true : false}
        value={value ? value : undefined}
        name={name ? name : undefined}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
