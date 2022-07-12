import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { PostData, ProductContextData } from "../types";

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
      let url: string = `${postData.hostname}:${postData.port}/${postData.endpoint}`;

      setIsLoading(true);
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
  const { products, fetchProducts }: ProductContextData =
    useContext(ProductContext);
  const handleFetchProducts = useCallback(
    (postData: Partial<PostData>) => {
      console.log(postData);

      fetchProducts(postData);
    },
    [fetchProducts, products]
  );
  return {
    handleFetchProducts,
    products,
  };
}
