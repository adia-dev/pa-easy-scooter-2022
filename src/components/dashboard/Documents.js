import { BsFillCaretDownFill, BsFillQuestionCircleFill } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';


const Documents = () => {
    return (
        <div className='w-full'>
            <div className="flex justify-between items-center my-10">
                <div className="flex items-center space-x-2">
                    <h1 className='text-2xl font-bold'>Documents</h1>
                    <BsFillQuestionCircleFill color='gray' />
                </div>
            </div>


            <div className="flex items-center justify-around mt-7 space-x-3">
                <select class="border  rounded-md p-2 select select-bordered w-full max-w-xs">
                    <option disabled selected>All Categories</option>
                    <option>Scooters</option>
                    <option>Accessories</option>
                </select>
                <select class="border  rounded-md p-2 select select-bordered w-full max-w-xs">
                    <option disabled selected>Document Type</option>
                    <option>Bill</option>
                    <option>Analytics</option>
                    <option>...</option>
                </select>
                <select class="border  rounded-md p-2 select select-bordered w-full max-w-xs">
                    <option disabled selected>Document Format</option>
                    <option>PDF</option>
                    <option>Word</option>
                    <option>Excel</option>
                </select>
                <select class="border  rounded-md p-2 select select-bordered w-full max-w-xs">
                    <option disabled selected>Date</option>
                </select>
                <select class="border  rounded-md p-2 select select-bordered w-full max-w-xs">
                    <option disabled selected>Status</option>
                </select>
            </div>

            <div className="w-full h-[250px] flex-col bg-gray-50 mt-5 rounded-xl border-2 border-dashed flex items-center justify-center cursor-pointer mb-5">
                <CgFileDocument size={32} color="gray" />
                <p className='text-gray-400'>Drop your documents here, or select </p>
                <p className="text-blue-600 font-semibold cursor-pointer">click to browse</p>
            </div>

            <div class="flex flex-col">
                <div class="overflow-x-auto ">
                    <div class="inline-block w-full align-middle">
                        <div class="overflow-hidden ">
                            <table class="min-w-full divdide-y divide-gray-200 table-fixed ">
                                <thead class=" ">
                                    <tr>
                                        <th scope="col" class="p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-all" type="checkbox" class="w-4 h-4 bg-gray-100 rounded border-gray-300  focus:ring-2  " />
                                                <label for="checkbox-all" class="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                            Document Name
                                        </th>
                                        <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                            Document Type
                                        </th>
                                        <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                            Document Format
                                        </th>
                                        <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                            Date
                                        </th>
                                        <th scope="col" class="py-3 text-xs font-medium tracking-wider text-left uppercase ">
                                            Status
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
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">RECAP_Sales_20220531</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Analytics</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap "><span className='flex items-center justify-center text-green-800 bg-green-100 w-fit px-2 py-1 text-xs rounded-full'>Excel</span></td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">31/05/2022 08:02</td>
                                        <td class="py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <div class="dark:text-blue-500 ">
                                                <span className='flex items-center justify-center text-red-800 bg-red-100 w-fit px-2 py-1 text-xs rounded-full'>New</span>
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
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">ORDER_2131cds-31381nf-31f31bef</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">Bill</td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap "><span className='flex items-center justify-center text-violet-800 bg-violet-100 w-fit px-2 py-1 text-xs rounded-full'>PDF</span></td>
                                        <td class="py-4 text-sm font-medium text-gray-400 whitespace-nowrap ">16/05/2022 13:14</td>
                                        <td class="py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <div class="dark:text-blue-500 ">
                                                <span className='flex items-center justify-center text-green-800 bg-green-100 w-fit px-2 py-1 text-xs rounded-full'>Delivered</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-between items-center p-3 bg-gray-50 rounded-lg">
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

export default Documents