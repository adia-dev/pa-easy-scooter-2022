import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import StripeContainer from ".././components/StripeContainer";

const Stripe = () => {
  const [x, setX] = useState(10);

  return (
    <div className="bg-gray-200 w-screen h-screen justify-center items-center p-3">
      <div className="w-4/12 bg-white h-full mx-auto rounded-xl p-5 relative overflow-hidden">
        <span className="text-gray-500">Paiement pour:</span>

        <p className="font-bold">Pascal ZHOU</p>
        <span>XXXX</span>

        <div className="py-4 px-2 mb-5 rounded-lg border flex items-center justify-between">
          <p>Electric Scooter</p>
          <span>$ 400</span>
        </div>

        <div className="flex justify-between items-center mb-5">
          <span className="text-gray-500">Total Amount</span>
          <p className="font-semibold">$ 1400</p>
        </div>

        <span className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          repellendus dolorem ipsum labore omnis autem modi dignissimos,
          assumenda delectus hic.
        </span>

        <div className="w-full border-b py-5 mb-3"></div>

        <h1 className="mt-5 font-semibold mb-3">Moyen de paiement: CB</h1>
        <span className="text-gray-500">
          Veuillez entrer vos informations bancaires
        </span>
        {
          <StripeContainer />
          /* <form className="w-full space-y-3">
          <input
            className="w-full border-gray-200 rounded-xl"
            type="text"
            placeholder="💳   Card Number"
          />
          <div className="flex items-center justify-between py-3">
            <input
              className="border-gray-200 rounded-lg"
              type="date"
              name="date"
              id="date"
            />
            <input
              className="border-gray-200 rounded-lg"
              type="text"
              name="cvc"
              id="cvc"
              placeholder="CVC"
            />
          </div>
          <span className="font-semibold cursor-pointer text-blue-500 text-sm ">
            Plus de moyens de paiements
          </span>
        </form> */
        }

        <button className="absolute left-0 bottom-0 bg-blue-600 justify-center text-white w-full py-4 font-bold flex items-center space-x-5">
          <span>PAY 5€</span>
          <AiOutlineArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Stripe;
