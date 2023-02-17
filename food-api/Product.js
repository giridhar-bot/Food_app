const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    image: "https://example.com/image1.jpg",
    price: 10.99,
    rating: 4.5,
    description: "This is the first product",
    quantity: 20,
  },
  {
    id: 2,
    image: "https://example.com/image2.jpg",
    price: 19.99,
    rating: 3.2,
    description: "This is the second product",
    quantity: 10,
  },
  {
    id: 3,
    image: "https://example.com/image3.jpg",
    price: 5.99,
    rating: 4.0,
    description: "This is the third product",
    quantity: 15,
  },
  {
    id: 4,
    image: "https://example.com/image4.jpg",
    price: 12.49,
    rating: 4.8,
    description: "This is the fourth product",
    quantity: 5,
  },
  {
    id: 5,
    image: "https://example.com/image5.jpg",
    price: 9.99,
    rating: 3.5,
    description: "This is the fifth product",
    quantity: 30,
  },
  {
    id: 6,
    image: "https://example.com/image6.jpg",
    price: 29.99,
    rating: 4.2,
    description: "This is the sixth product",
    quantity: 8,
  },
  {
    id: 7,
    image: "https://example.com/image7.jpg",
    price: 7.99,
    rating: 3.0,
    description: "This is the seventh product",
    quantity: 25,
  },
  {
    id: 8,
    image: "https://example.com/image8.jpg",
    price: 15.99,
    rating: 4.5,
    description: "This is the eighth product",
    quantity: 12,
  },
  {
    id: 9,
    image: "https://example.com/image9.jpg",
    price: 24.99,
    rating: 4.7,
    description: "This is the ninth product",
    quantity: 3,
  },
  {
    id: 10,
    image: "https://example.com/image10.jpg",
    price: 8.99,
    rating: 3.9,
    description: "This is the tenth product",
    quantity: 18,
  },
];

// Create a new product
app.post("/products", (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Get a single product
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Product not found");
  res.json(product);
});

// Update a product
app.put("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) return res.status(404).send("Product not found");
  const updatedProduct = req.body;
  updatedProduct.id = productId;
  const index = products.findIndex((p) => p.id === productId);
  products[index] = updatedProduct;
  res.json(updatedProduct);
});

// Delete a product
app.delete("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) return res.status(404).send("Product not found");
  const index = products.findIndex((p) => p.id === productId);
  products.splice(index, 1);
  res.send("Product deleted successfully");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
