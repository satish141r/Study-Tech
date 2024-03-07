import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from '../HomePage/common/IconBtn'

const MyProfile = () => {
    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate();

    return (
        <div className='text-richblack-5 ' >
            <h1 className="mb-14 text-3xl font-medium text-richblack-5">My Profile</h1>
            {/* section 1 */}
            <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
                <div className='flex items-center gap-x-4'>
                    <img src={`${user?.image}`} alt={`${user?.firstName}`} className='aspect-square w-[78px] rounded-full object-cover' />
                    <div>
                        <p className='text-lg font-semibold '>{user?.firstName + " " + user?.lastName}</p>
                        <p className='text-richblack-100'>{user?.email}</p>
                    </div>
                </div>
                <IconBtn text={"Edit"} onclick={() => {
                    navigate("/dashboard/settings")
                }}>

                </IconBtn>

            </div>
            <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 mt-2">
                <div className='flex flex-col  gap-x-4 w-full'>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-medium '>Personal Details</h1>
                        <IconBtn text={"Edit"} onclick={() => {
                            navigate("/dashboard/settings")
                        }}>

                        </IconBtn>
                    </div>
                    <div className='mt-4 flex justify-between  w-[70%] '>
                        <div className='flex flex-col gap-2 items-start '>
                            <p className='text-richblack-100'>Firstname</p>
                            <p>{user?.firstName}</p>
                        </div>
                        <div className='flex flex-col gap-2 items-start '>
                            <p className='text-richblack-100' >Lastname</p>
                            <p >{user?.lastName}</p>
                        </div>
                    </div>
                    <div className='mt-4 flex justify-between '>
                        <div className='flex flex-col gap-2 items-start '>
                            <p className='text-richblack-100'>Email</p>
                            <p>{user?.email}</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyProfile