import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { deliveryMethods } from "../utils/constant";

import SelectBox from "./select-box";
import Availability from "./availability";
import { useFormContext } from "react-hook-form";

type IProductForm = {
  fieldName: string;
};

const ProductForm: FC<IProductForm> = ({ fieldName }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label  className='form-label'>{`${
        fieldName === "productStartTimes" ? "Start Times:" : "Opening Hours:"
      }`}</label>
      <Row spacing={4}>
        <Col xs={12} sm={6} md={12} lg={6}>
          <div className="mb-3 mt-2">
            <label className={`form-label "required" : ""}`}>Product ID</label>
            <input
              {...register(`${fieldName}.productId`)}
              className={`form-control ${
                !!errors[fieldName]?.productId ? "is-invalid" : ""
              }`}
              autoComplete="off"
              name={`${fieldName}.productId`}
            />

            <div className="invalid-feedback">{`${
              errors[fieldName]?.productId
                ? errors[fieldName]?.productId?.message
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
                    group={`${fieldName}.deliveryMethods`}
                    key={index}
                  />
                );
              })}
            </div>
            <small
              className={` ${
                !!errors[fieldName]?.deliveryMethods ? "text-danger" : ""
              }`}
            >{`${
              errors[fieldName]?.deliveryMethods
                ? errors[fieldName]?.deliveryMethods?.message
                : ""
            }`}</small>
          </div>
        </Col>
      </Row>
      <Availability
        title="Available"
        group={`${fieldName}`}
        name="available"
      />
      <Availability
        title="Unavailable"
        group={`${fieldName}`}
        name="unavailable"
      />
    </>
  );
};

export default ProductForm;
