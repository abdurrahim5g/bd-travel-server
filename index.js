const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

// data
const places = require("./data/places.json");

app.use(cors());

// primary  API
app.get("/", (req, res) => {
  res.send("BD Server is running");
});

// Places API
app.get("/places", (req, res) => {
  res.json(places);
});

app.listen(port, () => {
  console.log(`The server in running on http://localhost:5000/`);
});
