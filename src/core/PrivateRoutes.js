import React, { useContext } from 'react'
import { Navigate, Outlet, Route } from 'react-router'
import { AuthContext } from './AuthProvider'

const PrivateRoutes = ({ redirect = "/login", ...rest }) => {

    const { currentUser } = useContext(AuthContext)


    return (
        true || !!currentUser ?
            (
                <Outlet {...rest} />
            )
            :
            (
                <Navigate to={redirect} />
            )
    )
}

export default PrivateRoutes