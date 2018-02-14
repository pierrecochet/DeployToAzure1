var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlSimpleAbout = require('../controllers/ctrlSimpleAbout');
const ctrlSimpleContact = require('../controllers/ctrlSimpleContact');
const ctrlSimpleStuff = require('../controllers/ctrlSimpleStuff');
const ctrlLateBox = require('../controllers/ctrlLateBox')


router.get('/',ctrlMain.index);
router.get('/simpleabout',ctrlSimpleAbout.simpleabout);
router.get('/simplecontact',ctrlSimpleContact.simplecontact);
router.get('/simplestuff',ctrlSimpleStuff.simplestuff);
router.get('/latebox',ctrlLateBox.latebox);
module.exports = router;
