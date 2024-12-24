import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    let error = "";
    if (name === "name" && value.trim() === "") {
      error = "Name is required";
    } else if (name === "mobile" && !/^\d{10}$/.test(value)) {
      error = "Enter a valid 10-digit mobile number";
    } else if (
      name === "email" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      error = "Enter a valid email address";
    } else if (name === "password" && value.length < 6) {
      error = "Password must be at least 6 characters long";
    } else if (name === "confirmPassword" && value !== formData.password) {
      error = "Passwords do not match";
    }

    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "" ? "Name is required" : "",
      mobile: !/^\d{10}$/.test(formData.mobile)
        ? "Enter a valid 10-digit mobile number"
        : "",
      email: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ? "Enter a valid email address"
        : "",
      password:
        formData.password.length < 6
          ? "Password must be at least 6 characters long"
          : "",
      confirmPassword:
        formData.confirmPassword !== formData.password
          ? "Passwords do not match"
          : "",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== "")) {
      try {
        await axios.post("http://localhost:5000/signup", formData);
        setSuccessMessage(true);

        // Redirect to login after a brief delay
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (error) {
        console.error("Error signing up:", error);
        alert(
          error.response?.data?.message || "An error occurred. Please try again."
        );
      }
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", backgroundColor: "#f5f7fa" }}
    >
      <Grid item xs={12} sm={8} md={5}>
        <Paper elevation={8} sx={{ padding: 4, borderRadius: 3 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />

            <TextField
              label="Mobile Number"
              name="mobile"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.mobile}
              onChange={handleChange}
              error={!!errors.mobile}
              helperText={errors.mobile}
            />

            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              label="Password"
              name="password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />

            <TextField
              label="Confirm Password"
              name="confirmPassword"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                marginTop: 3,
                padding: 1.5,
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor: "#1976d2",
                color: "#fff",
                "&:hover": { backgroundColor: "#155a9d" },
              }}
            >
              Sign Up
            </Button>

            <Typography
              align="center"
              sx={{ marginTop: 2, color: "#1976d2", cursor: "pointer" }}
            >
              Already have an account?{" "}
              <a
                href="/login"
                style={{
                  color: "#1976d2",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Click here to log in
              </a>
            </Typography>
          </Box>
        </Paper>

        {/* Success Snackbar */}
        <Snackbar
          open={successMessage}
          autoHideDuration={2000}
          onClose={() => setSuccessMessage(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSuccessMessage(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Registration successful! Redirecting to login...
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
};

export default SignUp;
