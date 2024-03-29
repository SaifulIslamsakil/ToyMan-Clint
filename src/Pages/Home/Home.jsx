import AboutUs from "../../Components/AboutUS/AboutUs";
import Banner from "../../Components/Banner/Banner";
import CustomerLoves from "../../Components/CustomerLoves/CustomerLoves";
import CustomerReviw from "../../Components/CustomerReviw/CustomerReviw";
import Fassion from "../../Components/Fassion/Fassion";
import Featured from "../../Components/Featured/Featured";
import FrequentlyQuestions from "../../Components/FrequentlyQuestions/FrequentlyQuestions";
import PopularInStore from "../../Components/PopularInStore/PopularInStore";
import ShopByAge from "../../Components/ShopByAge/ShopByAge";
import TopProducts from "../../Components/TopProducts/TopProducts";

const Home = () => {
    return (
        <div className="space-y-16">
            <Banner></Banner>
            <Fassion></Fassion>
            <Featured></Featured>
            <ShopByAge></ShopByAge>
            <PopularInStore></PopularInStore>
            <CustomerLoves></CustomerLoves>
            <TopProducts></TopProducts>
            <AboutUs></AboutUs>
            <CustomerReviw></CustomerReviw>
            <FrequentlyQuestions></FrequentlyQuestions>
        </div>
    );
};

export default Home;