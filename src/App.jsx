import { useState } from "react";
import "./App.css";

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Esta es una página de ejemplo para crear un React Router desde cero.
      </p>
      <a href="/about">Ir a Sobre nosotros</a>
    </>
  );
}

function AboutPage() {
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
      <a href="/">Ir a la home</a>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  return (
    <main>
      {currentPath == "/" && <HomePage />}
      {currentPath == "/about" && <AboutPage />}
    </main>
  );
}

export default App;
