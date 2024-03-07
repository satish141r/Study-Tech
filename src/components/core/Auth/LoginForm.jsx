import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { toast } from 'react-hot-toast'
import { navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../../services/authAPI'
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
const LoginForm = () => {

    
    let navigate = useNavigate();
    const dispatch = useDispatch()
    // let setIsLoggedIn=props.setIsLoggedIn;
    const [formData, setFormData] = useState({ email: "", password: "" });

    const [showPassword, setShowPassword] = useState(false);
    const {email,password}=formData;
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }
    
    function submitHandler(event) {
        event.preventDefault();
        dispatch(login(email,password,navigate))
    }
    return (
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6   ' >
            <label className='w-full'>
                <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1">
                    Email Address<sup className='text-pink-200'>* </sup>
                </p>
                <input className='bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b border-b-slate-500' required type='email' name="email" value={formData.email} onChange={changeHandler} placeholder='Enter Email Id' />
            </label>
            <label className=' w-full relative'>
                <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1 ">
                    Password<sup className='text-pink-200'>* </sup>
                </p>
                <input className='bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b border-b-slate-500 ' required type={showPassword ? ("text") : ("password")} name="password" value={formData.password} onChange={changeHandler} placeholder='Enter Password' />
                <span className=' cursor-pointer absolute top-[38px] right-3 ' onClick={() => {
                    setShowPassword((prev) => !prev)
                }}>
                    {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="/forgot-password">
                    <p className='text-xs mt-1 text-blue-100 text-end'>Forget Password</p>
                </Link>
            </label>

            <button className='bg-yellow-50 px-[8px] py-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 font-semibold leading-4' type='submit'>Sign In</button>
        </form>
    )
}

export default LoginForm