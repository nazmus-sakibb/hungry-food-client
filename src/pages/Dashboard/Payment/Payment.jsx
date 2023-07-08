import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Payment = () => {
    return (
        <div className="w-full">
            <SectionTitle subHeading={"Please process"} heading={"Payment"}/>
            <h2 className="text-3xl">Pay with stripe</h2>
        </div>
    );
};

export default Payment;