import { createContext } from "react";
import { ProductContextData } from "../types";

export const productsContextDefaultValue: ProductContextData = {
  products: [],
  isLoading: false,
  fetchProducts: () => null,
};

//create context
export const ProductContext = createContext<ProductContextData>(
  productsContextDefaultValue
);
