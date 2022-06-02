import StripeContainer from ".././components/StripeContainer";
import { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";

const Stripe = () => {
  const [total, setTotal] = useState(null);

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "xiaomi",
      price: 50,
    },
    {
      id: 2,
      name: "casque",
      price: 10,
    },
  ]);

  useEffect(() => {
    const sum =
      cart.length > 0
        ? cart
            .map((product) => product.price)
            .reduce(
              (previousValue, currentValue) => previousValue + currentValue
            )
        : 0;
    setTotal(sum);
  }, [cart]);

  const handleRemoveProduct = (id) => {
    setCart(cart.filter((product) => product.id != id));
  };

  return (
    <div className="bg-gray-200 w-screen h-screen justify-center items-center p-3">
      <div className="w-4/12 bg-white h-full mx-auto rounded-xl p-5 relative overflow-hidden">
        <span className="text-gray-500">Paiement pour :</span>

        <p className="font-bold">Pascal ZHOU</p>
        <span>XXXX</span>

        {cart &&
          cart.map((product, index) => (
            <div
              key={index}
              className="py-4 px-2 border-x-1 rounded-lg border flex items-center justify-between"
            >
              <p>{product.name}</p>
              <span>{product.price} €</span>
              <BsTrash
                className="cursor-pointer"
                onClick={() => handleRemoveProduct(product.id)}
              />
            </div>
          ))}

        <div className="flex justify-between items-center my-5">
          <span className="text-gray-500">Montant total</span>
          <p className="font-semibold">{total} €</p>
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
        {<StripeContainer amount={total} />}
      </div>
    </div>
  );
};

export default Stripe;
