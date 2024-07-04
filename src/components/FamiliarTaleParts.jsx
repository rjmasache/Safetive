import TaleButton from "./TaleButton.jsx";
import { familiarTaleImages } from "../assets/gallery.js";
import { useState } from "react";

export default function FamiliarTaleParts() {
    const [image, setImage] = useState(0);

    const currentContent = familiarTaleImages[image];

    function handlePreviousClick() {
        setImage(
            (prevImage) =>
                (prevImage - 1 + familiarTaleImages.length) %
                familiarTaleImages.length,
        );
    }

    function handleNextClick() {
        setImage((prevImage) => (prevImage + 1) % familiarTaleImages.length);
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-character">
            <section className="flex w-full flex-col items-center justify-center">
                <div className="flex w-full flex-col items-center justify-center">
                    <p className="p-2 font-comic text-2xl font-black">
                        {currentContent.title}
                    </p>
                    <p className="w-3/4 p-2 text-center font-comic text-2xl">
                        {currentContent.text}
                    </p>
                </div>
                <div className="relative w-full sm:w-3/4">
                    <img
                        src={currentContent.src}
                        alt={currentContent.alt}
                        className="w-full"
                    />
                    <div className="absolute bottom-0 left-0 m-3 sm:top-0 sm:m-10">
                        <TaleButton
                            text="Anterior"
                            onClick={handlePreviousClick}
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 m-3 sm:top-0 sm:m-10">
                        <TaleButton
                            text="Siguiente"
                            onClick={handleNextClick}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
