import { useState } from "react";
import { firstOptionTale } from "../assets/gallery.js";
import { Link } from "react-router-dom";
import TaleButton from "./TaleButton";

export default function FirstOptionTale({ onClickBack }) {
    const [currentOption, setCurrentOption] = useState(0);
    const currentContent = firstOptionTale[currentOption];

    function handlePreviousClick() {
        setCurrentOption(currentOption - 1);
    }

    function handleNextClick() {
        setCurrentOption(currentOption + 1);
    }

    return (
        <>
            <div className="flex min-h-screen w-full flex-col bg-character">
                <section className="flex w-full flex-col items-center justify-center">
                    <div className="flex w-full flex-col items-center justify-center">
                        <p className="p-2 font-comic text-base font-black sm:text-2xl">
                            {currentContent.title}
                        </p>
                        <p className="w-full p-2 text-center font-comic text-base sm:text-xl">
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
                            {currentOption === 0 ? (
                                <Link>
                                    <TaleButton
                                        text="Anterior"
                                        onClick={onClickBack}
                                        classNameButton="rounded-2xl bg-safetive px-2 py-3 font-comic text-sm sm:text-lg text-link sm:px-14"
                                    />
                                </Link>
                            ) : (
                                <TaleButton
                                    text="Anterior"
                                    onClick={handlePreviousClick}
                                    classNameButton="rounded-2xl bg-safetive px-2 py-3 font-comic text-link sm:px-14 text-sm sm:text-lg"
                                />
                            )}
                        </div>
                        <div className="absolute bottom-0 right-0 m-3 sm:top-0 sm:m-10">
                            {currentOption >= firstOptionTale.length - 1 ? (
                                <Link to={`/tales`}>
                                    <TaleButton
                                        text="Fin"
                                        classNameButton="rounded-2xl bg-safetive px-2 py-3 font-comic text-sm sm:text-lg text-link sm:px-14"
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
        </>
    );
}
