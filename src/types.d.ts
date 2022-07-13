
import React, { ReactNode, MouseEvent } from "react";


export interface IButton {
    children?: ReactNode;
    props?: any;
    onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
    | undefined;

}
export interface IContext {
    children?: ReactNode;
}


export interface Scenario {
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
export interface ProductTimeStamps {
    productId: string;
    dateAvailable: Date;
    dateNotAvailable: Date;
    deliveryMethods: string;
}
export interface DateAvailable{
    to:Date
    from:Date
}
export type ProductContextData = {
    products: any[],
    isLoading: boolean;
    fetchProducts: (PostData) => void
}


interface Product {
    productId: string;
    optionId: string;
    available: {
      from: string;
      to: string;
    };
    unavailable: {
      from: string;
      to: string;
    };
    deliveryMethods: DeliveryMethod[];
  }

  export enum CapabilityId {
    Content = "octo/content",
    Pricing = "octo/pricing",
  }
  export enum DeliveryMethod {
    VOUCHER = "VOUCHER",
    TICKET = "TICKET",
  }
export type PostData = {
  url: string;
  capabilities: CapabilityId[];
  supplierId: string;
  productStartTimes: Product;
  productOpeningHours: Product;
}
