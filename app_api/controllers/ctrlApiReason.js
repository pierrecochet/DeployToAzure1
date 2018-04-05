// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the 'goldenBallWinner' model so we can interact with the GoldenBallWinners collection
const reasonModel = mongoose.model('reason');

const reasonsList = function (req, res) {
    reasonModel.find({}, function(err, reasons){
        if (err){
            res
                .status(404)
                .json(err);
        }
        else{
            res
                .status(200)
                .json(reasons);
        }
    });};

const addReason = function (req, res) {
    res
        .status(201)
        .json({"Add a reason" : "Work in progress"});
};

module.exports = {
    reasonsList,
    addReason
};