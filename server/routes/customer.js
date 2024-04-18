const express = require('express');
const router = express.Router();
const checkForAuthentication = require('../middlewares/auth')
const customerController = require('../controllers/customerController');
//const multer = require('multer');
//Customer Routes
router.get('/signup',customerController.signup);
router.post('/signup',customerController.postUser);
router.get('/', customerController.login); 
router.post('/',customerController.postlogin);
router.get('/logout',customerController.logout);
router.get('/home', customerController.homepage);
router.get('/add', customerController.addEmployee);
router.post('/add', customerController.postEmployee);
//router.get('/view/:id', customerController.view);
router.get('/edit/:id', customerController.edit);
router.post('/edit/:id', customerController.editPost);
//router.delete('/edit/:id', customerController.deleteCustomer);


router.post('/search', customerController.searchemployee);


module.exports = router;