import { Link } from "react-router-dom"
import { menu } from "../constants"
import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(1);

    return (
        <div className="fixed top-0 z-10 bg-white shadow-lg w-full px-8 h-16 py-4 flex items-center justify-between font-sans">
            <div>
                <h1 className="text-2xl font-semibold">
                    <Link to="/" className="text-2xl text-primary font-poppins">
                        Global Learning 360
                    </Link>
                </h1>
            </div>
            <ul className="flex items-center gap-20">
                {menu.map(item => (
                    <li key={item.id} className={`text-md font-semibold text-secondary transition-all ease-in duration-500 hover:text-primary  ${active === item.id ? 'underline decoration-solid underline-offset-[22px]  decoration-4 decoration-primary ' : ''}`} onClick={() => setActive(item.id)}>
                        <Link to={`${item.path}`}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar