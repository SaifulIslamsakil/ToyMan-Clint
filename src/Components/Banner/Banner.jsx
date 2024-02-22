import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className=" space-y-7">
            <Carousel infiniteLoop={true}>
                <div>
                    <img src="https://i.ibb.co/LQ80fyW/img-21-950x590-crop-center-1.webp" />
                </div>
                <div>
                    <img src="https://i.ibb.co/pLkBWNV/img-19-950x590-crop-center.webp" />
                </div>
                <div>
                    <img src="https://i.ibb.co/qkJB3nh/img-21-950x590-crop-center.webp" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;