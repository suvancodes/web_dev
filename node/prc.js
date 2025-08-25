// const { createServer } = require('node:http');

// https://nodejs.org/en/learn/getting-started/introduction-to-nodejs#an-example-nodejs-application

// const { createServer } = require('node:http');

import http from "http"; // Make sure you're using Node v18+ for ES Module support

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World!</h1>\n');
});

server.listen(port, hostname, () => {
  console.log(`✅ Server running at http://${hostname}:${port}/`);
});

