const mongoose=require("mongoose");

const ratingAndReviewSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    rating:{
        type:Number,
    },
    review:{
        type:String,
        trim:true,
        required:true
    }
})
module.exports=mongoose.model("RatingAndReviews",ratingAndReviewSchema);