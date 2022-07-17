export const capability = [
    {
        label: "content",
        value: "octo/content",
    },
    {
        label: "pricing",
        value: "octo/pricing"
    },
];

export const productTimes = [
    {
        label: "start times",
        value: "productStartTimes",
    },
    {
        label: "opening hours",
        value: "productOpeningHours"
    },
];

export const deliveryMethods = [
    {
        label: "voucher",
        value: "VOUCHER"
    },
    {
        label: "ticket",
        value: "TICKET"
    },
];

export const mockData={
    "url": "http://localhost:3000",
    "supplierId": "1",
    "capabilities":["octo/pricing"],
    "productStartTimes": {
      "productId": "3",
      "optionId": "DEFAULT",
      "available": {
        "from": "2022-07-22",
        "to": "2022-07-22"
      },
      "unavailable": {
        "from": "2022-07-24",
        "to": "2022-07-24"
      },
      "deliveryMethods": ["VOUCHER", "TICKET"]
    },
    "productOpeningHours": {
      "productId": "2",
      "optionId": "DEFAULT",
      "available": {
        "from": "2022-07-22",
        "to": "2022-07-22"
      },
      "unavailable": {
        "from": "2022-07-24",
        "to": "2022-07-24"
      },
      "deliveryMethods": ["VOUCHER", "TICKET"]
    }
  }

