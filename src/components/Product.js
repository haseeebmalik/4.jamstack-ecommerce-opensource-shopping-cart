import * as React from "react";
import { useShoppingCart } from "use-shopping-cart";
const Product = ({ product }) => {
    const {addItem}=useShoppingCart();
  console.log("product in product page", product);
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>

      <img style={{ width: "200px" }} src={product.image} />
      <button 
        onClick={()=>{addItem(product)}}
      >Add to Cart</button>
    </div>
  );
};

export default Product;
