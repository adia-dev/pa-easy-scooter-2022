import React, { useState } from 'react'
import { GrHomeRounded } from 'react-icons/gr'
import { menuData } from '../../data/dashboardMenu.js';

const DashboardLeftMenu = ({ currentMenu, setCurrentMenu }) => {


  const selectMenu = (index) => {
    setCurrentMenu(index)
  }

  return (
    <div className=''>

      <ul>
        {menuData.map((data, i) => (
          <li onClick={() => selectMenu(i)} key={i} className={`p-3 transition-all ease-in-out duration-200 rounded-xl cursor-pointer hover:bg-gray-50 flex items-center space-x-3 py-4 hover:brightness-90 ${i === currentMenu ? "text-violet-800 font-semibold" : ""}`}>
            <data.icon color='gray' size={24} />
            <span>{data.name}</span>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default DashboardLeftMenu