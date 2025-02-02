const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ hello: "this is app2" });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`App2 is running on port ${PORT}`);
});
