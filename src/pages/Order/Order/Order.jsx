import { useState } from 'react';
import orderBanner from '../../../assets/shop/order.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const {category} = useParams();
    console.log(category);

    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');


    return (
        <div>
            <Cover img={orderBanner} title={'Order Food'}/>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="mt-10">
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}/>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;