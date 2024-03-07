const User=require("../models/User");
const mailSender=require("../utils/mailSender");
const bcrypt=require("bcrypt");
const crypto=require("crypto");

//resetpasswordtoken
    exports.resetPasswordToken=async(req,res)=>{
        try{
        // get email from req ki body
            const email=req.body.email;


        //check user for this emial,email validation
            const user=await User.findOne({email:email});
            if (!user) {
                return res.json({
                    success: false,
                    message: `This Email: ${email} is not Registered With Us Enter a Valid Email `,
                });
            }
        //generate token
		const token = crypto.randomBytes(20).toString("hex");
        //update user by adding token aand expiration time
           const updatedDetails=await User.findOneAndUpdate({email:email},{
            token:token,
            resetPasswordExpires:Date.now()+5*60*1000,
           },{new:true}) 
           console.log(updatedDetails);
           console.log(token)
        //create url
        const url=`http://localhost:3000/update-password/${token}`; 
        //send mail containing the url
           await mailSender(email,
			"Password Reset",
			`Your Link for email verification is ${url}. Please click this url to reset your password.`);
        //return response
        return res.json({
            success:true,
            url,
            message:"Email sent succesfully",
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            
            success:false,
            message:"Something went wrong iwhile reset pwd mail"
        })
    }
      
    }



//resetpassword

exports.resetPassword=async(req,res)=>{
 try{
       //data fetch
       const {password,confirmPassword,token}=req.body;
        
        
       //validation
       if(confirmPassword!==password){
           return res.json({
               success:false,
               message:"password and confirm password  not matching",
           })
       }
   
       //get userDetails from db using token
           const userDetails=await User.findOne({token:token});
   
       //if no entry-invalid token
           if(!userDetails){
               return res.json({
                   success:false,
                   message:"token is invalid"
               })
           }
       //token time check
           if(userDetails.resetPasswordExpires<Date.now()){
                   return res.json({
                       success:false,
                       message:"token is expired,please regenerate your token",
                   })
           }
   
       //hash pwd
           const hashedPassword=await bcrypt.hash(password,10);
   
       //pwd update
               await User.findOneAndUpdate(
                   {token:token},
                   {password:hashedPassword},
                   {new:true},
               )
       //return res
       return res.status(200).json({
           success:true,
           message:"password reset succesfull"
       })
 }
 catch(error){
        return res.status(500).json({
            success:false,
            message:"something went wrong while sending reset pwd mail ",
        })
 }


}