const fs = require('fs');

const filepath = './data/cards.json';

function load() {
    let rawData = fs.readFileSync(filepath);
    let data = JSON.parse(rawData);
    data = data ? data : [];
    return data;
}

function save(data) {
    let rawData = JSON.stringify(data);
    fs.writeFileSync(filepath, rawData);
}

module.exports = {
    load,
    save,
};
