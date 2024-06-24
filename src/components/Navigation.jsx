import safetiveLogo from "../assets/safetive-logo.svg";
import mobileMenu from "../assets/mobile-menu.svg";

export default function Navigation() {
    return (
        <div className="flex w-full flex-row items-center justify-evenly bg-navbar p-3">
            <a href="#" className="font-comic text-link">
                <img src={safetiveLogo} alt="Safetive" className="w-14" />
            </a>
            <a
                className="invisible font-comic sm:visible sm:text-link"
                href="#"
            >
                Inicio
            </a>
            <a
                className="invisible font-comic sm:visible sm:text-link"
                href="#"
            >
                Cuentos
            </a>
            <a
                className="invisible font-comic sm:visible sm:text-link"
                href="#"
            >
                Sobre nosotros
            </a>
            <button>
                <img src={mobileMenu} alt="Menu" className="w-14 sm:hidden" />
            </button>
        </div>
    );
}
