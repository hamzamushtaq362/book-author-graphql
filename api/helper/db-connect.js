const mongoose = require("mongoose");
// const mongoDB = "";
const mongoDB = "mongodb+srv://hamzamushtaq362:hamza12345@cluster0.itnuxxn.mongodb.net/?retryWrites=true&w=majority";

module.exports = function () {
    mongoose.Promise = global.Promise;
    mongoose.set('strictQuery', true);
    const db = mongoose.connect(mongoDB,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    console.log('Successfully Connected To MongoDB.')
    mongoose.connection.on('error', (err) => {
        console.log(
            'Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red
        );
    });
    return db;
};
