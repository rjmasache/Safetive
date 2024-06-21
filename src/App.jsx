import Footer from "./components/Footer.jsx";
import GallerySection from "./components/GallerySection.jsx";
import MainButton from "./components/MainButton.jsx";
import Navigation from "./components/Navigation.jsx";
import Wallpaper from "./components/Wallpaper.jsx";

export default function App() {
    return (
        <>
            <Navigation />
            <Wallpaper />
            <MainButton />
            <GallerySection />
            <Footer />
        </>
    );
}
