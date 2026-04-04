import "./App.css";
import Jogos from "./components/Jogos";
import AddJogos from "./components/AddJogos";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <h1 id="title-app">Catálogo de Jogos</h1>
      <Jogos />
      <AddJogos />
      <Footer />
    </div>
  );
}

export default App;
