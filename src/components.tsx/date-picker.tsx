import { FC } from "react";
import { Col, Row } from "react-bootstrap";

import { useFormContext } from "react-hook-form";

type IFormInput = {
  group: string;
  titleG?: string;
};

const CustomDatePicker: FC<IFormInput> = ({ group, titleG }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Row className="mb-2">
      <Col xs={12} sm={6} md={12} lg={6}>
        <div className="form-group">
          <span>
            <label className="form-label text-muted ">From</label>
          </span>
          <div className="input-icon mb-1">
            <input
              className={`form-control ${!!errors[group]
                ?.from} ? 'is-invalid' : 'is-valid'}`}
              {...register(`${group}.from`)}
              type="date"
              autoComplete="off"
              name={`${group}.from`}
            />
          </div>
        </div>
        <div className="invalid-feedback">{`${
          errors[group]?.from ? errors[group]?.from?.message : ""
        }`}</div>
      </Col>

      <Col xs={12} sm={6} md={12} lg={6}>
        <div className="form-group">
          <span>
            <label className="form-label text-muted ">To</label>
          </span>
          <div className="input-icon mb-1">
            <input
              className={`form-control ${!!errors[group]
                ?.from} ? 'is-invalid' : 'is-valid'}`}
              {...register(`${group}.to`)}
              type="date"
              autoComplete="off"
              name={`${group}.to`}
            />
          </div>
        </div>
        <div className="invalid-feedback">{`${
          errors[group]?.to ? errors[group]?.to?.message : ""
        }`}</div>
      </Col>
    </Row>
  );
};

export default CustomDatePicker;
