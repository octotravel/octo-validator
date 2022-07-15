import { FC } from "react";
import { Container } from "@mui/material";
import { useProductListManagement } from "../context/productContext";
import { Flow } from "../types";
import ListView from "../components.tsx/list-view";

const OutputView: FC = () => {
  const { products } = useProductListManagement();

  const flowData: Flow[] = products;
  console.log(flowData);

  return (
    <div className="w-full min-h-min mb-3 bg-white border">
      <Container>
        <div className=" mt-4 font-normal text-sm">Response</div>
        <div>
          <hr />
          {flowData.map((flow, index) => {
            return <ListView key={index} flow={flow} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default OutputView;
