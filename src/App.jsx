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
  return (
    <main>
      <h2>React Router</h2>
      <HomePage />
    </main>
  );
}

export default App;
