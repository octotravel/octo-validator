import { Row, Col, Container } from "react-bootstrap";

import { FC } from "react";
import Header from "../components.tsx/header";
import FormInputView from "./form-view";
import OutputView from "./response-view";

const HomeView: FC = () => {
  return (
    <>
      <Header title="Validation" />
      <Container>
        <Row>
          <Col md={5} xs={12}>
            <FormInputView />
          </Col>
          <Col md={7} xs={12}>
            <OutputView />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeView;
