import { Grid, Button } from "@mui/material";
import { FC } from "react";
import FormInput from "../components.tsx/formInput";
import SelectBox from "../components.tsx/select-box";
import { capability, productTimes, deliveryMethods } from "../utils/constant";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { object, string, array, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomDatePicker from "../components.tsx/date-picker";
import { useProductListManagement } from "../context/productContext";

const querySchema = object({
  url: string().nonempty("Url is required").max(100),
  supplierId: string().nonempty("Supplier ID is required").max(100),
  capabilities: array(string()).nonempty("Atleast one is required"),
  productTimes: array(string()).nonempty("Atleast one is required"),
  productId: string().nonempty("Product ID is required"),
  productTypes: object({
    deliveryMethods: array(string()).nonempty("Atleast one is required"),
    available: object({ from: string(), to: string() }),
    unavailable: object({ from: string(), to: string() }),
  }),
});

export type QueryInput = TypeOf<typeof querySchema>;

const FormInputView: FC = () => {
  const {handleFetchProducts} = useProductListManagement()
  const methods = useForm<QueryInput>({
    resolver: zodResolver(querySchema),
    defaultValues: {
      productTypes: {
        deliveryMethods: [],
      },
      productTimes: [],
      capabilities: [],
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  
  
  //   const methods = useForm();
  const onSubmitHandler: SubmitHandler<QueryInput> = (values) => {
    handleFetchProducts(values)
    //  Executing the RegisterUser Mutation
    // registerUser(values);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset className=" bg-white form-fieldset">
          <Grid container className="py-2" spacing={4}>
            <Grid item xs={6}>
              <FormInput label="Url" name="url" required={true}/>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                label="Supplier ID"
                name="supplierId"
                required={true}
              />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <div className="mb-3 mt-1">
                <label className="form-label required">Capability</label>
                <div className="form-selectgroup form-selectgroup-boxes d-flex flex-column">
                  {capability.map((list, index) => {
                    return (
                      <SelectBox
                        label={list.label}
                        value={list.value}
                        group="capabilities"
                        key={index}
                      />
                    );
                  })}
                </div>
                <small
                  className={` ${
                    !!errors["capabilities"] ? "text-danger" : ""
                  }`}
                >{`${
                  errors["capabilities"] ? errors["capabilities"]?.message : ""
                }`}</small>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="mb-3 mt-1">
                <label className="form-label required">Product Times</label>
                <div className="form-selectgroup form-selectgroup-boxes d-flex flex-column">
                  {productTimes.map((list, index) => {
                    return (
                      <SelectBox
                        label={list.label}
                        value={list.value}
                        group="productTimes"
                        key={index}
                      />
                    );
                  })}
                </div>
                <small
                  className={` ${
                    !!errors["productTimes"] ? "text-danger" : ""
                  }`}
                >{`${
                  errors["productTimes"] ? errors["productTimes"]?.message : ""
                }`}</small>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <FormInput 
              required={true} 
              label="Product ID" 
              name="productId" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="mb-3 mt-2">
                <label className="form-label required">Delevery Methods</label>
                <div className="form-selectgroup form-selectgroup-boxes d-flex flex-column">
                  {deliveryMethods.map((list, index) => {
                    return (
                      <SelectBox
                        label={list.label}
                        value={list.value}
                        group="productTypes.deliveryMethods"
                        key={index}
                      />
                    );
                  })}
                </div>
                <small
                  className={` ${
                    !!errors["productTypes"]?.deliveryMethods
                      ? "text-danger"
                      : ""
                  }`}
                >{`${
                  errors["productTypes"]?.deliveryMethods
                    ? errors["productTypes"]?.deliveryMethods?.message
                    : ""
                }`}</small>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <div className="mb-3">
                <label className="form-label">Available</label>

                <Grid item md={12} className="mb-2" xs={12}>
                  <CustomDatePicker
                    label="From"
                    name="from"
                    group="productTypes.available"
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <CustomDatePicker
                    label="To"
                    name="to"
                    group="productTypes.available"
                  />
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="mb-3">
                <label className="form-label ">Unavailable</label>

                <Grid item md={12} className="mb-2" xs={12}>
                  <CustomDatePicker
                    label="From"
                    name="from"
                    group="productTypes.unavailable"
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <CustomDatePicker
                    label="To"
                    name="to"
                    group="productTypes.unavailable"
                  />
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Button className="mt-3" type="submit" variant="contained">
            VALIDATE
          </Button>
        </fieldset>
      </form>
    </FormProvider>
  );
};

export default FormInputView;
