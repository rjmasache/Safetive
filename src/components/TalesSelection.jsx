import familiar from "../assets/Familiar.jpg";
import scholar from "../assets/Educative.jpg";
import select from "../assets/Select.png";
import { Link } from "react-router-dom";

export default function TalesSelection() {
    return (
        <>
            <section className="flex w-full flex-col sm:flex-row">
                <TalesSelectionItem category={familiar} type={"familiar"} />
                <TalesSelectionItem category={scholar} type={"escolar"} />
            </section>
            <div className="flex w-full items-center justify-center p-5">
                <img src={select} alt="Select" className="w-1/2 sm:w-1/5" />
            </div>
        </>
    );
}

export function TalesSelectionItem({ category, type }) {
    return (
        <div className="flex h-full w-full flex-col flex-wrap items-center justify-evenly">
            <img src={category} alt="Contexto familiar" className="w-3/5 p-5" />
            <Link to={`/characters`}>
                <button className="rounded-2xl bg-safetive p-3 font-comic font-black text-link">
                    Aventura {type}
                </button>
            </Link>
        </div>
    );
}
