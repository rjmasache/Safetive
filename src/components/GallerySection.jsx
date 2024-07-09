import { useState } from "react";
import { herosGallery, otherHeroesGallery } from "../assets/gallery.js";

export default function GallerySection() {
    return (
        <section className="flex w-full flex-col items-center justify-center sm:flex-row">
            <Slider images={herosGallery} />
            <Slider images={otherHeroesGallery} />
        </section>
    );
}

export function Slider({ images }) {
    const [currentImage, setCurrentImage] = useState(0);

    function handleNextClick() {
        setCurrentImage(currentImage + 1);

        if (currentImage >= images.length - 1) {
            setCurrentImage(0);
        }
    }

    function handlePreviousClick() {
        setCurrentImage(currentImage - 1);

        if (currentImage <= 0) {
            setCurrentImage(images.length - 1);
        }
    }

    let hero = images[currentImage];

    // setInterval(() => {
    //     handleNextClick();
    // }, 1000);

    return (
        <div className="m-2 flex w-full items-center justify-center sm:m-0 sm:w-1/2">
            <div className="flex flex-col items-center justify-center">
                <button
                    className="m-4 flex size-6 items-center justify-center rounded-full bg-slate-300 sm:size-8"
                    onClick={handlePreviousClick}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-3 font-bold text-white sm:size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex h-52 basis-3/5 sm:h-96">
                <img src={hero.src} alt={hero.alt} className="w-full" />
            </div>

            <div className="flex items-center justify-center">
                <button
                    className="m-4 flex size-6 items-center justify-center rounded-full bg-slate-300 sm:size-8"
                    onClick={handleNextClick}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-3 font-bold text-white sm:size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
