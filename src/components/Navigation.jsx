import safetiveLogo from "../assets/safetive-logo.svg";
import mobileMenu from "../assets/mobile-menu.svg";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="flex w-full flex-row items-center justify-evenly bg-navbar p-3">
            <Link to={`/`} className="hover:text-hover font-comic text-link">
                <img src={safetiveLogo} alt="Safetive" className="w-14" />
            </Link>
            <Link
                to={`/`}
                className="hover:text-hover invisible font-comic sm:visible sm:text-link"
            >
                Inicio
            </Link>
            <Link
                to={`/tales`}
                className="hover:text-hover invisible font-comic sm:visible sm:text-link"
            >
                Cuentos
            </Link>
            <Link
                to={`/about`}
                className="hover:text-hover invisible font-comic sm:visible sm:text-link"
            >
                Sobre nosotros
            </Link>
            <button>
                <img src={mobileMenu} alt="Menu" className="w-14 sm:hidden" />
            </button>
        </div>
    );
}
