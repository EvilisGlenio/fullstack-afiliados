const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json()); // so that the express starts giving you the body of messages coming in json format
app.use(express.urlencoded({ extended: true})); // so that express can give you requests in the urlenconded pattern
app.use(morgan('dev')); // log lib

app.use(require("./routes"));

app.listen(3000);