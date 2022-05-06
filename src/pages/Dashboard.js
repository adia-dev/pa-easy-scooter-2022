import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DashboardLeftMenu from '../components/dashboard/DashboardLeftMenu'
import DashboardUsers from '../components/dashboard/DashboardUsers'

const Dashboard = () => {

    const [users, setUsers] = useState(
        [
            {
                id: 1,
                username: "abdou_dia",
                firstname: "Abdoulaye",
                lastname: "Dia",
                displayName: "Abdoulaye Dia",
                role: "admin",
                bookings: [
                    {
                        name: "Xiaomi Electric Scooter - 2022"
                    }
                ]

            },
            {
                id: 2,
                username: "pascal_zhou",
                firstname: "Pascal",
                lastname: "Zhou",
                displayName: "Pascal Zhou",
                role: "admin",
                bookings: [
                    {
                        name: "Xiaomi Electric Scooter - 2022"
                    }
                ]

            },
            {
                id: 3,
                username: "yann_habie",
                firstname: "Yann",
                lastname: "HABIE",
                displayName: "Yann HABIE",
                role: "admin",
                bookings: [
                    {
                        name: "Xiaomi Electric Scooter - 2022"
                    }
                ]

            }
        ]
    )

    return (
        <div className='w-screen h-screen flex'>

            <DashboardLeftMenu />
            <DashboardUsers users={users} setUsers={setUsers} />

        </div>
    )
}

export default Dashboard