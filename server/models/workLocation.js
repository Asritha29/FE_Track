const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const workSchema = new Schema({
    cnu: {
        type: String,
        required : true
       
      },
    st: {
        type: String,
        required : true
      },
    dis: {
        type: String,
        required : true
      },
    m: {
          type: String,
        required : true
        },
    v: {
          type: String,
         required : true
        },
    });
    const work = mongoose.model('work',workSchema);

    module.exports= work;