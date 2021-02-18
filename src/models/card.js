const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  title: String,
  whys: [String],
  grid: [String],
  startDate: Number,
});

module.exports = mongoose.model('Card', CardSchema);
