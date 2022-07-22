import { FC } from "react";
import { useProductListManagement } from "../context/productContext";
import { Accordion } from "react-bootstrap";
import { Flow } from "../types";
import ListView from "../components.tsx/list-view";

const OutputView: FC = () => {
  const { products } = useProductListManagement();
  const flowData: Flow[] = products && products;
  const totalScenarios = flowData?.reduce(
    (count, current) => count + current.scenarios.length,
    0
  );

  const successScenarios =
    flowData.length > 0
      ? flowData
          ?.map((item) => {
            return item.scenarios.filter((el) => el.success === true).length;
          })
          .reduce((sum, current) => sum + current, 0)
      : "";

  return (
    <div className="mb-3">
      <div className="card w-full" style={{ minHeight: "240px" }}>
        {/* <div className="card-header">
          <h3 className="  font-normal text-lg">Response</h3>
        </div> */}
        <div className="card-body">
          {products.length > 0 ? (
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className=" mr-3  py-2 text-capitalize">
                    <span>{`${successScenarios}/${totalScenarios}`}</span>
                    <strong className="px-3">GET PRODUCT</strong>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Accordion as="div" className=" h-50 bg-light">
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
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ) : (
            <div className="empty">
              <p className="empty-title">No results body </p>
              <p className="empty-subtitle text-muted">
                Try adjusting your search or filter to get products.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutputView;
