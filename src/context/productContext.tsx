import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ProductContextData, Flow, PostData } from "../types";

export const productsContextDefaultValue: ProductContextData = {
  products: [],
  isLoading: false,
  error: "",
  fetchProducts: () => null,
};

//create context
export const ProductContext = createContext<ProductContextData>(
  productsContextDefaultValue
);

export function useProductsContextValue(): ProductContextData {
  const [products, setproducts] = useState<Flow[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = useCallback(
    (postData: Partial<PostData>) => {
      setIsLoading(true);

      fetch("http://localhost:3000/validate", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((response) => {
          if (!response.ok) {
            const errorMessage = {
              code: 403,
              message: "Invalid request!, please try again.",
            };
            throw errorMessage;
          }
          return response.json();
        })
        .then((fetchedProducts) => {
          setproducts(fetchedProducts);
        })
        .catch((err) => {
          setError(err?.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [setproducts]
  );

  return useMemo(
    () => ({ products, error, isLoading, fetchProducts }),
    [products, isLoading, error, fetchProducts]
  );
}

export function useProductListManagement() {
  const { products, fetchProducts, isLoading, error }: ProductContextData =
    useContext(ProductContext);
  const handleFetchProducts = useCallback(
    (postData: Partial<PostData>) => {
      fetchProducts(postData);
    },
    [fetchProducts]
  );
  return {
    handleFetchProducts,
    products,
    isLoading,
    error,
  };
}
