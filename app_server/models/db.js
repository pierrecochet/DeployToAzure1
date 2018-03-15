const mongoose = require('mongoose');

const dbURI = "mongodb://pierre:Stimorol33@ds213759.mlab.com:13759/dbmean";

mongoose.connect(dbURI);

mongoose.connection.on('connected',function(){
   console.log('Mongoose connected to '+ dbURI);
});


mongoose.connection.on('error',function(err){
    console.log('Mongoose connected error '+ err);
});

mongoose.connection.on('disconnected',function(){
    console.log('Mongoose disconnected');
});

require('./appSchemas');