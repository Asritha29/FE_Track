const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const LocationSchema = new Schema({
    country: {
        type: String,
    
      },
    state: {
        type: String,
   
      },
    district: {
        type: String,
   
      },
      mandal: {
          type: String,
        required : true
        },
    village: {
          type: String,
         required : true
        },
    });
    const location = mongoose.model('location',LocationSchema);

    module.exports= location;