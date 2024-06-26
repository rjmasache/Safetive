import Navigation from "../components/Navigation";
import Phrase from "../components/Phrase";
import Footer from "../components/Footer";
import GalleryAboutUs from "../components/GalleryAboutUs";
import AboutWallpaper from "../assets/about-wallpaper.jpg";

export default function About() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Navigation />
            <GalleryAboutUs />
            <Phrase text="Somos estudiantes de la carrera de Psicopedagogía de la Universidad Técnica Particular de Loja. Buscamos prevenir la violencia familiar, social y educativa mediante un cuento interactivo dirigido a los niños" />
            <section className="mt-auto w-full">
                <div className="w-full bg-auto bg-top bg-no-repeat sm:h-72">
                    <img
                        src={AboutWallpaper}
                        alt="About wallpaper"
                        className="h-full w-full"
                    />
                </div>
                <Footer />
            </section>
        </div>
    );
}
