const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello world, I’m diving into the coding universe and this is my first step!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
