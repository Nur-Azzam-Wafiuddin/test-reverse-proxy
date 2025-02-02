const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ hello: "this is app1" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App1 is running on port ${PORT}`);
});
