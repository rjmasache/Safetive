import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FamiliarTaleParts from "../components/FamiliarTaleParts.jsx";
import { useState } from "react";

export default function FamiliarTale() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handlePreviousClick(e) {
        e.stopPropagation();
        e.preventDefault();

        setCurrentIndex(currentIndex - 1);
    }

    function handleNextClick(e) {
        e.stopPropagation();
        e.preventDefault();

        setCurrentIndex(currentIndex + 1);
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-character">
            <Navigation />
            <FamiliarTaleParts
                currentIndex={currentIndex}
                onPreviousClick={handlePreviousClick}
                onNextClick={handleNextClick}
            />
            <Footer />
        </div>
    );
}
