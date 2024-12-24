import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import sanitaryImage from "../images/sanitary.jpg"; // Import the sanitary image
import tilesImage from "../images/tiles.jpg"; // Import the tiles image

const Homepage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    color: "#333",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#000",
  };

  const columnsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
  };

  const columnStyle = {
    flex: "1",
    width: "250px",
    height: "250px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer", // Add cursor pointer for clickable effect
  };

  const columnImageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px 8px 0 0",
  };

  const columnTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#444",
  };

  const columnDescriptionStyle = {
    fontSize: "14px",
    color: "#555",
    marginTop: "10px",
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Welcome to Our Home Improvement Store</h1>
      <div style={columnsContainerStyle}>
        {/* Sanitary Column */}
        <div
          style={columnStyle}
          onClick={() => navigate("/sanitory")}
        >
          <h2 style={columnTitleStyle}>Sanitary</h2>
          <img
            src={sanitaryImage} // Use the imported image here
            alt="Sanitary"
            style={columnImageStyle}
          />
          <p style={columnDescriptionStyle}>
            Explore a wide range of high-quality sanitary products designed to
            enhance your bathroom's functionality and aesthetics.
          </p>
        </div>

        {/* Tiles Column */}
        <div
          style={columnStyle}
          onClick={() => navigate("/tiles")}
        >
          <h2 style={columnTitleStyle}>Tiles</h2>
          <img
            src={tilesImage} // Use the imported image here
            alt="Tiles"
            style={columnImageStyle}
          />
          <p style={columnDescriptionStyle}>
            Discover an exclusive collection of tiles perfect for floors, walls,
            and outdoor spaces, combining durability and style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
