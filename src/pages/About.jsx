import { Link } from "../Link";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          style={{ borderRadius: "50%", width: "7rem" }}
          src="https://github.com/emmanuel-cruz-dev.png"
          alt="Foto de Emmanuel"
        />
      </div>
      <p>¡Hola! Soy Emmanuel y estoy creando un clon de React Router.</p>
      <Link to={"/"}>Ir a la home</Link>
    </>
  );
}
