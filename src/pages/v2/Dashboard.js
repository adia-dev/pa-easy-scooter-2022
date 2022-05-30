import { AiOutlineMessage, AiOutlinePieChart } from "react-icons/ai"
import { BiFilter, BiSearch, BiStats } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { FaBell, FaUsers } from "react-icons/fa"
import { GiCalendarHalfYear, GiFullMotorcycleHelmet, GiReturnArrow } from "react-icons/gi"
import { GoBroadcast } from "react-icons/go"
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io"
import { MdOutlineElectricScooter } from "react-icons/md"
import { RiUser6Line } from "react-icons/ri"
import { SiCircle } from "react-icons/si"

const Dashboard2 = () => {


    return (
        <div className="bg-gray-50 min-h-screen p-5 w-screen overflow-x-hidden">

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
                            <p className="font-semibold text-3xl mb-2">329</p>
                            <p className="text-xs text-gray-400">Total Users</p>
                        </div>
                        <div className="flex-1 w-full flex-col items-center justify-center text-center ">
                            <p className="font-semibold text-3xl mb-2">93.5%</p>
                            <p className="text-xs text-gray-400">Growth</p>
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
                            <p className="font-semibold text-3xl mb-2">329</p>
                            <p className="text-xs text-gray-400">Total Scooters</p>
                        </div>
                        <div className="flex-1 border-r border-gray-100 w-full flex-col items-center justify-center text-center ">
                            <p className="font-semibold text-3xl mb-2">2</p>
                            <p className="text-xs text-gray-400">In repair</p>
                        </div>
                        <div className="flex-1 w-full flex-col items-center justify-center text-center ">
                            <p className="font-semibold text-3xl mb-2">93.5%</p>
                            <p className="text-xs text-gray-400">Growth</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex-1 aspect-[1/0.5] rounded-xl flex flex-col">
                    <div className="flex items-center space-x-3 p-5 border-b border-gray-100">
                        <GoBroadcast size={32} />
                        <span>Bookings</span>
                    </div>
                    <div className="flex items-center p-3 flex-1 w-full">
                        <div className="flex-1 border-r border-gray-100 w-full flex-col items-center justify-center text-center ">
                            <p className="font-semibold text-3xl mb-2">17</p>
                            <p className="text-xs text-green-500">Live</p>
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
                            <p className="font-semibold text-3xl mb-2">329</p>
                            <p className="text-xs text-gray-400">Sold</p>
                        </div>
                        <div className="flex-1 w-full flex-col items-center justify-center text-center ">
                            <p className="font-semibold text-3xl mb-2">93.5%</p>
                            <p className="text-xs text-gray-400">Growth</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-4 mt-5">
                <h1 className="font-semibold">Users</h1>
                <div className="flex items-center text-gray-500 text-xs">
                    <span>232</span>
                    <IoMdArrowDropdown />
                </div>
            </div>


            <div class="flex flex-col mt-10 overflow-x-auto w-full align-middle overflow-hidden">
                <table class="overflow-y-scroll  ">
                    <thead class=" ">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all" type="checkbox" class="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2  " />
                                    <label for="checkbox-all" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                Full Name
                            </th>
                            <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                Email
                            </th>
                            <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                Role
                            </th>
                            <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                Last Activity
                            </th>
                            <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                Status
                            </th>
                            <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">

                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white cursor-pointer ">
                        <tr class="hover:bg-gray-100">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2" />
                                    <label for="checkbox-table-1" class="sr-only" >checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Abdoulaye Dia</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">abdou@easyscooter.com</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Admin</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">31/05/2022 08:02</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap "><span className='flex items-center justify-center text-green-800 bg-green-100 w-fit px-2 py-1 text-xs rounded-full'>Completed</span></td>
                            <td class="py-4 text-sm font-medium text-right whitespace-nowrap">
                                <div class="text-gray-400 hover:scale-110 transition-all duration-200 ease-in-out">
                                    <BsThreeDots size={20} />
                                </div>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-100 ">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2" />
                                    <label for="checkbox-table-1" class="sr-only" >checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">(deleted)</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">xxx@xxx.xxx</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Customer</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">31/05/2022 08:02</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap "><span className='flex items-center justify-center text-red-800 bg-red-100 w-fit px-2 py-1 text-xs rounded-full'>Deleted</span></td>
                            <td class="py-4 text-sm font-medium text-right whitespace-nowrap">
                                <div class="text-gray-400 hover:scale-110 transition-all duration-200 ease-in-out">
                                    <BsThreeDots size={20} />
                                </div>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-100 ">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2" />
                                    <label for="checkbox-table-1" class="sr-only" >checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Pascal Zhou</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">pascal@easyscooter.com</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Partner</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">06/06/2022 2:22</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">
                                <span className='flex items-center justify-center text-blue-800 bg-blue-100 w-fit px-2 py-1 text-xs rounded-full'>Pending</span>
                            </td>
                            <td class="py-4 text-sm font-medium text-right whitespace-nowrap">
                                <div class="text-gray-400 hover:scale-110 transition-all duration-200 ease-in-out">
                                    <BsThreeDots size={20} />
                                </div>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-100 ">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2" />
                                    <label for="checkbox-table-1" class="sr-only" >checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap line-through">Yann HABIE</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap line-through">yann@easyscooter.com</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Customer</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">17/05/2022 18:02</td>
                            <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">
                                <span className='flex items-center justify-center text-orange-800 bg-orange-100 w-fit px-2 py-1 text-xs rounded-full'>Banned</span>
                            </td>
                            <td class="py-4 text-sm font-medium text-right whitespace-nowrap">
                                <div class="text-gray-400 hover:scale-110 transition-all duration-200 ease-in-out">
                                    <BsThreeDots size={20} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Dashboard2