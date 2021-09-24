import * as React from "react";

import { CartProvider } from "use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";
export const wrapRootElement = ({ element }) => {
  const stripePromise = loadStripe(
    "pk_test_51JagUeCE3jhPVdWsoteTE4pfDQIJM4JKBckIVik3rU9BVus94QFc0LIRvGrzBF8LdcEzzpmsKHYQWpELoikvuh9c00kUrZR3iV"
  );
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripePromise}
      successUrl="http://localhost:8888/payment-success"
      cancelUrl="http://localhost:8888/"
      currency="USD"
      // allowedCountries={['US', 'GB', 'CA']}
      // billingAddressCollection={true}
    >
      {element}
    </CartProvider>
  );
};
