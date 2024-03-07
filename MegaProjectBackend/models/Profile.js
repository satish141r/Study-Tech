const mongoose=require("mongoose");

const profileSchema=new mongoose.Schema({
    dataOfBirth:{
        type:String,
    },
    gender:{
        type:String,
    },
    
    about:{
        type:String,
        trim:true,
    },
    contactNumber:{
        type:String,
        trim:true
    }
})
module.exports=mongoose.model("Profile",profileSchema);