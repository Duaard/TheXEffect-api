const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  title: String,
  whys: [String],
  grid: [String],
});

module.exports = mongoose.model('Card', CardSchema);
