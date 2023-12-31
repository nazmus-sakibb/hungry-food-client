import { Helmet } from 'react-helmet-async';
import menuBanner from '../../../assets/menu/banner-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>HungryFood | Menu</title>
            </Helmet>
            <Cover img={menuBanner} title={'Our Menu'} />
            {/* Main cover */}
            <SectionTitle
                subHeading={"Dont't Miss"}
                heading={"Today's Offer"}
            />
            {/* Offered menu items */}
            <MenuCategory items={offered} />

            {/* Desserts menu items */}
            <MenuCategory items={dessert} title={'dessert'} img={dessertImg} />

            {/* Pizza menu items */}
            <MenuCategory items={pizza} title={'pizza'} img={pizzaImg} />

            {/* Salad menu items */}
            <MenuCategory items={salad} title={'salad'} img={saladImg} />

            {/* Pizza menu items */}
            <MenuCategory items={soup} title={'soup'} img={soupImg} />

        </div>
    );
};

export default Menu;