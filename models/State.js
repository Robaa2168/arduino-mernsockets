//models/State.js
const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  value: { type: String, unique: true },
  state: { type: Number, default: 0 },
});

module.exports = mongoose.model('State', stateSchema);
