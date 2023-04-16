const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ConstantSchema = new Schema({
  symbol: {type: String},
  name: {type: String},
  value: {type: String},
  unit: {type: String},
})

module.exports = mongoose.model("Constant", ConstantSchema);