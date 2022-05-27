import { signInWithEmailAndPassword } from '@firebase/auth'
import axios from 'axios'
import { browserSessionPersistence, createUserWithEmailAndPassword, setPersistence } from "firebase/auth"
import { useCallback, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { IoLanguage } from 'react-icons/io5'
import { MdDarkMode, MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { AuthContext } from '../core/AuthProvider'
import { auth } from '../core/base'

const Login = ({ history }) => {

    const navigate = useNavigate()
    const { t, i18n } = useTranslation();

    const [languages, setLanguages] = useState([
        {
            value: "fr",
            label: "French",
            flag: "🇫🇷"
        },
        {
            value: "en",
            label: "English",
            flag: "🇺🇸"
        }
    ])
    const [openedModals, setOpenedModals] = useState({
        languages: false
    })

    const openModal = (modal) => {
        switch (modal) {
            case "languages":
                setOpenedModals({ ...openedModals, languages: !openedModals.languages })
                break;

            default:
                break;
        }
    }

    const [recentLogins, setRecentLogins] = useState([
        {
            pfp: "https://64.media.tumblr.com/ca95838f356e1ca56c3465739f67f823/3ebced64476d0d28-18/s540x810/3de38feb9391fd3731bebc0a8d1c1e9d382f0efa.jpg",
            displayName: "Abdoulaye Dia"
        },
        {
            pfp: "https://i1.sndcdn.com/avatars-Pjqz7m3i6m0ey3dt-C1i2vg-t500x500.jpg",
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

            await setPersistence(auth, browserSessionPersistence)

            await signInWithEmailAndPassword(auth, email.value, password.value)
            navigate("/")
        } catch (error) {
            console.error(error)
        }
    }, [history])

    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language)
        setOpenedModals({ ...openedModals, languages: false })
    }

    const handleSignup = useCallback(async event => {
        event.preventDefault()

        const { email, password } = event.target.elements
        try {

            const bodyFormData = new FormData(event.target);

            axios({
                method: "post",
                url: "http://localhost:8888/api/users?id=1",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(function (response) {
                    //handle success
                    console.log(response);
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });


            await createUserWithEmailAndPassword(auth, email.value, password.value);

            navigate("/login")

        } catch (error) {
            console.error(error)
        }
    }, [navigate])


    const { currentUser, setCurrentUser } = useContext(AuthContext)

    if (currentUser) {

        navigate("/")
        // const bodyFormData = new FormData();
        // bodyFormData.append('id', 1)

        // axios({
        //     method: "post",
        //     url: "http://localhost:8888/api/users",
        //     data: bodyFormData,
        //     headers: { "Content-Type": "multipart/form-data" },
        // })
        //     .then(function (res) {
        //         //handle success
        //         const user = Object.assign({}, { firebaseUser: currentUser }, res.data.user)
        //         setCurrentUser(user)
        //         navigate("/")
        //     })
        //     .catch(function (error) {
        //         //handle error

        //         console.log(error);
        //     });

    }

    return (
        <div className='w-screen h-screen bg-[#F1EAE4]'>

            <Link to="/" className="absolute p-5 bg-gray-800 rounded-full mx-3 my-10">
                <MdOutlineArrowBackIosNew color="white" size={24} />
            </Link>

            {
                openedModals.languages &&
                (
                    <div className="absolute w-[50px] right-10 top-20 z-20 bg-white rounded-xl shadow-md overflow-hidden">
                        {
                            languages.map((language, i) => (
                                <div key={language.value} onClick={() => handleChangeLanguage(language.value)} className="flex justify-center items-center h-[50px] border-b hover:bg-gray-50 cursor-pointer">{language.flag}</div>
                            ))
                        }
                    </div>
                )
            }
            <div className="right-5 top-10 absolute bg-white rounded-xl flex flex-col items-center overflow-hidden">
                <div onClick={() => openModal("languages")} className="relative cursor-pointer hover:bg-gray-200 flex justify-center items-center w-[50px] aspect-square">
                    <IoLanguage />
                </div>
                <div className="w-full h-[1px] bg-gray-200"></div>
                <div className="cursor-pointer active:bg-gray-600 duration-500 transition-all hover:bg-gray-200 group flex justify-center items-center w-[50px] aspect-square">
                    <MdDarkMode className='group-hover:rotate-180 group-active:scale-90 group-active:text-yellow-300 transition-all duration-150' />
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-center">
                <div className="flex flex-col items-center py-3">
                    <h1 className='text-[5rem]'>{t('Welcome Back !')}</h1>
                    <p className='text-gray-600'>{t('Join the newest electric scooter community')}</p>
                </div>


                <div className=" w-[70%] h-full mx-auto">
                    {/* <div className="">
                        <span>{t('Recent logins')}</span>
                        <div className="flex items-center space-x-3">
                            {recentLogins.map((user, i) => (
                                <div key={user.displayName + "_" + i.toString()} className="cursor-pointer hover:scale-105 transition-all duration-150 hover:bg-gray-100 relative rounded-xl bg-white flex space-y-2 flex-col items-center w-[115px] aspect-square">
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
                                <span className='text-white text-xs font-semibold'>{t('Add an account')}</span>
                            </div>
                        </div>

                    </div>
                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="flex-shrink mx-4 text-gray-400">{t('OR')}</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div> */}
                    <div className="w-full mt-16 bg-white rounded-2xl h-[60%] py-8 flex flex-col items-center">
                        <form onSubmit={handleSignup} className='w-[60%]  flex flex-col items-center'>
                            <div className="flex items-center justify-around space-x-14 mb-5">
                                <div className="flex flex-col">
                                    <input className='border border-gray-300 rounded-md py-1 px-2 w-[225px]' type="email" name="email" id="email" placeholder={t('Email')} required />
                                </div>
                                <div className="flex flex-col">
                                    <input className='border border-gray-300 rounded-md py-1 px-2 w-[225px]' type="password" name="password" id="password" placeholder={t('Password')} required />
                                </div>
                            </div>
                            <div className="flex items-start mb-6 px-5 w-full justify-around">
                                <div className="flex items-center h-5">
                                    <input id="terms" type="checkbox" value="" className="w-6 h-6 mr-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                    <div className="">
                                        <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-500">{t('Remember for 30 days')}</label>
                                        <p href="#" className="text-blue-600 hover:underline dark:text-blue-500 text-xs">({t('your profile will appear on the recent logins')})</p>
                                    </div>
                                </div>
                                <div className="">
                                    <a className='underline whitespace-nowrap' href="#">{t('Forgot password')}</a>
                                </div>
                            </div>
                            <div className="mt-5 flex flex-col items-center space-y-4 w-1/2">
                                {/* <button className='bg-[#053730] text-white w-full h-[40px] rounded-md' type="submit">{t('Sign In')}</button> */}
                                <button className='bg-[#EC5A46] text-white w-full h-[40px] rounded-md' type="submit">{t('Create New Account')}</button>
                            </div>
                            <div className="relative flex mt-2 items-center w-[50%]">
                                <div className="flex-grow border-t border-gray-400"></div>
                                <span className="flex-shrink mx-4 text-gray-400">{t('OR')}</span>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>

                            <div className="relative flex justify-between mt-2 items-center w-[25%]">
                                <FcGoogle className='cursor-pointer hover:brightness-95' size={32} />
                                <BsFacebook className='cursor-pointer hover:brightness-95' size={32} color='#1977F1' />
                                <BsTwitter className='cursor-pointer hover:brightness-95' size={32} color='#1DA1F1' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login