import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/use-auth";

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' to='https://mui.com/'>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export const SignUp = () => {
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    countryCode: "",
    phoneNumber: "",
    city: "",
    state: "",
    country: "",
    street: "",
    postalCode: "",
  });

  const { isLoading, errorMessage, isError, handleSignUp } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation
    if (name === "email") {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setEmailError(!emailValid);
    }
    if (name === "phoneNumber") {
      const phoneValid = /^[0-9]*$/.test(value);
      setPhoneNumberError(!phoneValid);
    }
  };
  const signUpObj = {
    email: formData.email,
    password: formData.password,
    firstName: formData.firstName,
    lastName: formData.lastName,
    gender: formData.gender,
    countryCode: formData.countryCode,
    phoneNumber: formData.phoneNumber,
    address: {
      city: formData.city,
      state: formData.state,
      country: formData.country,
      street: formData.street,
      postalCode: formData.postalCode,
    },
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignUp(signUpObj);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box component='form' noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
                error={isError}
                helperText={errorMessage}
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='family-name'
                error={isError}
                helperText={errorMessage}
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                type='email'
                autoComplete='email'
                error={emailError}
                helperText={emailError ? "Invalid email format" : ""}
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
                error={isError}
                helperText={errorMessage}
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                required
                fullWidth
                id='gender'
                label='Gender'
                name='gender'
                SelectProps={{ native: true }}
                error={isError}
                helperText={errorMessage}
                value={formData.gender}
                onChange={handleChange}
              >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                select
                required
                fullWidth
                id='countryCode'
                label='Country Code'
                name='countryCode'
                SelectProps={{ native: true }}
                error={isError}
                helperText={errorMessage}
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value='+91'>+91</option>
                <option value='+1'>+1</option>
                <option value='+44'>+44</option>
                {/* Add more country codes as needed */}
              </TextField>
            </Grid>
            <Grid item xs={8}>
              <TextField
                required
                fullWidth
                id='phoneNumber'
                label='Phone Number'
                name='phoneNumber'
                type='tel'
                autoComplete='tel'
                inputProps={{ pattern: "[0-9]*" }}
                error={phoneNumberError}
                helperText={
                  phoneNumberError ? "Phone number must be numeric" : ""
                }
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='street'
                label='Street'
                name='street'
                autoComplete='address-line1'
                error={isError}
                helperText={errorMessage}
                value={formData.street}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='city'
                label='City'
                name='city'
                autoComplete='address-level2'
                error={isError}
                helperText={errorMessage}
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='state'
                label='State/Province'
                name='state'
                autoComplete='address-level1'
                error={isError}
                helperText={errorMessage}
                value={formData.state}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='postalCode'
                label='Postal Code'
                name='postalCode'
                autoComplete='postal-code'
                error={isError}
                helperText={errorMessage}
                value={formData.postalCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='country'
                label='Country'
                name='country'
                autoComplete='country'
                error={isError}
                helperText={errorMessage}
                value={formData.country}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
            onClick={(e) => handleSubmit(e)}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link to='/signin' style={{ textDecoration: "none" }}>
                <Typography variant='body2' color='primary'>
                  Already have an account? Sign in
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};
