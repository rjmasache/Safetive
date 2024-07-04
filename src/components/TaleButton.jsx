export default function TaleButton({ text, onClick }) {
    return (
        <button
            className="rounded-2xl bg-safetive px-2 py-3 font-comic font-black text-link sm:px-14"
            onClick={onClick}
        >
            {text}
        </button>
    );
}
