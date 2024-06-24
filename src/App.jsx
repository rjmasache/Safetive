import Footer from "./components/Footer.jsx";
import GallerySection from "./components/GallerySection.jsx";
import MainButton from "./components/MainButton.jsx";
import Navigation from "./components/Navigation.jsx";
import Phrase from "./components/Phrase.jsx";
import Wallpaper from "./components/Wallpaper.jsx";

export default function App() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Navigation />
            <Wallpaper />
            <MainButton />
            <GallerySection />
            <Phrase />
            <Footer />
        </div>
    );
}
