import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { resetPassword } from '../services/authAPI';
import Spinner from '../components/core/HomePage/common/Spinner';
const UpdatePassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { loading } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState(
        {
            password: "",
            confirmPassword: ""
        }
    )
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { password, confirmPassword } = formData;
    // function handleOnChange
    const handleOnChange = (e) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value,
            }
        ))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split("/").at(-1)
        dispatch(resetPassword(password, confirmPassword, token, navigate));
    }

    return (
        <div className='flex h-screen flex-col items-center justify-center gap-10  mx-auto'>
            {
                loading ? (
                    <Spinner/>
                ) : (
                    <div className='w-[50%] flex flex-col justify-center mx-auto'>
                        <h1>Choose new password</h1>
                        <p>Almost done. Enter your new password and youre all set.</p>
                        <form onSubmit={handleOnSubmit}>
                            <label className="w-full relative">
                                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                                    New password <sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type={`${showPassword ? "text" : "password"}`}
                                    name="password"
                                    value={password}
                                    onChange={handleOnChange}
                                    placeholder="Enter password"
                                    className='bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b border-b-slate-500 '
                                />
                                <span className=' cursor-pointer absolute top-[38px] right-3 ' onClick={() => {
                                    setShowPassword((prev) => !prev)
                                }}>
                                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                                </span>
                            </label>
                            <label className="relative mt-3 block">
                                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                                    Confirm New Password <sup className="text-pink-200">*</sup>
                                </p>
                                <input
                                    required
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={handleOnChange}
                                    placeholder="Enter Confirm Password"
                                    className='bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b border-b-slate-500 '

                                />
                                <span
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                                >
                                    {showConfirmPassword ? (
                                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                    ) : (
                                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                    )}
                                </span>
                            </label>
                            <button
                                type="submit"
                                className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
                            >
                                Reset
                            </button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}

export default UpdatePassword