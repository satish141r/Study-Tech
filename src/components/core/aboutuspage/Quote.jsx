import React from 'react'
import HighLightText from '../HomePage/HighLightText'

const Quote = () => {
    return (
        <div className='text-center text-3xl w-[1000px] mx-auto'>
            We are passionate about revolutionizing the way we learn. Our innovative platform
            <HighLightText text={" combines technology"}/>
            <span className='text-brown-50'>
                {" "}
                expertise 
            </span>
            , and community to create an 
            <span className='text-brown-50'> unparalleled educational experience.</span>
        </div>
    )
}

export default Quote