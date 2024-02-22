import { Link } from "react-router-dom";

const ShopDropDown = ({ DropDown }) => {
    return (
        <div>
            <div className={`w-3/4 bg-white absolute shadow-lg left-0 top-24 border p-8 z-50 space-y-10 cursor-pointer ${DropDown ? "block" : "hidden"}`} >
                <div className="grid grid-cols-4 gap-10">
                    <div className="space-y-5">
                        <h3 className=" text-2xl border-b-2 pb-5">Walkers</h3>
                        <ul className=" space-y-3">
                            <li> <Link to={"/Shop"} className=" hover:text-sky-400 ">Play Tents</Link> </li>
                            <li> <Link className=" hover:text-sky-400 ">Play Tents</Link> </li>
                            <li> <Link className=" hover:text-sky-400 ">Play Tents</Link> </li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h3 className=" text-2xl border-b-2 pb-5">Walkers</h3>
                        <ul className=" space-y-3">
                            <li> <Link className=" hover:text-sky-400 ">Play Tents</Link> </li>
                            <li> <Link className=" hover:text-sky-400 ">Play Tents</Link> </li>
                            <li> <Link className=" hover:text-sky-400 ">Play Tents</Link> </li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h3 className=" text-2xl border-b-2 pb-5">Walkers</h3>
                        <ul className=" space-y-3">
                            <li> <Link className=" hover:text-sky-400 ">Play Tents</Link> </li>
                            <li> <Link className=" hover:text-sky-400 ">Play Tents</Link> </li>
                            <li> <Link className=" hover:text-sky-400 ">Play Tents</Link> </li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h3 className=" text-2xl border-b-2 pb-5">Walkers</h3>
                        <ul className=" space-y-3">
                            <li> <Link className=" hover:text-sky-400 ">Play Tents</Link> </li>
                            <li> <Link className=" hover:text-sky-400 ">Play Tents</Link> </li>
                            <li> <Link className=" hover:text-sky-400 ">Play Tents</Link> </li>
                        </ul>
                    </div>

                </div>
                <div>
                    <img className=" rounded-lg" src="https://i.ibb.co/bbddKNr/b3.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ShopDropDown;