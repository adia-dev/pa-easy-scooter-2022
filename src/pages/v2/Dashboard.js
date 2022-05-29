import { AiOutlineMessage, AiOutlinePieChart } from "react-icons/ai"
import { BiFilter, BiSearch, BiStats } from "react-icons/bi"
import { FaBell } from "react-icons/fa"
import { GiCalendarHalfYear, GiReturnArrow } from "react-icons/gi"
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io"
import { RiUser6Line } from "react-icons/ri"
import { SiCircle } from "react-icons/si"

const Dashboard2 = () => {
    return (
        <div className="p-5">

            <div className="flex items-center ">
                <div className="font-semibold lowercase">easy scooter</div>
                <nav className="ml-5">
                    <ul className="flex items-center space-x-3 text-sm">
                        <li className="cursor-pointer hover:bg-gray-100 rounded-full px-2 py-1 bg-gray-100">Overview</li>
                        <li className="cursor-pointer hover:bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700">Partners</li>
                        <li className="cursor-pointer hover:bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700">Partners</li>
                        <li className="cursor-pointer hover:bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700">Partners</li>
                        <li className="cursor-pointer hover:bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700">Partners</li>
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

            <div className="flex items-center space-x-4 mt-5">
                <h1 className="font-semibold">Analytics</h1>
                <div className="flex items-center text-gray-500 text-xs">
                    <span>Basic preset</span>
                    <IoMdArrowDropdown />
                </div>
            </div>

            <div className="flex items-center justify-between space-x-5 mt-2">
                <div className="bg-gray-100 aspect-[1/0.85] flex-[1] p-3 rounded-lg flex flex-col space-y-3">
                    <div className="flex items-center space-x-3">
                        <SiCircle size={48} />
                        <div className="">
                            <p>Base Metrics</p>
                            <span className="text-xs text-gray-500">1AM - 6PM</span>
                        </div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg flex flex-col p-2">
                        <div className="flex items-center hover:bg-gray-100 rounded-lg cursor-pointer h-[33%] p-2">
                            <BiStats size={18} />
                            <span className="font-[500] mx-2 text-xl">23</span>
                            <span className="text-gray-400 text-xs font-light">critical</span>
                            <div className="flex-1 flex justify-end items-center">
                                <IoMdArrowDropright />
                            </div>
                        </div>
                        <div className="flex items-center hover:bg-gray-100 rounded-lg cursor-pointer h-[33%] p-2">
                            <AiOutlineMessage size={18} />
                            <span className="font-[500] mx-2 text-xl">23</span>
                            <span className="text-gray-400 text-xs font-light">New messages</span>
                            <div className="flex-1 flex justify-end items-center">
                                <IoMdArrowDropright />
                            </div>
                        </div>
                        <div className="flex items-center hover:bg-gray-100 rounded-lg cursor-pointer h-[33%] p-2">
                            <GiReturnArrow size={18} />
                            <span className="font-[500] mx-2 text-xl ">3</span>
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
                    </div>
                </div>
                <div className="bg-gray-100 aspect-[2/0.85] flex-[2] rounded-lg flex flex-col p-3">
                    <div className="bg-gray-100 aspect-[1/0.85] flex-[1] p-3 rounded-lg flex flex-col space-y-3">
                        <div className="flex items-center space-x-3">
                            <GiCalendarHalfYear size={48} />
                            <div className="">
                                <p>HeatMap</p>
                                <span className="text-xs text-gray-500">JAN - MAY</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard2