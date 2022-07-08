import React, { createContext, FC, useReducer } from "react";
import { IContext, ProductContextType } from "../types";

import { AppReducer } from "./appReducer";



const initialState:ProductContextType = {
  products: [
    {
  name: 'string',
  success: true,
  scenarios:[]
  },
  {
    name: 'Adedayo',
    success: true,
    scenarios:[]
    },
    {
      name: 'Majeed',
      success: true,
      scenarios:[]
      }

],
};

//create context
const GlobalContext = createContext(initialState)

// <{
//   state: ProductContextType | [];
//   dispatch: Dispatch<ProductActions>;
// }>({ state: initialState, dispatch: () => null });

// const mainReducer = (
//   { products }: ProductContextType,
//   action: ProductActions
// ) => ({
//   products: AppReducer(products, action)
// });

//provider component

const GlobalProvider: FC<IContext> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer,initialState);
  
  return (
    <GlobalContext.Provider
      value={{
        products:state.products,

      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


export { GlobalProvider, GlobalContext };
