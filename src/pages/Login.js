import { signInWithEmailAndPassword } from '@firebase/auth'
import axios from 'axios'
import React, { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../core/AuthProvider'
import { auth } from '../core/base'
import { IoLanguage } from 'react-icons/io5'
import { MdDarkMode } from 'react-icons/md'

const Login = ({ history }) => {

    const navigate = useNavigate()

    const handleLogin = useCallback(async event => {
        event.preventDefault()

        const { email, password } = event.target.elements

        try {
            await signInWithEmailAndPassword(auth, email.value, password.value)
        } catch (error) {
            console.error(error)
        }
    }, [history])


    const { currentUser, setCurrentUser } = useContext(AuthContext)

    if (currentUser) {

        const bodyFormData = new FormData();
        bodyFormData.append('email', currentUser.email)

        axios({
            method: "post",
            url: "http://localhost:8888/api/users",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (res) {
                //handle success
                const user = Object.assign({}, { firebaseUser: currentUser }, res.data.user)
                setCurrentUser(user)

            })
            .catch(function (error) {
                //handle error

                console.log(error);
            });

    }

    return (
        <div className='w-screen h-screen bg-[#F1EAE4]'>
            <div className="right-5 top-10 absolute bg-white rounded-xl flex flex-col items-center overflow-hidden">
                <div className="cursor-pointer hover:bg-gray-200 flex justify-center items-center w-[50px] aspect-square">
                    <IoLanguage />
                </div>
                <div className="w-full h-[1px] bg-gray-200"></div>
                <div className="cursor-pointer active:bg-gray-600 duration-500 transition-all hover:bg-gray-200 group flex justify-center items-center w-[50px] aspect-square">
                    <MdDarkMode className='group-hover:rotate-180 group-active:scale-90 group-active:text-yellow-300 transition-all duration-150' />
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-center">
                <div className="flex flex-col items-center py-3">
                    <h1 className='text-[5rem]'>Welcome Back</h1>
                    <p className='text-gray-600'>Join the world's largest community</p>
                </div>


                <div className="flex items-center w-[70%] mx-auto">
                    <div className="">
                        <span>Recent logins</span>
                        <div className="flex items-center space-x-3">
                            <div className="rounded-xl bg-white flex-col items-center w-[100px] aspect-square">
                                <img className='' src="https://64.media.tumblr.com/ca95838f356e1ca56c3465739f67f823/3ebced64476d0d28-18/s540x810/3de38feb9391fd3731bebc0a8d1c1e9d382f0efa.jpg" alt="" />
                            </div>
                            <div className="rounded-xl bg-white flex-col items-center w-[100px] aspect-square">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login