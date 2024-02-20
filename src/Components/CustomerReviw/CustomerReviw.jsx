import SectionHadding from "../../Shyerd/SectionHadding/SectionHadding";


const CustomerReviw = () => {
    return (
        <div className="  space-y-10 bg-slate-50 py-20">
            <SectionHadding
                hadding={"Customer Saying"}
                subHadding={"Customer Testimonials"}
            ></SectionHadding>

            <div className=" grid grid-cols-3 gap-10 w-11/12 mx-auto py-10 ">
                <div>
                    <div className=" flex items-center  gap-5">
                        <img src="https://i.ibb.co/vk30z4q/review1-100x.png" alt="" />
                        <div className=" space-y-3">
                            <h5 className=" text-2xl font-semibold">Zina Docim</h5>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam repellat totam commodi culpa eos impedit, facere sapiente fugiat suscipit, porro quod rerum dicta! Nihil.</p>
                </div>
                <div>
                    <div className=" flex items-center  gap-5">
                        <img src="https://i.ibb.co/vk30z4q/review1-100x.png" alt="" />
                        <div className=" space-y-3">
                            <h5 className=" text-2xl font-semibold">Zina Docim</h5>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam repellat totam commodi culpa eos impedit, facere sapiente fugiat suscipit, porro quod rerum dicta! Nihil.</p>
                </div>
                <div>
                    <div className=" flex items-center  gap-5">
                        <img src="https://i.ibb.co/vk30z4q/review1-100x.png" alt="" />
                        <div className=" space-y-3">
                            <h5 className=" text-2xl font-semibold">Zina Docim</h5>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam repellat totam commodi culpa eos impedit, facere sapiente fugiat suscipit, porro quod rerum dicta! Nihil.</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviw;