import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { QueryPost, ProductContextData } from "../types";

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
  const [products, setproducts] = useState<QueryPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = useCallback(
    (postData: Partial<QueryPost>) => {

      setIsLoading(true);
      
      fetch('http://localhost:3000/validate', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(postData)
      })
        .then((response) => response.json())
        .then((fetchedProducts) => {          
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
  const { products, fetchProducts,isLoading }: ProductContextData =
    useContext(ProductContext);
  const handleFetchProducts = useCallback(
    (postData: Partial<QueryPost>) => {

      fetchProducts(postData);
    },
    [fetchProducts]
  );
  return {
    handleFetchProducts,
    products,
    isLoading
  };
}
