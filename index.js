const express = require("express");
const cors = require("cors");
const app = express();

// loading variable from .env
require("dotenv").config({ path: "./.env" });

const PORT = process.env.PORT || 8080;

// import routes
const paymentFiveRoutes = require("./routes/paymentFiveRoutes");
const paymentTenRoutes = require("./routes/paymentTenRoutes");
const homeRoutes = require("./routes/homeRoutes");

// Middleware setup
app.use(express.static("public"));
app.use(cors());
app.use(express.json());


app.use("/", homeRoutes);
app.use("/paymentFive", paymentFiveRoutes);
app.use("/paymentTen", paymentTenRoutes);

// test

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});