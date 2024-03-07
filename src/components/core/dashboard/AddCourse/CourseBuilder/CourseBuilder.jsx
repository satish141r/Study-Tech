import React from 'react'
import { useForm } from 'react-hook-form'
import IconBtn from '../../../HomePage/common/IconBtn';
import { useState } from 'react';
import {AiOutlinePlusCircle} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { setEditCourse, setStep,setCourse } from '../../../../../slice/courseSlice';
import { createSection, updateSection } from '../../../../../services/courseDetailsAPI';
import toast from 'react-hot-toast';
import NestedView from './NestedView';
const CourseBuilder = () => {
    const dispatch=useDispatch();
    const {token}=useSelector((state)=>state.auth);
    const [loading,setLoading]=useState(false);
    const {
        register,
        handleSubmit,setValue,formState:{errors}
    }=useForm();

    const [editSectionName,setEditSectionName]=useState(null);
    const {course}=useSelector((state)=>state.course);
    // console.log("course",course)
    const cancelEdit=()=>{
        setEditSectionName(null);
        setValue("sectionName","")
    }

    const goToBack=()=>{
        dispatch(setStep(1));
        dispatch(setEditCourse(true));
    }
    const goToNext=()=>{
        if(course.courseContent.length === 0){
            toast.error("please add atleast one section")
            return;
        }
        if(course.courseContent.some((section)=>section.subSection.length===0)){
            toast.error("please atleast add one lection in each section"); 
            return;
        }
         dispatch(setStep(3));
    }


   
  // handle form submission
  const onSubmit = async (data) => {
    console.log(data)
    setLoading(true)

    let result

    if (editSectionName) {
      result = await updateSection(
        {
          sectionName: data.sectionName,
          sectionId: editSectionName,
          courseId: course._id,
        },
        token
      )
      console.log("edit", result)
    } else {
        console.log("first")
      result = await createSection(
        {
          sectionName: data.sectionName,
          courseId: course._id,
        },
        token
      )
    }
    console.log("first",result)
    if (result) {
      console.log("section result", result)
      dispatch(setCourse(result))
      setEditSectionName(null)
      setValue("sectionName", "")
    }
    setLoading(false)
  }

    const handleChangeEditSectionName=(sectionId,sectionName)=>{

        if(editSectionName==sectionId){
            cancelEdit();
            return
        }
        setEditSectionName(sectionId)
        setValue("sectionName", sectionName)
    }
  return (

    <div>

        <p>Course Builder</p>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
            <label htmlFor='sectionName'>Section name <sup className="text-pink-200">*</sup></label>
            <input
                id='sectionName'
                placeholder='Add a section name'
                {...register("sectionName",{required:true})}
                className='w-full  form-style'
            />
            {errors.sectionName && (
                <span>Section name is required</span>
            )}
            </div>
            <div className='flex items-center gap-x-10 py-5 '>
                <IconBtn
                    type="submit"
                   text={editSectionName?"Edit Section Name":"Create Section"} 
                   outline={true}
                   disabled={loading}
                   customClasses={"text-white"}
                >
                        <AiOutlinePlusCircle/>
                        
                </IconBtn>
                {editSectionName && (
                    <button
                        type='button'
                        onClick={cancelEdit}
                        className='text-lg text-pink-100 underline'
                    >Cancel Edit</button>
                )}
            </div>
        </form>

        {course.courseContent.length>0 && (
            <NestedView handleChangeEditSectionName={handleChangeEditSectionName}/>
        )}
        <div className='flex justify-end gap-x-3'>
            <button 
            type='button'
            onClick={goToBack}>
                Back
            </button>
            <IconBtn
            type="submit"
                text={"Next"}
                outline={true}
                customClasses={"text-white"}
                onclick={goToNext}
            />
        </div>
    </div>
  )
}

export default CourseBuilder