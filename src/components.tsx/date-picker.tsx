import { FC } from "react";
import { Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";

type IFormInput = {
  name: string;
  label: string;
  group: string;
};

const CustomDatePicker: FC<IFormInput> = ({
  label,
  name,
  group,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className="form-group">
          <span>
            <label className="form-label ">{label}</label>
          </span>
          <div className="input-icon mb-1">
            <input
              {...register(`${group}.${name}`)}
              className={`form-control`}
              type="date"
              autoComplete="off"
              name={`${group}.${name}`}
            />
          </div>
        </div>
        <div className="invalid-feedback">{`${
          errors[group] ? errors[group]?.message : ""
        }`}</div>
      </Grid>
    </Grid>
  );
};

export default CustomDatePicker;
