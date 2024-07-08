import image1 from "./hero-1.jpg";
import image2 from "./hero-2.jpg";
import image3 from "./hero-3.jpg";
import image4 from "./hero-4.jpg";
import image5 from "./other-hero-1.jpg";
import image6 from "./other-hero-2.jpg";
import picture1 from "./picture-1.jpg";
import picture2 from "./picture-2.jpg";
import familiarImage1 from "./familiar-image-1.jpg";
import familiarImage2 from "./familiar-image-2.jpeg";
import familiarImage3 from "./familiar-image-3.jpeg";
import familiarImage4 from "./familiar-image-4.jpg";
import familiarImage5 from "./familiar-image-5.jpeg";
import firstOptionImage1 from "./first-option-image-1.jpg";
import firstOptionImage2 from "./first-option-image-2.jpeg";
import firstOptionImage3 from "./first-option-image-3.jpg";
import secondOptionImage1 from "./second-option-image-1.jpeg";
import secondOptionImage2 from "./second-option-image-2.jpeg";
import secondOptionImage3 from "./second-option-image-3.jpeg";
import secondOptionImage4 from "./second-option-image-4.jpeg";

export const herosGallery = [
    {
        id: 1,
        name: "Image 1",
        src: image1,
        alt: "One",
    },
    {
        id: 2,
        name: "Image 2",
        src: image2,
        alt: "Two",
    },
    {
        id: 3,
        name: "Image 3",
        src: image3,
        alt: "Three",
    },
    {
        id: 4,
        name: "Image 4",
        src: image4,
        alt: "Four",
    },
];

export const otherHeroesGallery = [
    {
        id: 5,
        name: "Image 5",
        src: image5,
        alt: "Five",
    },
    {
        id: 6,
        name: "Image 6",
        src: image6,
        alt: "Six",
    },
];

export const aboutGallery = [
    {
        id: 7,
        name: "Picture 1",
        src: picture1,
        alt: "Seven",
    },
    {
        id: 8,
        name: "Picture 2",
        src: picture2,
        alt: "Eight",
    },
];

export const familiarTaleImages = [
    {
        id: 9,
        title: "APRENDIENDO A VOLAR",
        text: "Bruce quería llegar temprano a casa porque quería contarle a sus padres que hoy en su escuela había logrado volar por primera vez",
        src: familiarImage1,
        alt: "Nine",
    },
    {
        id: 10,
        title: "APRENDIENDO A VOLAR",
        text: "Mientras buscaba a sus padres se le ocurrió la idea de llegar volando para sorprenderlos, pero no se dió cuenta de que un adorno estaba cerca de él",
        src: familiarImage2,
        alt: "Ten",
    },
    {
        id: 11,
        title: "APRENDIENDO A VOLAR",
        text: "Cuando de repente ¡Crag! Bruce se asustó porque sabía que rompió el adorno favorito de su mamá",
        src: familiarImage3,
        alt: "Eleven",
    },
    {
        id: 12,
        title: "APRENDIENDO A VOLAR",
        text: "Mamá y papá escucharon el fuerte sonido y se acercaron de inmediato. Al ver el adorno roto, ¿qué crees que sucedió?",
        src: familiarImage4,
        otherSrc: familiarImage5,
        alt: "Twelve",
    },
];

export const firstOptionTale = [
    {
        id: 1,
        title: "APRENDIENDO A VOLAR",
        text: "Bruce respondió: Sí, pero quería contarles algo y accidentalmente rompí el adorno favorito de mamá",
        src: familiarImage4,
        alt: "Thirteen",
    },
    {
        id: 2,
        title: "APRENDIENDO A VOLAR",
        text: "Sus padres le dijeron: No te preocupes hijo, lo importante es que no te hayas lastimado. El adorno se puede arreglar después",
        src: firstOptionImage1,
        alt: "Fourteen",
    },
    {
        id: 3,
        title: "APRENDIENDO A VOLAR",
        text: "Bruce se sintió tranquilo y se disculpó con sus padres. Después, junto con ellos recogieron con mucho cuidado los trozos del adorno",
        src: firstOptionImage2,
        alt: "Fifteen",
    },
    {
        id: 4,
        title: "APRENDIENDO A VOLAR",
        text: `Al terminar, su papá le preguntó: ¿Qué nos querías contar hijo?
        Bruce le dijo: Vamos al patio para mostrarles lo que puedo hacer.
        Ellos lo siguieron y él de inmediato empezó a volar. Sus padres estuvieron muy felices porque su hijo les enseñó lo que aprendió y por el gran esfuerzo que hizo para lograrlo`,
        src: firstOptionImage3,
        alt: "Sixteen",
    },
];

export const secondOptionTale = [
    {
        id: 1,
        title: "APRENDIENDO A VOLAR",
        text: `Papá gritando dijo: ¿Qué fue lo que hiciste?
        Bruce asustado respondió: Accidentalmente rompí un adorno`,
        src: familiarImage5,
        alt: "Seventeen",
    },
    {
        id: 2,
        title: "APRENDIENDO A VOLAR",
        text: `Su madre enojada respondió: ¡Es mi adorno favorito! ¡¿Por qué no tienes cuidado al hacer las cosas?!`,
        src: secondOptionImage1,
        alt: "Eighteen",
    },
    {
        id: 3,
        title: "APRENDIENDO A VOLAR",
        text: "Entonces sus padres lo castigaron, hicieron que Bruce sienta dolor y miedo por sus gritos",
        src: secondOptionImage2,
        alt: "Nineteen",
    },
    {
        id: 4,
        title: "APRENDIENDO A VOLAR",
        text: `Al día siguiente el profesor de Bruce notó que él estaba triste, así que le preguntó: ¿Qué te pasa, Bruce?
        Bruce, muy triste, le respondió: Me siento mal porque mamá y papá me castigaron muy feo y no es la primera vez
        El profesor le dijo: Lo siento mucho, Bruce. Nadie debe hacerte daño, por eso es muy importante que le cuentes a alguien como yo para poder ayudarte a encontrar una solución`,
        src: secondOptionImage3,
        alt: "Twenty",
    },
    {
        id: 5,
        title: "APRENDIENDO A VOLAR",
        text: "Luego el profesor habló con los padres de Bruce y poco a poco la casa de Bruce se convirtió en un lugar más tranquilo y feliz, donde todos podían cometer errores y aprender de ellos sin miedo",
        src: secondOptionImage4,
        alt: "Twenty-one",
    },
];
