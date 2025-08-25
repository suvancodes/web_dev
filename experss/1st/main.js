import express from 'express';

const app = express();
const port = 3000;

// Define a simple route
//typef request app.get , app.put , app.post , app.delet(path, hand)

app.get('/', (req, res) => {
res.send('<h1>Hello from Express!</h1>');
});

app.get('/about', (req, res) => {
res.send('<h1>about</h1>');
});

// host link http://localhost:3000/about

app.get('/contact', (req, res) => {
res.send('<h1>contact</h1>');
});
// host link http://localhost:3000/contact

app.get('/blog/intro-ot-python', (req, res) => {
res.send('<h1>blog/intro-ot-python</h1>');
});

// link http://localhost:3000/blog/intro-ot-python 
app.get('/blog/intro-ot-js', (req, res) => {
res.send('<h1>blog/intro-to-js</h1>');
});
// host link http://localhost:3000/blog/intro-ot-js


app.get('/subho', (req, res) => {
res.send('<h1>Hello from subho!</h1>');
});

// // host link http://localhost:3000/subho


// like 👆 example when we need to multipal end point then we should url perameter

app.get('/users/:id', (req, res) => {
  const userId = req.params.id; // "123"
  res.send(`User ID: ${userId}`);
});

// link : http://localhost:3000/users/10024769019


// quary

app.get('/products', (req, res) => {
  const category = req.query.category; // e.g., "books"
  const sort = req.query.sort;         // e.g., "price"
  res.send(`Category: ${category}, Sort by: ${sort}`);
});

// link: http://localhost:3000/products?category=books&sort=price

// static file



// Start the server

app.listen(port, () => {
console.log(`🚀 Express server running at http://localhost:${port}`);
});
