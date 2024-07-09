import { useState, useEffect } from "react";
import { aboutGallery } from "../assets/gallery.js";

export default function GalleryAboutUs() {
    const [currentImage, setCurrentImage] = useState(0);

    function handleNextClick() {
        setCurrentImage(currentImage + 1);

        if (currentImage >= aboutGallery.length - 1) {
            setCurrentImage(0);
        }
    }

    function handlePreviousClick(e) {
        setCurrentImage(currentImage - 1);

        if (currentImage <= 0) {
            setCurrentImage(aboutGallery.length - 1);
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(
                (prevImage) => (prevImage + 1) % aboutGallery.length,
            );
        }, 1500);

        return () => clearInterval(intervalId);
    }, [aboutGallery.length]);

    let picture = aboutGallery[currentImage];

    return (
        <section className="mt-10 flex w-full items-center justify-center">
            <div className="flex w-full items-center justify-center sm:w-3/5">
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
                <div className="flex basis-4/5 items-center justify-center">
                    <img
                        src={picture.src}
                        alt={picture.name}
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
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
        </section>
    );
}
