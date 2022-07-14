import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { SiMetrodeparis } from 'react-icons/si'
const BookOption = ({ address, setShowPickupPointModal, setCurrentPickupPoint, panTo, pickupPoint }) => {
    return (
        <div className="border  px-3 my-3 py-4 rounded-md w-full">
            <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center space-x-1">
                    <div className="bg-green-500 h-2 w-5 rounded-md"></div>
                    <div className="bg-green-500 h-2 w-5 rounded-md"></div>
                    <div className="bg-gray-100 h-2 w-5 rounded-md"></div>
                </div>
                <span className='font-light text-xs'>Medium availability</span>
            </div>
            <span className='font-semibold'>{pickupPoint.city}</span>
            <div className="flex text-xs font-light my-1 items-center space-x-2 text-gray-500">
                <HiOutlineLocationMarker />
                <span>{pickupPoint.name}</span>
            </div>
            <div className="flex items-center flex-wrap mt-4">
                {

                }
                <div className="rounded-full bg-gray-100 flex items-center space-x-2 text-gray-600 text-xs py-1 px-2 mr-3 mb-2">
                    <div className="w-2 aspect-square bg-blue-600 rounded-full"></div>
                    <span>Disabled parking space</span>
                </div>
                <div className="rounded-full bg-gray-100 flex items-center space-x-2 text-gray-600 text-xs py-1 px-2 mr-3 mb-2">
                    <div className="w-2 aspect-square bg-orange-200 rounded-full"></div>
                    <span>Electric car charging station</span>
                </div>
                <div className="rounded-full bg-gray-100 flex items-center space-x-2 text-gray-600 text-xs py-1 px-2 mr-3 mb-2">
                    <div className="w-2 aspect-square bg-purple-400 rounded-full"></div>
                    <span>Park & Ride</span>
                </div>
            </div>
            <hr className='my-2' />
            <div className='flex items-center text-xs text-gray-400'>Near: &nbsp; <span className='text-black font-semibold'><SiMetrodeparis /></span> &nbsp; <span className='font-semibold text-black'>M1</span>&nbsp;line & lines &nbsp; <span className='font-semibold text-black'>J</span>, &nbsp; <span className='font-semibold text-black'>L</span> &nbsp;et&nbsp; <span className='font-semibold text-black'>M</span></div>
            <hr className='my-2' />
            <div className="flex items-cemter space-x-3">
                <button onClick={() => { panTo({ lat: pickupPoint.lat, lng: pickupPoint.lng }); setShowPickupPointModal(true); setCurrentPickupPoint(pickupPoint) }} className='bg-blue-500 p-2 rounded-md text-white text-sm'>Book a scooter</button>
                {/* <button className='bg-orange-500 p-2 rounded-md text-white text-sm'>Check the scooters models</button> */}
            </div>
        </div>
    )
}

export default BookOption
