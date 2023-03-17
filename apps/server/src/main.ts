import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3006, () => {
  console.log("Server listening on port 3006");
});