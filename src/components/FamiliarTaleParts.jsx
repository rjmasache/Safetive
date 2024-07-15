import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import TaleButton from "./TaleButton.jsx";
import Footer from "./Footer.jsx";

export default function FamiliarTaleParts({
    path,
    tale,
    firstLink,
    secondLink,
}) {
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

    const currentContent = tale[currentIndex];

    if (currentContent.otherImage) {
        return (
            <>
                <Navigation />
                <div className="flex min-h-screen w-full flex-col bg-character">
                    <section className="flex w-full flex-col items-center justify-center">
                        <div className="flex w-full flex-col items-center justify-center">
                            <p className="p-2 font-comic text-base font-black sm:text-xl">
                                {currentContent.title}
                            </p>
                            <p className="w-3/4 p-2 text-center font-comic text-base sm:text-xl">
                                {currentContent.text}
                            </p>
                        </div>
                        <div className="relative flex w-full flex-col justify-evenly sm:flex-row">
                            <div className="relative flex w-full justify-center sm:w-1/2">
                                <div className="absolute left-0 top-0 ml-12 mt-2 w-full sm:ml-24">
                                    <TaleButton
                                        text="Anterior"
                                        onClick={handlePreviousClick}
                                        classNameButton="rounded-2xl px-2 py-2 bg-safetive font-comic text-link text-sm sm:text-xl"
                                    />
                                </div>
                                <img
                                    src={currentContent.image}
                                    alt={currentContent.alt}
                                    className="w-4/5"
                                />
                                <div className="absolute bottom-0 m-3 flex w-3/4 justify-center">
                                    <Link to={firstLink}>
                                        <TaleButton
                                            text={currentContent.answer1}
                                            classNameButton="rounded-2xl px-2 py-2 bg-safetive font-comic text-link text-sm sm:text-xl"
                                            onClick={() => setCurrentIndex(0)}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="relative flex w-full justify-center sm:w-1/2">
                                <img
                                    src={currentContent.otherImage}
                                    alt={currentContent.alt}
                                    className="w-4/5"
                                />
                                <div className="absolute bottom-0 m-3 flex w-3/4 justify-center">
                                    <Link to={secondLink}>
                                        <TaleButton
                                            text={currentContent.answer2}
                                            classNameButton="rounded-2xl px-2 py-2 bg-safetive font-comic text-link text-sm sm:text-xl"
                                            onClick={() => setCurrentIndex(0)}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navigation />
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
                            src={currentContent.image}
                            alt={currentContent.alt}
                            className="w-full"
                        />
                        <div className="absolute bottom-0 left-0 m-3 sm:top-0 sm:m-10">
                            {path === "/familiar-tale-bruce" ||
                            path === "/familiar-tale-wanda" ? (
                                <Link to={`/familiar-characters`}>
                                    <TaleButton
                                        text="Anterior"
                                        onClick={() => setCurrentIndex(0)}
                                        classNameButton="rounded-2xl bg-safetive px-2 py-3 font-comic text-sm sm:text-lg text-link sm:px-14"
                                    />
                                </Link>
                            ) : (
                                <TaleButton
                                    text="Anterior"
                                    onClick={handlePreviousClick}
                                    classNameButton={
                                        currentIndex === 0
                                            ? "rounded-2xl bg-safetive px-2 py-3 font-comic text-link sm:px-14 text-sm sm:text-l invisible"
                                            : "rounded-2xl bg-safetive px-2 py-3 font-comic text-link sm:px-14 text-sm sm:text-lg"
                                    }
                                />
                            )}
                        </div>
                        <div className="absolute bottom-0 right-0 m-3 sm:top-0 sm:m-10">
                            {currentIndex === tale.length - 1 ? (
                                <Link to={`/familiar-characters`}>
                                    <TaleButton
                                        text="Fin"
                                        onClick={() => setCurrentIndex(0)}
                                        classNameButton="rounded-2xl bg-safetive px-2 py-3 font-comic text-link sm:px-14 text-sm sm:text-lg"
                                    />
                                </Link>
                            ) : (
                                <TaleButton
                                    text="Siguiente"
                                    onClick={handleNextClick}
                                    classNameButton="rounded-2xl bg-safetive px-2 py-3 font-comic text-link sm:px-14 text-sm sm:text-lg"
                                />
                            )}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
