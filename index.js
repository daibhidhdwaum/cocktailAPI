const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send({ Aim: "Get Drunk" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
