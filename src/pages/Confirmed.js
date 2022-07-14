import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import QRCode from "react-qr-code"
import { useParams } from 'react-router-dom'
import HeaderLogo from '../components/HeaderLogo'
import { AuthContext } from '../core/AuthProvider'

const Confirmed = ({ scooterId }) => {

    const { id } = useParams()

    const [scooter, setScooter] = useState(null)

    const { currentUser } = useContext(AuthContext)

    useEffect(() => {

        const fetchScooter = async () => {
            const scooter = await axios.get(process.env.REACT_APP_GOOGLE_BASE_URL + "scooters/pickup/" + id)
            console.log(scooter);
            setScooter(scooter.data)
        }

        fetchScooter()

    }, [])



    return (
        <div className='w-screen h-screen overflow-x-hidden bg-gray-100 '>
            <header className='h-[80px]  relative w-screen flex items-center px-5 text-black'>
                <HeaderLogo />
            </header>

            <div className="px-5 w-full flex justify-center mb-5">
                <div className="flex items-center space-x-6">
                    <div className='flex items-center space-x-1 '>
                        <span className='bg-green-500 text-white px-5 py-3 rounded-xl cursor-pointer flex items-center'>1</span>
                        <hr className='w-6' />
                        <span>Paiement</span>
                    </div>
                    <div className='flex items-center space-x-1 '>
                        <span className='bg-blue-500 text-white px-5 py-3 rounded-xl cursor-pointer flex items-center'>2</span>
                        <hr className='w-6' />
                        <span>Confirmation</span>
                    </div>
                </div>
            </div>

            <div className="w-[95%] mx-auto  p-5 flex items-start space-x-5 relative">
                <div className="flex-0.65 mx-auto bg-white h-screen rounded-lg overflow-hidden p-1 flex flex-col">

                    <div className="flex-1 max-h-[100px] bg-green-100 rounded-sm p-3 flex items-center space-x-3">
                        <div className="bg-white flex h-full rounded-xl aspect-square justify-center items-center">
                            <BiCheck color="green" size={48} />
                        </div>
                        <div>
                            <p className='font-semibold text-blue-800'>Your booking is confirmed</p>
                            <span className='text-xs text-gray-400 -leading-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, recusandae! Nobis omnis sapiente voluptates ratione repudiandae aut eveniet soluta dolor.</span>
                        </div>

                    </div>
                    <div className='p-5 flex flex-col flex-1'>
                        <div>
                            <p className='text-xl font-semibold text-blue-800'>Booking Details</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="space-y-3">
                                <span className='font-semibold text-xs text-gray-500'>User</span>
                                <p className='text-blue-700 font-semibold'>Abdoulaye Dia</p>
                            </div>
                            <div className="space-y-3">
                                <span className='font-semibold text-xs text-gray-500'>From</span>
                                <p className='text-blue-700 font-semibold'>Ven, 22 Jui 2022</p>
                            </div>
                            <div className="space-y-3">
                                <span className='font-semibold text-xs text-gray-500'>To</span>
                                <p className='text-blue-700 font-semibold'>Sam, 23 Jui 2022</p>

                            </div>
                        </div>
                        <div className="flex justify-between items-center my-10">
                            <div className="space-y-3">
                                <span className='font-semibold text-xs text-gray-500'>Scooter</span>
                                <p className='text-blue-700 font-semibold'>{scooter?.model_name}</p>
                            </div>
                            <div className="space-y-3">
                                <span className='font-semibold text-xs text-gray-500'>Adress</span>
                                <p className='text-blue-700 font-semibold'>{scooter?.address_name}</p>
                            </div>
                            <div className="space-y-3">
                                <span className='font-semibold text-xs text-gray-500'>Email</span>
                                <p className='text-blue-700 font-semibold'>abdoudu78130@gmail.com</p>

                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className='font-semibold text-xs text-gray-500'>Booking Number</span>
                            <p className='text-blue-700 font-semibold'>{scooter?.id}</p>
                        </div>
                        <div className='flex items-center justify-center bg-gray-100 rounded-lg flex-1 mt-5 border flex-col'>
                            <span className='font-semibold text-xl text-blue-800'>Ticket</span>
                            <span>Veuillez présenter ce code à l'ecran de la trotinette</span>
                            <div className="flex items-cetner space-x-5">
                                <QRCode value={`${process.env.REACT_APP_GOOGLE_BASE_URL}unlock/${currentUser.data.id}/${scooter?.id}`} />
                                <div className='flex flex-col space-y-5 py-5'>
                                    <span className='font-semibold text-gray-400 text-sm'>SCAN THIS</span>
                                    <span className='font-semibold text-blue-800 '>{scooter?.model_name}</span>
                                    <span className='text-sm font-light text-gray-500 '>3 Allée Jacques Tati</span>

                                    <button className='font-semibold flex px-4 py-2 border border-purple-700 text-purple-700 rounded-xl hover:bg-purple-700 hover:text-white'>Download the ticket</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="flex-[0.33] bg-white min-h-[550px] max-h-[650px] rounded-lg p-3 flex flex-col">
                    <p className='font-semibold text-blue-800 pb-2'>Reservation summary</p>
                    <div className="p-3 border border-gray-200 rounded-lg">
                        item picture
                    </div>
                    <p className='font-semibold py-2'>Your price summary</p>
                    <button className='bg-blue-600 text-white w-full py-3 rounded-lg self-end'>Request to Book</button>

                </div> */}
            </div>

        </div>
    )
}

export default Confirmed