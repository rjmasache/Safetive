import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FamiliarTaleParts from "../components/FamiliarTaleParts.jsx";

export default function FamiliarTale() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-character">
            <Navigation />
            <FamiliarTaleParts />
            <Footer />
        </div>
    );
}
