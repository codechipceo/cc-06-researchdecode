import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  InputAdornment,
  IconButton,
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SecurityIcon from '@mui/icons-material/Security';
import { styled } from '@mui/system';

const FormContainer = styled(Paper)({
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const PaymentPage = () => {
  const { courseId } = useParams();

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Handle payment logic here
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '40px' }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <FormContainer>
            <Typography variant="h5" gutterBottom>
              Payment Information
            </Typography>
            <Divider sx={{ my: 2 }} />
            <form onSubmit={handlePaymentSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name on Card"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="cardNumber"
                    label="Card Number"
                    variant="outlined"
                    type="text"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <CreditCardIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    id="expiryDate"
                    label="Expiry Date (MM/YY)"
                    variant="outlined"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    id="cvv"
                    label="CVV"
                    variant="outlined"
                    type="password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <SecurityIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box mt={2}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit Payment
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </FormContainer>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormContainer>
            <Typography variant="h5" gutterBottom>
              Order Summary
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box>
              <Typography variant="body1">Course Name</Typography>
              <Typography variant="h6">Advanced React and Redux</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="body2">Subtotal: $49.99</Typography>
              <Typography variant="body2">Tax: $4.99</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                <strong>Total: $54.98</strong>
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="body2" color="textSecondary">
                <SecurityIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Your payment information is securely processed.
              </Typography>
            </Box>
          </FormContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PaymentPage;