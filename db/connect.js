const mongoose = require("mongoose");

uri = "mongodb+srv://abarua1622:Lompom098@cheaptechapi.ugbhrys.mongodb.net/CheapTechApi?retryWrites=true&w=majority&appName=CheapTechApi";

const connectDB = () => {
    console.log("connect db")
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB
