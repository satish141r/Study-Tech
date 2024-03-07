import React, { useEffect, useState } from 'react'
import { Link, matchPath } from 'react-router-dom'
import logo from "../../../../assets/Logo/Logo-Full-Light.png"
// import { toast } from 'react-hot-toast';
import { NavbarLinks } from '../../../../data/navbar-links';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from '../../Auth/ProfileDropDown';
import { apiConnector } from '../../../../services/apiconnector';
import { categories } from '../../../../services/apis';
import { BiDownArrow } from "react-icons/bi"
import {BsChevronDown} from "react-icons/bs"
import logo2 from "../../../../assets/Logo/StudyTech.png"
// const subLinks = [{
//     title: "Python",
//     path: "/catalog/python"
// }, {
//     title: "Web Development",
//     path: "/catalog/web-development"
// },
// ]



const Navbar = (props) => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.cart);

    const location = useLocation();
    const [subLinks, setSubLinks] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        ; (async () => {
            setLoading(true)
            try {
                const res = await apiConnector("GET", categories.CATEGORIES_API)

                setSubLinks(res.data.data)
                console.log(res)
                // console.log("first",subLinks)
            } catch (error) {
                console.log("Could not fetch Categories.", error)
            }
            setLoading(false)
        })()
    }, [])
    const matchRoute = (route) => {

        return matchPath({ path: route }, location.pathname)
    }
    return (
        <div className='border-b-[1px] border-richblack-700'>
            <div className='flex justify-between items-center w-11/12 max-w-[1160px] h-14 py-9 mx-auto '>
                <Link to="/">
                    <img src={logo2} width={135} height={10} loading='lasy' />
                </Link>
                {/* 
                <nav>
                    <ul className='flex gap-3  text-richblack-25'>
                        {
                            NavbarLinks.map((link, index) => {
                                return <li key={index}>
                                    {
                                        link.title === "Catalog" ? (
                                            <div className='relative flex items-center gap-1 group'>
                                                <p >
                                                    {link.title}</p>
                                                <BiDownArrow />

                                                <div className='invisible absolute left-[49%] top-0 flex flex-col rounded-md bg-richblack-5 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 z-10  lg:w-[300px] translate-x-[-50%] translate-y-[25%]' >


                                                  
                                                    <div className='absolute top-0 left-[50%] translate-x-[77%] translate-y-[-39%]  h-6 w-6 rotate-45 rounded bg-richblack-5'>

                                                    </div>
                                                  <div className='p-5'>
                                                  {
                                                        subLinks.length ? (
                                                            subLinks.map((subLink,index)=>(
                                                                <Link to={`${subLink?.path}`}>
                                                                    <p className='flex items-center text-[16px] rounded-md p-2  hover:bg-richblack-100'>{subLink.title}</p>
                                                                </Link>
                                                            ))
                                                        
                                                            
                                                        ) : (<div></div>)
                                                    }
                                                  </div>


                                                </div>


                                            </div>) : (
                                            <Link to={link?.path}>
                                                <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                                                    {link.title}

                                                </p>

                                            </Link>
                                        )
                                    }
                                </li>
                            })
                        }

                    </ul>
                </nav>  */}
                <nav className="hidden md:block">
                    <ul className="flex gap-x-6 text-richblack-25">
                        {NavbarLinks.map((link, index) => (
                            <li key={index}>
                                {link.title === "Catalog" ? (
                                    <>
                                        <div
                                            className={`group relative flex cursor-pointer items-center gap-1 ${matchRoute("/catalog/:catalogName")
                                                    ? "text-yellow-25"
                                                    : "text-richblack-25"
                                                }`}
                                        >
                                            <p>{link.title}</p>
                                            <BsChevronDown />
                                            <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                                                <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                                                {loading ? (
                                                    <p className="text-center">Loading...</p>
                                                ) : subLinks.length ? (
                                                    <>
                                                        {subLinks
                                                           
                                                            ?.map((subLink, i) => (
                                                                <Link
                                                                    to={`/catalog/${subLink.name
                                                                        .split(" ")
                                                                        .join("-")
                                                                        .toLowerCase()}`}
                                                                    className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                                                    key={i}
                                                                >
                                                                    <p>{subLink.name}</p>
                                                                </Link>
                                                            ))}
                                                    </>
                                                ) : (
                                                    <p className="text-center">No Courses Found</p>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link to={link?.path}>
                                        <p
                                            className={`${matchRoute(link?.path)
                                                    ? "text-yellow-25"
                                                    : "text-richblack-25"
                                                }`}
                                        >
                                            {link.title}
                                        </p>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='flex items-center gap-x-4 text-richblack-100'>
                    {user && user.accountType != "Instructor" && (
                        <Link to="/dashboard/cart" className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 flex items-center'>
                            <AiOutlineShoppingCart />
                            {
                                totalItems > 0 && (
                                    <span className='text-[10px] bg-yellow-100 rounded-[50%] p-1 text-richblue-900 font-bold'>
                                        {totalItems}
                                    </span>
                                )
                            }
                        </Link>
                    )}
                    {token === null && (
                        <Link to="/login"><button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Login</button></Link>)
                    }
                    {token === null && (
                        <Link to="/signup"><button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Signup</button></Link>)
                    }
                    {/* {isLoggedIn &&
                        <Link to="/"><button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700' onClick={() => {
                            setIsLoggedIn(false);
                            // toast.success("Logged Out");
                        }}>LogOut</button></Link>
                    } */}
                    {token !== null && <ProfileDropDown />
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar