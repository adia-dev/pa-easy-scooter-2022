
import StripeContainer from ".././components/StripeContainer";

const Stripe = ({ cartId, amount }) => {




  return (
    <div className="bg-[#08080875] w-screen h-screen justify-center items-center p-3 flex relative">
      <div className="w-4/12 fixed bg-white h-[90%] mx-auto rounded-xl p-5 overflow-hidden">
        <span className="text-gray-500">Paiement pour :</span>

        <p className="font-bold">Pascal ZHOU</p>
        <span>XXXX</span>

        <div className="py-4 px-2 mb-5 rounded-lg border flex items-center justify-between">
          <p>Trottinette éléctrique</p>
          <span>$ 400</span>
        </div>

        <div className="flex justify-between items-center mb-5">
          <span className="text-gray-500">Montant total</span>
          <p className="font-semibold">$ 1400</p>
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
        {<StripeContainer />}
      </div>
    </div>
  );
};

export default Stripe;
