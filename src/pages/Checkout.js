import React from 'react'
import HeaderLogo from '../components/HeaderLogo'

const Checkout = () => {
    return (
        <div className='w-screen h-screen overflow-x-hidden'>
            <header className='h-[80px] relative w-screen flex items-center px-5 text-black'>
                <HeaderLogo />
            </header>

            <div className="px-5 w-full flex justify-center mb-5">
                <div className="flex items-center space-x-3">
                    <div className='flex items-center space-x-3 p-3 bg-blue-200 rounded-xl cursor-pointer'>
                        <span>1</span>
                        <span>-</span>
                        <span>Details</span>
                    </div>
                    <div className='flex items-center space-x-3 p-3 bg-blue-50 rounded-xl cursor-pointer'>
                        <span>2</span>
                        <span>-</span>
                        <span>Payment</span>
                    </div>
                    <div className='flex items-center space-x-3 p-3 bg-blue-50 rounded-xl cursor-pointer'>
                        <span>3</span>
                        <span>-</span>
                        <span>Confirmation</span>
                    </div>
                </div>
            </div>

            <div className="w-[95%] mx-auto bg-gray-200  p-5 flex items-start space-x-5 relative">
                <div className="flex-[0.66] bg-white h-screen rounded-lg"></div>
                <div className="flex-[0.33] bg-white min-h-[550px] max-h-[650px] rounded-lg p-3 flex flex-col">
                    <p className='font-semibold'>Reservation summary</p>
                    <div className="p-3 border border-gray-200 rounded-lg">
                        item picture
                    </div>
                    <p className='font-semibold py-2'>Your price summary</p>
                    <button className='bg-blue-600 text-white w-full py-3 rounded-lg self-end'>Request to Book</button>

                </div>
            </div>

        </div>
    )
}

export default Checkout