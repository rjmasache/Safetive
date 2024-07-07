import { Link } from "react-router-dom";

export default function MainButton() {
    return (
        <div className="flex h-24 w-full items-center justify-center">
            <Link to={`/tales`}>
                <button className="rounded-2xl bg-safetive p-3 font-comic font-black text-link">
                    ¡Empezar la aventura!
                </button>
            </Link>
        </div>
    );
}
