import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { apiConnector } from '../../../../services/apiconnector';
import { contactusEndpoint } from '../../../../services/apis';
import countrycode from "../../../../data/countrycode.json";
import { toast } from 'react-hot-toast';
const ContactUsForm = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccesful },
    } = useForm();
   
    const submitContackForm = async (data) => {
        console.log("logging data",data);
        try{
            const toastId = toast.loading("Loading...")
            setLoading(true);
            const response=await apiConnector("POST",contactusEndpoint.CONTACT_US_API,data);
            console.log(response);
            setLoading(false);
            toast.dismiss(toastId);
            toast.success("Thanks You For Filling Form");
        }
        catch(error){
            console.log(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        if (isSubmitSuccesful) {
            reset({
                email: "",
                firstname: "",
                lastname: "",
                message: "",
                phoneNo: "",
            })
        }
    }, [reset, isSubmitSuccesful]);
    return (
        <form onSubmit={handleSubmit(submitContackForm)} className='flex flex-col gap-2'>
            <div className='flex gap-10'>
                {/* firstname */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor='firstname'>First Name</label>
                    <input
                        type='text'
                        name="firstname"
                        id='firstname'
                        placeholder='Enter First Name'
                        {...register("firstname", { required: true })}
                        className='bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b border-b-slate-500'
                    />
                    {
                        errors.firstname && (
                            <span>Please Enter Your Name</span>
                        )
                    }
                </div>
                {/* lastname */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor='lastname'>Last Name</label>
                    <input
                        type='text'
                        name="lastname"
                        id='lastname'
                        placeholder='Enter Last Name'
                        {...register("lastname")}
                        className='bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b border-b-slate-500'
                    />

                </div>

            </div>
          <div className='flex flex-col gap-3'>
              {/* email */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    name="email"
                    id='email'
                    placeholder='Enter email'
                    {...register("email", { required: true })}
                    className='bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b border-b-slate-500'

                />
                {
                    errors.email && (
                        <span>
                            Please enter your email address
                        </span>
                    )
                }

            </div>
                {/* PhoneNo */}
                <div className='flex flex-col gap-2 '>
                    <label htmlFor="phonenumber">Phone Number</label>
                    <div className='flex flex-row gap-2 items-center'>
                        {/* dropdown */}
                        <div>
                            <select
                            name='dropdown'
                            id='dropdown'
                            {...register("countrycode",{required:true})}
                            className=' p-2 w-[80%] bg-richblack-800 rounded-[0.5rem] p-[12px] text-richblack-5 border-b border-b-slate-500'
                            >
                                {
                                    countrycode.map((codes,index)=>{
                                        return <option key={index} value={codes.code} className='bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b border-b-slate-500'>
                                            {codes.code} - {codes.country}
                                        </option>
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <input
                                type='number'
                                name='phonenumber'
                                id='phonenumber'
                                placeholder='12345 67890'
                                {...register("phoneNo",{required:{value:true,message:"Please Enter Phone Number"},maxLength:{value:10,message:"Invalid Phone Number"},minLength:{value:8,message:"Invalid Phone Number"}})}
                                className='bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b border-b-slate-500'

                            />
                        </div>
                    </div>
                    {
                        errors.phoneNo && 
                        <span>
                            {
                                errors.phoneNo.message
                            }
                        </span>
                    }
                </div>

            {/* message */}
            <div className='flex flex-col gap-2'>
                <label htmlFor='message'>Message</label>
                <textarea name="message" id="message"   className='bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b border-b-slate-500' placeholder='Enter Your Message Here!' cols="30" rows="10"
                    {...register("message", { required: true })} />
                {
                    errors.message && (
                        <span>Please enter your message</span>
                    )
                }
            </div>
            <button className='bg-yellow-50 px-[8px] py-[12px] rounded-[8px] mt-2 font-medium text-richblack-900  leading-4' type='submit'>
                Send Message
            </button>
          </div>

        </form>
    )
}

export default ContactUsForm