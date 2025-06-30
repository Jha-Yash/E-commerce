import React from "react";
import Navbar from "/src/Navbar.jsx";
import "./Css/CartPage.css"
function CartPage({ cart,  removeFromCart  }) { // ye sb as props pass ho rkhey hai
  if (cart.length === 0) {
    return (
      <p className="empty-cart-message"
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          marginTop: "30px"
        }}
      >
        Your cart is empty.
      </p>
    );
  }

  // Step-by-step total calculation using .reduce()
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.new_price * item.quantity,
    0 // initial acc value = 0
  );

  // Example:
  // cart = [{ new_price: 200, quantity: 2 }, { new_price: 150, quantity: 1 }]
  // acc starts at 0
  // First: 200 * 2 = 400 → acc = 400
  // Second: 150 * 1 = 150 → acc = 550
  // ✅ Final Result: totalAmount = 550

  const shippingFee = totalAmount > 80 ? 50 : 0;
  const finalTotal = totalAmount + shippingFee;

  return (
    <div className="cartcon">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Your Cart</h2>

      <div className="title">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {cart.map((item) => (
        <div key={item.id} className="individualcontai">
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>₹{item.new_price}</p>
          <p>{item.quantity}</p>
          <p>₹{item.new_price * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>X</button>
        </div>
      ))}

      <div className="cart-total-section">
        <div className="cart-total-row">
          <span>Subtotal:</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className="cart-total-row">
          <span>Shipping Fees:</span>
          <span>₹{shippingFee}</span>
        </div>
        <div className="cart-total-row total-row">
          <span>Total:</span>
          <span>₹{finalTotal}</span>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
