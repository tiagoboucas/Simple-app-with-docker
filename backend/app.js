const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4000;

// Load colors from JSON file
const colors = JSON.parse(fs.readFileSync('colors.json', 'utf8'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    next();
});

app.get('/colors', (req, res) => {
    try {
        const searchQuery = req.query.q;
        if (searchQuery) {
            const filteredColors = colors.filter(color => color.name.toLowerCase().includes(searchQuery.toLowerCase()));
            res.json({ items: filteredColors });
        } else {
            res.json({ items: colors });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

