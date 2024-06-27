import safetiveLogo from "../assets/safetive-logo.svg";
import mobileMenu from "../assets/mobile-menu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="flex w-full flex-row items-center justify-evenly bg-navbar p-3">
            <Link to={`/`} className="font-comic text-link hover:text-hover">
                <img src={safetiveLogo} alt="Safetive" className="w-14" />
            </Link>
            <Link
                to={`/`}
                className="invisible font-comic hover:text-hover sm:visible sm:text-link"
            >
                Inicio
            </Link>
            <Link
                to={`/tales`}
                className="invisible font-comic hover:text-hover sm:visible sm:text-link"
            >
                Cuentos
            </Link>
            <Link
                to={`/about`}
                className="invisible font-comic hover:text-hover sm:visible sm:text-link"
            >
                Sobre nosotros
            </Link>
            <button onClick={handleClick}>
                <img src={mobileMenu} alt="Menu" className="w-14 sm:hidden" />
                {isOpen ? (
                    <div className="absolute right-2 top-20 flex flex-col flex-wrap items-start justify-evenly rounded bg-navbar p-5 sm:hidden">
                        <Link
                            to={`/tales`}
                            className="font-comic text-link hover:text-hover"
                        >
                            Cuentos
                        </Link>
                        <Link
                            to={`/about`}
                            className="font-comic text-link hover:text-hover"
                        >
                            Sobre nosotros
                        </Link>
                    </div>
                ) : null}
            </button>
        </div>
    );
}
