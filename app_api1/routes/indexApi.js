const express = require('express');
const router = express.Router();

const ctrlApiReason = require('../controllers/ctrlApiReason');

router
    .route('/reasons')
    .get(ctrlApiReason.reasonsList)
    .post(ctrlApiReason.addReason);


module.exports = router;


