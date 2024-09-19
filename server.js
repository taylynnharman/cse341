// Import the express module
const express = require("express");

// Create an instance of an Express application
const app = express();

// Define a route that returns the name of someone you know
app.get("/", (req, res) => {
  res.send("Hello, my friend Lydia!");
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
