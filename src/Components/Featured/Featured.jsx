

const Featured = () => {
    return (
        <div className=" space-y-14 bg-slate-50 py-10">
            <h2 className=" text-center text-4xl font-semibold">We design toys not just for kids <br /> but with kids </h2>
            <div className=" grid grid-cols-4 gap-8  w-11/12 mx-auto">
                <div className=" space-y-3">
                    <img className=" rounded-2xl" src="https://i.ibb.co/zrCptdT/post19-copyright-650x572.jpg" alt="" />
                    <p className=" text-2xl font-bold">Best Sellers</p>
                </div>
                <div className=" space-y-3">
                    <img className=" rounded-2xl" src="https://i.ibb.co/hXXsrvn/post21-copyright-650x572.jpg" alt="" />
                    <p className=" text-2xl font-bold">Best Sellers</p>
                </div>
                <div className=" space-y-3">
                    <img className=" rounded-2xl" src="https://i.ibb.co/yFBCs8S/post20-copyright-650x572.jpg" alt="" />
                    <p className=" text-2xl font-bold">Best Sellers</p>
                </div>
                <div className=" space-y-3">
                    <img className=" rounded-2xl" src="https://i.ibb.co/0jkfNm0/post17-copyright-650x572.jpg" alt="" />
                    <p className=" text-2xl font-bold">Best Sellers</p>
                </div>
            </div>
        </div>
    );
};

export default Featured;