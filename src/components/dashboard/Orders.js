import { BsFillCaretDownFill, BsFillQuestionCircleFill } from 'react-icons/bs';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import { IoMdDownload } from 'react-icons/io';


const Orders = () => {
    return (
        <div className='w-full'>
            <div className="flex justify-between items-center my-10">
                <div className="flex items-center space-x-2">
                    <h1 className='text-2xl font-bold'>Orders</h1>
                    <BsFillQuestionCircleFill color='gray' />
                </div>
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