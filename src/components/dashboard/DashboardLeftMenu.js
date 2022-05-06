import React, { useState } from 'react'

import { FiChevronDown } from 'react-icons/fi';

import { menuData } from '../../data/dashboardMenu.js';

const DashboardLeftMenu = () => {

    const [currentTab, setCurrentTab] = useState("users")

    return (
        <div className='h-screen w-[20%] bg-gray-100 p-5 space-y-4 fixed left-0 top-0'>
            <div className="flex space-x-3 items-center bg-white px-3 py-2 rounded-xl">
                <img className='h-[40px] aspect-square rounded-full' src="https://64.media.tumblr.com/ca95838f356e1ca56c3465739f67f823/3ebced64476d0d28-18/s540x810/3de38feb9391fd3731bebc0a8d1c1e9d382f0efa.jpg" alt="" />
                <div className="text-xs flex flex-col flex-1">
                    <span className='font-semibold'>Admin 1</span>
                    <span className='text-gray-500 whitespace-nowrap'>support@ez-scooter.com</span>
                </div>
                <FiChevronDown className='hover:scale-150 transition-all duration-200 cursor-pointer' />
            </div>

            {menuData.map((data, i) => (
                <div key={"menu-group-" + i.toString()} className="">
                    {!!data.label && (

                        <div className="relative flex mt-2 items-center w-2/3 mx-auto">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="flex-shrink mx-4 text-gray-400">{data.label}</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>

                    )}

                    {data.menus.map((menu, j) => (
                        <div key={"menu-" + j.toString()} className="">
                            <div className={` text-gray-500 ${currentTab == menu.id && "bg-gray-300 font-semibold text-black"} flex items-center space-x-5 transition-all duration-200 ease-in-out hover:bg-white cursor-pointer py-2 px-3 rounded-md`}>
                                <menu.icon size={24} color='gray' />
                                <span className=''>{menu.name}</span>
                            </div>
                        </div>
                    ))}

                </div>
            ))}



        </div>
    )
}

export default DashboardLeftMenu