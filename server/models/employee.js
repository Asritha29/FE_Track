const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  Image: {
    type: String,
    required: true
  },
  ManagerName: {
    type: String,
    required: true
  },
  Relation: {
    type: String,

  },
  Designation: {
    type: String,
    required: true
  },
  employeeId: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  doj: {
    type: Date,
    required: true
  },
  ismanager: {
    type: Boolean,
    
  },
  managerid: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: true
  },
  deployment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});


module.exports= mongoose.model('Employee', EmployeeSchema);