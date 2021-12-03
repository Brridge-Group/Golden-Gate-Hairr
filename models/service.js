const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  isChecked: { type: Boolean, default: false },
})

module.exports = mongoose.model('Service', serviceSchema)
