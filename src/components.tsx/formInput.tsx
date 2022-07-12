import { FC } from "react";

type IFormInput = {
  name: string;
  label: string;
  required?:boolean;
  defaultValue?: any;
};

const FormInput: FC<IFormInput> = ({
  label,
  name,
  defaultValue,
  required,
  ...otherProps
}) => {
  return (
    <div className="mb-3">
      <label className={`form-label ${required ? "required" : ""}`}>{label}</label>
      <input
        type="text"
        className="form-control"
        autoComplete="off"
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
