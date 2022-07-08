import { useCallback, useContext, useMemo, useState } from "react";
import { Flow, PostData, ProductContextData } from "../types";
import { ProductContext } from "./productContext";

export function useProductsContextValue(): ProductContextData {
  const [products, setproducts] = useState<Flow[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = useCallback(
    (postData: Partial<PostData>) => {
      setIsLoading(true);
      console.warn('DEBUG: Cors blocking')
    //   const header = new Headers({ "Access-Control-Allow-Origin": "*" });
      fetch(postData.url as string, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((fetchedProducts) => {
          setproducts(fetchedProducts);
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
    (postData: Partial<PostData>) => () => {
      fetchProducts(postData);
      console.log(products);
    },
    [fetchProducts, products]
  );
  return {
    handleFetchProducts,
    products,
  };
}
