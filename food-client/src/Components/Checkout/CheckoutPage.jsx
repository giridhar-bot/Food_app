import React from "react";
// import { makeStyles } from "@mui/styled-engine";
import styled from "@emotion/styled";
import { Grid, Typography, Paper, Button, TextField } from "@mui/material";

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const CheckoutPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Shipping Information
            </Typography>
            <TextField
              required
              id="name"
              label="Full Name"
              fullWidth
              autoComplete="name"
            />
            <TextField
              required
              id="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
            />
            <TextField
              id="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
            />
            <TextField
              required
              id="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
            />
            <TextField
              required
              id="state"
              label="State/Province/Region"
              fullWidth
            />
            <TextField
              required
              id="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
            />
            <TextField
              required
              id="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Order Summary
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Item 1 x $10.00
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Item 2 x $15.00
            </Typography>
            <Typography variant="h6" gutterBottom>
              Total: $25.00
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Place Order
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default CheckoutPage;