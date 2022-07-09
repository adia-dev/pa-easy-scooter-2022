import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51KjhZvA8jU2eF49lINlc8ZcMT197kLsHEZuOnI0ttSwdGcgo8FTGEVMS8ovebXbewGFNYpXtOQHU85BZGm8fQ0lV00NPxbEPMg";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer({ amount, setCheckoutOpened }) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm setCheckoutOpened={setCheckoutOpened} amount={amount} />
    </Elements>
  );
}
