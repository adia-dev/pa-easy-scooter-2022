import React, { useContext } from 'react'
import { Navigate, Outlet, Route } from 'react-router'
import { AuthContext } from './AuthProvider'

const PrivateRoutes = ({ redirect = "/login", admin, ...rest }) => {

    const { currentUser } = useContext(AuthContext)


    const canAccess = !!currentUser && (!admin || currentUser.isAdmin)

    return (
        true || canAccess ?
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