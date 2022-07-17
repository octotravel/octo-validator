import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import CustomDatePicker from "./date-picker";

type IProps = {
  group: string;
  title: string;
  name:string
};

const Availability: FC<IProps> = ({ group, title }) => {
  return (
    <Row spacing={4}>
      <Col xs={12}>
        <div className="mb-3">
          <label className="form-label">{title}</label>

          <CustomDatePicker group={group} />
        </div>
      </Col>
    </Row>
  );
};

export default Availability;
