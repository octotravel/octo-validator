import { Flow, ProductContextType } from "../types";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};
export enum Types {
  Get = "GET PRODUCT",
  Error = "GET PRODUCT",
}


type ProductPayload = {
    type: 'GET_PRODUCTS' 
  payload: Flow
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const AppReducer = (state: ProductContextType, action: ProductPayload) => {
  switch (action.type) {
    // case 'GET_PRODUCTS':
    //   return {...state};
    default:
      console.error(`Unhandled action type ${action.type}`);
      return state;
  }
};
