const employee = require("../models/employee");
const location = require("../models/location");

const mongoose = require("mongoose");
const country = require('../models/country');
const User = require("../models/login");
const work = require("../models/workLocation");
const organisation = require("../models/organisation");

const villages = require("../models/village");
//const collection = mongoose.model('user');
const {setUser} = require("../service/auth");
const {v4: uuidv4} = require('uuid');
const village = require("../models/village");
//const multer = require("multer");
/**
 * GET /
 * Homepage*/
 
const path = require('path');

exports.homepage = async (req, res) => {
  const locals = {
    title: "FE Track",
  };

  const perPage = 5;
  const page = parseInt(req.query.page) || 1; // Parse the page query parameter to an integer

  try {
    const employees = await employee.aggregate([
      { $sort: { createdAt: -1 } },
      { $skip: (perPage * page) - perPage },
      { $limit: perPage }
    ]).exec();

    const locations = await location.aggregate([
      { $sort: { createdAt: -1 } }
    ]).exec();
    
    const works = await work.aggregate([
      { $sort: { createdAt: -1 } },
      { $skip: (perPage * page) - perPage },
      { $limit: perPage }
    ]).exec();

    // Count documents using countDocuments
    const count = await employee.countDocuments();

    // Calculate total pages
    const totalPages = Math.ceil(count / perPage);

    res.render("index", {
      locals,
      employees,
      locations,
      works,
      current: page,
      pages: totalPages, // Change the variable name to totalPages for clarity
      imageURL: 'css/EMS__1_-removebg-preview (1).png' 
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


 /**exports.homepage = async (req, res) => {
     //const messages = await req.consumeFlash('info');
    const locals = {
      title: 'NodeJs',
       description: 'Free NodeJs User Management System'
    }

     try {
       const customers = await Customer.find({}).limit(22);
       res.render('index', { locals, messages, customers } );
     } catch (error) {
       console.log(error);
     }
 }*/

 //get signup page

// Render the signup page
exports.signup = async (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

//post signup 

exports.postUser = async( req, res) => {
  console.log(req.body);
  const newUser = new User({
    Name:req.body.Name,
    userName:req.body.userName,
    password:req.body.password,
    role:req.body.role
  });
  try {
    await User.create(newUser);
    res.redirect("/home");
  } catch (error) {
    console.log(error);
  }
}

/**
 * GET /
 * login
 */
exports.login = async (req, res) => {
  const locals = {
    title: "login",
  };

  try {
    res.render("login", { locals });
  } catch (error) {
    console.log(error);
  }
};

exports.postlogin = async (req, res) => {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName, password });

  if (!user) {
    return res.render('login', {
      error: "Invalid Username or password",
    });
  }
  
  const token = setUser(user);
  res.redirect("/home");
};

// logout
exports.logout = async (req, res, next) => {
  req.session.destroy((err) =>{
    if (err){
    console.error(500).send('Error logging out');
    req.status(500).send('Error logging out');
    }else{
      res.redirect('/');
    }
  });
};

/**
 * GET /
 * New Customer Form
 */

exports.addEmployee = async (req, res) => {
  try {
    // Fetch countries from the database
    const countries = await country.find();
    const organisations = await organisation.find(); 
    const villages = await village.find();
    let perPage = 5;
  let page = req.query.page || 1;
    const employees = await employee.aggregate([{ $sort: { createdAt: -1 } }])
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec();
    const locations = await location.aggregate([{ $sort: { createdAt: -1 } }])
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec();
    const works= await work.aggregate([{ $sort: { createdAt: -1 }}])
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec();

    const count = await employee.countDocuments({});
    
    // locals object to pass data to the view
    const locals = {
      title: "Fe Track",
  
    };

    // Render the "customer/add" view with the locals data
    res.render("customer/add", {locals,
      locals,
      countries,
      employees,
      locations,
      organisations,
      works,
      current: page,
      pages: Math.ceil(count / perPage),
      imageURL: 'css/EMS__1_-removebg-preview (1).png' 
    });
  } catch (error) {
    // Handle errors by logging and sending a 500 Internal Server Error response
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};



/**
 * POST /
 * Create New Employee 
 */
exports.postEmployee = async (req, res) => {
  console.log(req.body);
  //const jsonData = await fs.readFile('csd.json', 'utf-8');
  //const dropdownOptions = JSON.parse(jsonData);

  const newEmployee = new employee({
    fullName: req.body.fullName,
    fatherName:req.body.fatherName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    Image: req.body.Image,
    ManagerName: req.body.ManagerName,
    Relation: req.body.Relation,
    Designation: req.body.Designation,
    employeeId: req.body.employeeId,
    dob:req.body.dob,
    doj:req.body.doj,
    status:req.body.status,
    deployment:req.body.deployment,
  });
  const newLocation = new location({
    country: req.body.country,
    state: req.body.state,
    district: req.body.district,
    mandal: req.body.mandal,
    village: req.body.village,
  });
  const newWorkLocation = new work({
    cun: req.body.cun,
    st: req.body.st,
    dis : req.body.dis,
    m : req.body.m,
    v: req.body.v,
  });
  

  try {
    await employee.create(newEmployee);
    await location.create(newLocation);
    await work.create(newWorkLocation);

    await req.flash("info", "New employee has been added.");
    res.redirect("/home",);
  } catch (error) {
    console.log(error);
  }
};

/**
 * GET /
 * Customer Data
 */
/**
exports.view = async (req, res) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.id });

  
    res.render("customer/view", {
      
      customer,
    });
  } catch (error) {
    console.log(error);
  }
};

 * GET /
 * Edit employee Data
 */
exports.edit = async (req, res) => {
  try {
    const countries = await country.find();
    const organisations = await organisation.find();
    const villages = await village.find();

    const Employee = await employee.findOne({ _id: req.params.id });
    const Location = await location.findOne({ _id: req.params.id }); 
    const Work = await work.findOne({ employeeId: req.params.id }); 

    res.render("customer/edit", {
      Employee,
      Location,
      Work,
      countries,
      organisations,
      villages,
      imageURL: 'css/EMS__1_-removebg-preview (1).png'
    });
  } catch (error) {
    console.error("Error in editing:", error);
    res.status(500).send("Error occurred while editing.");
  }
};


/**
 * GET /
 * Update Employee Data
 */
exports.editPost = async (req, res) => {
  try {
    await employee.findByIdAndUpdate(req.params.id, {
      fullName: req.body.fullName,
      fatherName:req.body.fatherName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      Image: req.body.Image,
      ManagerName: req.body.ManagerName,
      Relation: req.body.Relation,
      Designation: req.body.Designation,
      employeId: req.body.employeeId,
      dob:req.body.dob,
      doj:req.body.doj,
      status:req.body.status,
      updatedAt: Date.now(),
      });
      await location.findByIdAndUpdate(req.params.id, {
        country: req.body.country,
        state: req.body.state,
        district: req.body.district,
        mandal: req.body.mandal,
        village: req.body.village,  
    });
       await work.findByIdAndUpdate(req.params.id,{
        cun: req.body.cun,
        st: req.body.st,
        dis : req.body.dis,
        m : req.body.m,
        v: req.body.v,
    })
  await res.redirect(`/edit/${req.params.id}`);
    console.log("redirected");
   
  } catch (error) {
    console.log(error);
  }
};




/**
 * Delete /
 * Delete Customer Data
exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.deleteOne({ _id: req.params.id });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
*/

/**
 * Get /
 * Search Customer Data*/
 
exports.searchemployee = async (req, res) => {
  const locals = {
    title: "Search Customer Data",
  };

  try {
    const searchTerm = req.body.searchTerm;
    if (!searchTerm) {
      return res.status(400).json({ error: "Search term is required" });
    }

    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

    const Employee = require("../models/employee"); // Import your Mongoose model
    const employees = await Employee.find({
      $or: [
        { fullName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { email: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { phoneNumber: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { employeeId: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { ManagerName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { Designation: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { status: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { deployment: { $regex: new RegExp(searchNoSpecialChar, "i") } },
      ],
    });

    res.json({ employees }); // Send the search results back to the client
  } catch (error) {
    console.error("Error searching for employees:", error);
    res.status(500).json({ error: "Internal server error" }); // Send an error response
  }
};



