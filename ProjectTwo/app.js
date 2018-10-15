
const express = require('express');
const app = express();

module.exports.app = app;

const routes = require('./router');


const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

app.use(express.static('mainfiles'));

app.use(routes);

app.listen(port, () => {

  console.log(`Server is listening at http://${hostname}:${port}/`);
})
