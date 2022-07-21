import * as yup from "yup";
import { PostData } from "../types";

export enum DeliveryMethod {
  VOUCHER = "VOUCHER",
  TICKET = "TICKET",
}

const productSchema = yup.object().shape({
  productId: yup.string().required("This field is required"),
  optionId: yup.string().default("DEFAULT").optional(),
  available: yup
    .object()
    .shape({
      from: yup.string().required("This field is required"),
      to: yup.string().required("This field is required"),
    })
    .required(),
  unavailable: yup
    .object()
    .shape({
      from: yup.string().required("This field is required"),
      to: yup.string().required("This field is required"),
    })
    .required(),
  deliveryMethods: yup
    .array(
      yup
        .mixed()
        .oneOf(Object.values(DeliveryMethod), {
          message: "Atleast one is required",
        })
        .required()
    )
    .min(1)
    .ensure(),
}).default(null);

export const querySchema: yup.SchemaOf<PostData> = yup
  .object()
  .shape({
    url: yup.string().required("This field is required"),
    productTimes: yup
      .array()
      .nullable(true)
      .required("Atleast one is required"),
    capabilities: yup.array().nullable(true).default([]).optional(),
    supplierId: yup.string().required("This field is required"),
    productStartTimes: yup.object().nullable(true).default(null).when("productTimes", {
      is: (val: string[]) => {
        return val?.includes("productStartTimes");
      },
      then: productSchema,
    }),
    productOpeningHours: yup.object().nullable(true).default(null).when("productTimes", {
      is: (val: string[]) => {
        return val?.includes("productOpeningHours");
      },
      then: productSchema,
    }),
  })
  .test(
    "not null",
    "at least one product must be provided",
    (value) =>
      value.productOpeningHours !== null || value.productStartTimes !== null
  )
  .required();

  const initialValues:any={
      url:'',
      capabilities:[],
      supplierId: '',
      productTimes:[],
      productStartTimes: null,
      productOpeningHours: null,
  
  }
  
  export default initialValues;