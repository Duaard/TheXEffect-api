const fs = require('fs');

const filepath = './data/cards.json';

function load() {
    let rawData = fs.readFileSync(filepath);
    return JSON.parse(rawData);
}

function save(data) {
    let rawData = JSON.stringify(data);
    fs.writeFileSync(filepath, rawData);
}

module.exports = {
    load,
    save,
};
