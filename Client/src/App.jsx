import "./App.css";
import Jogos from "./components/Jogos";
import AddJogos from "./components/AddJogos";
function App() {
  return (
    <div className="div-app">
      <h1 id="title-app">Catálogo de Jogos</h1>
      <Jogos />
      <AddJogos />
    </div>
  );
}

export default App;
