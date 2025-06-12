import "../styles/reset.css";
import "../styles/style.css";
import Banner from "./components/Banner";
import Carrossel from "./components/Carrossel";
import Timer from "./components/Timer";
import Corrente from "./components/Corrente";
import Texto from "./components/Texto";
import Desenho from "./components/Desenho";

function App() {
  return (
    <>
      <header className="cabecalho"></header>
      <Banner />
      <Corrente />
      <Timer /> {}
      <Carrossel />
      <Texto /> {}
      <Desenho />

      <footer className="rodape">
        <h2 className="rodape__titulo"></h2>
      </footer>
    </>
  );
}

export default App;
