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
    const { category } = req.query;
    const skills = loadData().skills;

    if (category) {
        const filtered = skills.filter(
            (s) => s.category.toLowerCase() === category.toLowerCase()
        );
        return res.json(filtered);
    }

    res.json(skills);
});

app.get("/api/projects", (req, res) => {
    res.json(loadData().projects);
});

// Listen for requests on port 8080
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);