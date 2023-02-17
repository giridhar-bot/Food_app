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
    description: "Butter chicken",
    quantity: 20,
  },
  {
    id: 2,
    image: "https://example.com/image2.jpg",
    price: 19.99,
    rating: 3.2,
    description: "Biryani",
    quantity: 10,
  },
  {
    id: 3,
    image: "https://example.com/image3.jpg",
    price: 5.99,
    rating: 4.0,
    description: "Palak paneer",
    quantity: 15,
  },
  {
    id: 4,
    image: "https://example.com/image4.jpg",
    price: 12.49,
    rating: 4.8,
    description: "Tandoori chicken",
    quantity: 5,
  },
  {
    id: 5,
    image: "https://example.com/image5.jpg",
    price: 9.99,
    rating: 3.5,
    description: "Samosas",
    quantity: 30,
  },
  {
    id: 6,
    image: "https://example.com/image6.jpg",
    price: 29.99,
    rating: 4.2,
    description: "Dosa",
    quantity: 8,
  },
  {
    id: 7,
    image: "https://example.com/image7.jpg",
    price: 7.99,
    rating: 3.0,
    description: "Gulab jamun",
    quantity: 25,
  },
  {
    id: 8,
    image: "https://example.com/image8.jpg",
    price: 15.99,
    rating: 4.5,
    description: "Lassi",
    quantity: 12,
  },
  {
    id: 9,
    image: "https://example.com/image9.jpg",
    price: 24.99,
    rating: 4.7,
    description: "Chole bhature",
    quantity: 3,
  },
  {
    id: 10,
    image: "https://example.com/image10.jpg",
    price: 8.99,
    rating: 3.9,
    description: "Vada pav",
    quantity: 18,
  },

  {
    id: 11,
    image: "https://example.com/image11.jpg",
    price: 11.99,
    rating: 4.1,
    description: "Mutton biryani",
    quantity: 7,
  },
  {
    id: 12,
    image: "https://example.com/image12.jpg",
    price: 6.99,
    rating: 3.8,
    description: "Aloo gobi",
    quantity: 22,
  },
  {
    id: 13,
    image: "https://example.com/image13.jpg",
    price: 16.99,
    rating: 4.4,
    description: "Chicken tikka masala",
    quantity: 14,
  },
  {
    id: 14,
    image: "https://example.com/image14.jpg",
    price: 8.49,
    rating: 3.6,
    description: "Paneer makhani",
    quantity: 17,
  },
  {
    id: 15,
    image: "https://example.com/image15.jpg",
    price: 13.99,
    rating: 4.3,
    description: "Fish curry",
    quantity: 9,
  },
  {
    id: 16,
    image: "https://example.com/image16.jpg",
    price: 4.99,
    rating: 2.9,
    description: "Papdi chaat",
    quantity: 28,
  },
  {
    id: 17,
    image: "https://example.com/image17.jpg",
    price: 20.99,
    rating: 4.6,
    description: "Lamb rogan josh",
    quantity: 6,
  },
  {
    id: 18,
    image: "https://example.com/image18.jpg",
    price: 9.99,
    rating: 3.7,
    description: "Vegetable samosas",
    quantity: 21,
  },
  {
    id: 19,
    image: "https://example.com/image19.jpg",
    price: 26.99,
    rating: 4.8,
    description: "Prawn masala",
    quantity: 4,
  },
  {
    id: 20,
    image: "https://example.com/image20.jpg",
    price: 7.99,
    rating: 3.4,
    description: "Raita",
    quantity: 26,
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

app.listen(3100, () => {
  console.log("Server listening on port 3100");
});
