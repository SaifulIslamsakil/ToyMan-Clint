import { Link } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa6";
import { FaAlignRight } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
// import { FaUser } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import logo from "../../assets/nav-logo/logo.avif"
import Drawer from "../Drawer/Drawer";

const Navbar = () => {
    const manu = <>
        <li><Link className=" hover:bg-sky-400 lg:hover:bg-white hover:text-white p-2 block rounded-lg lg:hover:text-sky-400 hover:border-b-2 hover:border-sky-400" >Home</Link></li>
        <li><Link className="hover:bg-sky-400 lg:hover:bg-white hover:text-white p-2 block rounded-lg lg:hover:text-sky-400 hover:border-b-2 hover:border-sky-400">Add product</Link></li>
        <li><Link className=" hover:bg-sky-400 lg:hover:bg-white hover:text-white p-2 block rounded-lg lg:hover:text-sky-400 hover:border-b-2 hover:border-sky-400">Blog</Link></li>
        <li><Link className="hover:bg-sky-400 lg:hover:bg-white hover:text-white p-2 block rounded-lg lg:hover:text-sky-400 hover:border-b-2 hover:border-sky-400">Contact</Link></li>
        <li><Link to={"/Register"} className="hover:bg-sky-400 lg:hover:bg-white hover:text-white p-2 block rounded-lg lg:hover:text-sky-400 hover:border-b-2 hover:border-sky-400">Register</Link></li>
    </>
    const [toggel, setToggel] = useState(true)
    return (
        <nav>
            <div className=" hidden md:block bg-cyan-400 p-3">
                <p className=" text-white text-center font-semibold">Get 35% off for <Link className=" underline">Summer Collection</Link> - 2024</p>
            </div>
            <div className=" px-8 py-5 bg-slate-50 flex justify-between items-center border-b-2 ">
                <img className=" cursor-pointer" src={logo} alt="" />
                <div className=" hidden lg:flex lg:w-[500px] h-12 border-2 rounded-lg items-center">
                    <input className=" w-full h-full rounded-lg border-none outline-none p-3 " type="search" name="" placeholder="Search your favorite Toy..." id="" />
                    <button className=" py-3 px-6 bg-cyan-400 text-white  text-center rounded-r-lg hover:bg-pink-400 ">Search </button>
                </div>
                <div className="   flex justify-end text-2xl items-center  gap-5 relative">
                    <p ><SiShopee></SiShopee></p>
                    <p  onClick={() => setToggel(!toggel)}> <FaAlignRight></FaAlignRight> </p>
                    {/* <p onClick={()=> setToggel(!toggel)} className="hidden lg:block"><FaUser></FaUser></p>
                <div className={` w-80 bg-white absolute top-10 shadow-lg p-10 text-xl z-50 space-y-4 ${toggel?"hidden":"block"}`}>
                        <p className=" border-b-2 pb-7">Account</p>
                        <ul className=" space-y-3">
                            <li>Login </li>
                            <li>Create Account </li>
                        </ul>
                    </div> */}
                </div>
            </div>
            <div className=" hidden lg:flex items-center justify-between p-8  ">
                <div className=" lg:flex-1">
                    <ul className=" text-xl flex  items-center justify-between cursor-pointer">
                        {manu}
                    </ul>
                </div>
                <div className=" flex-1 flex justify-end text-3xl font-semibold gap-8">
                    <p className=" flex items-center gap-4 text-xl"> <FaHeadphones></FaHeadphones><span>(+01)-800-3456</span></p>
                </div>
            </div>
            <Drawer
                toggel={toggel}
                setToggel={setToggel}
                manu={manu}
            ></Drawer>
        </nav>
    );
};

export default Navbar;