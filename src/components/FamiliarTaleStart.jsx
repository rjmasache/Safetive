import TaleButton from "./TaleButton.jsx";

export default function FamiliarTaleStart({ title, text, image, alt }) {
    return (
        <section className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center justify-center">
                <p className="p-2 font-comic text-2xl font-black">{title}</p>
                <p className="w-3/4 p-2 text-center font-comic text-2xl">
                    {text}
                </p>
            </div>
            <div className="relative w-full sm:w-3/4">
                <img src={image} alt={alt} className="w-full" />
                <div className="absolute bottom-0 right-0 m-5 sm:top-0 sm:m-10">
                    <TaleButton text="Siguiente" to="/familiar-tale-part-1" />
                </div>
            </div>
        </section>
    );
}
