import { useState } from "react";
import { aboutGallery } from "../assets/gallery.js";

export default function GalleryAboutUs() {
    const [currentImage, setCurrentImage] = useState(0);

    function handleNextClick() {
        setCurrentImage(currentImage + 1);

        if (currentImage >= aboutGallery.length - 1) {
            setCurrentImage(0);
        }
    }

    function handlePreviousClick() {
        setCurrentImage(currentImage - 1);

        if (currentImage <= 0) {
            setCurrentImage(aboutGallery.length - 1);
        }
    }

    let picture = aboutGallery[currentImage];

    return (
        <section className="mt-20 flex w-full items-center justify-center">
            <div className="flex h-full w-10/12 items-center justify-center">
                <div className="flex h-full items-center justify-center">
                    <button
                        className="inset-y-0 left-0 top-0 m-2 flex size-4 items-center justify-center rounded-full bg-slate-200 sm:m-4 sm:size-6"
                        onClick={handlePreviousClick}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-2 font-bold text-white sm:size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5 8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex h-full basis-2/3 items-center justify-center">
                    <img
                        src={picture.src}
                        alt={picture.name}
                        className="h-full w-full"
                    />
                </div>
                <div className="flex h-full items-center justify-center">
                    <button
                        className="inset-y-0 right-0 top-0 m-2 flex size-4 items-center justify-center rounded-full bg-slate-200 sm:m-4 sm:size-6"
                        onClick={handleNextClick}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-2 font-bold text-white sm:size-4"
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
