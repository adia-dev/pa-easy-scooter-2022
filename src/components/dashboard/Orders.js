import React from 'react'
import { BsChevronDown, BsFilePdf, BsFillCaretDownFill, BsFillQuestionCircleFill, BsFilter, BsSearch, BsThreeDots } from 'react-icons/bs'
import { MdOutlineAttachFile } from 'react-icons/md'
import { IoMdDownload } from 'react-icons/io';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';


const Orders = () => {
    return (
        <div className='w-full'>
            <div className="flex justify-between items-center mb-10">
                <div className="flex items-center space-x-2">
                    <h1 className='text-2xl font-bold'>Orders</h1>
                    <BsFillQuestionCircleFill color='gray' />
                </div>
                <div className="flex items-center space-x-3">
                    <button className='p-2 border rounded-md'>Open Documentation</button>
                    <button className='p-2 border rounded-md border-violet-800 text-violet-800'>Setup Details</button>
                    <button className='p-2 border rounded-md'><BsThreeDots /></button>
                </div>
            </div>
            <p className='text-gray-400 font-light text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, alias atque fuga temporibus, ad repellat distinctio dignissimos pariatur totam est nesciunt! Veniam sunt odio exercitationem.</p>
            <div className='border-b w-full leading-10 mt-10'>
                <span className='text-lg'>
                    Overview
                </span>
            </div>

            <div className="flex items-center justify-around mt-5   w-full">
                <div class="relative text-gray-600 focus-within:text-gray-400 w-8/12">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                            <BsSearch />
                        </button>
                    </span>
                    <input type="search" name="q" class="w-full py-2 text-sm text-white border rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search for order ID, customer, order status..." autocomplete="off" />
                </div>
                <button className=' text-gray-400 hover:text-white hover:bg-black hover:border-gray-500 transition-all duration-200 ease-in-out flex items-center space-x-3 border px-2 py-1 rounded-md'>
                    <BsFilter />
                    <span>Filters</span>
                </button>
                <button className='text-gray-400 hover:text-white hover:bg-black hover:border-gray-500 transition-all duration-200 ease-in-out flex items-center space-x-3 border px-2 py-1 rounded-md'>
                    <MdOutlineAttachFile />
                    <span>Attachment</span>
                </button>
                <button className='text-gray-400 hover:text-white hover:bg-black hover:border-gray-500 transition-all duration-200 ease-in-out flex items-center space-x-3 border px-2 py-1 rounded-md'>
                    <BsFilePdf />
                    <span>Export</span>
                </button>
            </div>

            <div class="flex flex-col h-[400px] mt-10">
                <div class="overflow-x-auto ">
                    <div class="inline-block w-full align-middle">
                        <div class="overflow-hidden ">
                            <table class="overflow-y-scroll min-w-full divdide-y divide-gray-200 table-fixed ">
                                <thead class=" ">
                                    <tr>
                                        <th scope="col" class="p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-all" type="checkbox" class="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2  " />
                                                <label for="checkbox-all" class="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                            Order ID
                                        </th>
                                        <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                            Customer
                                        </th>
                                        <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                            Order
                                        </th>
                                        <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                            Delivery Date
                                        </th>
                                        <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                            Pricing
                                        </th>
                                        <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                            Status
                                        </th>
                                        <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                            Payment
                                        </th>
                                        <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">

                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white cursor-pointer divide-gray-200  ">
                                    <tr class="hover:bg-gray-100 ">
                                        <td class="p-4 w-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2" />
                                                <label for="checkbox-table-1" class="sr-only" >checkbox</label>
                                            </div>
                                        </td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">AKN125082F</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Abdoulaye Dia</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Electric Scooter Xiao...</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">31/05/2022 08:02</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">249 €</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap "><span className='flex items-center justify-center text-green-800 bg-green-100 w-fit px-2 py-1 text-xs rounded-full'>Completed</span></td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Credit Card</td>
                                        <td class="py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <div class="dark:text-blue-500 hover:scale-110 transition-all duration-200 ease-in-out">
                                                <IoMdDownload size={20} />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-100 ">
                                        <td class="p-4 w-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2" />
                                                <label for="checkbox-table-1" class="sr-only" >checkbox</label>
                                            </div>
                                        </td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">TTS43H089</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Abdoulaye Dia</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">FREE 5km FOR NEW MEMBERS</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">31/05/2022 08:02</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">0 €</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap "><span className='flex items-center justify-center text-red-800 bg-red-100 w-fit px-2 py-1 text-xs rounded-full'>Canceled</span></td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Coupon Code</td>
                                        <td class="py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <div class="dark:text-blue-500 hover:scale-110 transition-all duration-200 ease-in-out">
                                                <IoMdDownload size={20} />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-100 ">
                                        <td class="p-4 w-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2" />
                                                <label for="checkbox-table-1" class="sr-only" >checkbox</label>
                                            </div>
                                        </td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">SRT3122DEK</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Pascal Zhou</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Premium Membershi...</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">06/06/2022 2:22</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">49 €</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">
                                            <span className='flex items-center justify-center text-blue-800 bg-blue-100 w-fit px-2 py-1 text-xs rounded-full'>Being Processed</span>
                                        </td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Bank Transfer</td>
                                        <td class="py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <div class="dark:text-blue-500 hover:scale-110 transition-all duration-200 ease-in-out">
                                                <IoMdDownload size={20} />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-100 ">
                                        <td class="p-4 w-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2" />
                                                <label for="checkbox-table-1" class="sr-only" >checkbox</label>
                                            </div>
                                        </td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">TML303421F</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Yann HABIE</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Xiaomi Helmet with Glov...</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">17/05/2022 18:02</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">249 €</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">
                                            <span className='flex items-center justify-center text-orange-800 bg-orange-100 w-fit px-2 py-1 text-xs rounded-full'>Refund</span>
                                        </td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Credit Card</td>
                                        <td class="py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <div class="dark:text-blue-500 hover:scale-110 transition-all duration-200 ease-in-out">
                                                <IoMdDownload size={20} />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-between items-center p-3 bg-gray-50 rounded-lg ">
                <span className='text-gray-400 text-xs font-semibold'>1-5 17 pages</span>
                <div className="flex items-center justify-around space-x-3">
                    <span className='text-gray-400 text-xs font-semibold'>The page you' re on</span>
                    <div className="border flex items-center justify-center py-1 pl-2 pr-1 space-x-1 rounded-lg text-xs">
                        <span>1</span>
                        <BsFillCaretDownFill color='gray' />
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="border p-1 rounded-xl">
                            <HiArrowSmLeft color='gray' />
                        </div>
                        <div className="border p-1 rounded-xl cursor-pointer">
                            <HiArrowSmRight />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Orders