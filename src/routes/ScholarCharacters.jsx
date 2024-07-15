import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import TaleButton from "../components/TaleButton.jsx";
import bruce from "../assets/hero-1.jpg";
import wanda from "../assets/hero-2.jpg";
import { Link } from "react-router-dom";

export default function ScholarCharacters() {
    function handleClick() {
        window.scrollTo({ top: 0, behavior: "auto" });
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-character">
            <Navigation />
            <CharacterSelection onClick={handleClick} />
            <Footer />
        </div>
    );
}

export function CharacterSelection({ onClick }) {
    return (
        <section className="mb-10 mt-10 flex w-full items-center justify-center">
            <section className="flex w-4/5 flex-col flex-wrap items-center justify-center bg-white sm:flex-row">
                <section className="flex w-full flex-col flex-wrap items-center justify-center p-5">
                    <p className="text-center font-comic text-lg font-bold leading-normal text-black sm:text-xl">
                        APRENDIENDO A VOLAR
                    </p>
                    <p className="text-center font-comic text-base leading-normal sm:text-lg">
                        A continuación selecciona tu personaje
                    </p>
                </section>
                <section className="flex w-full flex-col items-center justify-around p-5 sm:w-1/2 sm:flex-row">
                    <div className="flex w-full flex-col">
                        <div className="flex w-full sm:items-center sm:justify-center">
                            <img
                                src={bruce}
                                alt="Bruce"
                                className="w-full sm:w-4/5"
                            />
                        </div>
                        <div className="w-full p-5">
                            <p className="text-center font-comic text-base sm:text-xl">
                                Conoce a Bruce, es muy creativo, ágil y veloz.
                                Te sorprenderá su gran memoria y su capacidad
                                para pensar rápidamente.
                            </p>
                            <p className="text-center font-comic text-base font-bold text-black sm:text-lg">
                                ¡Es todo un héroe aventurero!
                            </p>
                        </div>
                        <Link
                            to={`/scholar-tale-bruce`}
                            className="flex items-center justify-center"
                        >
                            <button
                                className="rounded-2xl bg-safetive px-14 py-3 font-comic font-black text-link"
                                onClick={onClick}
                            >
                                Bruce
                            </button>
                        </Link>
                    </div>
                </section>
                <section className="flex w-full flex-col items-center justify-around p-5 sm:w-1/2 sm:flex-row">
                    <div className="flex w-full flex-col">
                        <div className="flex w-full sm:items-center sm:justify-center">
                            <img
                                src={wanda}
                                alt="Wanda"
                                className="w-full sm:w-4/5"
                            />
                        </div>
                        <div className="w-full p-5">
                            <p className="text-center font-comic text-base sm:text-lg">
                                Conoce a Wanda, ¡le encanta la ciencia y
                                tecnología! Su imaginación, astucia y forma de
                                solucionar problemas es impresionante.
                            </p>
                            <p className="text-center font-comic text-base font-bold text-black sm:text-lg">
                                ¡Es toda una científica aventurera!
                            </p>
                        </div>
                        <Link
                            to={`/scholar-tale-wanda`}
                            className="flex items-center justify-center"
                        >
                            <button
                                className="rounded-2xl bg-safetive px-14 py-3 font-comic font-black text-link"
                                onClick={onClick}
                            >
                                Wanda
                            </button>
                        </Link>
                    </div>
                </section>
                <div className="w-full p-5">
                    <Link to={`/tales`}>
                        <TaleButton
                            text={"Regresar"}
                            classNameButton={
                                "rounded-2xl bg-safetive px-4 py-2 font-comic text-sm text-link sm:px-5 sm:text-lg"
                            }
                        />
                    </Link>
                </div>
            </section>
        </section>
    );
}
