import SectionHadding from "../../Shyerd/SectionHadding/SectionHadding";
import category1 from "../../assets/Category/category_img1.png"
import category2 from "../../assets/Category/category_img2.png"
import category3 from "../../assets/Category/category_img3.png"
import category4 from "../../assets/Category/category_img4.png"
import category5 from "../../assets/Category/category_img5.png"
import category6 from "../../assets/Category/category_img6.png"

const ShopByAge = () => {
    return (
        <div className="  space-y-10 w-11/12 mx-auto p-5">
            <SectionHadding
            hadding={"Shop By Age"}
            subHadding={"Our Collections"}
            ></SectionHadding>
            <div className=" grid grid-cols-6 gap-8">
                <div className=" space-y-4">
                    <img src={category1} alt="" />
                    <p className=" text-center font-semibold text-xl">For Baby</p>
                </div>
                <div className=" space-y-4">
                    <img src={category2} alt="" />
                    <p className=" text-center font-semibold text-xl"> 1 to 2 years</p>
                </div>
                <div className=" space-y-4">
                    <img src={category3} alt="" />
                    <p className=" text-center font-semibold text-xl">2 to 4 years</p>
                </div>
                <div className=" space-y-4">
                    <img src={category4} alt="" />
                    <p className=" text-center font-semibold text-xl">5 to 7 years</p>
                </div>
                <div className=" space-y-4">
                    <img src={category5} alt="" />
                    <p className=" text-center font-semibold text-xl">8 to 11 years</p>
                </div>
                <div className=" space-y-4">
                    <img src={category6} alt="" />
                    <p className=" text-center font-semibold text-xl">12 years & up</p>
                </div>
            </div>
        </div>
    );
};

export default ShopByAge;