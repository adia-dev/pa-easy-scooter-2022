import React, { useEffect, useState } from 'react'
import { auth } from './base'

export const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser)


        setLoading(false)
    }, [])


    if (loading) return <p>Loading...</p>

    return (
        <AuthContext.Provider
            value={{ currentUser, setCurrentUser }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider