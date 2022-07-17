
import React, { ReactNode, MouseEvent } from "react";
import {CapabilityId,DeliveryMethod} from './schema/productSchema'

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
    products: any[],
    isLoading: boolean;
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
  product: Product;
  productTimes:string[];
  productStartTimes: Product;
  productOpeningHours: Product;
}

export type QueryPost = {
  url: string;
  capabilities: string[];
  supplierId: string;
  productStartTimes: Product|null;
  productOpeningHours: Product|null;
}