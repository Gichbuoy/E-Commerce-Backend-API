const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try{
        const conn = mongoose.connect(process.env.MONGOCOMPASS);
        console.log("Database is connected successfully");
    }
    catch (error) {
        console.log("Error connecting to database");
    }
};
module.exports = dbConnect;