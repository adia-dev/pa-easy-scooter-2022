import { BiCaretDown, BiFilter, BiTrashAlt } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { FaTimesCircle } from "react-icons/fa"
import Header from "../components/Header"
import MinMaxInput from "../components/MinMaxInput"

const Catalogue = () => {

    const brands = [
        "Xiamo",
        "Unagi",
        "Segway",
        "Glion Dolly",
        "Razor"
    ]

    const sizes = [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
    ]

    return (
        <div className="w-full h-full overflow-x-hidden">
            <Header />
            <div className="p-10 w-full h-full">
                <h1 className="text-3xl font-bold border-b border-black leading-[3rem] mb-5">Catalogue</h1>

                <div className="flex w-full h-full space-x-2 ">
                    <div className="w-3/12 h-full py-2  space-y-4 ">
                        <MinMaxInput min={2500} max={7500} width={300} />
                        <div className="">
                            <p className="font-semibold">Brand</p>
                            <div className="overflow-y-auto max-h-[200px]">
                                <div class="flex flex-col p-2">
                                    {
                                        brands.map((brand, i) => (
                                            <label key={`brand-${i}`} class="inline-flex items-center mt-3">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-pink-600" /><span class="ml-2 text-gray-700">{brand}</span>
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <p className="font-semibold">Sizes</p>
                            <div className="overflow-y-auto max-h-[200px]">
                                <div class="flex flex-col p-2">
                                    {
                                        sizes.map((size, i) => (
                                            <label key={`size-${i}`} class="inline-flex items-center mt-3">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600" /><span class="ml-2 text-gray-700">{size}</span>
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <p className="font-semibold">Dimensions</p>
                            <div className="flex items-center space-x-3 w-full">

                                <div className="flex flex-col items-center">
                                    <span>x</span>
                                    <input className="w-[100px]  focus:outline-none outline-none bg-transparent border-t-0 border-x-0 border-b rounded-md border-gray-400" type="number" name="dimX" id="dimX" placeholder="x (cm)" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <span>y</span>
                                    <input className="w-[100px] focus:outline-none outline-none border-t-0 border-x-0 border-b rounded-md border-gray-400 bg-transparent" type="number" name="dimY" id="dimY" placeholder="y (cm)" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <span>z</span>
                                    <input className="w-[100px] focus:outline-none outline-none border-t-0 border-x-0 border-b rounded-md border-gray-400 bg-transparent" type="number" name="dimZ" id="dimZ" placeholder="z (cm)" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around items-center space-x-3  pb-10">
                            <button className="uppercase px-3 py-4 flex-1 bg-red-600 text-white hover:bg-red-800 font-semibold">Apply filters</button>
                            <div className="cursor-pointer hover:bg-gray-100 active:scale-100 active:bg-gray-200 hover:text-black hover:scale-110 transition-all duration-200 ease-in-out flex items-center justify-center w-10 aspect-square text-gray-400 bg-gray-50 border-gray-200 border rounded-full">
                                <BiTrashAlt />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 h-full p-3 ">
                        <div className="flex items-center justify-around space-x-4">
                            <div class="relative text-gray-600 focus-within:text-gray-400 flex-1">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="submit" class="p-1 focus:outline-none focus:shadow-outline text-gray-400">
                                        <BsSearch />
                                    </button>
                                </span>
                                <input type="search" name="search" class="w-full py-2 text-sm text-white border bg-gray-50 border-gray-100 placeholder:text-gray-400 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search for a scooter, helmet, gloves..." autocomplete="off" />
                            </div>
                            <div className="flex items-center space-x-0 flex-[0.30] group cursor-pointer">
                                <div className="border-l border-y text-gray-400 p-3 bg-gray-50 rounded-l-md group-hover:bg-gray-100">
                                    <BiFilter />
                                </div>
                                <div className="rounded-l-none rounded-r-md border flex-1 text-gray-400 py-2 px-3 group-hover:bg-gray-100 bg-gray-50 flex items-center justify-between">
                                    <span>Popular</span>
                                    <BiCaretDown />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 mt-3">
                            <div className="flex items-center space-x-3 text-gray-600 px-2 justify-center text-sm bg-gray-200 rounded-full">
                                <span>Xiaomi</span>
                                <FaTimesCircle />
                            </div>
                            <div className="flex items-center space-x-3 text-gray-600 px-2 justify-center text-sm bg-gray-200 rounded-full">
                                <span>Segway</span>
                                <FaTimesCircle />
                            </div>
                        </div>

                        <div className="flex items-center flex-wrap p-5">
                            <div className="border rounded-md w-[275px] h-[350px] bg-red-200"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Catalogue