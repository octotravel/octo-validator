import { FC } from "react";
import { Grid } from "@mui/material";

type IFormInput = {
  name: string;
  label: string;
  defaultValue?: any;
};

const CustomDatePicker: FC<IFormInput> = ({
  label,
  name,
  defaultValue,
  ...otherProps
}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className="form-group">
          <span>
            <label className="form-label ">{label}</label>
          </span>
          <div className="input-icon mb-1">
            <input type="date" className="form-control " id="datepicker-icon" />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default CustomDatePicker;
