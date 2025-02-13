
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <>
            <div className="flex justify-center"> 
                <div className=" flex sm:w-[80vw] w-full mx-4 justify-between py-8">
                    <div className="text-4xl"  style={{ fontFamily: "'Lobster', cursive" }}>Essence</div>
                    <div className="flex gap-x-2 ">
                        <Link to={"/createPage"}>
                            <button><CiSquarePlus className="text-[40px] cursor-pointer"/></button>
                        </Link>

                        <div><ThemeToggle/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;