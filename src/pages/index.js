import * as React from "react";

import CartStatus from "../components/cartStatus";

import Product from "../components/Product";

const IndexPage = () => {
  const productData = [
    {
      name: "Bananas",
      price_id: "price_GBJ2Ep8246qeeT",
      price: 400,
      image: "https://www.fillmurray.com/300/300",
      currency: "USD",
    },
    {
      name: "Tangerines",
      price_id: "price_GBJ2WWfMaGNC2Z",
      price: 100,
      image: "https://www.fillmurray.com/300/300",
      currency: "USD",
    },
  ];
  return (
    <div>
      <CartStatus />
      {productData.map((val) => {
        return <Product product={val} />;
      })}
    </div>
  );
};

export default IndexPage;
