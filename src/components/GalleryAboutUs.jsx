import test from "../assets/wallpaper.jpg";

export default function GalleryAboutUs() {
    return (
        <section className="flex w-full items-center justify-center p-10">
            <div className="m-2 flex w-1/2 items-center justify-center">
                <button className="inset-y-0 left-0 top-0 m-2 flex size-4 items-center justify-center rounded-full bg-slate-200 sm:m-4 sm:size-6">
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

                <img src={test} alt="Test" className="w-10/12" />

                <button className="inset-y-0 right-0 top-0 m-2 flex size-4 items-center justify-center rounded-full bg-slate-200 sm:m-4 sm:size-6">
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
        </section>
    );
}
