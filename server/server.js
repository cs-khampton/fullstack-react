// Import the Express module for creating the server
const express = require("express");

// Import the CORS module to handle cross-origin requests
const cors = require("cors");

// Create an instance of the Express application
const app = express();

// Define CORS options to allow requests from the specified origin
const corsOpts = {
    origin: "http://localhost:5173",
}

// Use the CORS middleware with the defined options
app.use(cors(corsOpts));

// Define route for the API endpoint
app.get("/api", (req, res) => {
    res.json({ fruits: ["apple", "orange", "banana"] });
});

// Listen for requests on port 8080
app.listen(8080, () => {
    console.log("Server started on port 8080");
});