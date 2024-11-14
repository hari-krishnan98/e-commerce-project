import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-header">
        <p>Products</p>
        <p>Title</p>
        <p className="cartitems-price">Price</p>
        <p className="cartitems-quantity-header">Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-grid">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <div className="cartitems-quantity">{cartItems[e.id]}</div>
                <p>${e.new_price * cartItems[e.id]}</p>
                
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />
               
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-totals">
        <div className="totals">
          <h2>Cart Totals</h2>
          <p>
            <span>Subtotal:</span> ${getTotalCartAmount()}
          </p>
          <p>
            <span>Shipping Fee:</span> Free
          </p>
          <p>
            <span>Total:</span> ${getTotalCartAmount()}
          </p>
          <button>Proceed to Checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here:</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
