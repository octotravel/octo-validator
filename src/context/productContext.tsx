import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { PostData, ProductContextData } from "../types";
import { mockData } from "../utils/constant";

export const productsContextDefaultValue: ProductContextData = {
  products: [],
  isLoading: false,
  fetchProducts: () => null,
};

//create context
export const ProductContext = createContext<ProductContextData>(
  productsContextDefaultValue
);

export function useProductsContextValue(): ProductContextData {
  const [products, setproducts] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = useCallback(
    (postData: Partial<PostData>) => {

      setIsLoading(true);
      console.log(mockData);
      
      fetch('http://localhost:3000/validate', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(mockData)
      })
        .then((response) => response.json())
        .then((fetchedProducts) => {
        
          console.log(fetchedProducts);
          
          setproducts(fetchedProducts);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [setproducts]
  );

  return useMemo(
    () => ({ products, isLoading, fetchProducts }),
    [products, isLoading, fetchProducts]
  );
}

export function useProductListManagement() {
  const { products, fetchProducts }: ProductContextData =
    useContext(ProductContext);
  const handleFetchProducts = useCallback(
    (postData: Partial<PostData>) => {
      console.log(postData);

      fetchProducts(postData);
    },
    [fetchProducts]
  );
  return {
    handleFetchProducts,
    products,
  };
}
