import { Link } from "react-router-dom";


const Detiles = () => {
    return (
        <div className=" ">
            <div className=" bg-slate-50  text-red-500 p-7 ">
                <h3>Baby Bag Red</h3>
            </div>
            <div className=" flex justify-between p-10 gap-5 ">
                <div className=" flex-1 space-y-10">
                    <div>
                        <img src="https://i.ibb.co/Ld8CYZ7/8.webp" alt="" />
                    </div>
                    <div className=" grid grid-cols-4 gap-5">
                        <img src="https://i.ibb.co/Ld8CYZ7/8.webp" alt="" />
                        <img src="https://i.ibb.co/Ld8CYZ7/8.webp" alt="" />
                        <img src="https://i.ibb.co/Ld8CYZ7/8.webp" alt="" />
                        <img src="https://i.ibb.co/Ld8CYZ7/8.webp" alt="" />
                    </div>
                </div>
                <div className=" flex-1 space-y-3">
                    <h2 className=" text-3xl font-semibold">Baby bag red</h2>
                    <p className=" text-2xl font-bold text-cyan-400"> Tk 6,200.00</p>
                    <div className=" space-y-6">
                        <div className=" space-y-3">
                            <div className="rating ">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className=" text-xl font-semibold">SKU: 202</p>
                            <p className=" text-xl font-semibold">Vendor: Vendor 6</p>
                            <p className=" text-xl font-semibold">Availability: 5 left in stock</p>
                            <progress className="progress progress-info " value="90" max="100"></progress>
                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                            <div className=" flex gap-4 font-semibold ">
                                <button> Size Guide</button>
                                <button>  Shipping</button>
                                <button> Ask About This Product</button>
                            </div>
                        </div>
                        <div className=" flex gap-4">
                            <div className=" flex gap-2 border p-2 items-center">
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                            <Link to={"/Detils"}> <button className=" bg-pink-400 hover:bg-cyan-400 text-center text-white py-3 px-5 w-80 rounded-full ">Add to Cart</button></Link>
                        </div>
                        <div className="  ml-5">
                            <Link to={"/Detils"}> <button className=" hover:bg-pink-400  text-center hover:text-white py-3 px-5  border border-pink-400 w-96">Buy It Now</button></Link>
                        </div>
                        <div className=" flex gap-4">
                            <p> Add to wishlist</p>
                            <p>Add to compare</p>
                        </div>
                        <div className=" flex justify-around items-center p-5 border">
                            <div>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <p>Free Delivery</p>
                                    <p>Lorem Ipsum dummy</p>
                                </div>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <p>Free Delivery</p>
                                    <p>Lorem Ipsum dummy</p>
                                </div>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <p>Free Delivery</p>
                                    <p>Lorem Ipsum dummy</p>
                                </div>
                            </div>
                            </div>
                            <div>
                                <div>
                                    <img src="" alt="" />
                                    <div>
                                        <p>Free Delivery</p>
                                        <p>Lorem Ipsum dummy</p>
                                    </div>
                                </div><div>
                                    <img src="" alt="" />
                                    <div>
                                        <p>Free Delivery</p>
                                        <p>Lorem Ipsum dummy</p>
                                    </div>
                                </div><div>
                                    <img src="" alt="" />
                                    <div>
                                        <p>Free Delivery</p>
                                        <p>Lorem Ipsum dummy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detiles;