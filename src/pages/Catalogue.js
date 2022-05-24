import { BiTrashAlt } from "react-icons/bi"
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
                <h1 className="text-3xl font-bold border-b-2 border-black leading-[3rem]">Catalogue</h1>

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
                    <div className="flex-1 bg-red-400 h-full p-3 ">
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Catalogue