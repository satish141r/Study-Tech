const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");
const Profile=require("../models/Profile");
require("dotenv").config();
//send Otp
exports.sendOTP = async (req, res) => {
    try {
        const { email } = req.body;
        //check if user already exist
        const checkUserPresent = await User.findOne({ email });

        if (checkUserPresent) {
            return res.status(401).json({
                success: false,
                message: "user already exist",
            });
        }

        //opt generator
        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false,
        })
        console.log("OTP generator", otp);

        //check unique otp or not
        let result = await OTP.findOne({ otp: otp });
        while (result) {
            otp = otpGenerator(6, {
                upperCaseAlphabets: false,
                specialChars: false,
                lowerCaseAlphabets: false,
            });
            result = await OTP.findOne({ otp: otp });
        }
        console.log("result",result);
        //
        const otpPayload = { email, otp };
        //create an entryi in DB
        console.log("first")
        const otpBody = await OTP.create(otpPayload);
        console.log("first")
        console.log("OTP body",otpBody);

        res.status(200).json({
            success: true,
            message: "OTP sent succesfully",
            otp,

        })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}



//signup
exports.signUp = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            contactNumber,
            dateOfBirth,
            otp
        } = req.body;
        // console.log(otp);
        //validate data 
        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        //2password match krlo
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "password and confirmpassword doesnt not match please try again later"
            })
        }
        //check user already exist or not
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "user is already registered",
            })
        }
        //find most recent otp for the user
		const recentOtp =  await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
        console.log(recentOtp);
        // console.log(otp);
        //validate otp 
        if (recentOtp.length === 0) {
            //otp not found
            return res.status(400).json({
                success: false,
                message: "otp not found",
            })
        }
      
        else if (otp !== recentOtp[0].otp) {
            //invalid otp
            return res.status(400).json({
                success: false,
                message: "Invalid otp"
            })
        }
        //hash the password
        const hashedPaswword = await bcrypt.hash(password, 10);
        //create an entry in DB
        const profileDetails = await Profile.create({
            gender: null,
            dateOfBirth: null,
            about: null,
            contactNumber: null,

        })
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPaswword,
            accountType,
            contactNumber,
            additionalDetails: profileDetails._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        });
        //return res

        return res.status(200).json({
            success: true,
            message: "User is registered successfully",
            user
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered"
        })
    }
}



//login
exports.login = async (req, res) => {
    try {
        //data fetch
        const { email, password } = req.body;
        //validation 
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required,please try again later"
            });
        }
        //user not registerd check
        const user = await User.findOne({ email }).populate("additionalDetails");
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered please signup first"
            });
        }
        //generate JWT token,after matching password
        if (await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
                accountType: user.accountType,
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });
            user.token = token;
            user.password = undefined;
            //create cookie aand send response
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }
            res.cookie("token", token, options).json({
                success: true,
                token,
                user,
                message: "logged in succesfully"
            })
        }
        else{
            return res.status(401).json({
                success:false,
                message:"password incorrect",
            })
        }




    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Loggin failed,please try again later",

        })
    }
}



//change password
exports.changePassword=async(req,res)=>{
    //get data from req body

    //get oldpassword,newpassword ,confirmnewpassowrd

    //validation 

    //update pwd in db

    //send mail-password updated

    //return response
    
// Controller for Changing Password

	try {
		// Get user data from req.user
		const userDetails = await User.findById(req.user.id);

		// Get old password, new password, and confirm new password from req.body
		const { oldPassword, newPassword, confirmNewPassword } = req.body;

		// Validate old password
		const isPasswordMatch = await bcrypt.compare(
			oldPassword,
			userDetails.password
		);
		if (!isPasswordMatch) {
			// If old password does not match, return a 401 (Unauthorized) error
			return res
				.status(401)
				.json({ success: false, message: "The password is incorrect" });
		}

		// Match new password and confirm new password
		if (newPassword !== confirmNewPassword) {
			// If new password and confirm new password do not match, return a 400 (Bad Request) error
			return res.status(400).json({
				success: false,
				message: "The password and confirm password does not match",
			});
		}

		// Update password
		const encryptedPassword = await bcrypt.hash(newPassword, 10);
		const updatedUserDetails = await User.findByIdAndUpdate(
			req.user.id,
			{ password: encryptedPassword },
			{ new: true }
		);

		// Send notification email
		try {
			const emailResponse = await mailSender(
				updatedUserDetails.email,
				passwordUpdated(
					updatedUserDetails.email,
					`Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
				)
			);
			console.log("Email sent successfully:", emailResponse.response);
		} catch (error) {
			// If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
			console.error("Error occurred while sending email:", error);
			return res.status(500).json({
				success: false,
				message: "Error occurred while sending email",
				error: error.message,
			});
		}

		// Return success response
		return res
			.status(200)
			.json({ success: true, message: "Password updated successfully" });
	} catch (error) {
		// If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
		console.error("Error occurred while updating password:", error);
		return res.status(500).json({
			success: false,
			message: "Error occurred while updating password",
			error: error.message,
		});
	}
};
