import { useState } from 'react'
import { BsChevronExpand, BsSearch, BsTwitter } from 'react-icons/bs'
import { FaAirbnb, FaPinterest, FaTimes } from 'react-icons/fa'
import { RiMenuFoldLine } from 'react-icons/ri'
import { SiBlueprint, SiTesla } from 'react-icons/si'
import { menuData } from '../data/dashboardMenu'

const Dev = () => {

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

    const [currentTab, setCurrentTab] = useState(0)
    const [currentBrandStatus, setCurrentBrandStatus] = useState("all")

    return (
        <div className="flex w-screen h-screen p-2 bg-white space-x-2">
            <div className="w-[325px] bg-[#080808] h-full rounded-2xl p-3">
                <div className="flex items-center space-x-2 mb-5">
                    <SiBlueprint color='white' size={36} />
                    <div className="flex flex-col flex-1">
                        <span className="text-gray-500 text-xs">Team</span>
                        <h1 className="text-white text-md">Sales Manager</h1>
                    </div>
                    <BsChevronExpand color='gray' size={18} />
                    <RiMenuFoldLine color='gray' size={18} />
                </div>
                <ul className='text-gray-400'>
                    {menuData.map((data, i) => (
                        <li key={i} className="cursor-pointer transition-all ease-in-out duration-150 hover:scale-105 p-3  hover:bg-gray-600 rounded">
                            <div className="flex items-center space-x-3">
                                <data.icon color="gray" />
                                <span className="">{data.name}</span>
                            </div>

                        </li>
                    ))}
                    <ul className='pt-5 ml-5 relative'>
                        <li className='before:w-5 before:border-gray-500 before:left-3 before:top-0 before:rounded-bl-md before:h-8 before:absolute before:border-l before:border-b pl-10 '>Log Out</li>
                    </ul>
                </ul>
            </div>
            <div className="flex-1  rounded-2xl w-full h-full flex items-center justify-center">
                <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-30 z-10"></div>
                <div className="w-10/12  bg-white rounded-2xl z-20 ">
                    <div className="flex items-center justify-between p-7">
                        <span className='font-semibold'>Brands</span>
                        <FaTimes />
                    </div>
                    <div className="mt-3 border-b w-full px-7 flex items-center justify-between">
                        <ul className='flex items-center'>
                            {tabs.map((tab, tabIndex) => (
                                <li key={tabIndex} onClick={() => { setCurrentTab(tabIndex); setCurrentBrandStatus(tab.status) }} className={`cursor-pointer transition-all ease-in-out duration-200 border-b-2 ${tabIndex === currentTab ? "border-black" : "border-white"} hover:border-black p-3`}>{tab.name}</li>

                            ))}

                        </ul>
                        <div class="relative mx-auto text-gray-600">
                            <input class=" bg-white h-10 px-5 pr-16 rounded-lg text-xs outline-none"
                                type="search" name="search" placeholder="Search a brand, brandID" />
                            <button type="submit" class="absolute right-0 -top-2 mt-5 mr-4">
                                <BsSearch />
                            </button>
                        </div>
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
                        {[...Array(100)].map((_, index) => (
                            <div key={index} className="flex w-[125px] h-[150px] rounded-2xl border flex-col items-center justify-center mb-3 mr-3">
                                <div className={`flex items-center justify-center bg-gray-400 rounded-full w-[50px] aspect-square`}>
                                </div>
                                <span className='mt-3 text-sm'>___</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </div >

    )
}

export default Dev