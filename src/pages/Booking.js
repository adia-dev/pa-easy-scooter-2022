
import { useEffect, useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import scooters from '../assets/dummy data/scooters';

const Booking = () => {

    const [scooter, setScooter] = useState(null)

    const { id } = useParams();

    useEffect(() => {

        setScooter(scooters.find((scooter) => scooter.id == id))

    }, [id])


    const allSizes = [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL"]

    if (!scooter) {
        return <div className="">No Scooter Found</div>
    }

    console.log(scooter)


    return (
        <div className="w-screen h-screen overflow-hidden  flex">
            <div className="h-full w-[55%] relative">
                <div className="p-5 text-2xl font-[600] lowercase tracking-tighter relative z-30">Easy Scooter</div>
                <div className=" w-full flex items-center justify-center absolute top-0 left-0 p-20">
                    <img src={scooter.image} className='object-cover w-full h-full z-10' />
                </div>
            </div>
            <div className="w-8/12 mx-auto bg-white h-full flex-1">
                <div className=" space-x-2 text-sm m-5 p-3 flex items-center justify-center border-b">
                    <span className='transition-all ease-in-out duration-200 hover:text-black text-black text-xl font-semibold hover:text-xl hover:font-semibold cursor-pointer'>1.Scooter and Options</span>
                    <span className='transition-all ease-in-out duration-200 hover:text-black text-gray-500 hover:font-semibold hover:text-xl cursor-pointer'>2.Accessories</span>
                    <span className='transition-all ease-in-out duration-200 hover:text-black text-gray-500 hover:font-semibold hover:text-xl cursor-pointer'>3.Services</span>
                    <span className='transition-all ease-in-out duration-200 hover:text-black text-gray-500 hover:font-semibold hover:text-xl cursor-pointer'>4.Checkout</span>
                </div>

                <div className="w-10/12 mx-auto py-5">
                    <p className='font-bold mb-5'>Select Your Electric Scooter</p>
                    <div className="mb-3 relative w-full h-[100px] border-2 border-black rounded-md p-1 flex items-center">
                        <img src={scooter.image} className='object-contain h-full z-10 w-fit aspect-square bg-[#D2D1CC] rounded-md' />
                        <div className="ml-3">
                            <span className='font-semibold'>{scooter.name}</span>
                            <p className='text-xs text-gray-700'>{scooter.name + " " + "description"}</p>
                        </div>
                        <div className="absolute top-3 right-3 flex items-end font-semibold">
                            <span className='text-xs text-gray font-light italic'>à partir de </span>&nbsp;{scooter.price} €
                        </div>
                    </div>
                    {/* <div className="mb-3 relative w-full h-[100px] border-2 border-gray-200 rounded-md p-1 flex items-center">
                        <img src={scooter_side} className='object-contain h-full z-10 w-fit aspect-square bg-[#D2D1CC] rounded-md' />
                        <div className="ml-3">
                            <span className='font-semibold'>Xiaomi Scooter EVO SE</span>
                            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores a culpa quia dolores sed! A?</p>
                        </div>
                        <div className="absolute top-3 right-3 flex items-end font-semibold">
                            <span className='text-xs text-gray font-light italic'>à partir de </span>&nbsp;45,49$
                        </div>
                    </div>
                    <div className="mb-3 relative w-full h-[100px] border-2 border-gray-200 rounded-md p-1 flex items-center">
                        <img src={scooter_side} className='object-contain h-full z-10 w-fit aspect-square bg-[#D2D1CC] rounded-md' />
                        <div className="ml-3">
                            <span className='font-semibold'>Xiaomi Scooter EVO SE XXL</span>
                            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores a culpa quia dolores sed! A?</p>
                        </div>
                        <div className="absolute top-3 right-3 flex items-end font-semibold">
                            <span className='text-xs text-gray font-light italic'>à partir de </span>&nbsp;65,49$
                        </div>
                    </div> */}

                    <div className=" mt-10">
                        <p className='font-semibold text-xl'>Taille du scooter</p>
                        <span className='text-xs text-gray-500'>Votre taille n'est pas disponible ? <span className='text-blue-500 hover:underline cursor-pointer font-semibold'>contacter le support pour avoir des informations quant à la disponibilité de ce produit</span> ou <span className='font-semibold text-green-500 hover:underline cursor-pointer'>rechercher des scooters disponible en taille L</span></span>
                    </div>
                    <div className="flex items-center space-x-3 mt-2">
                        {
                            allSizes.map((size, index) => {

                                const className = scooter.availableSizes.includes(size) ?
                                    "hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer hover:border-gray-800 hover:text-gray-800 active:scale-100 active:bg-gray-800 active:text-white w-10 aspect-square rounded-full border flex items-center justify-center text-xs"
                                    :
                                    "hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer hover:border-red-200 hover:text-gray-800 active:scale-100 active:bg-red-200 cursor-not-allowed active:text-red-800 w-10 text-gray-300 border-gray-300 line-through aspect-square rounded-full border flex items-center justify-center text-xs"

                                return (
                                    <div className={className}>
                                        {size}
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="w-full flex items-center justify-end">
                        <button className='border p-2 rounded-md bg-black text-white flex items-center space-x-3'>
                            <span>
                                Accessories
                            </span>
                            <span><BiRightArrow /></span></button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Booking