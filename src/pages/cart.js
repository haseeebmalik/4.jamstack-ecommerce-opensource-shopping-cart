import * as React from "react";
import { useShoppingCart } from "use-shopping-cart";
const Cart = () => {
  const { addItem, cartDetails, incrementItem, decrementItem,redirectToCheckout } =
    useShoppingCart();
  console.log("product in product page", cartDetails);
  console.log("abc", Object.keys(cartDetails));
  if (!Object.keys(cartDetails).length) return <div>Cart is empty</div>;
  return (

    <div>
        <div>
            <button onClick={()=>{
                redirectToCheckout()
            }}>Checkout</button>
        </div>
      <h1>Cart</h1>
      {Object.keys(cartDetails).map((item, i) => (
        <div key={i}>
          <div>Name:{cartDetails[item].name}</div>
          <div>Price:{cartDetails[item].price}</div>
          <img width="150px" src={cartDetails[item].image} />
          <br />
          <span>Quantity:{cartDetails[item].quantity}</span> --
          <span>Total Price:{cartDetails[item].value}</span>
          <div>
            <button
              onClick={() => {
                incrementItem(cartDetails[item].price_id);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                decrementItem(cartDetails[item].price_id);
              }}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
