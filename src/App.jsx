import { lazy, Suspense } from "react";
import "./App.css";
import HomePage from "./pages/Home";
// import AboutPage from "./pages/About";
const LazyAboutPage = lazy(() => import("./pages/About"));
import Page404 from "./pages/404";
import SearchPage from "./pages/SearchPage";

import { Router } from "./Router";
import Route from "./Route";

const appRoutes = [
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
