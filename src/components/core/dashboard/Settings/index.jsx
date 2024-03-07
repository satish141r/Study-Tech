import React from 'react'
import DeleteAccount from './DeleteAccount'
import EditProfile from './EditProfile'
import UpdatePassword from './UpdatePassword'
import ChangeProfilePicture from './ChangeProfilePicture'
const index = () => {
  return (
    <div className='text-richblack-5'>


        <h1 className=' text-3xl'>Edit Profile</h1>
        {/* Change Profile Picture */}
      <ChangeProfilePicture />
      {/* Profile */}
      <EditProfile />
      {/* Password */}
      <UpdatePassword />
      {/* Delete Account */}
      <DeleteAccount />
    </div>
  )
}

export default index