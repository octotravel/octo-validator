import { FC } from "react";
import { useFormContext } from "react-hook-form";

type ISelectBox = {
  label: string;
  value: string;
  group: string;
};

const SelectBox: FC<ISelectBox> = ({ label, value, group }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
   
    <label className=" mb-3 form-selectgroup-item flex-fill">
      <input
        className={`form-selectgroup-input form-control ${!!errors[
          group
        ]} ? 'is-invalid' : 'is-valid'}`}
        type="checkbox"
        id={label}
        value={value}
        {...register(`${group}`)}
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
