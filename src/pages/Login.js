import { signInWithEmailAndPassword } from '@firebase/auth'
import axios from 'axios'
import React, { useCallback, useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../core/AuthProvider'
import { auth } from '../core/base'
import { IoLanguage, IoCloseCircleSharp, IoAddCircleSharp } from 'react-icons/io5'
import { MdDarkMode } from 'react-icons/md'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsTwitter } from 'react-icons/bs'

const Login = ({ history }) => {

    const navigate = useNavigate()

    const [recentLogins, setRecentLogins] = useState([
        {
            pfp: "https://64.media.tumblr.com/ca95838f356e1ca56c3465739f67f823/3ebced64476d0d28-18/s540x810/3de38feb9391fd3731bebc0a8d1c1e9d382f0efa.jpg",
            displayName: "Abdoulaye Dia"
        },
        {
            pfp: "https://i.pinimg.com/564x/1c/04/2d/1c042d3202695ae2b8eb1fa96eb174fb.jpg",
            displayName: "Pascal Zhou"
        },
        {
            pfp: "https://www.turbo.fr/sites/default/files/slideshow/slides/2021-12/61c44b01afaca.jpg",
            displayName: "Yann HABIE"
        }
    ])

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


                <div className=" w-[70%] h-full mx-auto">
                    <div className="">
                        <span>Recent logins</span>
                        <div className="flex items-center space-x-3">
                            {recentLogins.map((user, i) => (
                                <div className="cursor-pointer hover:scale-105 transition-all duration-150 hover:bg-gray-100 relative rounded-xl bg-white flex space-y-2 flex-col items-center w-[115px] aspect-square">
                                    <div className="absolute top-2 left-1 cursor-pointer hover:scale-110">
                                        <IoCloseCircleSharp color='#EC5A46' />
                                    </div>
                                    <div className="absolute top-0 right-1 cursor-pointer hover:scale-110">
                                        <BiDotsVerticalRounded color='black' />
                                    </div>
                                    <img className='rounded-full h-1/2 mt-2 aspect-square' src={user.pfp} alt="" />
                                    <span className='text-gray-500 text-xs'>{user.displayName}</span>
                                </div>
                            ))}
                            <div className="cursor-pointer hover:scale-105 transition-all duration-150 hover:bg-[#ee453c] relative rounded-xl bg-[#EC5A46] flex space-y-2 flex-col items-center w-[115px] aspect-square">
                                <div className="relative rounded-full overflow-hidden">
                                    <IoAddCircleSharp size={67} color='#FE9384' className='z-10' />
                                </div>
                                <span className='text-white text-xs font-semibold'>Add an account</span>
                            </div>
                        </div>

                    </div>
                    <div class="relative flex py-5 items-center">
                        <div class="flex-grow border-t border-gray-400"></div>
                        <span class="flex-shrink mx-4 text-gray-400">OR</span>
                        <div class="flex-grow border-t border-gray-400"></div>
                    </div>
                    <div className="w-full bg-white rounded-2xl h-[60%] py-8 flex flex-col items-center">
                        <form onSubmit={handleLogin} className='w-[60%]  flex flex-col items-center'>
                            <div className="flex items-center justify-around space-x-14 mb-5">
                                <div className="flex flex-col">
                                    <input className='border border-gray-300 rounded-md py-1 px-2 w-[225px]' type="email" name="email" id="email" placeholder='Email' />
                                </div>
                                <div className="flex flex-col">
                                    <input className='border border-gray-300 rounded-md py-1 px-2 w-[225px]' type="password" name="password" id="password" placeholder='Password' />
                                </div>
                            </div>
                            <div class="flex items-start mb-6 px-5 w-full justify-around">
                                <div class="flex items-center h-5">
                                    <input id="terms" type="checkbox" value="" class="w-6 h-6 mr-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                    <div className="">
                                        <label for="terms" class="ml-2 text-sm font-medium text-gray-500">Remember for 30 days</label>
                                        <p href="#" class="text-blue-600 hover:underline dark:text-blue-500 text-xs">(your profile will appear on the recent logins)</p>
                                    </div>
                                </div>
                                <div className="">
                                    <a className='underline ' href="#">Forgot password</a>
                                </div>
                            </div>
                            <div className="mt-5 flex flex-col items-center space-y-4 w-1/2">
                                <button className='bg-[#053730] text-white w-full h-[40px] rounded-md' type="submit">Sign In</button>
                                <button className='bg-[#EC5A46] text-white w-full h-[40px] rounded-md' type="submit">Create New Account</button>
                            </div>
                            <div class="relative flex mt-2 items-center w-[50%]">
                                <div class="flex-grow border-t border-gray-400"></div>
                                <span class="flex-shrink mx-4 text-gray-400">OR</span>
                                <div class="flex-grow border-t border-gray-400"></div>
                            </div>

                            <div class="relative flex justify-between mt-2 items-center w-[25%]">
                                <FcGoogle size={32} />
                                <BsFacebook size={32} color='#1977F1' />
                                <BsTwitter size={32} color='#1DA1F1' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login