import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBanner from '../../../assets/menu/banner-bg.jpg';

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
        </div>
    );
};

export default Menu;