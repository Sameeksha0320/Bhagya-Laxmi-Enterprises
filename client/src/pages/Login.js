import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  Link,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [serverResponse, setServerResponse] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Real-time validation
    if (name === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      setErrors({ ...errors, email: "Enter a valid email address" });
    } else if (name === "password" && value.length < 6) {
      setErrors({ ...errors, password: "Password must be at least 6 characters long" });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const newErrors = {
      email: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ? "Enter a valid email address"
        : "",
      password: formData.password.length < 6 ? "Password must be at least 6 characters long" : "",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== "")) {
      try {
        const response = await axios.post("http://localhost:5000/login", formData);
        setServerResponse(response.data.message);
        setSuccessMessage(true);

        // Redirect to home page after success
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        setServerResponse(error.response?.data?.message || "Error occurred");
      }
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", backgroundColor: "#f0f4f8" }}
    >
      <Grid item xs={12} sm={8} md={5}>
        <Paper elevation={5} sx={{ padding: 4, borderRadius: 3 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            {/* Email Field */}
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

            {/* Password Field */}
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              type="password"
            />

            {/* Submit Button */}
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
              Login
            </Button>

            {/* Server Response */}
            {serverResponse && !successMessage && (
              <Typography align="center" sx={{ mt: 3, color: "red" }}>
                {serverResponse}
              </Typography>
            )}

            {/* Signup Link */}
            <Typography align="center" sx={{ mt: 3 }}>
              New here?{" "}
              <Link
                href="/signup"
                sx={{ fontWeight: "bold", color: "#1976d2", textDecoration: "none" }}
              >
                Register
              </Link>
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
            Login successful! Redirecting to home...
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
};

export default Login;
