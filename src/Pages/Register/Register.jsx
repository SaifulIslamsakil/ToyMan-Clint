import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const Register = () => {
    const { Register } = useContext(AuthContext)
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const handelFormSubmited = (data) => {
        console.log(data)
        Register(data?.email, data?.password)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className=" md:flex ">
            <div className=" bg-purple-600 md:w-[30%]  ">
                <img src="https://i.ibb.co/rFDjRhj/top-ornamate-2.png" alt="" />
                <p className=" text-4xl font-bold text-white p-5">We are design changers do what matters.</p>
                <img className=" w-72 mx-auto" src="https://i.ibb.co/tpBNLXY/man-image-1.png" alt="" />
            </div>
            <div className="md:w-[70%] bg-gradient-to-r from-purple-200  to-sky-100 p-10 ">
                <div className="space-y-10 lg:w-3/4 mx-auto">
                    <p className=" text-center font-bold text-3xl">Create your TopicTrove Account</p>
                    <p className=" text-center">Already have an account? <Link to='/login' className=" font-bold">Sign in</Link> </p>
                    <button className=" mx-auto p-3 rounded-lg border shadow-lg bg-white flex items-center gap-3 hover:shadow-sm"> <HiOutlineMail className=" text-2xl text-orange-500" /> Sign up with Google</button>
                    <div className="divider">OR</div>

                    <form action="" >
                        <div className=" grid md:grid-cols-2 gap-5">
                            <div className=" col-span-1">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">First name</span>
                                    </div>
                                    <input {...register("first_name", { required: true })} type="text" placeholder="Enter First name" className="input input-bordered w-full max-w-xs" />

                                </label>
                            </div>
                            <div className=" col-span-1">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Last name</span>
                                    </div>
                                    <input {...register("last_name", { required: true })} type="text" placeholder="Enter Last name" className="input input-bordered w-full max-w-xs" />
                                </label>
                            </div>
                            <div className=" col-span-2">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Your email</span>
                                    </div>
                                    <input {...register("email", { required: true })} type="email" placeholder=" Enter Your email" className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className=" col-span-2">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="password">Password</span>
                                    </div>
                                    <input {...register("password", { required: true, maxLength: 20, minLength: 8, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} type="Password" placeholder=" Enter Password" className="input input-bordered w-full " />

                                    {/* {...register("password", { required: true, maxLength: 20, minLength: 8, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} */}

                                    {errors.password?.type === "required" && <span className=" text-red-500">password is required</span>}
                                    {errors.password?.type === "minLength" && <span className=" text-red-500">your Password must be 6 chareter</span>}
                                    {errors.password?.type === "pattern" && <span className=" text-red-500">your Password must be an number an uppercase an lowercase an spcial careater</span>}
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className=" flex justify-center mt-6">
                                <button onClick={handleSubmit(handelFormSubmited)} className="btn  bg-purple-600 text-white hover:bg-purple-800 ">Create An Account </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;