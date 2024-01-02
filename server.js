const express = require("express");
const app = express();
app.use(express.static("dist"));
app.use(express.static("modules"));
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile('index.html')
});
app.listen(3000, () => {
    console.log("Start na porcie 3000");
  });
  