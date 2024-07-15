import scholarTaleBruce18 from "../assets/scholar-tale-bruce-18.jpg";
import scholarTaleBruce19 from "../assets/scholar-tale-bruce-19.jpg";
import { Link } from "react-router-dom";
import TaleButton from "./TaleButton";

export default function EndPageTale({ good, bad }) {
    return (
        <section className="mt-10 flex w-full flex-col flex-wrap items-center justify-center sm:flex-row">
            <div className="flex w-1/2 flex-col items-center justify-center">
                <img src={scholarTaleBruce18} className="w-1/2 rounded" />
                <p className="p-2 font-comic text-base font-black sm:text-xl">
                    Decisiones buenas
                </p>
                <p className="font-comic text-3xl font-black">{good}</p>
            </div>
            <div className="flex w-1/2 flex-col items-center justify-center">
                <img src={scholarTaleBruce19} className="w-1/2 rounded" />
                <p className="p-2 font-comic text-base font-black sm:text-xl">
                    Decisiones diferentes
                </p>
                <p className="font-comic text-3xl font-black">{bad}</p>
            </div>
            <div className="mt-10">
                <Link to={`/tales`}>
                    <TaleButton
                        text="Regresar a Cuentos"
                        classNameButton="rounded-2xl bg-safetive px-2 py-3 font-comic text-link sm:px-14 text-sm sm:text-lg"
                    />
                </Link>
            </div>
        </section>
    );
}
