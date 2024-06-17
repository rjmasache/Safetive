import safetiveLogo from "../assets/safetive-logo.svg";

export default function Navigation() {
    return (
        <div className="bg-navbar h-16 w-full flex flex-wrap flex-row justify-evenly items-center">
            <a href="#" className="text-link font-comic">
                <img src={safetiveLogo} alt="Safetive" className="w-14" />
            </a>
            <a className="text-link font-comic" href="#">
                Inicio
            </a>
            <a className="text-link font-comic" href="#">
                Cuentos
            </a>
            <a className="text-link font-comic" href="#">
                Sobre nosotros
            </a>
        </div>
    );
}
