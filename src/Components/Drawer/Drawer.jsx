import { FiSearch } from "react-icons/fi";
import { ImCross } from "react-icons/im";

const Drawer = ({toggel, setToggel, manu}) => {
    return (
        <div className={`  w-full h-full bg-black bg-opacity-50 absolute top-0 left-0 flex justify-end z-50 ${toggel ? "hidden" : "block"}`}>
            <div className=" h-full w-80 p-10 relative  bg-white  ">
                <div className=" border-b-2 pb-10 ">
                    <div className=" flex h-12 border-2 justify-between items-center ">
                        <input className=" border-r-2 w-full h-full outline-none p-2" placeholder="Search Here...." type="search" name="" id="" />
                        <button className=" text-center p-5 text-2xl"><FiSearch></FiSearch> </button>
                    </div>
                    <button onClick={() => setToggel(!toggel)} className=" bg-black p-4 text-white bg-opacity-80 absolute top-0 -left-12"><ImCross></ImCross></button>
                </div>
                <div className=" mt-10 border-b-2 pb-10">
                    <ul>
                        {manu}
                    </ul>
                </div>
                <div className=" flex justify-center mt-5">
                    <button className=" bg-sky-400 py-2 px-4 rounded-lg text-center hover:bg-pink-400 text-white">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;