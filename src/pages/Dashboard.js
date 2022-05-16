import axios from 'axios'
import React, { StrictMode, useEffect, useState } from 'react'
import AddUser from '../components/dashboard/AddUser'
import DashboardLeftMenu from '../components/dashboard/DashboardLeftMenu'
import Documents from '../components/dashboard/Documents'

const Dashboard = () => {

    const [currentMenu, setCurrentMenu] = useState(3)

    const getMenuComponent = (index) => {
        switch (index) {
            case 0:
                return <AddUser />
                break;
            case 1:
                return <AddUser />
                break;
            case 2:
                return <AddUser />
                break;
            case 3:
                return <AddUser />
                break;
            case 4:
                return <AddUser />
                break;
            case 7:
                return <Documents />
                break;

            default:
                return <AddUser />
                break;
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