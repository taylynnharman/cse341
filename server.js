const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", require("./routes"));

// Start the server on port 3000
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
