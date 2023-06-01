const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

// apply reload package
const http = require("http");

// data
const places = require("./data/places.json");

app.use(cors());

// primary  API
app.get("/", (req, res) => {
  res.send("BD Travel Server is running");
});

// Places API
app.get("/places", (req, res) => {
  res.json(places.places);
});

// Places API
app.get("/place/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const place = places.places.find((p) => p.id === id) || [];
  res.json(place);
});

// get hotels
app.get("/place/hotels/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const place = places.places.find((p) => p.id === id) || [];
  res.json(place.hotels);
});

app.get("*", (req, res) => {
  res.json("[]");
});

app.listen(port, () => {
  console.log(`The server in running on http://localhost:5000/`);
});
