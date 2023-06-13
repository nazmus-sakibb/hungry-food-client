import { Helmet } from 'react-helmet-async';
import menuBanner from '../../assets/menu/banner-bg.jpg';
import Cover from '../Shared/Cover/Cover';
import PopularMenu from '../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>HungryFood | Menu</title>
            </Helmet>
            <Cover
                img={menuBanner}
                title={'Our Menu'}
            />
            <PopularMenu />
            <Cover
                img={menuBanner}
                title={'Our Menu'}
            />
            <PopularMenu />
            <Cover
                img={menuBanner}
                title={'Our Menu'}
            />
            <PopularMenu />
            <Cover
                img={menuBanner}
                title={'Our Menu'}
            />
            <PopularMenu />
        </div>
    );
};

export default Menu;