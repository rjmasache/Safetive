import safetiveLogo from "../assets/safetive-logo.svg";

export default function Navigation() {
  return (
    <div className="flex h-16 w-full flex-row flex-wrap items-center justify-evenly bg-navbar">
      <a href="#" className="font-comic text-link">
        <img src={safetiveLogo} alt="Safetive" className="w-14" />
      </a>
      <a className="font-comic text-link" href="#">
        Inicio
      </a>
      <a className="font-comic text-link" href="#">
        Cuentos
      </a>
      <a className="font-comic text-link" href="#">
        Sobre nosotros
      </a>
    </div>
  );
}
