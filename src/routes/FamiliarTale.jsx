import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FamiliarTaleParts from "../components/FamiliarTaleParts.jsx";
import { familiarTaleImages } from "../assets/gallery.js";
import { useState } from "react";

export default function FamiliarTale() {
    const [image, setImage] = useState(0);

    function handlePreviousClick(e) {
        e.stopPropagation();
        e.preventDefault();

        setImage(
            (prevImage) =>
                (prevImage - 1 + familiarTaleImages.length) %
                familiarTaleImages.length,
        );
    }

    function handleNextClick(e) {
        e.stopPropagation();
        e.preventDefault();

        setImage((prevImage) => (prevImage + 1) % familiarTaleImages.length);
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-character">
            <Navigation />
            <FamiliarTaleParts
                image={image}
                onPreviousClick={handlePreviousClick}
                onNextClick={handleNextClick}
            />
            <Footer />
        </div>
    );
}
