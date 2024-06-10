const mongoose = require("mongoose");
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://visweish:visweish03@cluster0.30sjeoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("DB connection successful...");
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB;