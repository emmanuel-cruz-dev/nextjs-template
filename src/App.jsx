import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const NAVIGATION_EVENT = "pushstate";

function navigate(href) {
  window.history.pushState({}, "", href);
  // Crear un evento personalizado
  const navigationEvent = new Event(NAVIGATION_EVENT);
  window.dispatchEvent(navigationEvent);
}

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

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(NAVIGATION_EVENT, onLocationChange);
    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
    };
  }, []);

  return (
    <main>
      {currentPath == "/" && <HomePage />}
      {currentPath == "/about" && <AboutPage />}
    </main>
  );
}

export default App;
