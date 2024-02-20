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
            <div className=" w-11/12 mx-auto flex gap-5 justify-between items-center font-semibold text-white">
                <div className=" flex-1 h-72 flex justify-center items-center" style={{backgroundImage:"url(https://i.ibb.co/6yF4SvF/bn2.webp)", backgroundSize:"cover", backgroundPosition:"center"}}>
                    <div className=" p-10 ml-32 space-y-5">
                        <h3 className=" text-2xl">Our boys <br /> Fashion products</h3>
                        <button className=" hover:bg-pink-400 bg-cyan-400 text-center rounded-full py-3 px-5">SHOP NOW</button>
                    </div>
                </div>
                <div className=" flex-1 h-72 flex items-center" style={{backgroundImage:"url(https://i.ibb.co/h9V7kJT/bnr3.webp)", backgroundSize:"cover", backgroundPosition:"center"}}>
                  
                    <div className=" p-10 space-y-5">
                        <h3 className=" text-2xl">New Girls <br /> Fashion products</h3>
                        <button className=" bg-pink-400 hover:bg-cyan-400 text-center rounded-full py-3 px-5">SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;