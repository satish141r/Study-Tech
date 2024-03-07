import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import HighLightText from '../components/core/HomePage/HighLightText';
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimeLineSection from '../components/core/HomePage/TimeLineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import { PiTreeStructureFill } from "react-icons/pi"
import Footer from '../components/core/HomePage/common/Footer';
import { HiMiniUsers } from "react-icons/hi2"
import ExploreMore from '../components/core/HomePage/ExploreMore';
import { useEffect } from 'react';
import Aos from 'aos';
import ReviewSlider from '../components/core/HomePage/common/ReviewSlider';
const Home = () => {
 
    return (
        <div>
            {/* Section 1 */}
            <div className='relative mx-auto flex flex-col w-10/12 items-center text-white justify-between max-w-maxContent mb-10' data-aos="fade-left">
                <Link to={"/signup"}>
                    <div className='group mt-16 p-1  mx-auto rounded-full  bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
                        <div className='flex flex-row items-center px-10 py-[5px] rounded-full transition-all duration-200  group-hover:bg-richblack-900'>
                            <p>Become an Instructor </p><AiOutlineArrowRight />
                        </div>
                    </div>
                </Link>
                <div >
                <div  className='text-center text-4xl font-semibold mt-6 ' >
                    Empower Your Future With <HighLightText text={"Coding Skills"} />
                </div>
                <div className='mt-4 w-[90%] text-center font-bold text-lg text-richblack-300'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. </div>
                </div>
                <div className='flex flex-row gap-7 mt-8'>
                    <CTAButton active={true} linkto={"/signup"} >
                        Learn More
                    </CTAButton>
                    <CTAButton>
                        Book a Demo
                    </CTAButton>
                </div>
                <div className='mx-3 my-12 shadow-blue-200 shadow-lg shadow-richblack-5' data-aos="zoom-in-up" data-aos-delay="100">
                    <video
                        muted
                        loop
                        autoplay="autoplay"
                        >
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>
                {/*Code section 1*/}
                <div  data-aos="fade-right">
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock your
                                <HighLightText text={"Coding Potencial"} /> with our online courses.
                            </div>
                        }
                        subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                        ctabtn1={
                            {
                                btnText: "try it yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "Learn more",
                                linkto: "/login",
                                active: false,
                            }
                        }
                        codeblock={
                            `<!DOCTYPE html>\n<html>\nhead><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n<head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n</nav>`
                        }
                        codeColor={"text-richblack-100"}
                    />
                </div >
                {/* codesection 2 */}
                <div className='pb-[100px]'  data-aos="fade-left">
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Start
                                <HighLightText text={"coding in seconds"} />
                            </div>
                        }
                        subHeading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                        ctabtn1={
                            {
                                btnText: "Continue Lesson",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "Learn more",
                                linkto: "/login",
                                active: false,
                            }
                        }
                        codeblock={
                            `<!DOCTYPE html>\n<html>\nhead><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n<head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n</nav>`
                        }
                        codeColor={"text-yellow-25"}
                    />
                </div>
                        <ExploreMore/>
                {/* <div className='absolute bottom-[-120px] mt-32 flex flex-col items-center'>
                    <p className='text-4xl'>Unlock The <HighLightText text={"Power Of Code"} /> </p>
                    <p className='text-richblack-300 text-[16px]'>Learn to Build Anything You Can Imagine</p>
                    <div className='flex flex-row gap-5 mt-10 z-[100] '>
                    <div className='absolute bg-yellow-50 bottom-[-18px]  z-[-90] w-[420px] h-[75%]'>
                                jjj
                            </div>
                        <div className='bg-white text-richblack-900 flex flex-col gap-10 p-4 '>
                            
                            <p className='text-[20px] font-bold'>Learn HTML</p>
                            <p className='text-richblack-300 text-[16px]'>This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.</p>
                            <div className='mt-10 border-t border-dashed border-richblack-300'>
                                <div className='relative flex flex-row items-center justify-between text-blue-100  mt-5'>

                                    <p className='flex items-center gap-1'>
                                        <HiMiniUsers />
                                        Beginner
                                    </p>
                                    <p className='flex items-center gap-1'>
                                        <PiTreeStructureFill />
                                        6 Lessons
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10 bg-richblack-800 p-4'>
                            <p className='text-[20px]'>Learn HTML</p>
                            <p className='text-richblack-300 text-[16px]'>This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.</p>
                            <div className='mt-10 border-t border-dashed opacity-30'>
                                <div className='flex flex-row items-center justify-between  mt-5'>
                                    <p className='flex items-center gap-1'>
                                        <HiMiniUsers />
                                        Beginner
                                    </p>
                                    <p className='flex items-center gap-1'>
                                        <PiTreeStructureFill />
                                        6 lesson
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='relative flex flex-col gap-10 bg-richblack-800 p-4'>

                            <p className='text-[20px]'>Learn HTML</p>
                            <p className='text-richblack-300 text-[16px]'>This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.</p>
                            <div className=' mt-10  border-t border-dashed opacity-30 '>
                                <div className='flex flex-row items-center justify-between mt-5' >
                                    <p className='flex items-center gap-1'>
                                        <HiMiniUsers />
                                        Beginner
                                    </p>
                                    <p className='flex items-center gap-1'>
                                        <PiTreeStructureFill />
                                        6 Lessons
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* Section 2 */}
            <div className='bg-pure-greys-5 text-richblack-700 '>
                <div className='homepage-bg h-[310px]'>
                    <div className='w-11/12 max-w-maxContent flex items-center justify-center gap-5  mx-auto '>
                        <div className='h-[250px]'></div>
                        <div className='flex flex-row gap-7 text-white'>
                            <CTAButton active={true} linkto={"/signup"} >
                                <div className='flex items-center gap-1'>
                                    Explore Full Catalog<AiOutlineArrowRight /></div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"} >
                                Explore Full Catalog
                            </CTAButton>
                        </div>
                    </div>
                </div>
                <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7 ' data-aos="fade-left">
                    <div className='flex flex-row gap-12  mb-10 mt-[95px]'>
                        <div className='text-4xl font-semibold w-[45%]' data-aos="fade-left">
                            Get the skills you need for a <HighLightText text={"job that is in demand."} />
                        </div>


                        <div className='flex flex-col gap-10 w-[40%] items-start ' data-aos="fade-left">
                            <div className='text-[16px] '>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</div>
                            <CTAButton active={true} linkto={"/signup"} >
                                Learn More
                            </CTAButton>
                        </div>
                    </div>
                    <TimeLineSection />
                    <LearningLanguageSection />


                </div>
            </div>

            {/* Section 3 */}
            <div className='flex flex-col w-11/12 max-w-maxContent mx-auto items-center justify-between gap-8 bg-richblack-900 text-white'>
                <InstructorSection />
                
            
                    <h2 className='text-center text-4xl font-semibold mt-10 text-white' data-aos="fade-up">Review From Other Learner</h2>
                    <ReviewSlider/>
                    
            </div>

            {/* Review slider */}
            {/* Footer */}
            <Footer />

        </div>
    )
}

export default Home