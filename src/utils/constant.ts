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
        label: "start simes",
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

  export const test=[
    {
        "name": "Supplier Flow",
        "success": true,
        "scenarios": [
            {
                "name": "Correct supplier",
                "success": true,
                "errors": [],
                "data": {
                    "id": "1",
                    "name": "octomock",
                    "endpoint": "https://api.ventrata.com/api-octo",
                    "contact": {
                        "website": null,
                        "email": null,
                        "telephone": null,
                        "address": null
                    }
                }
            },
            {
                "name": "Supplier with bad id",
                "success": true,
                "errors": [],
                "data": null
            }
        ]
    },
    {
        "name": "Product Flow",
        "success": true,
        "scenarios": [
            {
                "name": "Correct product",
                "success": true,
                "errors": [],
                "data": {
                    "id": "3",
                    "internalName": "PPU | ST",
                    "reference": null,
                    "locale": "en",
                    "timeZone": "Europe/London",
                    "allowFreesale": false,
                    "instantConfirmation": true,
                    "instantDelivery": true,
                    "availabilityRequired": true,
                    "availabilityType": "START_TIME",
                    "deliveryFormats": [
                        "PDF_URL",
                        "QRCODE"
                    ],
                    "deliveryMethods": [
                        "TICKET",
                        "VOUCHER"
                    ],
                    "redemptionMethod": "DIGITAL",
                    "options": [
                        {
                            "id": "DEFAULT",
                            "default": true,
                            "internalName": "DEFAULT",
                            "reference": null,
                            "availabilityLocalStartTimes": [
                                "12:00",
                                "14:00"
                            ],
                            "cancellationCutoff": "0 hours",
                            "cancellationCutoffAmount": 0,
                            "cancellationCutoffUnit": "hour",
                            "requiredContactFields": [],
                            "restrictions": {
                                "minUnits": 0,
                                "maxUnits": null
                            },
                            "units": [
                                {
                                    "id": "adult",
                                    "internalName": "adult",
                                    "reference": "adult",
                                    "type": "ADULT",
                                    "requiredContactFields": [],
                                    "restrictions": {
                                        "minAge": 18,
                                        "maxAge": 100,
                                        "idRequired": false,
                                        "minQuantity": null,
                                        "maxQuantity": null,
                                        "paxCount": 1,
                                        "accompaniedBy": []
                                    },
                                    "pricingFrom": [
                                        {
                                            "currency": "EUR",
                                            "currencyPrecision": 2,
                                            "includedTaxes": [],
                                            "net": 1000,
                                            "original": 1000,
                                            "retail": 1000
                                        }
                                    ]
                                },
                                {
                                    "id": "child",
                                    "internalName": "child",
                                    "reference": "child",
                                    "type": "CHILD",
                                    "requiredContactFields": [],
                                    "restrictions": {
                                        "minAge": 18,
                                        "maxAge": 100,
                                        "idRequired": false,
                                        "minQuantity": null,
                                        "maxQuantity": null,
                                        "paxCount": 1,
                                        "accompaniedBy": []
                                    },
                                    "pricingFrom": [
                                        {
                                            "currency": "EUR",
                                            "currencyPrecision": 2,
                                            "includedTaxes": [],
                                            "net": 800,
                                            "original": 800,
                                            "retail": 800
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "defaultCurrency": "EUR",
                    "availableCurrencies": [
                        "EUR"
                    ],
                    "pricingPer": "UNIT"
                }
            },
            {
                "name": "Correct product",
                "success": true,
                "errors": [],
                "data": {
                    "id": "2",
                    "internalName": "PPB | OH",
                    "reference": null,
                    "locale": "en",
                    "timeZone": "Europe/London",
                    "allowFreesale": false,
                    "instantConfirmation": true,
                    "instantDelivery": true,
                    "availabilityRequired": true,
                    "availabilityType": "OPENING_HOURS",
                    "deliveryFormats": [
                        "PDF_URL",
                        "QRCODE"
                    ],
                    "deliveryMethods": [
                        "TICKET",
                        "VOUCHER"
                    ],
                    "redemptionMethod": "DIGITAL",
                    "options": [
                        {
                            "id": "DEFAULT",
                            "default": true,
                            "internalName": "DEFAULT",
                            "reference": null,
                            "availabilityLocalStartTimes": [
                                "00:00"
                            ],
                            "cancellationCutoff": "0 hours",
                            "cancellationCutoffAmount": 0,
                            "cancellationCutoffUnit": "hour",
                            "requiredContactFields": [],
                            "restrictions": {
                                "minUnits": 0,
                                "maxUnits": null
                            },
                            "units": [
                                {
                                    "id": "adult",
                                    "internalName": "adult",
                                    "reference": "adult",
                                    "type": "ADULT",
                                    "requiredContactFields": [],
                                    "restrictions": {
                                        "minAge": 18,
                                        "maxAge": 100,
                                        "idRequired": false,
                                        "minQuantity": null,
                                        "maxQuantity": null,
                                        "paxCount": 1,
                                        "accompaniedBy": []
                                    },
                                    "pricingFrom": []
                                }
                            ],
                            "pricingFrom": [
                                {
                                    "original": 4000,
                                    "retail": 4000,
                                    "net": 4000,
                                    "includedTaxes": [],
                                    "currency": "EUR",
                                    "currencyPrecision": 2
                                }
                            ]
                        }
                    ],
                    "defaultCurrency": "EUR",
                    "availableCurrencies": [
                        "EUR"
                    ],
                    "pricingPer": "BOOKING"
                }
            },
            {
                "name": "Product with bad id",
                "success": true,
                "errors": [],
                "data": null
            }
        ]
    },
    {
        "name": "Availability Flow",
        "success": true,
        "scenarios": [
            {
                "name": "Correct availability",
                "success": true,
                "errors": [],
                "data": [
                    {
                        "id": "2022-07-22T12:00:00+01:00",
                        "localDateTimeStart": "2022-07-22T12:00:00+01:00",
                        "localDateTimeEnd": "2022-07-22T14:00:00+01:00",
                        "allDay": false,
                        "available": true,
                        "status": "AVAILABLE",
                        "vacancies": 10,
                        "capacity": 10,
                        "maxUnits": null,
                        "utcCutoffAt": "2022-07-22T09:00:00Z",
                        "openingHours": [],
                        "unitPricing": [
                            {
                                "original": 1000,
                                "retail": 1000,
                                "net": 1000,
                                "includedTaxes": [],
                                "currency": "EUR",
                                "currencyPrecision": 2,
                                "unitId": "adult"
                            },
                            {
                                "original": 800,
                                "retail": 800,
                                "net": 800,
                                "includedTaxes": [],
                                "currency": "EUR",
                                "currencyPrecision": 2,
                                "unitId": "child"
                            }
                        ]
                    },
                    {
                        "id": "2022-07-22T14:00:00+01:00",
                        "localDateTimeStart": "2022-07-22T14:00:00+01:00",
                        "localDateTimeEnd": "2022-07-22T16:00:00+01:00",
                        "allDay": false,
                        "available": true,
                        "status": "AVAILABLE",
                        "vacancies": 10,
                        "capacity": 10,
                        "maxUnits": null,
                        "utcCutoffAt": "2022-07-22T11:00:00Z",
                        "openingHours": [],
                        "unitPricing": [
                            {
                                "original": 1000,
                                "retail": 1000,
                                "net": 1000,
                                "includedTaxes": [],
                                "currency": "EUR",
                                "currencyPrecision": 2,
                                "unitId": "adult"
                            },
                            {
                                "original": 800,
                                "retail": 800,
                                "net": 800,
                                "includedTaxes": [],
                                "currency": "EUR",
                                "currencyPrecision": 2,
                                "unitId": "child"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Correct availability",
                "success": true,
                "errors": [],
                "data": [
                    {
                        "id": "2022-07-22T00:00:00+01:00",
                        "localDateTimeStart": "2022-07-22T00:00:00+01:00",
                        "localDateTimeEnd": "2022-07-23T00:00:00+01:00",
                        "allDay": true,
                        "available": true,
                        "status": "FREESALE",
                        "vacancies": null,
                        "capacity": null,
                        "maxUnits": null,
                        "utcCutoffAt": "2022-07-21T21:00:00Z",
                        "openingHours": [
                            {
                                "from": "09:00",
                                "to": "17:00"
                            }
                        ],
                        "pricing": {
                            "original": 4000,
                            "retail": 4000,
                            "net": 4000,
                            "includedTaxes": [],
                            "currency": "EUR",
                            "currencyPrecision": 2
                        }
                    }
                ]
            },
            {
                "name": "Unavailable",
                "success": true,
                "errors": [],
                "data": null
            },
            {
                "name": "Unavailable",
                "success": true,
                "errors": [],
                "data": null
            },
            {
                "name": "Availability with bad id",
                "success": true,
                "errors": [],
                "data": null
            },
            {
                "name": "Availability with bad id",
                "success": true,
                "errors": [],
                "data": null
            }
        ]
    },
    {
        "name": "Booking Flow",
        "success": true,
        "scenarios": []
    }
]