import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-5">
            {title && <Cover img={img} title={title} />}
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <div className="text-center my-10">
                <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-2 mt-5">Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;