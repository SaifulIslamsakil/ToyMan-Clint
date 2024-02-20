

const Featured = () => {
    return (
        <div className=" w-11/12 mx-auto space-y-14">
            <h2 className=" text-center text-5xl font-semibold">We design toys not just for kids <br /> but with kids </h2>
            <div className=" grid grid-cols-4 gap-8">
                <div className=" space-y-3">
                    <img className=" rounded-2xl" src="https://i.ibb.co/zrCptdT/post19-copyright-650x572.jpg" alt="" />
                    <p className=" text-2xl font-bold">Best Sellers</p>
                </div>
                <div className=" space-y-3">
                    <img className=" rounded-2xl" src="https://i.ibb.co/zrCptdT/post19-copyright-650x572.jpg" alt="" />
                    <p className=" text-2xl font-bold">Best Sellers</p>
                </div>
                <div className=" space-y-3">
                    <img className=" rounded-2xl" src="https://i.ibb.co/zrCptdT/post19-copyright-650x572.jpg" alt="" />
                    <p className=" text-2xl font-bold">Best Sellers</p>
                </div>
                <div className=" space-y-3">
                    <img className=" rounded-2xl" src="https://i.ibb.co/zrCptdT/post19-copyright-650x572.jpg" alt="" />
                    <p className=" text-2xl font-bold">Best Sellers</p>
                </div>
            </div>
        </div>
    );
};

export default Featured;