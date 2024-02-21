import { Link } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiShopee } from "react-icons/si";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import logo from "../../assets/nav-logo/logo.avif"

const Navbar = () => {
    const manu = <>
        <li><Link>Home</Link></li>
        <li><Link>Shop</Link></li>
        <li><Link>Add product</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
        <li><Link>Register</Link></li>
    </>
    const [toggel, setToggel] = useState(true)
    return (
        <nav>
            <div className=" bg-cyan-400 p-3">
                <p className=" text-white text-center font-semibold">Get 35% off for <Link className=" underline">Summer Collection</Link> - 2024</p>
            </div>
            <div className=" p-5 bg-slate-50 flex justify-around items-center border-b-2 ">
                <img src={logo} alt="" />
                <div className=" w-[500px] h-12 border-2 rounded-lg flex items-center">
                    <input className=" w-full h-full rounded-lg border-none outline-none p-3 " type="search" name="" placeholder="Search your favorite Toy..." id="" />
                    <button className=" py-3 px-6 bg-cyan-400 text-white  text-center rounded-r-lg hover:bg-pink-400 ">Search </button>

                </div>
                <p className=" flex items-center gap-4 text-xl"> <FaHeadphones></FaHeadphones><span>(+01)-800-3456</span></p>
            </div>
            <div className=" flex items-center justify-between  p-8">
                <div className=" flex-1">
                    <ul className=" text-xl flex  items-center justify-between ">
                        {manu}
                    </ul>
                </div>
                <div className=" flex-1 flex justify-end text-3xl font-semibold gap-8">
                    <p ><SiShopee></SiShopee></p>
                    <p onClick={ ()=> setToggel(!toggel)}>{toggel ? <GiHamburgerMenu></GiHamburgerMenu>:<ImCross></ImCross>}</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;