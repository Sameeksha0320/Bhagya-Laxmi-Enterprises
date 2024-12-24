import React, { useState } from "react";

const AddToCart = () => {
  // Sample items in the cart
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Bathroom Faucet",
      category: "Sanitary",
      price: 1200,
      quantity: 1,
      image: "https://via.placeholder.com/80", // Placeholder image
    },
    {
      id: 2,
      name: "Floor Tiles",
      category: "Tiles",
      price: 1500,
      quantity: 2,
      image: "https://via.placeholder.com/80", // Placeholder image
    },
  ]);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Function to update item quantity
  const updateQuantity = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Shopping Cart</h1>
      <div style={cartContainerStyle}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} style={cartItemStyle}>
              <div style={itemDetailsStyle}>
                <img src={item.image} alt={item.name} style={itemImageStyle} />
                <div>
                  <h3 style={itemNameStyle}>{item.name}</h3>
                  <p style={itemCategoryStyle}>{item.category}</p>
                </div>
              </div>
              <div style={itemActionsStyle}>
                <p style={itemPriceStyle}>Price: ₹{item.price}</p>
                <div>
                  <button
                    style={quantityButtonStyle}
                    onClick={() => updateQuantity(item.id, "decrease")}
                  >
                    -
                  </button>
                  <span style={quantityDisplayStyle}>{item.quantity}</span>
                  <button
                    style={quantityButtonStyle}
                    onClick={() => updateQuantity(item.id, "increase")}
                  >
                    +
                  </button>
                </div>
                <button style={removeButtonStyle} onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={emptyCartStyle}>Your cart is empty.</p>
        )}
      </div>
      <div style={summaryStyle}>
        <h2>Total: ₹{totalPrice}</h2>
        <button style={checkoutButtonStyle}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

// Styles
const pageStyle = {
  padding: "20px",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f9f9f9",
};

const titleStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "20px",
};

const cartContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const cartItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const itemDetailsStyle = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  flex: "2",
};

const itemImageStyle = {
  width: "80px",
  height: "80px",
  borderRadius: "4px",
  objectFit: "cover",
};

const itemNameStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "5px",
};

const itemCategoryStyle = {
  fontSize: "14px",
  color: "#555",
};

const itemActionsStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "10px",
};

const itemPriceStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#333",
};

const quantityButtonStyle = {
  padding: "5px 10px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "1px solid #ccc",
  backgroundColor: "#f0f0f0",
  cursor: "pointer",
  borderRadius: "4px",
};

const quantityDisplayStyle = {
  fontSize: "16px",
  fontWeight: "bold",
};

const removeButtonStyle = {
  padding: "5px 10px",
  fontSize: "14px",
  color: "#fff",
  backgroundColor: "#ff4d4d",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const summaryStyle = {
  marginTop: "20px",
  textAlign: "center",
};

const checkoutButtonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  color: "#fff",
  backgroundColor: "#007bff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const emptyCartStyle = {
  textAlign: "center",
  fontSize: "16px",
  color: "#555",
};

export default AddToCart;
