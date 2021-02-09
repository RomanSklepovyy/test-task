export const createOrderWithFormData = (values) => {
  const {
    status, address1, address2, address3, city, phone,
    company, country, description, discount, email, itemDescription,
    unitPrice, quantity, shippingPrice, state, zip, productId, fullName,
  } = values;

  return {
    status,
    description,
    orderedBy: {
      fullName,
      address1,
      address2,
      address3,
      city,
      phone,
      company,
      country,
      state,
      zip,
      email,
    },
    lineItems: [
      {
        quantity,
        productId,
        unitPrice,
        shippingPrice,
        discount,
        description: itemDescription,
      },
    ],
  };
};
