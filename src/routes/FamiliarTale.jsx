import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TaleButton from "../components/TaleButton.jsx";
import { familiarTaleImages } from "../assets/gallery.js";

export default function FamiliarTale() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-character">
            <Navigation />
            <FamiliarTaleStart
                title="APRENDIENDO A VOLAR"
                text="Bruce quería llegar temprano a casa porque quería contarle a sus padres que hoy en su escuela había logrado volar por primera vez"
                image={familiarTaleImages[0].src}
                alt={familiarTaleImages[0].alt}
            />
            <Footer />
        </div>
    );
}

export function FamiliarTaleStart({ title, text, image, alt }) {
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
                    <TaleButton text="Siguiente" to={"/familiar-tale-part-1"} />
                </div>
            </div>
        </section>
    );
}
