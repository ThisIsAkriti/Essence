import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <div className=" flex">
                <div className="text-3xl">Essence</div>
                <div className="flex gap-x-2 ">
                    <CiSquarePlus className="text-[40px]"/>
                    <MdOutlineLightMode className="text-[40px]" />
                </div>
            </div>
        </>
    )
}

export default Navbar;