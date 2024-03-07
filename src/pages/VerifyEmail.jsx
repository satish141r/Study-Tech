import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input';
import { useDispatch,useSelector } from 'react-redux';
import { sendOtp, signUp } from '../services/authAPI';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from '../components/core/HomePage/common/Spinner';
const VerifyEmail = () => {
    const { signupData, loading } = useSelector((state) => state.auth);
    const [otp, setOtp] = useState("");
    const dispatch = useDispatch();
    const navigate=useNavigate();

    useEffect(()=>{
        if(!signupData){
            navigate("/signup");
        }
    },[])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const { accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
             }=signupData;
        dispatch(signUp(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate));
    }
    return (
        <div className='text-richblack-5'>
            {
                loading ?
                    (<div className='flex items-center justify-center'>
                        <Spinner/>
                    </div>) :
                    (<div className='flex flex-col w-[30%] mx-auto h-screen pt-40 gap-3 '>
                        <h1 className='font-bold text-3xl'>Verify Email</h1>
                        <p className='text-richblack-100'>A verification code has been sent to you. Enter the code below</p>
                        <form onSubmit={handleOnSubmit}>
                            <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderInput={(props) => <input {...props}
                                className='mx-auto bg-richblack-800 w-full' />}
                            />
                            <button type='submit'
                                className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"

                            >Verify Email</button>
                        </form>

                        <div className='flex justify-between'>
                            <Link to={"/login"}>
                                <p>Back to login</p>
                            </Link>
                            <button onClick={()=>dispatch(sendOtp(signupData.email,navigate))} className='text-blue-50'>
                                Resend it
                            </button>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default VerifyEmail