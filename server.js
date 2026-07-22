const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    name: "Abba Muhammad Abdulkadir",
    role: "SIWES Student",
    work: "Assignment 001"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});