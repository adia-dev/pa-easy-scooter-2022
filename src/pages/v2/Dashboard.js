import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineMessage, AiOutlinePieChart } from "react-icons/ai";
import { BiFilter, BiPencil, BiSearch, BiStats } from "react-icons/bi";
import { BsEye, BsFillQuestionCircleFill, BsThreeDots, BsTwitter } from 'react-icons/bs';
import { FaAirbnb, FaBell, FaPinterest, FaUsers } from "react-icons/fa";
import { GiCalendarHalfYear, GiFullMotorcycleHelmet, GiReturnArrow } from "react-icons/gi";
import { GoBroadcast } from "react-icons/go";
import { HiPlusSm } from "react-icons/hi";
import { IoIosConstruct, IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { MdElectricScooter, MdOutlineElectricScooter } from "react-icons/md";
import { RiUser6Line } from "react-icons/ri";
import { SiTesla, SiXiaomi } from 'react-icons/si';
import { TiTimes } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import Documents from "../../components/dashboard/Documents";
import Orders from "../../components/dashboard/Orders";
import UserInfo from "./UserInfo";

const Dashboard2 = () => {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])
    const [scooters, setScooters] = useState([])
    const [accessories, setAccessories] = useState([])
    const [rides, setRides] = useState([])
    const [showUserMenuID, setShowUserMenuID] = useState(null)
    const [targetUserId, setTargetUserId] = useState(null)
    const [openedTab, setOpenedTab] = useState("Overview")
    const [currentTab, setCurrentTab] = useState(0)
    const [currentBrandStatus, setCurrentBrandStatus] = useState("all")

    const tabs = [
        {
            name: "All",
            status: "all",
        },
        {
            name: "Partners",
            status: "partner",
        }
        , {
            name: "Requested",
            status: "pending",
        }
        , {
            name: "Waiting for response",
            status: "waiting_for_response",
        }
        , {
            name: "In Discussion",
            status: "in_discussion",
        }

    ]

    const brands = [
        {
            name: "AirBnb",
            status: "waiting_for_response",
            icon: FaAirbnb,
            color: "#ff5a5f"
        },
        {
            name: "Tesla",
            status: "in_discussion",
            icon: SiTesla,
            color: "#cc0000"
        },
        {
            name: "Xiaomi",
            status: "partner",
            icon: SiXiaomi,
            color: "#cc0000"
        },
        {
            name: "Twitter",
            status: "partner",
            icon: BsTwitter,
            color: "#1da1f2"
        },
        {
            name: "Pinterest",
            status: "partner",
            icon: FaPinterest,
            color: "#e60023"
        }
    ]

    useEffect(() => {

        if (openedTab === "Overview") {

            const fetchUsers = async () => {
                const data = await axios.get(process.env.REACT_APP_GOOGLE_BASE_URL + `users`)
                setUsers(data.data)
                // console.log(data.data)
                // setLoading(false)
            }

            const fetchScooters = async () => {
                const data = await axios.get(process.env.REACT_APP_GOOGLE_BASE_URL + `scooters`)
                setScooters(data.data)
                console.log(data.data)
                // setLoading(false)
            }

            const fetchRides = async () => {
                const data = await axios.get(process.env.REACT_APP_GOOGLE_BASE_URL + `rides`)
                setRides(data.data)
                console.log(data.data)
                // setLoading(false)
            }

            const fetchAccessories = async () => {
                const data = await axios.get(process.env.REACT_APP_GOOGLE_BASE_URL + `accessories`)
                setAccessories(data.data)
                // console.log(data.data)
                // setLoading(false)
            }

            fetchUsers();
            fetchScooters();
            fetchRides();
            fetchAccessories();
        }

    }, [])

    const handleShowUserMenu = (id) => {
        setShowUserMenuID(id === showUserMenuID ? null : id)
    }

    const handleShowUserInfo = (id) => {
        setTargetUserId(id)
        setShowUserMenuID(null)
    }

    const handleNavigateTabs = (tab) => {
        setOpenedTab(tab);
    }

    return (
        <div className="bg-gray-50 min-h-screen p-5 w-screen overflow-x-hidden">
            {targetUserId && <UserInfo userId={targetUserId} setTargetUserId={setTargetUserId} />}
            <div className="flex items-center ">
                <Link to="/" className="font-semibold lowercase">easy scooter</Link>
                <nav className="ml-5">
                    <ul className="flex items-center space-x-3 text-sm">
                        <li onClick={() => handleNavigateTabs("Overview")} className={`cursor-pointer hover:bg-gray-100 rounded-full px-2 py-1 ${openedTab === "Overview" && 'text-white bg-gray-800'}`}>Overview</li>
                        <li onClick={() => navigate("/v2/dashboard/map")} className={`cursor-pointer text-green-600 hover:bg-gray-100 rounded-full px-2 py-1 ${openedTab === "Map" && 'text-white bg-gray-800'}`}>Map</li>
                        <li onClick={() => handleNavigateTabs("Products")} className={`cursor-pointer hover:bg-gray-100 rounded-full px-2 py-1 ${openedTab === "Products" && 'text-white bg-gray-800'}`}>Products</li>
                        <li onClick={() => handleNavigateTabs("Documents")} className={`cursor-pointer hover:bg-gray-100 rounded-full px-2 py-1 ${openedTab === "Documents" && 'text-white bg-gray-800'}`}>Documents</li>
                        <li onClick={() => handleNavigateTabs("Orders")} className={`cursor-pointer hover:bg-gray-100 rounded-full px-2 py-1 ${openedTab === "Orders" && 'text-white bg-gray-800 '}`}>Orders</li>
                        <li onClick={() => handleNavigateTabs("Partners")} className={`cursor-pointer hover:bg-gray-100 rounded-full px-2 py-1 ${openedTab === "Partners" && 'text-white bg-gray-800'}`}>Partners</li>
                    </ul>
                </nav>
                <div className="flex-1 flex justify-end items-center space-x-3">
                    <div className="relative">
                        <div className="w-2 aspect-square bg-red-500 rounded-full absolute -right-1 -top-1 animate-pulse"></div>
                        <FaBell size={22} />
                    </div>
                    <RiUser6Line size={22} />
                </div>
            </div>

            <div className="w-full bg-gray-100 mt-3 h-[35px] rounded-xl px-3 py-1 flex items-center justify-between">
                <BiSearch />
                <input className="h-full bg-transparent mx-3 outline-none border-none flex-1 text-md text-gray-500 text-sm" type="search" name="search" id="search" placeholder="Search" />
                <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400 font-[500]">Filter</span>
                    <span className="bg-white rounded-lg px-2 py-1 text-xs font-[400]">
                        01/01/20 - 02/01/20
                    </span>
                    <span className="bg-white rounded-lg px-2 py-1 text-xs font-[400]">
                        Urgent
                    </span>
                    <span className="bg-white rounded-lg px-2 py-1 text-xs font-[400]">
                        &gt; 200 Users
                    </span>
                    <div className="bg-white flex items-center space-x-1 rounded-lg px-2 py-1 text-xs font-[500]">
                        <BiFilter size={16} />
                        <span>All</span>
                    </div>
                    <span className="bg-green-300 rounded-lg px-4 py-1 text-xs font-[500]">
                        Report
                    </span>
                </div>
            </div>

            {
                openedTab === "Overview" && <div className="">

                    <div className="flex items-center space-x-4 mt-5">
                        <h1 className="font-semibold">Analytics</h1>
                        {/* <div className="flex items-center text-gray-500 text-xs">
                            <span>Basic preset</span>
                            <IoMdArrowDropdown />
                        </div> */}
                    </div>

                    <div className="flex items-center justify-between space-x-5 mt-2">
                        <div className="bg-gray-100 aspect-[1/0.85] flex-[1] p-3 rounded-lg flex flex-col space-y-3">
                            <div className="flex items-center space-x-3">
                                <MdElectricScooter size={48} />
                                <div className="">
                                    <p>Rides</p>
                                    {/* <span className="text-xs text-gray-500">1AM - 6PM</span> */}
                                </div>
                            </div>
                            <div className="flex-1 bg-white rounded-lg flex flex-col p-2">
                                <div className="flex items-center hover:bg-gray-100 rounded-lg cursor-pointer h-[33%] p-2">
                                    <BiStats size={18} />
                                    <span className="font-[500] mx-2 text-xl">{rides.length}</span>
                                    <span className="text-gray-400 text-xs font-light">Total</span>
                                    <div className="flex-1 flex justify-end items-center">
                                        <IoMdArrowDropright />
                                    </div>
                                </div>
                                <div className="flex items-center hover:bg-gray-100 rounded-lg cursor-pointer h-[33%] p-2">
                                    <AiOutlineMessage size={18} />
                                    <span className="font-[500] mx-2 text-xl">{rides.filter((ride) => ride.status === 'PROBLEM').length}</span>
                                    <span className="text-gray-400 text-xs font-light">Issues</span>
                                    <div className="flex-1 flex justify-end items-center">
                                        <IoMdArrowDropright />
                                    </div>
                                </div>
                                <div className="flex items-center hover:bg-gray-100 rounded-lg cursor-pointer h-[33%] p-2">
                                    <GiReturnArrow size={18} />
                                    <span className="font-[500] mx-2 text-xl ">{rides.filter((ride) => ride.status === 'CANCELED').length}</span>
                                    <span className="text-gray-400 text-xs font-light">Return</span>
                                    <div className="flex-1 flex justify-end items-center">
                                        <IoMdArrowDropright />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 aspect-[1/0.85] flex-[1] rounded-lg flex flex-col p-3">
                            <div className="bg-gray-100 aspect-[1/0.85] flex-[1] p-3 rounded-lg flex flex-col space-y-3">
                                <div className="flex items-center space-x-3">
                                    <AiOutlinePieChart size={48} />
                                    <div className="">
                                        <p>Productivity</p>
                                        <span className="text-xs text-gray-500">By type</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center flex-col py-5 space-y-3">
                                    <IoIosConstruct size={32} className="hover:animate-pulse cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out" />
                                    <span className="italic">Working on it...</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 aspect-[2/0.85] flex-[2] rounded-lg flex flex-col p-3">
                            <div className="bg-gray-100 aspect-[1/0.85] flex-[1] p-3 rounded-lg flex flex-col space-y-3">
                                <div className="flex items-center space-x-3">
                                    <GiCalendarHalfYear size={48} />
                                    <div className="">
                                        <p>HeatMap</p>
                                        <span className="text-xs text-gray-500">MAY - JUN</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center flex-col py-5 space-y-3">
                                    <IoIosConstruct size={32} className="hover:animate-pulse cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out" />
                                    <span className="italic">Working on it...</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 mt-5">
                        <h1 className="font-semibold">Numbers</h1>
                        <div className="flex items-center text-gray-500 text-xs">
                            <span>Basic preset</span>
                            <IoMdArrowDropdown />
                        </div>
                    </div>

                    <div className="flex items-center w-full space-x-6 mt-3">
                        <div className="bg-white flex-1 aspect-[1/0.5] rounded-xl flex flex-col">
                            <div className="flex items-center space-x-3 p-5 border-b border-gray-100">
                                <FaUsers size={32} />
                                <span>Users</span>
                            </div>
                            <div className="flex items-center p-3 flex-1 w-full">
                                <div className="flex-1 border-r border-gray-100 w-full flex-col items-center justify-center text-center ">
                                    <p className="font-semibold text-3xl mb-2">{users.length}</p>
                                    <p className="text-xs text-gray-400">Total Users</p>
                                </div>
                                <div onClick={() => handleNavigateTabs("Partners")} className="flex-1 w-full cursor-pointer flex-col items-center justify-center text-center ">
                                    <p className="font-semibold text-3xl mb-2">{users.filter((user) => user.role === 'PARTNER').length}</p>
                                    <p className="text-xs text-gray-400">Partners</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white flex-1 aspect-[1/0.5] rounded-xl flex flex-col">
                            <div className="flex items-center space-x-3 p-5 border-b border-gray-100">
                                <MdOutlineElectricScooter size={32} />
                                <span>Scooters</span>
                            </div>
                            <div className="flex items-center p-3 flex-1 w-full">
                                <div className="flex-1 border-r border-gray-100 w-full flex-col items-center justify-center text-center ">
                                    <p className="font-semibold text-3xl mb-2">{scooters.length}</p>
                                    <p className="text-xs text-gray-400">Total Scooters</p>
                                </div>
                                <div className="flex-1 border-r border-gray-100 w-full flex-col items-center justify-center text-center ">
                                    <p className="font-semibold text-3xl mb-2">{scooters.filter((scooter) => scooter.status === 'MAINTENANCE').length}</p>
                                    <p className="text-xs text-gray-400">In Maintenance</p>
                                </div>
                                <div className="flex-1 border-r border-gray-100 w-full flex-col items-center justify-center text-center ">
                                    <p className="font-semibold text-3xl mb-2">{scooters.filter((scooter) => scooter.status === 'AVAILABLE').length}</p>
                                    <p className="text-xs text-gray-400">Available</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white flex-1 aspect-[1/0.5] rounded-xl flex flex-col">
                            <div className="flex items-center space-x-3 p-5 border-b border-gray-100">
                                <GoBroadcast size={32} />
                                <span>Orders</span>
                            </div>
                            <div className="flex items-center p-3 flex-1 w-full">
                                <div className="flex-1 border-r border-gray-100 w-full flex-col items-center justify-center text-center ">
                                    <p className="font-semibold text-3xl mb-2">17</p>
                                    <p className="text-xs text-green-500">This Week</p>
                                </div>
                                <div className="flex-1 w-full flex-col items-center justify-center text-center ">
                                    <p className="font-semibold text-3xl mb-2">93.5%</p>
                                    <p className="text-xs text-gray-400">Growth</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white flex-1 aspect-[1/0.5] rounded-xl flex flex-col">
                            <div className="flex items-center space-x-3 p-5 border-b border-gray-100">
                                <GiFullMotorcycleHelmet size={32} />
                                <span>Accessories</span>
                            </div>
                            <div className="flex items-center p-3 flex-1 w-full">
                                <div className="flex-1 border-r border-gray-100 w-full flex-col items-center justify-center text-center ">
                                    <p className="font-semibold text-3xl mb-2">{Math.ceil(accessories.length / 3)}</p>
                                    <p className="text-xs text-gray-400">Sold</p>
                                </div>
                                <div className="flex-1 w-full flex-col items-center justify-center text-center ">
                                    <p className="font-semibold text-3xl mb-2">{accessories.length}</p>
                                    <p className="text-xs text-gray-400">Total</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 mt-5">
                        <h1 className="font-semibold">Users</h1>
                        <div className="flex items-center text-gray-500 text-xs">
                            <span>{users.length}</span>
                            <IoMdArrowDropdown />
                        </div>
                    </div>


                    <div className="flex flex-col mt-10 overflow-x-auto w-full align-middle overflow-hidden">
                        <table className="overflow-y-scroll  ">
                            <thead className=" ">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2  " />
                                            <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                        Full Name
                                    </th>
                                    <th scope="col" className="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                        Email
                                    </th>
                                    <th scope="col" className="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                        Role
                                    </th>
                                    <th scope="col" className="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                        Last Activity
                                    </th>
                                    <th scope="col" className="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                        Status
                                    </th>
                                    <th scope="col" className="py-3 text-xs font-medium tracking-wider text-left uppercase ">

                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white cursor-pointer ">
                                {
                                    users.map((user, i) => (
                                        <tr key={"user-" + i} className="hover:bg-gray-100 relative">
                                            <td className="p-4 w-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2" />
                                                    <label htmlFor="checkbox-table-1" className="sr-only" >checkbox</label>
                                                </div>
                                            </td>
                                            <td className="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">{user.display_name ?? "undefined"}</td>
                                            <td className="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">{user.email}</td>
                                            <td className="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">{user.role}</td>
                                            <td className="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">31/05/2022 08:02</td>
                                            <td className="py-4 text-sm font-medium text-gray-400 whitespace-nowrap "><span className='flex items-center justify-center text-green-800 bg-green-100 w-fit px-2 py-1 text-xs rounded-full'>Completed</span></td>
                                            <td className="py-4 text-sm font-medium text-right whitespace-nowrap">
                                                <div onClick={() => handleShowUserMenu(user.id)} className="text-gray-400 hover:scale-110 transition-all duration-200 ease-in-out">
                                                    <BsThreeDots size={20} />
                                                </div>
                                                {showUserMenuID === user.id && <div className="absolute top-10 right-0 bg-white w-[300px] border rounded-lg z-50">
                                                    <div onClick={() => handleShowUserInfo(user.id)} className="p-3 flex items-center font-light space-x-3 hover:bg-gray-100">
                                                        <BsEye />
                                                        <span>
                                                            Show
                                                        </span>
                                                    </div>
                                                    <div className="p-3 flex items-center font-light space-x-3 hover:bg-gray-100">
                                                        <BiPencil />
                                                        <span>
                                                            Edit
                                                        </span>
                                                    </div>
                                                    <div className="p-3 flex items-center font-light space-x-3 hover:bg-gray-100">
                                                        <TiTimes color="red" />
                                                        <span>Delete</span>
                                                    </div>
                                                </div>}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            }
            {
                openedTab === "Products" && <div className="">

                    <div className="flex items-center space-x-4 mt-5">
                        <h1 className="font-semibold">Products</h1>
                        <div className="flex items-center text-gray-500 text-xs">
                            <span>Basic preset</span>
                            <IoMdArrowDropdown />
                        </div>
                    </div>


                    <div className="flex items-center space-x-4 mt-5">
                        <h1 className="font-semibold border-b-2 border-transparent hover:border-gray-200 cursor-pointer">Overview</h1>
                        <div className="flex items-center border-b-2 border-black cursor-pointer">
                            <HiPlusSm />
                            <h1 className="font-semibold">Add Product</h1>
                        </div>
                    </div>



                    {/* 
                    <div className="flex flex-col mt-10 overflow-x-auto w-full align-middle overflow-hidden">
                        <table className="overflow-y-scroll  ">
                            <thead className=" ">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2  " />
                                            <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                        Full Name
                                    </th>
                                    <th scope="col" className="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                        Email
                                    </th>
                                    <th scope="col" className="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                        Role
                                    </th>
                                    <th scope="col" className="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                        Last Activity
                                    </th>
                                    <th scope="col" className="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                        Status
                                    </th>
                                    <th scope="col" className="py-3 text-xs font-medium tracking-wider text-left uppercase ">

                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white cursor-pointer ">
                                <tr className="hover:bg-gray-100 relative">
                                    <td className="p-4 w-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2" />
                                            <label htmlFor="checkbox-table-1" className="sr-only" >checkbox</label>
                                        </div>
                                    </td>
                                    <td className="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Abdoulaye Dia</td>
                                    <td className="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">abdou@easyscooter.com</td>
                                    <td className="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Admin</td>
                                    <td className="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">31/05/2022 08:02</td>
                                    <td className="py-4 text-sm font-medium text-gray-400 whitespace-nowrap "><span className='flex items-center justify-center text-green-800 bg-green-100 w-fit px-2 py-1 text-xs rounded-full'>Completed</span></td>
                                    <td className="py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <div className="text-gray-400 hover:scale-110 transition-all duration-200 ease-in-out">
                                            <BsThreeDots size={20} />
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div> */}
                </div>
            }

            {
                openedTab === "Documents" && <Documents />
            }

            {
                openedTab === "Orders" && <Orders />
            }

            {
                openedTab === "Partners" &&
                <div className="w-full">
                    <div className="flex justify-between items-center my-10">
                        <div className="flex items-center space-x-2">
                            <h1 className='text-2xl font-bold'>Partners</h1>
                            <BsFillQuestionCircleFill color='gray' />
                        </div>
                    </div>
                    <div className="mt-3 border-b w-full px-7 flex items-center justify-between">
                        <ul className='flex items-center'>
                            {tabs.map((tab, tabIndex) => (
                                <li key={tabIndex} onClick={() => { setCurrentTab(tabIndex); setCurrentBrandStatus(tab.status) }} className={`cursor-pointer transition-all ease-in-out duration-200 border-b-2 ${tabIndex === currentTab ? "border-black" : "border-white"} hover:border-black p-3`}>{tab.name}</li>

                            ))}

                        </ul>
                    </div>

                    <div className="flex p-5 flex-wrap pl-10 w-full md:h-[500px] 2xl:h-[650px] transition-all ease-in-out duration-200 py-3 overflow-y-scroll">
                        {brands.filter((brand) => currentBrandStatus === "all" || brand.status === currentBrandStatus).map((brand, index) => (
                            <div key={index} className="flex w-[125px] h-[150px] hover:bg-gray-100 cursor-pointer hover:scale-110 transition-all ease-in-out duration-200 active:scale-100 active:bg-gray-200 rounded-2xl border flex-col items-center justify-center mb-3 mr-3">
                                <div style={{ backgroundColor: `${brand.color}` }} className={`flex items-center justify-center rounded-full w-[50px] aspect-square`}>
                                    <brand.icon color='white' size={32} />
                                </div>
                                <span className='mt-3 text-sm'>{brand.name}</span>
                            </div>
                        ))}
                        {[...Array(25)].map((_, index) => (
                            <div key={index} className="flex w-[125px] h-[150px] opacity-30 bg-gray-100 rounded-2xl border flex-col items-center justify-center mb-3 mr-3">
                                <div className={`flex items-center justify-center bg-gray-400 rounded-full w-[50px] aspect-square`}>
                                </div>
                                <span className='mt-3 text-sm'>___</span>
                            </div>
                        ))}
                    </div>
                </div>
            }

        </div >
    )
}

export default Dashboard2