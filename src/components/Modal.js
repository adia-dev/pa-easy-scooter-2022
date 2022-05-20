import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const Modal = ({ children, title }) => {
    return (
        <div className='absolute z-10'>
            <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-30 z-20 pointer-events-none"></div>
            <div className="w-10/12 bg-white rounded-2xl z-30">
                <div className="flex items-center justify-between p-7">
                    <span className='font-semibold'>{title}</span>
                    <Link to={"/dev"}>
                        <FaTimes />
                    </Link>
                </div>
                {children}
            </div>
        </div>

    )
}

export default Modal