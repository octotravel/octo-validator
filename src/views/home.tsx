import { FC } from "react";
import Button from "../components/button";
import { useProductListManagement } from "../context/useProductContext";
import { PostData } from "../types";

const Home: FC = () => {
  const { products, handleFetchProducts } = useProductListManagement();
  const fakeData: Partial<PostData> = {
    url: "http://localhost:3000/products",
  };

  return (
    <div>
      <div className="grid grid-cols-1 mx-auto mb-7 mt-5">
        <div className=" border border-darkSky w-full min-h-min p-6 bg-secondary  rounded-lg">
          <div className="break-all mb-4 text-text-base">
            jhdhsdjhjshjsjjhdjhsdjhshjdsjgdghdghgsgdjgjdsgjgsjgjdgjgdjgsdgkgkgdghgewugyewggduyewegwugdjhwdgjdhsgjdshjdgjgdjgeugyeug
          </div>

          {products.map((product) => {
            return <div key={product.name}>{product.name}</div>;
          })}

          <Button onClick={handleFetchProducts(fakeData)}>Test People</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-10 mx-auto mb-7 mt-5">
        <div className=" border border-darkSky w-full min-h-min p-6 bg-secondary  rounded-lg"></div>
      </div>
    </div>
  );
};

export default Home;
