const RatingAndReview=require("../models/RatingAndReview");
const Course=require("../models/Course");
const { default: mongoose } = require("mongoose");

//create rating
exports.createRating = async (req, res) => {
    try {
      const userId = req.user.id
      const { rating, review, courseId } = req.body
  console.log(courseId);
      // Check if the user is enrolled in the course
  console.log(userId)
      const courseDetails = await Course.findOne({
        _id: courseId,
        studentEnrolled: { $elemMatch: { $eq: userId } },
      })
  console.log("courseDetails",courseDetails);
      if (!courseDetails) {
        return res.status(404).json({
          success: false,
          message: "Student is not enrolled in this course",
        })
      }
  
      // Check if the user has already reviewed the course
      const alreadyReviewed = await RatingAndReview.findOne({
        user: userId,
        course: courseId,
      })
  
      if (alreadyReviewed) {
        return res.status(403).json({
          success: false,
          message: "Course already reviewed by user",
        })
      }
  
      // Create a new rating and review
      const ratingReview = await RatingAndReview.create({
        rating,
        review,
        course: courseId,
        user: userId,
      })
  
      // Add the rating and review to the course
      await Course.findByIdAndUpdate(courseId, {
        $push: {
          ratingAndReviews: ratingReview,
        },
      })
      await courseDetails.save()
  
      return res.status(201).json({
        success: true,
        message: "Rating and review created successfully",
        ratingReview,
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }
//get average rating
exports.getAverageRating=async(req,res)=>{
    try{
            //get courseId
            const courseId=req.body.courseId;

            //calculate average rating
            const result=await RatingAndReview.aggregate([
                {
                    $match:{
                        couser:new mongoose.Types.ObjectId(courseId),
                    }
                },
                {
                    $group:{
                        _id:null,
                        averageRating:{$avg:"$rating"},
                    }
                }
            ])
            //return rating
                if(result.length>0){
                    return res.status(200).json({
                        success:true,
                        averageRating:result[0].averageRating,
                    })
                }
            //if no rating review exist
            return res.status(200).json({
                success:true,
                message:"Average rating is 0,no ratung given till now,",
                averageRating:0,
            })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

//getAllRatingAnd reviewws

exports.getAllRating=async(req,res)=>{
    try{
            const allReviews=await RatingAndReview.find({})
                                        .sort({rating:"desc"})
                                        .populate({
                                          path:"course",
                                          select:"courseName",
                                          strictPopulate:false
                                      })
                                        .populate({
                                            path:"user",
                                            select:"firstName lastName email image",

                                        })
                                        
                                        .exec();
            return res.status(200).json({
                success:true,
                message:"All revies fetched succesfully",
                data:allReviews,
            })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}