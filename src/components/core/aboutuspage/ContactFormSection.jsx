import React from 'react'
import ContactUsForm from '../HomePage/common/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className='mx-auto mt-14 text-richblack-5' data-aos="zoom-in">
        <div className='flex flex-col mb-10  gap-5'>
        <h1 className='text-3xl font-semibold text-center text-richblack-5'>Get In Touch</h1>
        <p className='text-richblack-100 text-center'>We'd love to here for you, Please fill out this form.</p>
        </div>
        <div className='border border-richblack-300 rounded-md p-5'>
           <ContactUsForm/>
        </div>
    </div>
  )
}

export default ContactFormSection