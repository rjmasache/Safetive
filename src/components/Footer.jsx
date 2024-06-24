import logo from "../assets/utpl-logo.png";

export default function Footer() {
    return (
        <footer className="relative inset-x-0 bottom-0 flex w-full flex-col items-center justify-evenly bg-navbar p-5 sm:flex-row">
            <p className="font-comic text-link">2024 Safetive ®</p>
            <p className="font-comic text-link">Carrera de Psicopedagogía</p>
            <img src={logo} alt="Logo UTPL" className="w-1/5 sm:w-1/12" />
        </footer>
    );
}
