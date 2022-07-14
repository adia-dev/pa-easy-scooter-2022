import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaInfoCircle } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ScooterInfoModal from './ScooterInfoModal';


const PickupPointModal = ({ setShowPickupPointModal, pickupPoint }) => {

    const timeOptions = [];
    const [count, setCount] = useState(0)
    const [showScooterInfoModal, setShowScooterInfoModal] = useState(false)
    const [pickupPointScooters, setPickupPointScooters] = useState([])
    const [currentScooter, setCurrentScooter] = useState(null)

    for (let i = 0; i < 24; i++) {
        timeOptions.push(`${i.toString().padStart(2, '0')}:00`)
        timeOptions.push(`${i.toString().padStart(2, '0')}:30`)
    }

    useEffect(() => {

        console.log(pickupPoint)

        const fetchPickupPointScooters = async () => {
            const result = await axios.get(`http://localhost:5500/api/v2/pickups/${pickupPoint.pp_id}/scooters`)
            const scooters = result.data.scooters;

            console.log(scooters);

            setPickupPointScooters(scooters)
        }

        fetchPickupPointScooters()

    }, [pickupPoint])



    return (
        <div className='w-screen h-screen bg-[#00000088] z-[51] fixed top-0 left-0 flex items-center justify-center'>
            {showScooterInfoModal && <ScooterInfoModal setShowScooterInfoModal={setShowScooterInfoModal} />}
            <div className="bg-gray-100 p-5 w-[90%] h-[90%] rounded-xl flex flex-col">
                <div className="w-full bg-white bg-full p-1 flex items-center space-x-3 rounded-md mb-3">
                    <div onClick={() => setShowPickupPointModal(false)} className=" cursor-pointer hover:brightness-95 transition active:scale-95 bg-blue-500 text-white p-4 flex items-center justify-center rounded-lg"><FaArrowLeft /></div>
                    <div className='flex-[0.95]'>
                        <p className='font-semibold'>{pickupPoint.name}</p>
                        <div className='flex items-center space-x-1 text-gray-400 text-xs'>
                            <HiOutlineLocationMarker />
                            <span>
                                {pickupPoint.name}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="date" name="booking_date_time" id="" className='border-gray-300 text-gray-500 text-sm rounded-lg ' />
                        <select name="time" className='border-gray-300 text-gray-500 text-sm rounded-lg '>
                            {timeOptions.map((time, i) => <option key={i} value={time} >{time}</option>)}
                        </select>
                    </div>
                </div>
                {/* <div className="bg-white p-5 rounded-xl mb-3">

                    <div className="flex items-center">
                        {
                            pickupPointScooters.map((scooter, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div onClick={() => setCount(2)} className='w-[35px] aspect-[1/1.35] mr-[2px] cursor-pointer hover:scale-105 transition duration-150 bg-green-400  flex items-center justify-center text-white text-xs font-semibold'>
                                        <span>2</span>
                                    </div>
                                    <span className='text-sm font-semibold'>{scooter.row + scooter.col}</span>
                                </div>
                            ))
                        }
                    </div>
                </div> */}
                <div className="bg-white p-3 rounded-xl flex-1 flex-col flex">
                    <p className='p-1 font-semibold uppercase'>Scooters</p>
                    <div className="flex-1 flex items-center space-x-3 w-full">

                        {
                            pickupPointScooters.map((scooter, i) => (
                                <div key={i} className="h-full bg-gray-100 border overflow-hidden border-gray-200 w-[250px] rounded-md flex flex-col relative">
                                    <div onClick={() => setShowScooterInfoModal(true)} className="absolute right-2 top-2 text-gray-500 cursor-pointer hover:scale-110 transition active:scale-100">
                                        <FaInfoCircle />
                                    </div>
                                    <img className='flex-1 object-contain w-full' src={scooter.image_url} alt="" />
                                    <Link to="/v2/booking/checkout" className='p-3 bg-blue-500 text-white flex justify-center items-center cursor-pointer font-semibold uppercase'>Book</Link>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PickupPointModal