import axios from "axios"
import { useEffect, useState } from "react"
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineEdit, AiOutlineEuro, AiOutlineLoading3Quarters } from "react-icons/ai"
import { BiExitFullscreen, BiFullscreen, BiPhone, BiUser } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { CgCalendarDates, CgMail } from "react-icons/cg"
import { HiOutlineLocationMarker } from "react-icons/hi"

const UserInfo = ({ userId, setTargetUserId }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isFullscreen, setIsFullscreen] = useState(true)

    // const { id } = useParams()

    useEffect(() => {

        const fetchUser = async () => {
            const data = await axios.get(`http://localhost:5500/api/v2/users/${userId}`)
            setUser(data.data)
            console.log(data.data)
            setLoading(false)
        }

        fetchUser()

        return () => {

        }
    }, [])

    if (loading) return <div className='w-screen h-screen bg-white flex  text-3xl text-black overflow-hidden'>
        {/* <video className='h-full object-contain' preload='true' src='https://cdn.dribbble.com/users/20271/screenshots/16821869/media/dab0697ac32bac2c6909f5a7bb299818.mp4' autoPlay={true} muted={true} loop={true}></video> */}
        <div className="absolute w-full h-full flex flex-col justify-center items-center">
            <p>LOADING</p>
            <AiOutlineLoading3Quarters className='animate-spin' />
        </div>
    </div>

    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
            <div className="w-screen h-screen bg-black absolute top-0 left-0 opacity-80 z-0"></div>
            <div className="sticky top-0 left-0 bg-white p-5 rounded-lg transition-all duration-200 ease-in-out" style={{ height: `${isFullscreen ? 100 : 80}vh`, width: `${isFullscreen ? 100 : 66}vw` }}>
                <div className="flex items-center justify-end z-10 absolute w-full pr-10" >
                    <div className="flex items-center space-x-2">
                        <div onClick={() => setTargetUserId(null)} className="flex items-center justify-center rounded-md border p-1 cursor-pointer text-gray-500 hover:text-black hover:scale-110 transition-all duration-200 ease-in-out">
                            <AiOutlineClose size={22} />
                        </div>
                        <div className="flex items-center justify-center rounded-md border p-1 cursor-pointer text-gray-500 hover:text-black hover:scale-110 transition-all duration-200 ease-in-out">
                            <AiOutlineEdit size={22} />
                        </div>
                        <div onClick={() => setIsFullscreen(!isFullscreen)} className="flex items-center justify-center rounded-md border p-1 cursor-pointer text-gray-500 hover:text-black hover:scale-110 transition-all duration-200 ease-in-out">
                            {isFullscreen ? <BiExitFullscreen size={22} /> : <BiFullscreen size={22} />}
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-24 aspect-square rounded-full overflow-hidden border-2 border-green-400 p-1">
                        <img src={user.pfp_path ?? "https://i.pinimg.com/736x/1e/28/ea/1e28eaa02f627ed922ffcdc7c168cddb.jpg"} className="rounded-full w-full h-full " alt="" />
                    </div>
                    <div className="ml-3 -space-y-3">
                        <div className="flex items-center">
                            <span className="mt-3 text-2xl font-semibold">{user.display_name}</span>
                            <div className="flex items-center text-green-500 text-sm mt-3 ml-3">
                                <AiOutlineCheckCircle />
                                <span>Active</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 font-light">
                            <span className="mt-4 text-xs font-semibold">{user.role}</span>
                            <span className="mt-4 text-xs font-semibold">•</span>
                            <span className="mt-4 text-xs font-semibold">LYON</span>
                            <span className="mt-4 text-xs font-semibold">•</span>
                            <span className="mt-4 text-xs font-semibold">Melbourne, Australie</span>
                        </div>
                    </div>
                </div>
                <div className="py-3 flex items-center space-x-3 text-xs text-gray-700 mt-2">
                    <div className="flex items-center space-x-2">
                        <CgCalendarDates size={18} />
                        <span>Joined Mar 2022</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <BiUser size={18} />
                        <span>Last activity {user.last_activity ?? "7 days ago"}</span>
                    </div>
                </div>
                <div className=" flex items-center space-x-3 text-xs text-gray-700 mt-2">
                    <div className="flex items-center space-x-2 border rounded-lg px-2 py-1 hover:bg-gray-200 cursor-pointer">
                        <CgMail size={18} />
                        <span>Joined Mar 2022</span>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg px-2 py-1 hover:bg-gray-200 cursor-pointer">
                        <BiPhone size={18} />
                        <span>+33 7 83 26 06 02</span>
                    </div>
                </div>

                <h3 className="mt-6 font-semibold uppercase">Last 3 Activities</h3>

                <div className="flex items-center justify-center space-x-3 py-3">
                    <div className="border flex-1 rounded-lg p-2">
                        <div className="flex justify-between mt-1">
                            <div className="flex items-center space-x-2 bg-green-100 rounded-full text-xs py-1 px-2">
                                <div className="w-[7px] aspect-square rounded-full bg-green-600"></div>
                                <span className="text-green-600">Active</span>
                            </div>
                            <div className="flex justify-center items-center text-gray-500">
                                <BsThreeDots />
                            </div>
                        </div>
                        <div className="h-16 py-2 flex space-x-2">
                            <div className="w-1 h-full bg-green-100"></div>
                            <div className="text-sm font-semibold">
                                <span>Little Tigers Karate</span>
                                <div className="flex items-center text-xs font-normal space-x-2">
                                    <span className="text-violet-600">Upcoming: </span>
                                    <span className="text-gray-600">Monday</span>
                                    <span className="text-gray-600">4:00 PM</span>
                                    <span className="text-gray-600">-</span>
                                    <span className="text-gray-600">8:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border flex-1 rounded-lg p-2 bg-gray-50 opacity-30">
                        <div className="flex justify-between mt-1">
                            <div className="flex items-center space-x-2 bg-green-100 rounded-full text-xs py-1 px-2">
                                <div className="w-[7px] aspect-square rounded-full bg-green-600"></div>
                                <span className="text-green-600">Active</span>
                            </div>
                            <div className="flex justify-center items-center text-gray-500">
                                <BsThreeDots />
                            </div>
                        </div>
                        <div className="h-16 py-2 flex space-x-2">
                            <div className="w-1 h-full bg-green-100"></div>
                            <div className="text-sm font-semibold">
                                <span>Little Tigers Karate</span>
                                <div className="flex items-center text-xs font-normal space-x-2">
                                    <span className="text-violet-600">Upcoming: </span>
                                    <span className="text-gray-600">Monday</span>
                                    <span className="text-gray-600">4:00 PM</span>
                                    <span className="text-gray-600">-</span>
                                    <span className="text-gray-600">8:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border flex-1 rounded-lg p-2 bg-gray-50 opacity-30">
                        <div className="flex justify-between mt-1">
                            <div className="flex items-center space-x-2 bg-gray-100 rounded-full text-xs py-1 px-2">
                                <div className="w-[7px] aspect-square rounded-full bg-gray-600"></div>
                                <span className="text-gray-600">Empty</span>
                            </div>
                            <div className="flex justify-center items-center text-gray-500">
                                <BsThreeDots />
                            </div>
                        </div>
                        <div className="h-16 py-2 flex space-x-2">

                        </div>
                    </div>


                </div>

                <div className="flex items-center space-x-5 mt-2 w-full border-b font-semibold  text-sm">
                    <div className="border-b-[3px] border-violet-500 text-violet-500 pb-3">
                        <span>Activity</span>
                    </div>
                    <div className="border-b-[3px] border-transparent pb-3 text-gray-400 cursor-pointer hover:text-black transition-all ease-in-out duration-150">
                        <span>Payments</span>
                    </div>
                    <div className="border-b-[3px] border-transparent pb-3 text-gray-400 cursor-pointer hover:text-black transition-all ease-in-out duration-150">
                        <span>Bookings</span>
                    </div>
                    <div className="border-b-[3px] border-transparent pb-3 text-gray-400 cursor-pointer hover:text-black transition-all ease-in-out duration-150">
                        <span>Documents</span>
                    </div>
                </div>

                <div className="overflow-y-scroll ">
                    <div className="flex items-center space-x-3 py-3 mt-3">
                        <div className="w-12 aspect-square mt-1 relative bg-gray-100 text-gray-500 rounded-full flex items-center justify-center">
                            <HiOutlineLocationMarker size={22} />
                            <div className="absolute top-full my-2 left-0 w-full flex justify-center items-center h-6">
                                <div className="w-[2px] h-full bg-gray-200"></div>
                            </div>
                        </div>
                        <div className="text-gray-400 text-xs">
                            <span className="text-xs">9:00 AM, Apr 8 2022</span>
                            <p><span className="font-semibold text-sm text-gray-800">Arrived</span> in <span className="font-semibold text-sm text-gray-800">Paris</span></p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 py-3 mt-3">
                        <div className="w-12 aspect-square mt-1 relative bg-gray-100 text-gray-500 rounded-full flex items-center justify-center">
                            <HiOutlineLocationMarker size={22} />
                            <div className="absolute top-full my-2 left-0 w-full flex justify-center items-center h-6">
                                <div className="w-[2px] h-full bg-gray-200"></div>
                            </div>
                        </div>
                        <div className="text-gray-400 text-xs">
                            <span className="text-xs">9:00 AM, Apr 8 2022</span>
                            <p><span className="font-semibold text-sm text-gray-800">Arrived</span> in <span className="font-semibold text-sm text-gray-800">Paris</span></p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 py-3 mt-3">
                        <div className="w-12 aspect-square mt-1 relative bg-green-200 text-green-600 rounded-full flex items-center justify-center">
                            <AiOutlineEuro size={22} />
                            <div className="absolute top-full my-2 left-0 w-full flex justify-center items-center h-6">
                                <div className="w-[2px] h-full bg-gray-200"></div>
                            </div>
                        </div>
                        <div className="text-gray-400 text-xs">
                            <span className="text-xs">9:00 AM, Apr 8 2022</span>
                            <p><span className="font-semibold text-sm text-gray-800">Payment</span> of <span className="font-semibold text-sm text-gray-800">$99.00</span> for <span className="font-semibold text-sm text-gray-800">Limited edition Helmet</span></p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 py-3 mt-3">
                        <div className="w-12 aspect-square mt-1 relative bg-gray-100 text-gray-500 rounded-full flex items-center justify-center">
                            <HiOutlineLocationMarker size={22} />
                            {/* <div className="absolute top-full my-2 left-0 w-full flex justify-center items-center h-6">
                                <div className="w-[2px] h-full bg-gray-200"></div>
                            </div> */}
                        </div>
                        <div className="text-gray-400 text-xs">
                            <span className="text-xs">9:00 AM, Apr 8 2022</span>
                            <p><span className="font-semibold text-sm text-gray-800">Arrived</span> in <span className="font-semibold text-sm text-gray-800">Paris</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo