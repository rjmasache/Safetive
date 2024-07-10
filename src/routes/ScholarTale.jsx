import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScholarTaleParts from "../components/ScholarTaleParts.jsx";
import { useState } from "react";

export default function ScholarTale() {
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
            <ScholarTaleParts
                currentIndex={currentIndex}
                onPreviousClick={handlePreviousClick}
                onNextClick={handleNextClick}
            />
            <Footer />
        </div>
    );
}
