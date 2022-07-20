
import React, { ReactNode, MouseEvent } from "react";
import {CapabilityId,DeliveryMethod} from './schema/productSchema'
export type JsonKey = string | number;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type JsonValue = any;
export type Json = JsonValue | Record<JsonKey, JsonValue>;

export type Scenario ={
    name: string;
    success: boolean;
    errors: string[];
    data: Nullable<any>;
}

export interface Flow {
    name: string;
    success: boolean;
    scenarios: Scenario[]
}


export type ProductContextData = {
    products: Flow[],
    isLoading: boolean;
    error:string,
    fetchProducts: (PostData) => void
}


interface Product {
    optionId:string|null
    productId: string;
    available: {
      from: string;
      to: string;
    };
    unavailable: {
      from: string;
      to: string;
    };
    deliveryMethods: string[];
  }


export type PostData = {
  url: string;
  capabilities: string[];
  supplierId: string;
  productTimes:string[];
  productStartTimes: Product|null;
  productOpeningHours: Product|null;
}

