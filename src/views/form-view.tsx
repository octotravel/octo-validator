import { Grid, Box, Container, Button } from "@mui/material";
import { FC, useState } from "react";
import FormInput from "../components.tsx/formInput";
import SelectBox from "../components.tsx/select-box";
import { capability, productTimes, deliveryMethods } from "../utils/constant";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "../components.tsx/date-picker";

const FormInputView: FC = () => {
  const [availableFrom, setAvailableFrom] = useState(new Date());
  const [availableTo, setAvailableTo] = useState(new Date());
  const [unavailableFrom, setUnavailableFrom] = useState(new Date());
  const [unavailableTo, setUnavailableTo] = useState(new Date());

  return (
    <fieldset className=" bg-white form-fieldset">
      <Grid container className="py-2">
        <Grid item xs={12}>
          <FormInput label="Endpoint" name="endpoint" required={true}/>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <div className="mb-3 mt-3">
            <label className="form-label">Capability</label>
            <div className="form-selectgroup form-selectgroup-boxes d-flex flex-column">
              {capability.map((list, index) => {
                return (
                  <SelectBox
                    label={list.label}
                    value={list.value}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="mb-3 mt-3">
            <label className="form-label required">Product Times</label>
            <div className="form-selectgroup form-selectgroup-boxes d-flex flex-column">
              {productTimes.map((list, index) => {
                return (
                  <SelectBox
                    label={list.label}
                    value={list.value}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <FormInput label="Product ID" name="productId" />
        </Grid>
        <Grid item xs={5}>
          <div className="mb-3">
            <label className="form-label required">Delevery Methods</label>
            <div className="form-selectgroup form-selectgroup-boxes d-flex flex-column">
              {deliveryMethods.map((list, index) => {
                return (
                  <SelectBox
                    label={list.label}
                    value={list.value}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={6}>
          <div className="mb-3">
            <label className="form-label">Available</label>

            <Grid item md={12} className="mb-2" xs={12}>
              <CustomDatePicker label="From" name="from" />
            </Grid>
            <Grid item md={12} xs={12}>
              <CustomDatePicker label="To" name="to" />
            </Grid>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="mb-3">
            <label className="form-label">Unavailable</label>

            <Grid item md={12} className="mb-2" xs={12}>
              <CustomDatePicker label="From" name="from" />
            </Grid>
            <Grid item md={12} xs={12}>
              <CustomDatePicker label="To" name="to" />
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Button className="mt-3" type="submit" variant="contained">
        VALIDATE
      </Button>
    </fieldset>
  );
};

export default FormInputView;
