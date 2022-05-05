import React, { useCallback } from 'react'
import { auth } from '../core/base'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = ({ history }) => {

    const handleSignup = useCallback(async event => {
        event.preventDefault()

        const { email, password } = event.target.elements

        try {
            console.log(auth)
            await createUserWithEmailAndPassword(auth, email.value, password.value)
            history.push("/")
        } catch (error) {
            console.error(error)
        }
    }, [history])

    return (
        <div>
            <form onSubmit={handleSignup}>
                <div className="">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Email' />
                </div>
                <div className="">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Password' />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Signup