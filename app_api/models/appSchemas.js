const mongoose = require('mongoose');

const reasonsSchema = new mongoose.Schema({reason:String, advantage:String});

mongoose.model('reason',reasonsSchema,'reasons');