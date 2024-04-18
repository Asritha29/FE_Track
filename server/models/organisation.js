const mongoose = require('mongoose');

const organisationSchema = new mongoose.Schema({
    organisationName: String,
  
});

const organisation = mongoose.model('organisation', organisationSchema);

module.exports = organisation
