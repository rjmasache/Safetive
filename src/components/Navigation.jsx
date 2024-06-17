import safetiveLogo from "../assets/safetive-logo.svg";
import mobileMenu from "../assets/mobile-menu.svg";

export default function Navigation() {
    return (
        <div className="flex h-16 w-full flex-row flex-wrap items-center justify-evenly bg-navbar">
            <a href="#" className="font-comic text-link">
                <img src={safetiveLogo} alt="Safetive" className="w-14" />
            </a>
            <a
                className="invisible font-comic md:visible md:text-link"
                href="#"
            >
                Inicio
            </a>
            <a
                className="invisible font-comic md:visible md:text-link"
                href="#"
            >
                Cuentos
            </a>
            <a
                className="invisible font-comic md:visible md:text-link"
                href="#"
            >
                Sobre nosotros
            </a>
            <button>
                <img src={mobileMenu} alt="Menu" className="w-14 md:hidden" />
            </button>
        </div>
    );
}
