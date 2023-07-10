import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));

    return (
        <div className="w-full ml-20">
            <SectionTitle subHeading={"Please process"} heading={"Payment"} />
            <h2 className="text-3xl mb-10">Pay with Stripe</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} cart={cart}/>
            </Elements>
        </div>
    );
};

export default Payment;