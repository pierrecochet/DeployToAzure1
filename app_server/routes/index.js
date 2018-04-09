var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlSimpleAbout = require('../controllers/ctrlSimpleAbout');
const ctrlSimpleContact = require('../controllers/ctrlSimpleContact');
const ctrlSimpleStuff = require('../controllers/ctrlSimpleStuff');
const ctrlLateBox = require('../controllers/ctrlLateBox');
//const ctrlSimpleStuff_add = require('../controllers/ctrlSimpleStuff_add');



router.get('/',ctrlMain.index);
router.get('/simpleabout',ctrlSimpleAbout.simpleabout);
router.get('/simplecontact',ctrlSimpleContact.simplecontact);
router.get('/simplestuff',ctrlSimpleStuff.simplestuff);
router.get('/simplepicture',ctrlLateBox.latebox);
//router.get('/simplestuff_add',ctrlSimpleStuff_add.simplestuffadd);

router
    .route('/simplestuff/add')
    .get(ctrlSimpleStuff.showForm)
    .post(ctrlSimpleStuff.addData);


module.exports = router;
