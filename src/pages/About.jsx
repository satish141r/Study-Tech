import React from 'react'
import HighLightText from '../components/core/HomePage/HighLightText'
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/aboutuspage/Quote'
import LearningGrid from '../components/core/aboutuspage/LearningGrid'
import ContactFormSection from '../components/core/aboutuspage/ContactFormSection'
import Footer from "../components/core/HomePage/common/Footer"

const About = () => {
    return (
        <div className=' text-richblack-5 mx-auto  w-full'>
            {/* section 1 */}
            <section className='pt-[80px] relative bg-richblack-700'>
                <div className='w-[740px] mx-auto' data-aos="fade-up">
                    <p className='text-center pb-4'>About Us</p>
                    <h1 className='text-3xl font-bold text-richblack-5 flex flex-col text-center'>Driving Innovation in Online Education for a <HighLightText text={"Brighter Future"} /> </h1>
                    <p className='text-richblack-100 text-center'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
                </div>
                <div className='flex flex-row  gap-x-4 justify-center relative top-14' data-aos="zoom-in">
                    <img src={BannerImage1} alt="" />
                    <img src={BannerImage2} alt="" />
                    <img src={BannerImage3} alt="" />
                </div>
            </section>
            {/* section2 */}
            <section className='mt-[100px] w-10/12 mx-auto pb-14'>
                <div className='pb-20' data-aos="fade-right">
                    <Quote />
                </div>
                <div className='flex flex-col gap-20' data-aos="fade-left">
                    <div className='flex justify-around'>
                        <div className='w-[50%] flex flex-col gap-4'>
                            <h1 className='text-3xl text-brown-200'>Our Founding Story</h1>
                            <div className='flex flex-col gap-y-3 text-richblack-100'>
                                <p>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>
                                <p>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
                            </div>
                        </div>
                        <div>
                            <img src={BannerImage1} alt="" />
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='w-[40%] flex flex-col gap-4'>
                            <h1 className='text-3xl text-brown-200'>Our Vision</h1>
                            <div className='flex flex-col gap-y-3 text-richblack-100'>
                                <p>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                            </div>
                        </div>
                        <div className='w-[40%] flex flex-col gap-4'>
                            <h1 className='text-3xl text-brown-200'>Our Mission</h1>
                            <div className='flex flex-col gap-y-3 text-richblack-100'>
                                <p>our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section3 */}
            <section className='bg-richblack-700 p-10'>
                <div className='flex justify-around'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-2xl font-bold'>5K</p>
                        <p className='text-richblack-100'>Active Students</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-2xl font-bold'>10+</p>
                        <p  className='text-richblack-100'>Mentors</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-2xl font-bold'>200+</p>
                        <p  className='text-richblack-100'>Courses</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-2xl font-bold'>50+</p>
                        <p  className='text-richblack-100'>Awards</p>
                    </div>

                </div>
            </section>
            {/* section4 */}
            <section className='w-11/12 mx-auto flex flex-col items-center mb-[150px] mt-20'>
                <LearningGrid/>
                <ContactFormSection/>
            </section>

            {/* review SLider  */}
            <Footer/>
        </div>
    )
}

export default About