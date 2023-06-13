import featured from '../../../assets/home/featured.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css';


const Featured = () => {
    return (
        <div className='featured-item bg-fixed mb-16 text-white'>
            <div className='bg-opacity-50 bg-black py-12'>
            <SectionTitle
                subHeading='Check It Out'
                heading='Featured Item'
            />
            <div className='md:flex justify-evenly items-center py-5'>
                <div className=''>
                    <img className='md:w-[450px]' src={featured} alt="" />
                </div>
                <div className='w-2/4'>
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur hic, laudantium officiis expedita corrupti ipsum magnam animi sit, unde modi itaque possimus eos molestias quisquam iusto sapiente dolorem? Numquam officia autem quae libero, iusto nostrum qui eum tempora aut! Optio vitae quisquam odit cumque saepe quibusdam cupiditate officiis a!</p>
                    <button className="btn btn-outline text-white border-0 border-b-2 mt-5">Read More</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;