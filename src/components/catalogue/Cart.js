import { t } from "i18next"

const Cart = ({ items }) => {


    if (!items || items.length == 0) {
        return (
            <div className="w-[375px] bg-white absolute right-0 z-30 shadow-xl rounded-2xl p-5 space-y-5">
                <h1 className="border-b">{t("Cart")}</h1>
                <p className="text-xs text-gray-500">{t("There is no item on your shopping cart right now")}</p>
            </div>
        )
    }
    return (
        <div className="w-[375px] bg-white absolute right-0 z-30 shadow-xl rounded-2xl p-5 overflow-y-scroll space-y-5">
            <h1 className="border-b">{t("Cart")}</h1>

            {
                items.map((item, i) =>
                (
                    <div key={"cart-item-" + i} className="flex items-start justify-between space-x-3">
                        <img className="w-20 aspect-square object-contain border p-2 rounded-lg" src={item.image} alt="" />
                        <div className="flex flex-col flex-1">
                            <p>{item.name}</p>
                            <span className="text-gray-500 font-light">XL</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <p className="font-semibold text-sm">{item.price} €</p>
                        </div>
                    </div>
                ))
            }

            <div className="w-full border-y py-5">
                <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">{t("Subtotal")}</span>
                    <span>{items.length > 1 ? items.map((item) => item.price).reduce((acc, current) => acc + current) : items[0].price} €</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">{t("Total")}</span>
                    <span>{Math.min(items.length * 8, 24.99)} €</span>
                </div>
            </div>

            <div className="flex justify-between">
                <span className=" text-sm">{t("Total")}</span>
                <span className="font-semibold"><span className="font-normal text-xs text-gray-400">EUR</span> {items.length > 1 ? items.map((item) => item.price).reduce((acc, current) => acc + current) : items[0].price + Math.min(items.length * 8, 24.99)}€</span>
            </div>

            <div className="w-full mx-auto">
                <button className="bg-black text-white py-2 w-full rounded-lg">{t("Proceeed to checkout")}</button>
            </div>
        </div>
    )
}

export default Cart