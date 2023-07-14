import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://hungry-food-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="pt-10 pb-20">
            <SectionTitle
                subHeading='What Our Client Say'
                heading='Testimonials'
            />

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="my-16 mx-24 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="py-5">{review.details}</p>
                                <h2 className="text-2xl text-orange-600">{review.name}</h2>
                            </div>
                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;