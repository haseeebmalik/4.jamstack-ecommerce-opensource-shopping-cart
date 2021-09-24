import { navigate } from "gatsby-link";
import * as React from "react";
import { useShoppingCart } from "use-shopping-cart";

const CartStatus = () => {
  const { totalPrice, cartCount,clearCart } = useShoppingCart();
  return (
    <div>
      <div>total price: {totalPrice}</div>
      <div>Count :{cartCount}</div>
      <button
        onClick={() => {
          navigate("/cart");
        }}
      >
        Go to cart
      </button>
      <button onClick={()=>{
          clearCart()
      }}>
          Clear Cart
      </button>
    </div>
  );
};

export default CartStatus;
