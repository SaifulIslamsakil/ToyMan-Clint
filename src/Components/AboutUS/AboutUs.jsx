import SectionHadding from "../../Shyerd/SectionHadding/SectionHadding";


const AboutUs = () => {
    return (
        <div className="   py-20 px-10 space-y-10 ">
            <SectionHadding
            hadding={"We make your children happier  with the best toys"}
            subHadding={"About Us"}
            ></SectionHadding>
            <div className=" grid grid-cols-4 gap-5">
                <div className=" bg-slate-50 rounded-lg text-center p-10 space-y-5">
                    <img className=" mx-auto " src="https://i.ibb.co/dJKRrzV/srv1-copyright.webp" alt="" />
                    <div className=" space-y-4">
                    <h5 className=" text-2xl font-semibold">Big Selection</h5>
                    <p>The widest toy rangs</p>
                    </div>
                </div>
                <div className=" bg-slate-50 rounded-lg text-center p-10 space-y-5">
                    <img className=" mx-auto " src="https://i.ibb.co/qpWzJHT/srv4-copyright.webp" alt="" />
                    <div className=" space-y-4">
                    <h5 className=" text-2xl font-semibold">Big Selection</h5>
                    <p>The widest toy rangs</p>
                    </div>
                </div>
                <div className=" bg-slate-50 rounded-lg text-center p-10 space-y-5">
                    <img className=" mx-auto " src="https://i.ibb.co/60ntHnP/srv3-copyright.webp" alt="" />
                    <div className=" space-y-4">
                    <h5 className=" text-2xl font-semibold">Big Selection</h5>
                    <p>The widest toy rangs</p>
                    </div>
                </div>
                <div className=" bg-slate-50 rounded-lg text-center p-10 space-y-5">
                    <img className=" mx-auto " src="https://i.ibb.co/Kjpd8b1/srv2-copyright.webp" alt="" />
                    <div className=" space-y-4">
                    <h5 className=" text-2xl font-semibold">Big Selection</h5>
                    <p>The widest toy rangs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;