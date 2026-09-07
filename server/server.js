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

const loadSkills = () => {
    const raw = fs.readFileSync(path.join(__dirname, "data/skills.json"));
    return JSON.parse(raw);
};

app.get("/api/skills", (req, res) => {
    const { category } = req.query;
    const skills = loadSkills().skills;

    if (category) {
        const filtered = skills.filter(
            (s) => s.category.toLowerCase() === category.toLowerCase()
        );
        return res.json(filtered);
    }
    res.json(skills);
});


const loadProj = () => {
    const raw = fs.readFileSync(path.join(__dirname, "data/projects.json"));
    return JSON.parse(raw);
};

app.get("/api/projects", (req, res) => {
    res.json(loadProj().projects);
});


const loadExp = () => {
    const raw = fs.readFileSync(path.join(__dirname, "data/experience.json"));
    return JSON.parse(raw);
};

app.get("/api/experience", (req, res) => {
    res.json(loadExp().experience);
});


// Listen for requests on port 8080
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);