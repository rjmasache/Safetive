export default function TaleButton({ text, onClick, classNameButton }) {
    return (
        <button className={classNameButton} onClick={onClick}>
            {text}
        </button>
    );
}
