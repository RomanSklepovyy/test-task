export const createOrderWithFormData = (values) => {
  const {
    status, address1, address2, address3, city, phone,
    company, country, description, discount, email,
    price, quantity, shipping, state, zip, ID, Name,
  } = values;

  return {
    userId: '1',
    status,
    description,
    orderedBy: {
      fullName: Name,
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
        productId: ID,
        unitPrice: price,
        shippingPrice: shipping,
        discount,
        description,
      },
    ],
  };
};
