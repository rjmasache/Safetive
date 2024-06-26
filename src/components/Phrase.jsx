export default function Phrase({ text }) {
    return (
        <section className="flex w-full items-center justify-center p-5 sm:p-20">
            <p className="text-center font-comic text-base sm:w-1/2 sm:text-2xl">
                {text}
            </p>
        </section>
    );
}
