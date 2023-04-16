// Express App
const express = require("express");
const app = express();

// Cross Origin Resource Sharing
const cors = require("cors");
app.use(cors());

// Use the path
const path = require("path");

// Configure mongoose
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
async function main(){
  await mongoose.connect(process.env.MONGO_STRING);
}

main().catch(err => console.log(`ERRORR!!!! ${err}`));

// Parse the request body
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// API route
const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

// Create and handle 404 Error
app.use((req, res, next) => {
  res.status(404);
  res.json({ err: "Page not found!" });
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on port: ${process.env.PORT}...`)
);
