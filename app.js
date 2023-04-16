// Express App
const express = require("express");
const app = express();

// Cross Origin Resource Sharing
const cors = require("cors");
app.use(cors());

// Use the path
const path = require("path");

// Using environment variables from dotenv
require("dotenv").config();

// Configure mongoose
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
async function main(){
  await mongoose.connect(process.env.MONGO_STRING);
}
// console.log(process.env.MONGO_STRING);
main().catch(err => console.log(`ERRORR!!!! ${err}`));


// To display the requests in the terminal
const morgan = require("morgan");
app.use(morgan("dev"));

// Parse the request body
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Route for the frontend
app.use("/", express.static(path.resolve(__dirname, "../client/dist")))

// API route
const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

// Test Route
app.get("/test", (req, res) => {
  res.send("&copy<sub>o</sub>");
});

// Create and handle 404 Error
app.use((req, res, next) => {
  res.status(404);
  res.json({ err: "Page not found!" });
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on port: ${process.env.PORT}...`)
);
