import Banner from "../../Components/Banner/Banner";
import ProductsTeamplete from "../../Shyerd/ProductsTeamplete/ProductsTeamplete";
import SectionHadding from "../../Shyerd/SectionHadding/SectionHadding";

const Shop = () => {
    return (
        <div className=" space-y-10 p-10">
            <Banner></Banner>
            <div className=" space-y-10">
                <SectionHadding
                    hadding={"Walkers"}
                    subHadding={" Collections"}
                ></SectionHadding>

                <ProductsTeamplete></ProductsTeamplete>
                <SectionHadding
                    hadding={"Baby Dolls"}
                    subHadding={" Collections"}
                ></SectionHadding>
                <ProductsTeamplete></ProductsTeamplete>
                <SectionHadding
                    hadding={"Baby Dolls"}
                    subHadding={" Collections"}
                ></SectionHadding>
                <ProductsTeamplete></ProductsTeamplete>
                <SectionHadding
                    hadding={"Baby Dolls"}
                    subHadding={" Collections"}
                ></SectionHadding>
            </div>
        </div>
    );
};

export default Shop;