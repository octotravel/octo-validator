import * as yup from "yup";
import { PostData } from "../types";

export enum DeliveryMethod {
  VOUCHER = "VOUCHER",
  TICKET = "TICKET",
}

const productSchema = yup.object().shape({
  productId: yup.string().required("This field is required"),
  optionId: yup.string().required().default("DEFAULT").optional(),
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
    .min(1, 'Atleast one is required')
    .ensure(),
});

export const querySchema: yup.SchemaOf<PostData> = yup
  .object()
  .shape({
    url: yup.string().required("This field is required"),
    productTimes: yup
      .array()
      .nullable(true)
      .required("Atleast one is required"),
    capabilities: yup.array().default([]).optional(),
    supplierId: yup.string().required("This field is required"),
    productStartTimes: yup.object().nullable(true).default(null).when("productTimes", {
      is: (val: string[]) => {
        return val?.includes("productStartTimes");
      },
      then: productSchema.nullable(true).default(null),
    }),
    productOpeningHours: yup.object().nullable(true).default(null).when("productTimes", {
      is: (val: string[]) => {
        return val?.includes("productOpeningHours");
      },
      then: productSchema.nullable(true).default(null),
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