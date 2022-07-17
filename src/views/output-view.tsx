import { FC } from "react";
import { useProductListManagement } from "../context/productContext";
import { Accordion, Container } from "react-bootstrap";
import { Flow } from "../types";
import ListView from "../components.tsx/list-view";

const OutputView: FC = () => {
  const { products } = useProductListManagement();
  const flowData: Flow[] = products;
  const successCount = flowData.filter(function (item) {
    return item.success === true;
  }).length;

  return (
    <div className="w-full min-h-min mb-3 bg-white border">
      <Container>
        <div className=" mt-4 font-normal text-sm">Response</div>
        <div>
          <hr />
          {products.length > 0 ? (
            <Accordion  flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className=" mr-3 py-2 text-capitalize">
                    <span>{`${successCount}/${products.length}`}</span>
                    <strong className="px-3">GET PRODUCT</strong>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="bg-light">
                    <Accordion alwaysOpen>
                      {flowData?.map((flow, index) => {
                        return (
                          <ListView
                            key={index}
                            id={index.toString()}
                            flow={flow}
                          />
                        );
                      })}
                    </Accordion>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ) : (
            <div className="mb-3 text-muted">No response body</div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default OutputView;
