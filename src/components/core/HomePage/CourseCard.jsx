import React from 'react'

import { FaUserFriends } from 'react-icons/fa'
import {TbBinaryTree2} from "react-icons/tb"
const CourseCard = ({cardData,setCurrentCard,currentCard,key}) => {
    // element=props.element;
    // setCurrentCard=props.setCurrentCard; 
    // currentCard=props.currentCard;
    // key=props.key;

  return (
    <div className={`w-[350px] p-4 flex flex-col gap-4 ${(cardData.heading=="HTML" || cardData.heading=="Learn HTML"|| cardData.heading=="Java"|| cardData.heading=="Flask"|| cardData.heading=="Next.js")?("bg-richblack-100 shadow-blue-200 shadow-lg shadow-black"):("bg-richblack-800 shadow-blue-100 shadow-lg shadow-black")}`}>
            

            <div className={`${ (cardData.heading=="HTML" || cardData.heading=="Learn HTML"|| cardData.heading=="Java"|| cardData.heading=="Flask"|| cardData.heading=="Next.js")? ("text-black font-bold"):("text-white font-bold")}`}>
            {cardData.heading}
            </div>
            <div className={`${ (cardData.heading=="HTML" || cardData.heading=="Learn HTML"|| cardData.heading=="Java"|| cardData.heading=="Flask"|| cardData.heading=="Next.js")? ("text-black"):("text-richblack-100")}`}>
                {cardData.description}
            </div>

            <div className='flex justify-between pt-10 z-100 text-blue-100'>
                <div className='flex items-center gap-1'>
                        <FaUserFriends/>{cardData.level}
                </div>
                <div className='flex items-center gap-1'>
                <TbBinaryTree2/>{cardData.lessionNumber}Lessons
                </div>
            </div>
    </div>
  )
}

export default CourseCard