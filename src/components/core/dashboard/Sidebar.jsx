import React, { useState } from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import {logout} from "../../../services/authAPI"
import { useDispatch, useSelector } from 'react-redux'
import SidebarLink from './SidebarLink'
import { useNavigate } from 'react-router-dom'
import { VscSignOut } from 'react-icons/vsc'
import Spinner from '../HomePage/common/Spinner'
import ConfirmationModal from '../HomePage/common/ConfirmationModal';

const Sidebar = () => {
    const {user ,loading:profileLoading }=useSelector((state)=>state.profile);
    const {loading:authLoading}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [confirmationModal,setConfirmationModal]=useState(null)
    if(profileLoading || authLoading)
    {
        return (
            <div>
                <Spinner/>
            </div>
        )
    }
  return (
    <div>
        <div className='flex min-w-[222px] flex-col border-r-[1px] border-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-800 py-10' data-aos="fade-right" duration="1000">
            <div className='flex flex-col'>
                {
                    sidebarLinks.map((link)=>{
                        if(link.type && user?.accountType !=link.type) return null;
                        return(
                            <SidebarLink key={link.id } link={link} iconName={link.icon}  />
                        )
                    })
                }

            </div>
            <div className='mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600'></div>
            <div className='flex flex-col'>
                <SidebarLink link={{name:"Setting",path:"dashboard/settings"}}
                iconName="VscSettingsGear"/>
                <button
                    onClick={()=>{
                       setConfirmationModal({text1:"Are You Sure ?",
                        text2:"You will be logged out",
                        btn1text:"Logout",
                        btn2text:"Cancel",
                        btn1Handler:()=>dispatch(logout(navigate)),
                        btn2Handler:()=>setConfirmationModal(null),
                    })
                    }}
                    className='text-sm font-medium text-richblack-300'
                >
                    <div className='flex items-center gap-x-2 px-8 py-2 mt-2 hover:bg-[#ff0000] transition-all duration-200 hover:text-white'>
                        <VscSignOut className='text-lg'/>
                        <span>Logout</span>
                    </div>

                </button>

            </div>

        </div>
            {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>}
    </div>
  )
}

export default Sidebar