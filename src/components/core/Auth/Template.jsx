import React from 'react'
import frameImage from "../../../assets/Images/frame.png";
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc';
const Template = ({ title, desc1, desc2, image, formtype }) => {
    return (
        <div className=' flex w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12 gap-x-0 justify-between' data-aos="fade-right">
            <div className='w-11/12 max-w-[450px]' >
                <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
                <p className=' text-[1.125rem] leading-[1.625rem] mt-4'>
                    <span className='text-richblack-100'>{desc1}</span><br/>
                    <span className='text-blue-100 italic'>{desc2}</span>
                </p>
                {formtype == "signup" ? (<SignUpForm/>) : (<LoginForm/>)}

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className=' w-full bg-richblack-700 h-[1px]'></div>
                    <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
                    <div className=' w-full bg-richblack-700 h-[1px]'></div> 

                </div>
                <button className=' w-full text-richblack-100 flex items-center justify-center font-medium border gap-x-2 mt-6 border-richblack-700 rounded-[8px] px-[12px] py-[8px]'>
                    <FcGoogle/>
                        <p>
                        Sign Up With Google
                        </p>
                    </button>
            </div>
            <div className='relative'>
                <img src={frameImage} alt='Pattern' width={558} height={504} loading='lazy' />
                <img src={image} className='absolute top-[-20px] left-[-20px]' alt='Student' width={558} height={504} loading='lazy' />
            </div>

        </div>
    )
}

export default Template