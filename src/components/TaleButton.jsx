import { Link } from "react-router-dom";

export default function TaleButton({ text, to }) {
    return (
        <Link to={to}>
            <button className="rounded-2xl bg-safetive px-10 py-3 font-comic font-black text-link sm:px-14">
                {text}
            </button>
        </Link>
    );
}
