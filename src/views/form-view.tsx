import { Col, Row, Button } from "react-bootstrap";
import { FC, useCallback, useEffect } from "react";
import FormInput from "../components.tsx/formInput";
import SelectBox from "../components.tsx/select-box";
import { capability, productTimes } from "../utils/constant";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useProductListManagement } from "../context/productContext";
import ProductForm from "../components.tsx/product-form";
import { PostData } from "../types";
import { querySchema } from "../schema/productSchema";
import { ToastContainer, toast } from "react-toastify";
// import useFormPersist from 'react-hook-form-persist'
import "react-toastify/dist/ReactToastify.css";

// const FORM_DATA_KEY = "app_form_local_data";
// const initialValues:PostData={
//   url:'',
//   capabilities:[],
//   supplierId: '',
//   product: {
//     deliveryMethods:[],
//     optionId:'DEFAULT',
//     productId:'',
//     available:{
//       from:'',
//       to:''
//     },
//     unavailable:{
//       from:'',
//       to:''
//     }
//   },
//   productTimes:[],
//   productStartTimes: null,
//   productOpeningHours: null,
// }
const FormInputView: FC = () => {
  const { handleFetchProducts, error, isLoading } = useProductListManagement();

  // const getSavedData = useCallback(() => {
  //   let data = localStorage.getItem(FORM_DATA_KEY);
  //   if (data) {
  //    // Parse it to a javaScript object
  //     try {
  //       data = JSON.parse(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     return data;
  //   }
  //   return initialValues;
  // }, [initialValues]);

  const methods = useForm<PostData>({
    resolver: yupResolver(querySchema),
    // defaultValues: {
    //   productOpeningHours:null,
    //   productStartTimes:null
    // }
  });

  const {
    handleSubmit,
    watch,
    resetField,
    setValue,
    formState: { errors },
  } = methods;

  // useFormPersist("storageKey", {
  //   watch,
  //   setValue,
  //   storage: window.localStorage
  // });
  const watchStartTimes = watch("productTimes");

  useEffect(() => {
    // console.log(watchStartTimes);

    if (watchStartTimes && !watchStartTimes.includes("productOpeningHours")) {
      resetField("productOpeningHours");
    } else if (
      watchStartTimes &&
      !watchStartTimes.includes("productStartTimes")
    ) {
      resetField("productStartTimes");
    }
  }, [watchStartTimes]);

  useEffect(() => {
    if (error) {
      toast.error(error as any, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  }, [error]);

  const onSubmitHandler: SubmitHandler<PostData> = (values) => {
    const { productTimes, ...newValues } = values;
    console.log(newValues);
    // const queryData: QueryPost = {
    //   url: values.url,
    //   supplierId: values.supplierId,
    //   productOpeningHours: values.productTimes.includes("productOpeningHours")
    //     ? values.product
    //     : null,
    //   productStartTimes: values.productTimes.includes("productStartTimes")
    //     ? values.product
    //     : null,
    //   capabilities: values.capabilities,
    // };
    handleFetchProducts(newValues);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset className=" bg-white form-fieldset">
          <ToastContainer />
          <Row className="py-2" spacing={4}>
            <Col xs={12} sm={6} md={12} lg={6}>
              <FormInput label="Url" name="url" required={true} />
            </Col>
            <Col xs={12} sm={6} md={12} lg={6}>
              <FormInput
                label="Supplier ID"
                name="supplierId"
                required={true}
              />
            </Col>
          </Row>
          <Row spacing={4}>
            <Col xs={12} sm={6} md={12} lg={6}>
              <div className="mb-3 mt-1">
                <label className="form-label">Capability</label>
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
              </div>
            </Col>
            <Col xs={12} sm={6} md={12} lg={6}>
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
            </Col>
          </Row>
          {watchStartTimes?.length > 0 && (
            <div>
              {watchStartTimes.map((field, index) => {
                return <ProductForm key={field} fieldName={field} />;
              })}
            </div>
          )}

          <Button className="mt-3" type="submit" disabled={isLoading}>
            VALIDATE
          </Button>
        </fieldset>
      </form>
    </FormProvider>
  );
};

export default FormInputView;
