import { Link } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa6";
import { FaAlignRight } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { ImCross } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import logo from "../../assets/nav-logo/logo.avif"

const Navbar = () => {
    const manu = <>
        <li><Link className=" hover:bg-sky-400 hover:text-white p-3 block rounded-lg lg:hover:text-sky-400 hover:border-b-2 hover:border-sky-400" >Home</Link></li>
        <li><Link className="hover:bg-sky-400 hover:text-white p-3 block rounded-lg lg:hover:text-sky-400 hover:border-b-2 hover:border-sky-400">Add product</Link></li>
        <li><Link className=" hover:bg-sky-400 hover:text-white p-3 block rounded-lg lg:hover:text-sky-400 hover:border-b-2 hover:border-sky-400">Blog</Link></li>
        <li><Link className="hover:bg-sky-400 hover:text-white p-3 block rounded-lg lg:hover:text-sky-400 hover:border-b-2 hover:border-sky-400">Contact</Link></li>
        <li><Link className="hover:bg-sky-400 hover:text-white p-3 block rounded-lg lg:hover:text-sky-400 hover:border-b-2 hover:border-sky-400">Register</Link></li>
    </>
    const [toggel, setToggel] = useState(true)
    return (
        <nav>
            <div className=" hidden md:block bg-cyan-400 p-3">
                <p className=" text-white text-center font-semibold">Get 35% off for <Link className=" underline">Summer Collection</Link> - 2024</p>
            </div>
            <div className=" px-8 py-5 bg-slate-50 flex justify-between items-center border-b-2 ">
                <img src={logo} alt="" />
                <div className=" hidden lg:flex w-[500px] h-12 border-2 rounded-lg items-center">
                    <input className=" w-full h-full rounded-lg border-none outline-none p-3 " type="search" name="" placeholder="Search your favorite Toy..." id="" />
                    <button className=" py-3 px-6 bg-cyan-400 text-white  text-center rounded-r-lg hover:bg-pink-400 ">Search </button>
                </div>
                <div className=" flex justify-end text-2xl items-center font-semibold gap-5">
                    <p ><SiShopee></SiShopee></p>
                    <p onClick={() => setToggel(!toggel)}>{toggel ? <FaAlignRight></FaAlignRight> : <ImCross></ImCross>}</p>
                </div>
            </div>
            <div className=" hidden lg:flex items-center justify-between p-8  ">
                <div className=" flex-1">
                    <ul className=" text-xl flex  items-center justify-between ">
                        {manu}
                    </ul>
                </div>
                <div className=" flex-1 flex justify-end text-3xl font-semibold gap-8">
                    <p className=" flex items-center gap-4 text-xl"> <FaHeadphones></FaHeadphones><span>(+01)-800-3456</span></p>
                </div>
            </div>
            <div className=" w-full h-full bg-black bg-opacity-30 absolute top-0 left-0 flex justify-end z-50">
                <div className=" h-full w-80 p-10  bg-white  ">
                    <div className=" border-b-2 pb-10">
                        <div className=" flex h-12 border-2 justify-between items-center ">
                            <input className=" border-r-2 w-full h-full outline-none p-2" placeholder="Search Here...." type="search" name="" id="" />
                            <button className=" text-center p-5 text-2xl"><FiSearch></FiSearch> </button>
                        </div>
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
        </nav>
    );
};

export default Navbar;