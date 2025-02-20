import { Link } from "../Link";

const i18n = {
  es: {
    title: "Sobre nosotros",
    description:
      "¡Hola! Me llamo Emmanuel y estoy creando un clon de React Router.",
    button: "Ir a Home",
  },
  en: {
    title: "About us",
    description:
      "Hi! My name is Emmanuel and I'm building a React Router clone.",
    button: "Go Home",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "es");

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          style={{ borderRadius: "50%", width: "7rem" }}
          src="https://github.com/emmanuel-cruz-dev.png"
          alt="Foto de Emmanuel"
        />
      </div>
      <p>{i18n.description}</p>
      <Link to={"/"}>{i18n.button}</Link>
    </>
  );
}
