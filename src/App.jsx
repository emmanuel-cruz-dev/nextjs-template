import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { EVENTS } from "./consts";

function navigate(href) {
  window.history.pushState({}, "", href);
  // Crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Esta es una página de ejemplo para crear un React Router desde cero.
      </p>
      <button onClick={() => navigate("/about")}>Ir a Sobre nosotros</button>
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
      <button onClick={() => navigate("/")}>Ir a la home</button>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
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
