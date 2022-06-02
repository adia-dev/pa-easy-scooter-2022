import axios from "axios";
import React, { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { auth } from './base';

export const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user)

            const fetchUser = async () => {
                const data = await axios.get(`http://localhost:5500/api/v2/users/firebase/${user.uid}`)
                setCurrentUser({ ...user, data: data.data })
                setLoading(false)
            }

            !!user ?
                fetchUser() :
                setLoading(false)


        })
    }, [])


    if (loading) return <div className='w-screen h-screen bg-white flex  text-3xl text-black'>
        {/* <video className='h-full object-contain' preload='true' src='https://cdn.dribbble.com/users/20271/screenshots/16821869/media/dab0697ac32bac2c6909f5a7bb299818.mp4' autoPlay={true} muted={true} loop={true}></video> */}
        <div className="absolute w-full h-full flex flex-col justify-center items-center">
            <p>LOADING</p>
            <AiOutlineLoading3Quarters className='animate-spin' />
        </div>
    </div>

    return (
        <AuthContext.Provider
            value={{ currentUser, setCurrentUser }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider