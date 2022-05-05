import { signInWithEmailAndPassword } from '@firebase/auth'
import React, { useCallback, useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../core/AuthProvider'
import { auth } from '../core/base'

const Login = ({ history }) => {

    const handleLogin = useCallback(async event => {
        event.preventDefault()

        const { email, password } = event.target.elements

        try {
            console.log(auth)
            await signInWithEmailAndPassword(auth, email.value, password.value)
            history.push("/")
        } catch (error) {
            console.error(error)
        }
    }, [history])

    const { currentUser } = useContext(AuthContext)

    if (currentUser) {
        return <Navigate to="/" />
    }

    return (
        <div className='w-screen h-screen'>

        </div>
    )
}

export default Login