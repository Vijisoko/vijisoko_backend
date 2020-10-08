const express = require('express');
var bodyParser = require("body-parser");

const app = express();

// Routes
var customerRoute = require("./route/customer");

// Middlewares
app.use("/customer", customerRouter);

app.get('/', (req, res) => {
 res.send("Home");
});

app.listen(3000);
