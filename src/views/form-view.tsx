import { Col, Row, Button } from "react-bootstrap";
import { FC, useEffect } from "react";
import FormInput from "../components.tsx/formInput";
import SelectBox from "../components.tsx/select-box";
import { capability, productTimes } from "../utils/constant";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useProductListManagement } from "../context/productContext";
import ProductForm from "../components.tsx/product-form";
import { PostData, QueryPost } from "../types";
import { querySchema } from "../schema/productSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormInputView: FC = () => {
  const { handleFetchProducts, error, isLoading } = useProductListManagement();
  const methods = useForm<PostData>({
    resolver: yupResolver(querySchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (error) {
      toast.error(error as any, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  }, [ error]);

  const onSubmitHandler: SubmitHandler<PostData> = (values) => {
    const queryData: QueryPost = {
      url: values.url,
      supplierId: values.supplierId,
      productOpeningHours: values.productTimes.includes("productOpeningHours")
        ? values.product
        : null,
      productStartTimes: values.productTimes.includes("productStartTimes")
        ? values.product
        : null,
      capabilities: values.capabilities,
    };
    handleFetchProducts(queryData);
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
          <ProductForm />

          <Button className="mt-3" type="submit" disabled={isLoading}>
            VALIDATE
          </Button>
        </fieldset>
      </form>
    </FormProvider>
  );
};

export default FormInputView;
