const express = require("express");
const { flowers } = require("./data");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/flowers", async (req, res) => {
  return res.json(flowers);
});

app.listen(4000, () => {
  console.log("listening");
});
