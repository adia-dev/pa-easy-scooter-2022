import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const ScooterInfoModal = ({ setShowScooterInfoModal }) => {


    return (
        <div className='w-screen h-screen bg-[#00000088] z-[100] fixed top-0 left-0 flex items-center justify-center'>
            <div className="bg-gray-100 p-5 w-[90%] h-[90%] rounded-xl flex flex-col">
                <div className="w-full bg-white bg-full p-1 flex items-center space-x-3 rounded-md mb-3">
                    <div onClick={() => setShowScooterInfoModal(false)} className=" cursor-pointer hover:brightness-95 transition active:scale-95 bg-blue-500 text-white p-4 flex items-center justify-center rounded-lg"><FaArrowLeft /></div>
                    <div className='flex-[0.95]'>
                        <p className='font-semibold'>{"scooter.name"}</p>
                        <div className='flex items-center space-x-1 text-gray-400 text-xs'>
                            <HiOutlineLocationMarker />
                            <span>
                                {"scooter.name"}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex-1 w-full rounded-lg flex items-center">
                    <img className='object-contain' src="https://www.xiaomitoday.com/wp-content/uploads/2020/10/Xiaomi-Mi-Electric-Scooter-25-km-h-Black-758544-Gal-1-Detail.jpg" alt="" />

                </div>
            </div>
        </div>
    )
}

export default ScooterInfoModal