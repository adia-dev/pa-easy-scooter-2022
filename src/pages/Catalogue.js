import axios from "axios"
import { t } from "i18next"
import { useContext, useEffect, useState } from "react"
import { BiCaretDown, BiCart, BiFilter, BiTrashAlt } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { FaTimesCircle } from "react-icons/fa"
import Cart from "../components/catalogue/Cart"
import ScooterItem from "../components/catalogue/ScooterItem"
import Header from "../components/Header"
import MinMaxInput from "../components/MinMaxInput"
import { AuthContext } from "../core/AuthProvider"
import Stripe from "./Stripe"

const Catalogue = () => {

    const { currentUser } = useContext(AuthContext)


    const [checkoutOpened, setCheckoutOpened] = useState(false)
    const [scooters, setScooters] = useState([])
    const [accessories, setAccessories] = useState([])

    const [filters, Setfilters] = useState({
        brands: [],
        sizes: []
    })

    const [cartItems, setCartItems] = useState([])
    const [openedModal, setOpenedModal] = useState({
        cart: false
    })

    useEffect(() => {



        const fetchScooters = async () => {
            const data = await axios.get(process.env.REACT_APP_GOOGLE_BASE_URL + `scooters`)
            setScooters(data.data)
            console.log(data.data)
            // setLoading(false)
        }

        const fetchAccessories = async () => {
            const data = await axios.get(process.env.REACT_APP_GOOGLE_BASE_URL + `accessories`)
            setAccessories(data.data)
            // console.log(data.data)
            // setLoading(false)
        }

        const fetchCartItems = async () => {
            const data = await axios.get(process.env.REACT_APP_GOOGLE_BASE_URL + `cart/${currentUser.data.id}`)
            setCartItems(data.data)
            console.log(data.data)
            // setLoading(false)
        }

        fetchScooters();
        fetchAccessories();
        fetchCartItems();

    }, [])

    const brands = [
        "Brandless",
        "Xiaomi",
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

    const applyFilters = (item) => {
        filters.brands.includes(item.brand)
    }

    const handleBrandsFilter = (brand, e) => {
        // console.log(e.target.checked)
        // console.log(filters.brands)
        // if (e.target.checked) {
        //     Setfilters({ ...sizes, brands: filters.brands.push(brand) })
        // } else {
        //     const filteredBrands = filters.brands.filter((b) => b != brand)
        //     console.log(filteredBrands);
        //     Setfilters({ ...sizes, brands: filteredBrands })
        // }
    }

    const handleRemoveBrandFilter = (brand) => {
        // Setfilters({ ...sizes, brands: filters.brands.filter((b) => b != brand) })
    }

    const handleRemoveSizeFilter = (size) => {
        // Setfilters({ ...brands, sizes: filters.sizes.filter((s) => s != size) })
    }

    const toggleModalState = (modal) => {
        switch (modal) {
            case "cart":
                setOpenedModal({ ...openedModal, cart: !openedModal.cart })
                break;

            default:
                break;
        }
    }

    return (
        <div className="w-full h-full overflow-x-hidden">

            {checkoutOpened && cartItems.length > 0 && <Stripe setCheckoutOpened={setCheckoutOpened} cartItems={cartItems} user={currentUser} amount={cartItems.length > 1 ? cartItems.map((item) => item.price_per_units).reduce((acc, current) => acc + current) : cartItems[0].price_per_units + Math.min(cartItems.length * 8, 24.99)} />}

            <Header />
            <div className="p-10 w-full h-full">
                <div className="flex items-center justify-between w-full border-black border-b-2">
                    <h1 className="text-3xl font-bold mb-2">Catalogue</h1>
                    <div className="relative">
                        <BiCart className="cursor-pointer" onClick={() => toggleModalState("cart")} size={32} />
                        <div className="absolute  rounded-full p-2 w-4 h-4 font-semibold flex justify-center items-center -top-2 right-1 bg-red-500 animate-pulse text-white text-xs ">{cartItems.length}</div>
                        {
                            openedModal.cart && <Cart setCheckoutOpened={setCheckoutOpened} items={cartItems} />
                        }
                    </div>
                </div>

                <div className="flex w-full h-full space-x-2 ">
                    <div className="w-3/12 h-full py-2  space-y-4 ">
                        <MinMaxInput min={2500} max={7500} width={300} />
                        <div className="">
                            <p className="font-semibold">{t("Brand")}</p>
                            <div className="overflow-y-auto max-h-[200px]">
                                <div className="flex flex-col p-2">
                                    {
                                        brands.map((brand, i) => (
                                            <label key={`brand-${i}`} className="inline-flex items-center mt-3">
                                                <input type="checkbox" onClick={(e) => handleBrandsFilter(brand, e)} className="form-checkbox h-5 w-5 text-pink-600" /><span className="ml-2 text-gray-700">{brand}</span>
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <p className="font-semibold">{t("Sizes")}</p>
                            <div className="overflow-y-auto max-h-[200px]">
                                <div className="flex flex-col p-2">
                                    {
                                        sizes.map((size, i) => (
                                            <label key={`size-${i}`} className="inline-flex items-center mt-3">
                                                <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" /><span className="ml-2 text-gray-700">{size}</span>
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
                            <button className="uppercase px-3 py-4 flex-1 bg-red-600 text-white hover:bg-red-800 font-semibold">{t("Apply filters")}</button>
                            <div className="cursor-pointer hover:bg-gray-100 active:scale-100 active:bg-gray-200 hover:text-black hover:scale-110 transition-all duration-200 ease-in-out flex items-center justify-center w-10 aspect-square text-gray-400 bg-gray-50 border-gray-200 border rounded-full">
                                <BiTrashAlt />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 h-full p-3 ">
                        <div className="flex items-center justify-around space-x-4">
                            <div className="relative text-gray-600 focus-within:text-gray-400 flex-1">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline text-gray-400">
                                        <BsSearch />
                                    </button>
                                </span>
                                <input type="search" name="search" className="w-full py-2 text-sm text-white border bg-gray-50 border-gray-100 placeholder:text-gray-400 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder={t("Search for a scooter, helmet, gloves...")} autoComplete="off" />
                            </div>
                            <div className="flex items-center space-x-0 flex-[0.30] group cursor-pointer">
                                <div className="border-l border-y text-gray-400 p-3 bg-gray-50 rounded-l-md group-hover:bg-gray-100">
                                    <BiFilter />
                                </div>
                                <div className="rounded-l-none rounded-r-md border flex-1 text-gray-400 py-2 px-3 group-hover:bg-gray-100 bg-gray-50 flex items-center justify-between">
                                    <span>{t("Popular")}</span>
                                    <BiCaretDown />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 mt-3">
                            {
                                filters.brands.map((brand, i) => (
                                    <div key={"filter-brand-" + i} className="flex items-center space-x-3 text-gray-600 px-2 justify-center text-sm bg-gray-200 rounded-full">
                                        <span>{brand}</span>
                                        <FaTimesCircle onClick={() => handleRemoveBrandFilter(brand)} />
                                    </div>
                                ))
                            }
                            {
                                filters.sizes.map((size, i) => (
                                    <div key={"filter-size-" + i} className="flex items-center space-x-3 text-purple-600 px-2 justify-center text-sm bg-purple-200 rounded-full">
                                        <span>{size}</span>
                                        <FaTimesCircle onClick={() => handleRemoveSizeFilter(size)} />
                                    </div>
                                ))
                            }
                        </div>


                        <div className="flex items-center flex-wrap p-5">
                            {
                                scooters.filter((scooter) => (true || filters.brands === [] || filters.brands.includes(scooter.brand))).map((scooter, i) => (
                                    <ScooterItem key={"scooter-item-" + i} cartId={1} scooter={scooter} scooters={scooters} cartItems={cartItems} setCartItems={setCartItems} />
                                ))
                            }
                            {
                                accessories.filter((scooter) => (true || filters.brands === [] || filters.brands.includes(scooter.brand))).map((scooter, i) => (
                                    <ScooterItem key={"scooter-item-" + i} cartId={1} scooter={scooter} scooters={accessories} cartItems={cartItems} setCartItems={setCartItems} />
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Catalogue