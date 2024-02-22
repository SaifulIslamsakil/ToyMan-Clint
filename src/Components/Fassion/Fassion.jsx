
const Fassion = () => {
    return (
        <div className=" w-11/12 mx-auto lg:flex gap-5 justify-between items-center font-semibold text-white space-y-5">
            <div className=" lg:flex-1 h-72 flex justify-center items-center" style={{ backgroundImage: "url(https://i.ibb.co/6yF4SvF/bn2.webp)", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className=" p-10 ml-28 space-y-5">
                    <h3 className=" text-2xl">Our boys <br /> Fashion products</h3>
                    <button className=" hover:bg-pink-400 bg-cyan-400 text-center rounded-full py-3 px-5">SHOP NOW</button>
                </div>
            </div>
            <div className=" lg:flex-1 h-72 flex items-center space-y-0" style={{ backgroundImage: "url(https://i.ibb.co/h9V7kJT/bnr3.webp)", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className=" p-10 space-y-5">
                    <h3 className=" text-2xl">New Girls <br /> Fashion products</h3>
                    <button className=" bg-pink-400 hover:bg-cyan-400 text-center rounded-full py-3 px-5">SHOP NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Fassion;