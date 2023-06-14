
const FoodCard = ({ item }) => {
    const { image, price, recipe, name } = item;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mt-4 mr-7 px-3 py-1 rounded bg-slate-900 text-white">${price}</p>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;