import * as yup from "yup";
import { PostData } from "../types";

export enum DeliveryMethod {
  VOUCHER = "VOUCHER",
  TICKET = "TICKET",
}

export const querySchema: yup.SchemaOf<PostData> = yup
  .object()
  .shape({
    url: yup.string().required("This field is required"),
    productTimes: yup
      .array()
      .nullable(true)
      .required("Atleast one is required"),
    capabilities: yup
      .array()
      .nullable(true)
      .required("Atleast one is required"),
    supplierId: yup.string().required("This field is required"),
    product: yup.object().when("productTimes", {
      is: (val: string[]) => {
        return val?.length > 0;
      },
      then: yup
        .object()
        .shape({
          productId: yup.string().required("This field is required"),
          optionId: yup.string().default("DEFAULT").optional(),
          available: yup
            .object()
            .shape({
              from: yup.string().required(),
              to: yup.string().required(),
            })
            .required(),
          unavailable: yup
            .object()
            .shape({
              from: yup.string().required(),
              to: yup.string().required(),
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
        })
        .nullable(true)
        .defined(),
    }),
  })
  .test(
    "not null",
    "at least one product must be provided",
    (value) =>
      value.productOpeningHours !== null || value.productStartTimes !== null
  )
  .required();
