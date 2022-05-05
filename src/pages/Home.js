import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import Header from '../components/Header'
import { AuthContext } from '../core/AuthProvider'
import { auth } from '../core/base'
import scooter_01 from '../assets/images/scooter_01.png'
import { BsBatteryCharging, BsFillPlayFill, BsLightningCharge, BsMap, BsSpeedometer2 } from 'react-icons/bs'
import { GiFullMotorcycleHelmet } from 'react-icons/gi'
import { useParams } from 'react-router-dom'

const Home = () => {

    const { currentUser } = useContext(AuthContext)
    const params = useParams()


    // if (!currentUser) {
    //     return <Navigate to="/login" test={true} />
    // }

    console.log(params)

    const handleLogOut = () => {
        auth.signOut();
    }


    return (
        <div className='w-screen h-screen bg-[#F1EAE4]'>
            <Header />
            <div className=" relative w-screen h-[550px] flex justify-center items-center mt-10 ">
                <div className="absolute w-[35%] aspect-square rounded-full bg-orange-200"></div>
                <img src={scooter_01} className='object-contain w-full h-full z-10' />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-10 z-20">

                    <div className="w-[400px] h-full space-y-4 flex flex-col justify-around p-5">
                        <div className="flex items-center space-x-2">
                            <span className="cursor-pointer uppercase w-fit px-3 py-1 rounded-full text-xs bg-green-100 text-green-800 ">Electric Scooter</span>
                            <span className="cursor-pointer uppercase w-fit px-3 py-1 rounded-full text-xs bg-green-100 text-green-800 ">Xiaomi</span>
                            <span className="cursor-pointer uppercase w-fit px-3 py-1 rounded-full text-xs bg-green-100 text-green-800 ">Promo</span>
                        </div>
                        <h2 className="font-semibold text-3xl text-[#c43f2d91]">Louez votre scooter élétrique facilement avec Easy Scooter</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Distinctio exercitationem sit itaque praesentium possimus odio similique accusantium atque omnis obcaecati.
                        </p>
                        <div className="flex items-center space-x-3 text-gray-600">
                            <BsFillPlayFill />
                            <span>
                                Play 3D Demo
                            </span>
                        </div>

                        <button className='w-full py-3 bg-green-500 text-white hover:brightness-90 uppercase font-semibold cursor-pointer hover:scale-95 transition-all duration-150'>Louer ce Scooter</button>
                    </div>

                    <div className="w-[400px] h-full space-y-5  px-5  justify-center flex flex-col items-center">
                        <div className="flex items-center justify-between  space-x-5">
                            <BsSpeedometer2 size={40} width={40} />
                            <div className="w-[100px]">
                                <p className='text-gray-400 font-light uppercase'>Max Speed</p>
                                <p className='text-orange-500 font-semibold'>30 km/h</p>
                            </div>

                        </div>
                        <div className="flex items-center justify-between space-x-5">
                            <BsMap size={40} />
                            <div className="w-[100px]">
                                <p className='text-gray-400 font-light uppercase'>Range</p>
                                <p className='text-orange-500 font-semibold'>100 km</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between space-x-5">
                            <BsBatteryCharging size={40} />
                            <div className="w-[100px]">
                                <p className='text-gray-400 font-light uppercase'>Battery</p>
                                <p className='text-orange-500 font-semibold'>2.5 kWh</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between space-x-5">
                            <BsLightningCharge size={40} color="orange" />
                            <div className="w-[100px]">
                                <p className='text-gray-400 font-light uppercase'>Charging</p>
                                <p className='text-orange-500 font-semibold'>600 W (4 h)</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between space-x-5">
                            <GiFullMotorcycleHelmet size={40} />
                            <div className="w-[100px]">
                                <p className='text-gray-400 font-light uppercase'>Equipment Provided </p>
                                <p className='text-orange-500 font-semibold whitespace-nowrap'>Helmet, Gloves</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        </div>
    )
}

export default Home