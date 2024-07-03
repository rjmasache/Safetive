import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import FamiliarTaleStart from "../components/FamiliarTaleStart.jsx";
import { familiarTaleImages } from "../assets/gallery.js";

export default function FamiliarTale() {
    return (
        <div className="bg-character flex min-h-screen w-full flex-col">
            <Navigation />
            <FamiliarTaleStart
                title="APRENDIENDO A VOLAR"
                text=" Bruce quería llegar temprano a casa porque quería contarle a sus
                padres que hoy en su escuela había logrado volar por primera vez"
                image={familiarTaleImages[0].src}
                alt={familiarTaleImages[0].alt}
            />
            <Footer />
        </div>
    );
}
