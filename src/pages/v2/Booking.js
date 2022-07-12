import { useLoadScript } from '@react-google-maps/api'
import React, { useEffect, useRef, useState } from 'react'
import { GoQuestion } from 'react-icons/go'
import BookOption from '../../components/BookOption'
import GoogleMapSearch from '../../components/GoogleMapSearch'
import Map from '../../components/Map'
import PickupPointModal from '../../components/PickupPointModal'

const libraries = ["places"]

const Booking = () => {

    const [pickupPoints, setPickupPoints] = useState([])
    const [showPickupPointModal, setShowPickupPointModal] = useState(false)
    const [currentPickupPoint, setCurrentPickupPoint] = useState(null)
    const google = window.google;


    useEffect(() => {


    }, [])


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    })

    const [showAvailableScooters, setShowAvailableScooters] = useState(false)

    const mapRef = useRef(null);

    const [target, setTarget] = useState(null)

    const toggleShowAvailableScooters = () => {
        // setShowAvailableScooters(!showAvailableScooters)
    }

    const panTo = (coords) => {
        mapRef.current?.panTo(coords)
    }

    return (
        <div className='w-screen h-screen relative p-8 flex flex-col'>
            {showPickupPointModal && <PickupPointModal pickupPoint={currentPickupPoint} setShowPickupPointModal={setShowPickupPointModal} />}

            <div className="flex items-center space-x-4 mb-5 w-full">
                <div className="space-y-1 w-full">
                    <p className='font-semibold'>Where: </p>
                    {isLoaded ? <GoogleMapSearch setTarget={(coords) => { setTarget(coords); panTo(coords) }} /> : <p>Is Loading...</p>}
                </div>
                <div className="space-y-1 w-full">
                    <div className='font-semibold text-white'>nothing</div>
                    <input className='w-full rounded-md bg-gray-100  border-transparent' type="text" placeholder='Street' />
                </div>
                <div className="space-y-1 w-full">
                    <p className='font-semibold'>When: </p>
                    <input className='w-full rounded-md bg-gray-100  border-transparent' type="text" placeholder='Jul 28' />
                </div>
                <div className="space-y-1 w-full">
                    <div className='font-semibold text-white'>nothing</div>
                    <input className='w-full rounded-md bg-gray-100  border-transparent' type="text" placeholder='7:30' />
                </div>
            </div>
            <div className="flex items-center space-x-5 text-xs">
                <div className="flex items-center space-x-2 text-gray-400">
                    <input type="checkbox" className='rounded-sm' name="" id="" />
                    <span className=' font-light'>Disabled parking space</span>
                    <GoQuestion />
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                    <input type="checkbox" className='rounded-sm' name="" id="" />
                    <span className=' font-light'>Electric car charging station</span>
                    <GoQuestion />
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                    <input type="checkbox" className='rounded-sm' name="" id="" />
                    <span className=' font-light'>Car longer than 3.5m</span>
                    <GoQuestion />
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                    <input type="checkbox" className='rounded-sm' name="" id="" />
                    <span className=' font-light'>Near metro station</span>
                    <GoQuestion />
                </div>
            </div>
            <div className="flex w-full  h-full mt-5">
                <div className="aspect-[1/1.25] flex flex-col items-center py-2">
                    <p>There are <span className='font-semibold'>{pickupPoints?.length} pickup spots</span> in <span className='font-semibold'>Lyon</span>.</p>

                    <div className='h-full w-full p-3 overflow-y-scroll'>
                        {
                            pickupPoints?.length > 0 && pickupPoints.map((pickupPoint, i) => (
                                <BookOption setCurrentPickupPoint={setCurrentPickupPoint} setShowPickupPointModal={setShowPickupPointModal} key={pickupPoint.id} panTo={panTo} pickupPoint={pickupPoint} />
                            ))
                        }
                    </div>
                </div>
                <div className="w-full relative flex items-center h-full rounded-xl border border-black overflow-hidden group">
                    <div onClick={toggleShowAvailableScooters} className={`w-full h-full absolute left-0 top-0 bg-blue-500 ${showAvailableScooters && "translate-x-[-100%]"} transition-all duration-200 ease-in-out`}>
                        <Map mapRef={mapRef} target={target} isLoaded={isLoaded} pickupPoints={pickupPoints} setPickupPoints={setPickupPoints} />
                    </div>
                    <div className={`w-full h-full bg-red-500 absolute left-0 top-0 translate-x-[100%] ${showAvailableScooters && "translate-x-[0%]"} transition-all duration-200 ease-in-out`}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking