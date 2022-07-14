import axios from "axios";
import { t } from "i18next";
import { BiBasket, BiCaretDown } from "react-icons/bi";
import { FaRegStar, FaStar, FaStarHalfAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const ScooterItem = ({ scooter, scooters, cartItems, setCartItems, cartId }) => {


    const handleAddItemToCart = (itemId) => {
        console.log({
            shopping_cart_id: cartId,
            product_id: itemId
        });

        const addItemToCart = async () => {
            await axios.post(process.env.REACT_APP_GOOGLE_BASE_URL + 'cart/product', {
                shopping_cart_id: cartId,
                product_id: itemId
            })
            setCartItems([...cartItems, scooters.find((scooter) => scooter.id === itemId)])
            // console.log(data.data)
            // setLoading(false)
        }


        addItemToCart()

    }

    const handleRemoveItemFromCart = (itemId) => {
        const removeItemFromCart = async () => {
            const data = await axios.delete(process.env.REACT_APP_GOOGLE_BASE_URL + `cart/${cartId}/product/${itemId}`)
            console.log(data);
            setCartItems(cartItems.filter((item) => item.id !== itemId))

            // console.log(data.data)
            // setLoading(false)
        }

        removeItemFromCart()
    }


    return (
        <div className="bg-white shadow-md rounded-md w-[275px] min-h-[375px] mr-2 mb-2 group  hover:brightness-95 overflow-hidden">
            <div className="h-[75%] border-b  ">
                <img className="bg-white p-10 hover:p-7 active:p-12  object-contain rounded-md transition-all ease-in-out duration-150 cursor-pointer" src={scooter.image_path} alt="" />
            </div>
            <div className="flex-1 flex-col px-2">
                <span className="text-xs text-gray-600 hover:underline cursor-pointer">Product ID: {scooter.id}</span>
                <Link to={"/booking/" + scooter.id}><p className="cursor-pointer hover:text-orange-400 hover:underline">{scooter.name}</p></Link>
                <div className="flex items-center space-x-3">
                    {
                        [...Array(5)].map((_, i) => {


                            const remainingStars = scooter.stars - (i)

                            if (remainingStars >= 1)
                                return <FaStar key={"full-star-" + i} color={"orange"} />;
                            else if (remainingStars == 0.5)
                                return <FaStarHalfAlt key={"half-star-" + i} color={"orange"} />;
                            else
                                return <FaRegStar key={"empty-star-" + i} color={"orange"} />;
                        })
                    }
                    <div className="flex items-center text-blue-600">
                        <BiCaretDown />
                        <a className="underline" href="#avis">{scooter.feedbackCnt}</a>
                    </div>
                </div>
                <span className="text-xs text-gray-600">{t("Price")}: </span>
                <p className="font-semibold">{scooter.price_per_units} €</p>
            </div>
            {
                cartItems && cartItems.map((s) => s.id).includes(scooter.id)
                    ?
                    <button onClick={() => handleRemoveItemFromCart(scooter.id)} className="bg-red-500 flex justify-center items-center space-x-2 mt-2 text-white w-full h-10 ">
                        <FaTimes />
                        <span>{t("Remove from cart")}</span>
                    </button>
                    :
                    <button onClick={() => handleAddItemToCart(scooter.id)} className="bg-black flex justify-center items-center space-x-2 mt-2 text-white w-full h-10 ">
                        <BiBasket />
                        <span>{t("Add to cart")}</span>
                    </button>
            }

        </div>
    )
}

export default ScooterItem