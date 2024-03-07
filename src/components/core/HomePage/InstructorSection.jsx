import React from 'react'
import img1 from "../../../assets/Images/Instructor.png"
import HighLightText from './HighLightText'
import CTAButton from "../HomePage/Button"
import { AiOutlineArrowRight } from "react-icons/ai";

const InstructorSection = () => {
    return (
        <div className='mt-16' data-aos="fade-left">
            <div className='flex flex-row gap-20 items-center'>
                <div className='w-[50%]'>
                    <img src={img1} alt='imgInstructor' className='shadow-white shadow-blue-100 shadow-lg shadow-black' />
                </div>


                <div className='w-[50%] flex flex-col gap-10'>
                    <div className='text-4xl font-semibold w-[50%]'>
                        Become an <HighLightText text={"Instructor"} />
                    </div>
                    <p className='font-medium text-[16px] w-[80%] text-richblack-300'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>

                   <div className='w-fit'>
                   <CTAButton active={true} linkto={"/signup"}>
                       <div className='flex items-center gap-2 '>
                       Start Teaching Today <AiOutlineArrowRight/>
                       </div>
                    </CTAButton>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorSection