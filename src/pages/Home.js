import { t } from 'i18next'
import { useContext, useState } from 'react'
import { BsBatteryCharging, BsLightningCharge, BsMap, BsSpeedometer2 } from 'react-icons/bs'
import { GiFullMotorcycleHelmet } from 'react-icons/gi'
import { IoFlash } from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom'
import scooters from '../assets/dummy data/scooters'
import Header from '../components/Header'
import { AuthContext } from '../core/AuthProvider'

const Home = () => {

    const { currentUser } = useContext(AuthContext)
    const params = useParams()
    const [displayScooter, SetdisplayScooter] = useState(scooters[1])


    // if (!currentUser) {
    //     // console.log(currentUser)
    //     return <Navigate to="/login" test={true} />
    // }

    console.log(currentUser)

    return (
        <div className='w-full h-full'>
            <Header />
            <div className=" relative w-screen h-[550px] flex justify-center items-center mt-10 ">
                <div className="absolute w-[35%] aspect-square rounded-full bg-orange-100 overflow-hidden  flex justify-center items-center">
                    <div className="w-full bg-blue-300 h-3/4 absolute bottom-0 left-0 animate-pulse"></div>
                    <div className="relative">
                        <span className='absolute w-full h-full flex justify-center items-center text-white font-bold '>90%</span>
                        <IoFlash className=' animate-pulse' color="black" size={150} />
                    </div>
                </div>
                <img src={'https://i01.appmifile.com/webfile/globalimg/songxinyu/product/mi-electric-scooter-3.png'} className='object-contain w-full h-full z-10' />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-10 z-20">

                    <div className="w-[400px] h-full space-y-4 flex flex-col justify-around p-5">
                        <div className="flex items-center space-x-2">
                            <span className="cursor-pointer uppercase w-fit px-3 py-1 rounded-full text-xs bg-green-100 text-green-800 ">{t`Electric Scooter`}</span>
                            <span className="cursor-pointer uppercase w-fit px-3 py-1 rounded-full text-xs bg-green-100 text-green-800 ">{displayScooter.brand}</span>
                            <span className="cursor-pointer uppercase w-fit px-3 py-1 rounded-full text-xs bg-green-100 text-green-800 ">{t`Discount`}</span>
                        </div>
                        <h2 className="font-semibold text-3xl text-[#c43f2d91]">{t`Louez votre scooter éléctrique facilement avec Easy Scooter`}</h2>
                        <p>
                            Xiaomi Mi 3
                        </p>
                        {/* <div className="flex items-center space-x-3 text-gray-600">
                            <BsFillPlayFill />
                            <span>
                                Play 3D Demo
                            </span>
                        </div> */}

                        <Link to="/booking" className='w-full text-center py-3 bg-green-500 text-white hover:brightness-90 uppercase font-semibold cursor-pointer hover:scale-95 transition-all duration-150'>{t`Rent a scooter`}</Link>
                    </div>

                    <div className="w-[400px] h-full space-y-5  px-5  justify-center flex flex-col items-center">
                        <div className="flex items-center justify-between  space-x-5">
                            <BsSpeedometer2 size={40} width={40} />
                            <div className="w-[100px]">
                                <p className='text-gray-400 font-light uppercase'>{t`Max Speed`}</p>
                                <p className='text-orange-500 font-semibold'>30 km/h</p>
                            </div>

                        </div>
                        <div className="flex items-center justify-between space-x-5">
                            <BsMap size={40} />
                            <div className="w-[100px]">
                                <p className='text-gray-400 font-light uppercase'>{t`Range`}</p>
                                <p className='text-orange-500 font-semibold'>100 km</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between space-x-5">
                            <BsBatteryCharging size={40} />
                            <div className="w-[100px]">
                                <p className='text-gray-400 font-light uppercase'>{t`Battery`}</p>
                                <p className='text-orange-500 font-semibold'>2.5 kWh</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between space-x-5">
                            <BsLightningCharge size={40} color="orange" />
                            <div className="w-[100px]">
                                <p className='text-gray-400 font-light uppercase'>{t`Charging`}</p>
                                <p className='text-orange-500 font-semibold'>600 W (4 h)</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between space-x-5">
                            <GiFullMotorcycleHelmet size={40} />
                            <div className="w-[100px]">
                                <p className='text-gray-400 font-light uppercase'>{t`Equipment Provided`} </p>
                                <p className='text-orange-500 font-semibold whitespace-nowrap'>{t`Helmet, Gloves`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home