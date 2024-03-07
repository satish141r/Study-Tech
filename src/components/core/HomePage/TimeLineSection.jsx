import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png";
const TimeLineSection = () => {
    const timeLine = [
        {
            Logo: Logo1,
            heading: "Leardership",
            description: "Fully committed to the success company"
        },
        {
            Logo: Logo2,
            heading: "Responsibility",
            description: "Students will always be our top priority"
        },
        {
            Logo: Logo3,
            heading: "Flexibility",
            description: "The ability to switch is an important skills"
        },
        {
            Logo: Logo4,
            heading: "Solve the problem",
            description: "Code your way to a solution"
        },
    ]
    return (
        <div>
            <div className='flex flex-row gap-14 items-center'>
                {/* left box */}
                <div className='w-[45%] flex flex-col gap-5'>
                    {
                        timeLine.map((element, index) => {
                            return (
                                <div className='flex flex-row gap-5' key={index}>
                                    <div className='w-[50px] h-[50px] bg-white flex items-center'>
                                        <img src={element.Logo} />
                                    </div>
                                    <div>
                                        <h1 className='font-semibold text-[18px]'>{element.heading}</h1>
                                        <div className='text-base'>{element.description}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* right box */}
                <div className='relative shadow-blue-200'>
                    <img src={timelineImage} alt='timeLineImage' className='shadow-white object-cover h-fit shadow-blue-100 shadow-lg shadow-black' />
                    <div className='absolute bg-caribbeangreen-700  flex flex-row text-white py-7 uppercase left-[10%] bottom-0 translate-y-[50%]'>
                        <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 pl-7'>
                            <p className='text-3xl font-bold'>10</p>
                            <p className='text-caribbeangreen-300 text-sm w-[50%]'>10 Years of expirence</p>
                        </div>
                        <div className='flex items-center gap-5 pl-7'>
                            <p className='text-3xl font-bold'>250</p>
                            <p className='text-caribbeangreen-300 text-sm w-[50%]'>Types of courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeLineSection