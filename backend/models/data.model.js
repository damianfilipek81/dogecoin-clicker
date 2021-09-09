const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  data: { type: Object, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('Data', dataSchema);