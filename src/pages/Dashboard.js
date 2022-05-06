import React from 'react'
import DashboardLeftMenu from '../components/dashboard/DashboardLeftMenu'
import DashboardUsers from '../components/dashboard/DashboardUsers'

const Dashboard = () => {
    return (
        <div className='w-screen h-screen flex'>

            <DashboardLeftMenu />
            <DashboardUsers />

        </div>
    )
}

export default Dashboard