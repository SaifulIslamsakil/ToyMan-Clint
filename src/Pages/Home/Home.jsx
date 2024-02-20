import AboutUs from "../../Components/AboutUS/AboutUs";
import Banner from "../../Components/Banner/Banner";
import CustomerLoves from "../../Components/CustomerLoves/CustomerLoves";
import CustomerReviw from "../../Components/CustomerReviw/CustomerReviw";
import Featured from "../../Components/Featured/Featured";
import FrequentlyQuestions from "../../Components/FrequentlyQuestions/FrequentlyQuestions";
import TopProducts from "../../Components/TopProducts/TopProducts";

const Home = () => {
    return (
        <div className=" space-y-20">
            <Banner></Banner>
            <Featured></Featured>
            <CustomerLoves></CustomerLoves>
            <TopProducts></TopProducts>
            <AboutUs></AboutUs>
            <CustomerReviw></CustomerReviw>
            <FrequentlyQuestions></FrequentlyQuestions>
        </div>
    );
};

export default Home;