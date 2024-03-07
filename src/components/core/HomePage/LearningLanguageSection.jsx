import React from 'react'
import HighLightText from './HighLightText'
import img1 from "../../../assets/Images/Know_your_progress.png";
import img2 from "../../../assets/Images/Compare_with_others.png";
import img3 from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "../HomePage/Button"

const LearningLanguageSection = () => {
  return (
    <div className='mt-[120px] mb-14'>
        <div className='flex flex-col gap-5 items-center'>
            <div className='text-4xl font-semibold text-center' data-aos="fade-right">
              Your Swiss Knife For 
              <HighLightText text={" learning any language"}/>
            </div>
            <div className='text-center text-richblack-600 mx-auto text-base mt-2 font-mediumw w-[70%] ' data-aos="fade-right">
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </div>
        

        <div className='flex flex-row items-center justify-center mt-5' data-aos="zoom-in">
          <img src={img1} className='object-contain -mr-32'/>
          <img src={img2} className='object-contain mt-10'/>
          <img src={img3} className='object-contain -ml-36 mb-10'/>
          

        </div>
        <div className='w-fit'>
          <CTAButton active={true} linkto={"/signup"}>
              learn More
          </CTAButton>
        </div>

        </div>
    </div>
  )
}

export default LearningLanguageSection