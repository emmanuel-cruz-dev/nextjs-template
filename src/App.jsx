import { useState } from "react";
import { useEffect } from "react";
import { EVENTS } from "./consts";
import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

const routes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
];

function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => null,
}) {
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

  const Page = routes.find(({ path }) => path === currentPath)?.Component;
  return Page ? <Page /> : <DefaultComponent />;
}

function App() {
  return (
    <main>
      <Router routes={routes} />
    </main>
  );
}

export default App;
