import { Container } from "@mui/material";
import { FC } from "react";

type ISelectBox = {
  label: string;
  value: string;
};

const SelectBox: FC<ISelectBox> = ({ label, value, ...props }) => {
  return (
    <label className=" mb-3 form-selectgroup-item flex-fill">
      <input
        type="checkbox"
        name="form-project-manager[]"
        value={value}
        {...props}
        className="form-selectgroup-input"
      />
      <div className="form-selectgroup-label d-flex align-items-center p-1">
        <div className="me-3">
          <span className="form-selectgroup-check"></span>
        </div>
        <div className="form-selectgroup-label-content d-flex align-items-center">
          <div>
            <div className="font-weight-medium">{label}</div>
          </div>
        </div>
      </div>
    </label>
  );
};

export default SelectBox;
