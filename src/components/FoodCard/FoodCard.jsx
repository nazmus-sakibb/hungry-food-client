import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../providers/AuthProvider";

const FoodCard = ({ item }) => {
    const { image, price, recipe, name, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = {
                menuItemId: _id,
                name,
                image,
                price,
                email: user.email
            }
            fetch('https://hungry-food-server.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();  // refetch to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please log in to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mt-4 mr-7 px-3 py-1 rounded bg-slate-900 text-white">${price}</p>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{name}</h2>
                <p className="mb-2">{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-2 mt-5 bg-slate-100">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;