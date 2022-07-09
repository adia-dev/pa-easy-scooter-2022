import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import MenOnScooter from "../../assets/images/men_on_scooter_01.png"

const Sign = () => {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <h1 className='font-bold text-3xl my-7'>Easy Scooter makes it easy to rent Scooters for you</h1>
            <p className='text-center '>Cupcake danish tiramisu powder soda ginger cake. Dessert carrot</p>
            <p className='text-center '>Cake tartsweet marzipan for fruitcake.</p>

            <div className="flex items-center space-x-10 w-[80vw]  my-5">
                <div className="bg-blue-100 rounded-2xl pl-8  w-[80vw] h-[50vh] flex justify-center items-center">
                    <div className='space-y-5'>
                        <h3 className='font-semibold text-2xl'>Engagement at scale</h3>
                        <p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae numquam laudantium accusantium illo quia magnam, eos ullam quibusdam, dignissimos at totam, sed ipsum ex.</p>
                        <div className="flex items-center space-x-2 font-semibold">
                            <span>Learn more</span>
                            <FaArrowRight />
                        </div>
                    </div>
                    <img className='h-full py-8 ml-3' src={MenOnScooter} alt="" />
                </div>
                <div className="bg-red-100 rounded-2xl p-8  w-[80vw] h-[50vh] flex justify-center items-center">
                    <div className='space-y-5'>
                        <h3 className='font-semibold text-2xl'>Engagement at scale</h3>
                        <p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae numquam laudantium accusantium illo quia magnam, eos ullam quibusdam, dignissimos at totam, sed ipsum ex.</p>
                        <div className="flex items-center space-x-2 font-semibold">
                            <span>Learn more</span>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sign