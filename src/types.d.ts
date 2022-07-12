
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

export type ProductContextData = {
    products: any[],
    isLoading: boolean;
    fetchProducts: (PostData) => void
}

export type PostData = {
    hostname: string,
    port: string,
    endpoint:string,
    capabilities: string,
    productTimes: ProductTimeStamps[],
}


