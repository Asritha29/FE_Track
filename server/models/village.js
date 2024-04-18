// models/village.js
const mongoose = require('mongoose');

const villageSchema = new mongoose.Schema({
  village:String,
  mandal: String
  
});

const village = mongoose.model('village', villageSchema)

module.exports = village
