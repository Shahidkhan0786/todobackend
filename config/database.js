const mongoose = require('mongoose');
const dbconnection = () => {
    mongoose.connect(process.env.DB_CONNECTION_URL)
    .then(() => {
        console.log('DB connected successfully');
    }).catch(err => {
        console.log('Error in connecting DB')
        console.log(err);
        process.exit(1);
    }
    );
}


module.exports = dbconnection;