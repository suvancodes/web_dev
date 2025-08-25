const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static("public"))
              // get request -> used for basics request

app.get('/', (req, res) => {
  res.send('Hello, Express!');
}).post('/post', (req, res) => {
  console.log("hello world post")
  res.send('Hello, Express post!');
}).put('/api', (req, res) => {
  console.log("hello world put")
  res.send('Hello, Express put!');
});

app.get('/index',(req, res) => {
  res.sendFile('about/index.html',{root:__dirname});
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
