const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/product_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const Product = require('./models/product');

// Show product list
app.get('/', async (req, res) => {
  const products = await Product.find();
  res.render('index', { products });
});

// Show product creation form
app.get('/create', (req, res) => {
  res.render('create');
});

// Create new product
app.post('/create', async (req, res) => {
  const { name, price, description } = req.body;
  const product = new Product({ name, price, description });
  await product.save();
  res.redirect('/');
});

// Show product update form
app.get('/update/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('update', { product });
});

// Update product
app.post('/update/:id', async (req, res) => {
  const { name, price, description } = req.body;
  await Product.findByIdAndUpdate(req.params.id, { name, price, description });
  res.redirect('/');
});

// Delete product
app.post('/delete/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/');
});
