import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 20px",
    background: "linear-gradient(90deg, #e0e0e0, #c0c0c0)", // Darker white-to-grey gradient
    borderBottom: "1px solid #bbb", // Darker border to match
  };

  const upperSectionStyle = {
    width: "100%",
    textAlign: "center",
    marginBottom: "10px",
  };

  const lowerSectionStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const leftSectionStyle = {
    textAlign: "left",
  };

  const textStyle = {
    margin: 0,
    fontSize: "14px",
    color: "#555",
  };

  const companyNameStyle = {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  };

  const rightSectionStyle = {
    display: "flex",
    gap: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#636363",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  return (
    <header style={headerStyle}>
      {/* Upper Section */}
      <div style={upperSectionStyle}>
        <h1 style={companyNameStyle}>Bhagya Laxmi Enterprises</h1>
      </div>

      {/* Lower Section */}
      <div style={lowerSectionStyle}>
        {/* Left Section */}
        <div style={leftSectionStyle}>
          <p style={textStyle}>📞 +91 9248031119</p>
          <p style={textStyle}>📍 Sai Baba Temple Street | Dwarakapuri Colony | Punjagutta | Hyderabad </p>
        </div>

        {/* Right Section */}
        <div style={rightSectionStyle}>
          <button style={buttonStyle}>Why Us</button>
          <button style={buttonStyle} onClick={() => navigate("/cart")}>
            <ShoppingCartIcon /> Cart
          </button>
          
          <button style={buttonStyle} onClick={() => navigate("/login")}>
            <AccountCircleIcon /> Profile
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
