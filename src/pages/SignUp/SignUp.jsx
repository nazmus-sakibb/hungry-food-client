import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {createUser} = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    };


    return (
        <>
            <Helmet>
                <title>HungryFood | Sign Up</title>
            </Helmet>
            <div className="hero bg-base-200 pt-36 pb-20">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Passwrod is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Passwrod must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Passwrod must be less than 20 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Passwrod must have one uppercase, one lowercase, one number and one special character</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <p className='mt-5 text-center'><small>Already have an account? <Link to='/login' className='text-orange-600'>Login</Link></small></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;