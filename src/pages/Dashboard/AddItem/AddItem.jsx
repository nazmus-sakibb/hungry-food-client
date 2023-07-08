import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if(imgResponse.success){
                    const imgURL = imgResponse.data.display_url;
                    const {name, category, price, recipe} = data;
                    const newItem = {name, price: parseFloat(price), category, recipe, image: imgURL};
                    console.log(newItem, imgURL);
                }
            })
    };



    return (
        <div className="w-full">
            <SectionTitle subHeading="What's new" heading="Add an Item" />
            <form className="ml-20" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full" />
                </div>
                <div className="flex justify-between mb-4">
                    <div className="form-control w-full pr-3">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        <select defaultValue={"Pick One"} {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                            <option>Desi</option>
                        </select>
                    </div>
                    <div className="form-control w-full pl-3">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input type="submit" value="Add Item" className="btn btn-sm btn-neutral mt-4" />
            </form>
        </div>
    );
};

export default AddItem;