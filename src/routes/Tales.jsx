import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import TalesSelection from "../components/TalesSelection";

export default function Tales() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Navigation />
            <TalesSelection />
            <Footer />
        </div>
    );
}
