
const FoodCard = ({ item }) => {
    const { image, price, recipe, name } = item;

    const handleAddToCart = item => {
        console.log(item);
        
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