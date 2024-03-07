import React, { useState } from 'react'
import Button from '../components/core/HomePage/Button'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPasswordResetToken } from '../services/authAPI';
import Spinner from '../components/core/HomePage/common/Spinner';
const ForgetPassword = () => {
    const { loading } = useSelector((state) => state.auth);
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const dispatch=useDispatch();
    const handleOnSubmit=(e)=>{
        console.log("first");
        e.preventDefault();
        
        dispatch(getPasswordResetToken(email,setEmailSent))
    }
    return (
        <div className='flex h-screen flex-col items-center justify-center gap-10  mx-auto'>
            {
                loading ? (<Spinner/>) : (
                    <div className='w-[50%] flex flex-col justify-center mx-auto gap-4 '>
                        <div>
                            {
                                !emailSent ? (<div className='text-3xl font-semibold text-richblack-5'>
                                    Reset your password
                                </div>) : (<div className='text-3xl font-semibold text-richblack-5'>Check Your Email</div>)
                            }
                        </div>
                        <p className='text-richblack-100 w-[70%]'>
                            {
                                !emailSent ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery" : `We have sent the reset email to ${email}`
                            }
                        </p>
                        <form className='flex flex-col gap-4' onSubmit={handleOnSubmit}>
                            <div>
                            {
                                !emailSent && (
                                    <label>
                                        <p className='text-richblack-5 text-sm'>Email Address*</p>
                                        <input type="email" placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)} required value={email}  className='text-richblack-5 text-[15px] bg-richblack-800 p-2 rounded-lg border-white outline-none border-b-[.5px]  pr-[150px]'/>
                                    </label>

                                )
                            }
                            </div>
                            <button className="mt-1 w-[75%] rounded-[8px] py-[11px] bg-yellow-50 text-black bg-richblack-800 hover:scale-95 transition-all duration-200" type="submit">
                                {
                                    !emailSent ? "Reset" :"Resend"
                                }
                            </button>
                        </form>

                        <div>
                            <Link to="/login">
                                <p className='text-richblack-5 text-sm'>{"<|Back to login"}</p>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ForgetPassword