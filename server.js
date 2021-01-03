const data = require('./data/cards');

const express = require('express');
const PORT = 3000;
let app = express();

app.use(express.json());

app.get('/cards', (req, res) => {
    res.json(data.load());
});

app.post('/cards', (req, res) => {
    data.save(req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
