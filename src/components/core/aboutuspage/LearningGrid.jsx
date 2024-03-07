import React from 'react'
import HighLightText from '../HomePage/HighLightText';
import CTAButton from "../HomePage/Button"
const LearningGrid = () => {
    const LearningGridArray = [
        {
          order: -1,
          heading: "World-Class Learning for",
          highlightText: "Anyone, Anywhere",
          description:
            "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
          BtnText: "Learn More",
          BtnLink: "/",
        },
        {
          order: 1,
          heading: "Curriculum Based on Industry Needs",
          description:
            "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
        },
        {
          order: 2,
          heading: "Our Learning Methods",
          description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
        },
        {
          order: 3,
          heading: "Certification",
          description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
        },
        {
          order: 4,
          heading: `Rating "Auto-grading"`,
          description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
        },
        {
          order: 5,
          heading: "Ready to Work",
          description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
        },
      ];
  return (
    <div className='grid mx-auto grid-cols-1 lg:grid-cols-4 mb-10'>
            {
                LearningGridArray.map( (card,index)=>{
                    return (
                        <div key={index} className={`${index===0 && "lg:col-span-2 lg:h-[250px]"} 
                        ${
                            card.order%2==1 ?"bg-richblack-700":"bg-richblack-800"
                        }
                        ${card.order===3 && "lg:col-start-2"}
                        ${card.order<0 && "bg-transparent"}
                        `} >
                            {
                                card.order<0
                                ?(<div className='flex flex-col gap-3 items-start p-4 ' data-aos="fade-left" >
                                    <h1 className='text-3xl flex flex-col'>{card.heading}<HighLightText text={card.highlightText}/></h1>
                                    <p className='text-richblack-100 mb-5'>{card.description}</p>
                                    <CTAButton linkto={card.BtnLink} active={true}>
                                        {card.BtnText}
                                    </CTAButton>
                                </div>)
                                :
                                (<div className='flex flex-col gap-10 p-10  w-[70%] items-center ' data-aos="fade-right">
                                    <h1 className='text-lg font-semibold'>{card.heading}</h1>
                                    <p className='text-richblack-100'>{card.description}</p>
                                </div>)
                            }
                        </div>
                    )
                } )
            }
    </div>
  )
}

export default LearningGrid