
import { FaTimes } from "react-icons/fa";
import StripeContainer from ".././components/StripeContainer";

const Stripe = ({ user, setCheckoutOpened, cartItems, amount, scooter }) => {

  console.log(cartItems)


  return (
    <div className="bg-[#080808b1] z-40 absolute left-0 top-0 w-screen h-screen justify-center items-center p-3 flex">

      <div className="w-4/12 fixed z-50 bg-white h-[95%] mx-auto rounded-xl p-5 overflow-hidden">
        <div onClick={() => setCheckoutOpened(false)} className="cursor-pointer absolute right-3 top-3">
          <FaTimes />
        </div>
        <span className="text-gray-500">Paiement pour :</span>

        <p className="font-bold py-3">{user.data.display_name}</p>
        <span>{user.data.display_name} address</span>

        {
          cartItems.map((item, i) =>
          (
            <div key={"stripe-item-" + i} className="py-4 px-2 border-t flex items-center justify-between">
              <p>{item.name}</p>
              <span>$ {item.price_per_units}</span>
            </div>
          ))
        }

        <div className="flex justify-between items-center my-5">
          <span className="text-gray-500">Montant total</span>
          <p className="font-semibold">$ {amount}</p>
        </div>

        <span className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          repellendus dolorem ipsum labore omnis autem modi dignissimos,
          assumenda delectus hic.
        </span>

        <div className="w-full border-b py-5 mb-3"></div>

        <h1 className="mt-5 font-semibold mb-3">Moyen de paiement : CB</h1>
        <span className="text-gray-500">
          Veuillez entrer vos informations bancaires :
        </span>
        {<StripeContainer setCheckoutOpened={setCheckoutOpened} amount={amount} scooter={scooter} />}
      </div>
    </div>
  );
};

export default Stripe;
