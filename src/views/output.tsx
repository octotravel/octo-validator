import { FC } from "react";
import { JSONTree } from "react-json-tree";
import { useProductListManagement } from "../context/productContext";

const OutputView: FC = () => {
  const { products } = useProductListManagement();

  return (
    <div>
      {/* <div className="mb-1 text-text-base font-normal text-sm">
           Response:
          </div>
      <div className=" border border-darkSky w-full min-h-min p-6 bg-secondary  rounded-md">
        {products.length > 0 ? (
          <JSONTree data={products} invertTheme={true} />
        ) : (
          <div className="text-text-base">No output</div>
        )}
      </div> */}
    </div>
  );
};

export default OutputView;
