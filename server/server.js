import cors from 'cors';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const loadData = () => {
    const raw = fs.readFileSync(path.join(__dirname, "data/data.json"));
    return JSON.parse(raw);
};

app.get("/api/skills", (req, res) => {
    res.json(loadData().skills);
});


app.get("/api/projects", (req, res) => {
    res.json(loadData().projects);
});
// // Import the Express module for creating the server
// const express = require("express");
// // Import the CORS module to handle cross-origin requests
// const cors = require("cors");

// // Create an instance of the Express application
// const app = express();
// // Define CORS options to allow requests from the specified origin
// const corsOpts = {
//     origin: "http://localhost:5173",
// }
// // Use the CORS middleware with the defined options
// app.use(cors(corsOpts));
// // Define route for the API endpoint
// app.get("/api", (req, res) => {
//     res.json({ fruits: ["apple", "orange", "banana"] });
// });

// // Listen for requests on port 8080
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);