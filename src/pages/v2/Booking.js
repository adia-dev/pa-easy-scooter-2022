import React from 'react'
import { GoQuestion } from 'react-icons/go'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { SiMetrodeparis } from 'react-icons/si'

const Booking = () => {
    return (
        <div className='w-screen h-screen p-8 flex flex-col'>
            <div className="flex items-center space-x-4 mb-5 w-full">
                <div className="space-y-1 w-full">
                    <p className='font-semibold'>Where: </p>
                    <input className='w-full rounded-md bg-gray-100  border-transparent' type="text" placeholder='Ou souhaitez vous récuperer votre scooter' />
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
                    <p>There are <span className='font-semibold'>3,541 parking lots</span> in <span className='font-semibold'>Paris</span>.</p>

                    <div className='h-full w-full p-3'>
                        <div className="border  px-3 py-4 rounded-md w-full">
                            <div className="flex items-center space-x-2 mb-2">
                                <div className="flex items-center space-x-1">
                                    <div className="bg-green-500 h-2 w-5 rounded-md"></div>
                                    <div className="bg-green-500 h-2 w-5 rounded-md"></div>
                                    <div className="bg-gray-100 h-2 w-5 rounded-md"></div>
                                </div>
                                <span className='font-light text-xs'>Medium availability</span>
                            </div>
                            <span className='font-semibold'>Colonial Parking</span>
                            <div className="flex text-xs font-light my-1 items-center space-x-2 text-gray-500">
                                <HiOutlineLocationMarker />
                                <span>701 9th St. NW. Wahington</span>
                            </div>
                            <div className="flex items-center flex-wrap mt-4">
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
                                <button className='bg-blue-500 p-2 rounded-md text-white text-sm'>Book a scooter</button>
                                <button className='bg-orange-500 p-2 rounded-md text-white text-sm'>Check the scooters models</button>
                            </div>
                        </div>
                        <div className="border my-3 px-3 py-4 rounded-md w-full">
                            <div className="flex items-center space-x-2 mb-2">
                                <div className="flex items-center space-x-1">
                                    <div className="bg-green-500 h-2 w-5 rounded-md"></div>
                                    <div className="bg-green-500 h-2 w-5 rounded-md"></div>
                                    <div className="bg-gray-100 h-2 w-5 rounded-md"></div>
                                </div>
                                <span className='font-light text-xs'>Medium availability</span>
                            </div>
                            <span className='font-semibold'>Colonial Parking</span>
                            <div className="flex text-xs font-light my-1 items-center space-x-2 text-gray-500">
                                <HiOutlineLocationMarker />
                                <span>701 9th St. NW. Wahington</span>
                            </div>
                            <div className="flex items-center flex-wrap mt-4">
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
                                <button className='bg-blue-500 p-2 rounded-md text-white text-sm'>Book a scooter</button>
                                <button className='bg-orange-500 p-2 rounded-md text-white text-sm'>Check the scooters models</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-xl border border-black">s</div>
            </div>
        </div>
    )
}

export default Booking