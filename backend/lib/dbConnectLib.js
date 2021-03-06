const config = require('../config/config');
const mongoose = require('mongoose');

const connectionString = config.mongoConnectionString;
const dbOptions = {useNewUrlParser: true, useUnifiedTopology: true};

module.exports = {
    connect : function(){
        mongoose.connect(connectionString, dbOptions);
        mongoose.connection.on('connected', function(){
            console.log("Database Connected");
        });
    }
}