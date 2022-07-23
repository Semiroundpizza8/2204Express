console.log("===================================");

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

const volleyball = require("volleyball");
app.use(volleyball);

// app.use("*", (req, res, next) => {
app.use((req, res, next) => {
    console.log("==========================")
    console.log(req.url, "Middlewear was hit!!")
    console.log("==========================")
    next();
})

app.use('/api', require('./api'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log("App started on port", PORT)
});