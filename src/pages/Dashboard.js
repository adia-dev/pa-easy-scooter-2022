import axios from 'axios'
import React, { StrictMode, useEffect, useState } from 'react'
import AddUser from '../components/dashboard/AddUser'
import DashboardLeftMenu from '../components/dashboard/DashboardLeftMenu'
import Documents from '../components/dashboard/Documents'
import Orders from '../components/dashboard/Orders'
import HeatMap from '../components/HeatMap'

const Dashboard = () => {

    const [currentMenu, setCurrentMenu] = useState(5)

    const getMenuComponent = (index) => {
        switch (index) {
            case 0:
                return <AddUser />
            case 1:
                return <AddUser />
            case 2:
                return <AddUser />
            case 3:
                return <AddUser />
            case 4:
                return <Orders />
            case 5:
                return <HeatMap />
            case 7:
                return <Documents />

            default:
                return <AddUser />
        }
    }

    return (
        <div className='w-screen h-screen flex overflow-y-hidden'>
            <div className="h-full w-2/12 shadow-lg">
                <DashboardLeftMenu currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
            </div>
            <div className="h-full w-10/12 p-5 overflow-y-scroll overflow-x-hidden">
                {
                    getMenuComponent(currentMenu)
                }
            </div>
        </div>
    )
}

export default Dashboard