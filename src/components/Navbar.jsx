import { Link } from "react-router-dom"
import { menu } from "../constants"
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
    const [active, setActive] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="fixed top-0 z-10 bg-white shadow-lg w-full px-8 h-16 py-4 flex items-center justify-between font-poppins">
            <div>
                <h1 className="text-2xl font-semibold">
                    <Link to="/" className="text-2xl text-primary font-poppins">
                        Globallearning360
                    </Link>
                </h1>
            </div>
            <ul className="hidden lg:flex items-center gap-20">
                {menu.map(item => (
                    <li key={item.id} className={`text-md font-semibold text-secondary transition-all ease-in duration-500 hover:text-primary  ${active === item.id ? 'underline decoration-solid underline-offset-[22px]  decoration-4 decoration-primary ' : ''}`} onClick={() => setActive(item.id)}>
                        <Link to={`${item.path}`}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="md:hidden  cursor-pointer">
                <HiOutlineMenu size={28} onClick={toggleMenu} />
            </div>
            <div className={`absolute xl:hidden top-20 py-8 left-0 w-full bg-white shadow-lg z-10 flex flex-col items-center gap-7 transform transition-transform ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                {menu.map(item => (
                    <li key={item.id} className={`text-md font-semibold text-secondary list-none transition-all ease-in duration-500 hover:text-primary  ${active === item.id ? 'underline decoration-solid underline-offset-[22px]  decoration-4 decoration-primary ' : ''}`} onClick={() => {
                        setActive(true)
                        setIsOpen(false)
                    }}>
                        <Link to={`${item.path}`}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Navbar