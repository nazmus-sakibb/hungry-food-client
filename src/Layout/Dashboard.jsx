import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaHome, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO - load data from the server to have dynamic isAdmin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
                {/* Content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminhome'><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem'><FaUtensils /> Add an Item</NavLink></li>
                            <li><NavLink to='/dashboard/manageItems'><FaWallet /> Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard'><FaBook /> Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers /> All Users</NavLink></li>
                        </> : <>
                            <li><NavLink to='/dashboard/userhome'><FaHome /> User Home</NavLink></li>
                            <li><NavLink to='/dashboard'><FaCalendarAlt /> Reservation</NavLink></li>
                            <li><NavLink to='/dashboard'><FaWallet /> Payment History</NavLink></li>
                            <li>
                                <NavLink to='/dashboard/mycart'><FaUsers /> My Cart
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>
                            </li>
                        </>
                    }
                    
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/menu'> Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><FaHome /> Shop</NavLink></li>
                    <li><NavLink to='/'><FaHome /> Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;