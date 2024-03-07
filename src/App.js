import { Routes, Route } from "react-router-dom";
import OpenRoute from "./components/core/Auth/OpenRoute";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/core/HomePage/common/Navbar"
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import ContactFormSection from "./components/core/aboutuspage/ContactFormSection";
import Contact from "./pages/Contact";
import MyProfile from "./components/core/dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./pages/Error";
import Settings from "./components/core/dashboard/Settings"
import Aos from "aos"
import "aos/dist/aos.css"
import EnrolledCourses from "./components/core/dashboard/EnrolledCourses";
import Cart from "./components/core/dashboard/cart";
import { ACCOUNT_TYPE } from "./utils/constants";
import { useSelector } from "react-redux";
import AddCourse from "./components/core/dashboard/AddCourse";
import MyCourses from "./components/core/dashboard/MyCourses";
import EditCourse from "./components/core/dashboard/EditCourse";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/courseDetails";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./components/core/dashboard/ViewCourse/VideoDetails"
import Instructor from "./components/core/dashboard/Instructor";
function App() {
  const {user} =useSelector((state)=>state.profile)
  useEffect(() => {
    Aos.init({ duration: 3000, delay: 300 });
  }, [])
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>

        <Route path="/" element={
          <Home />
        }
        />
        <Route path="about" element={
          <About />
        }
        />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="login" element={<OpenRoute>
          <Login />
        </OpenRoute>} />
        <Route path="signup" element={<OpenRoute>
          <Signup />
        </OpenRoute>} />

        <Route path="contact" element={
          <Contact />
        } />

        <Route path="forgot-password" element={<OpenRoute>
          <ForgetPassword />
        </OpenRoute>} />


        <Route path="update-password/:id" element={
          <OpenRoute>
            <UpdatePassword />
          </OpenRoute>} />

        <Route path="verify-email" element={<OpenRoute>
          <VerifyEmail />
        </OpenRoute>} />

        <Route element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>}>

          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Settings />} />

          {
            user?.accountType == ACCOUNT_TYPE.STUDENT && (
              <>
                <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
                <Route path="dashboard/cart" element={<Cart />} />
              </>
            )
          }
           {
            user?.accountType == ACCOUNT_TYPE.INSTRUCTOR && (
              <>
                <Route path="dashboard/add-course" element={<AddCourse />} />
                <Route path="dashboard/instructor" element={<Instructor />} />
                <Route path="dashboard/my-courses" element={<MyCourses />} />
                <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
              </>
            )
          }
        </Route>

 {/* For the watching course lectures */}
 <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>

        <Route path="*" element={<Error />} />

        {/* <Route  path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
