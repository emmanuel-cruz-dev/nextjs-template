import { useState } from "react";
import { useEffect } from "react";
import { EVENTS } from "./consts";
import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

export function navigate(href) {
  window.history.pushState({}, "", href);
  // Crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);
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
