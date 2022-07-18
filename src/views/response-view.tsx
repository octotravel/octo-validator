import { FC } from "react";
import { useProductListManagement } from "../context/productContext";
import { Accordion } from "react-bootstrap";
import { Flow } from "../types";
import ListView from "../components.tsx/list-view";

const OutputView: FC = () => {
  const { products } = useProductListManagement();
  const flowData: Flow[] = products && products;

  const successCount =
    flowData.length > 0
      ? flowData?.filter(function (item) {
          return item.success === true;
        }).length
      : "";

  return (
    <div className="mb-3">
      <div className=" card h-full w-full ">
        {/* <div className="card-header">
          <h3 className="  font-normal text-lg">Response</h3>
        </div> */}
        <div className="card-body">
          {products.length > 0 ? (
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className=" mr-3  py-2 text-capitalize">
                    <span>{`${successCount}/${products.length}`}</span>
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

  <p className="empty-title">No response body </p>
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
