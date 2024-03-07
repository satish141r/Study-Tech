const mongoose=require("mongoose");
require("dotenv").config();



exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("DB connection succesfully"))
    .catch((error)=>{
        console.log("Db connection Failed")
        console.error(error);
        process.exit(1);
    })
};