const express = require('express');
var bodyParser = require("body-parser");

const app = express();

// Routes
var customerRoute = require("./routes/customer");

// Middlewares
app.use("/customer", customerRoute);

app.get('/', (req, res) => {
 res.send("Home");
});

app.listen(3000);
