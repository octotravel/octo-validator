import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { deliveryMethods } from "../utils/constant";

import SelectBox from "./select-box";
import Availability from "./availability";
import { useFormContext } from "react-hook-form";

const ProductForm: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
    

  return (
    <>
      <Row spacing={4}>
        <Col xs={12} sm={6} md={12} lg={6}>
          <div className="mb-3 mt-2">
            <label className={`form-label "required" : ""}`}>Product ID</label>
            <input
              {...register("product.productId")}
              className={`form-control ${
                !!errors[`product`]?.productId ? "is-invalid" : ""
              }`}
              autoComplete="off"
              name="product.productId"
            />

            <div className="invalid-feedback">{`${
              errors[`product`]?.productId
                ? errors[`product`]?.productId?.message
                : ""
            }`}</div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={12} lg={6}>
          <div className="mb-3 mt-2">
            <label className="form-label required">Delevery Methods</label>
            <div className="form-selectgroup form-selectgroup-boxes d-flex flex-column">
              {deliveryMethods.map((list, index) => {
                return (
                  <SelectBox
                    label={list.label}
                    value={list.value}
                    group="product.deliveryMethods"
                    key={index}
                  />
                );
              })}
            </div>
            <small
              className={` ${
                !!errors["product"]?.deliveryMethods
                  ? "text-danger"
                  : ""
              }`}
            >{`${
              errors["product"]?.deliveryMethods
                ? errors["product"]?.deliveryMethods[0]?.message
                    ?.message
                : ""
            }`}</small>
          </div>
        </Col>
      </Row>
      <Availability title="Available" group="product.available" name='available'/>
      <Availability title="Unavailable" group="product.unavailable"  name='unavailable' />
    </>
  );
};

export default ProductForm;
