import TaleButton from "./TaleButton.jsx";
import FamiliarTaleOptions from "./FamiliarTaleOptions.jsx";
import { startBruceTale } from "../assets/tales.js";
import { Link } from "react-router-dom";

export default function FamiliarTaleParts({
    currentIndex,
    onPreviousClick,
    onNextClick,
}) {
    const currentContent = startBruceTale[currentIndex];

    if (currentIndex === 3) {
        return (
            <FamiliarTaleOptions
                currentIndex={currentIndex}
                onPreviousClick={onPreviousClick}
            />
        );
    }

    return (
        <>
            <div className="flex min-h-screen w-full flex-col bg-character">
                <section className="flex w-full flex-col items-center justify-center">
                    <div className="flex w-full flex-col items-center justify-center">
                        <p className="p-2 font-comic text-base font-black sm:text-2xl">
                            {currentContent.title}
                        </p>
                        <p className="w-4/5 p-2 text-center font-comic text-base sm:text-xl">
                            {currentContent.text}
                        </p>
                    </div>
                    <div className="relative flex w-full sm:w-4/5">
                        <img
                            src={currentContent.src}
                            alt={currentContent.alt}
                            className="w-full"
                        />
                        <div className="absolute bottom-0 left-0 m-3 sm:top-0 sm:m-10">
                            {currentIndex === 0 ? (
                                <Link to={`/familiar-characters`}>
                                    <TaleButton
                                        text="Anterior"
                                        classNameButton="rounded-2xl bg-safetive px-2 py-3 font-comic text-sm sm:text-lg text-link sm:px-14"
                                    />
                                </Link>
                            ) : (
                                <TaleButton
                                    text="Anterior"
                                    onClick={onPreviousClick}
                                    classNameButton="rounded-2xl bg-safetive px-2 py-3 font-comic text-link sm:px-14 text-sm sm:text-lg"
                                />
                            )}
                        </div>
                        <div className="absolute bottom-0 right-0 m-3 sm:top-0 sm:m-10">
                            <TaleButton
                                text="Siguiente"
                                onClick={onNextClick}
                                classNameButton="rounded-2xl bg-safetive px-2 py-3 font-comic text-link sm:px-14 text-sm sm:text-lg"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
