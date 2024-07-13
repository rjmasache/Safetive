import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import FamiliarTaleParts from "../components/FamiliarTaleParts.jsx";
import { useState } from "react";
import { startBruceTale } from "../assets/bruceTale.js";

export default function FamiliarTaleBruce() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handlePreviousClick(e) {
        e.stopPropagation();
        e.preventDefault();

        setCurrentIndex(currentIndex - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function handleNextClick(e) {
        e.stopPropagation();
        e.preventDefault();

        setCurrentIndex(currentIndex + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-character">
            <Navigation />
            <FamiliarTaleParts
                currentIndex={currentIndex}
                onPreviousClick={handlePreviousClick}
                onNextClick={handleNextClick}
                tale={startBruceTale}
            />
            <Footer />
        </div>
    );
}
