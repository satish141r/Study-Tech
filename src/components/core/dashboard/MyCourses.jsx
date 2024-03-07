import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { fetchInstructorCourses, getAllCourses } from '../../../services/courseDetailsAPI';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AiOutlinePlusCircle } from "react-icons/ai"
import CourseTable from './InstructorCourse/CourseTable';
const MyCourses = () => {

  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);


  const getAllCourse = async () => {
    const result = await fetchInstructorCourses(token);
    // console.log("result", result);
    if (result) {
      setCourses(result);
    }
    // console.log(myCourses);
  }

  useEffect(() => {
    getAllCourse();
  }, [])
  // console.log(course);

  const handleButton = () => {
    navigate("/dashboard/add-course")
  }
  return (
    <div className='text-white'>

      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-3xl'>My Course</h1>
        <button
          onClick={handleButton} className='flex p-2 text-richblack-700 bg-yellow-100 items-center rounded-md font-bold gap-x-1'
        >Add Course <AiOutlinePlusCircle /></button>
      </div>

      {courses && <CourseTable courses={courses} setCourses={setCourses} />}
    </div>
  )
}

export default MyCourses