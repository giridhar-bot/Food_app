import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
} from "@mui/material";
import { Home, ShoppingCart } from "@mui/icons-material";
import { css } from "@emotion/react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.id.toString().includes(searchTerm);
  });

  const styles = {
    appBar: css`
      background-color: #333;
      color: #fff;
    `,
    logo: css`
      margin-right: 16px;
    `,
    search: css`
      margin-left: auto;
    `,
    cartBadge: css`
      background-color: #f44336;
    `,
    card: css`
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.03);
      }
    `,
    cardMedia: css`
      height: 450px;
    `,
    cardContent: css`
      display: flex;
      justify-content: space-between;
    `,
    productTitle: css`
      font-weight: bold;
    `,
    productRating: css`
      color: #999;
    `,
  };

  return (
    <div>
      <AppBar position="static" css={styles.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" css={styles.logo}>
            <Home />
          </IconButton>
          <Typography variant="h6" noWrap css={styles.appBarTitle}>
            Tweegi
          </Typography>
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            css={styles.search}
            InputProps={{
              style: {
                color: "#fff",
                borderColor: "#fff",
              },
            }}
          />
          <IconButton color="inherit">
            <Badge badgeContent={0} color="error" css={styles.cartBadge}>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" css={styles.productListContainer}>
        <Grid container spacing={2}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card css={styles.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    css={styles.cardMedia}
                    image={product.image}
                    alt={product.description}
                  />
                  <CardContent css={styles.cardContent}>
                    <div>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        css={styles.productTitle}
                      >
                        {product.description}
                      </Typography>
                      <Typography variant="body2" css={styles.productRating}>
                        Rating: {product.rating}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        component="h2"
                        css={styles.productPrice}
                      >
                        ${product.price.toFixed(2)}
                      </Typography>
                      <Typography variant="body2" css={styles.productQuantity}>
                        Quantity: {product.quantity}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
export default ProductList;
