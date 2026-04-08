import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Jogos from "./components/Jogos";
import AddJogos from "./components/AddJogos";
import Footer from "./components/Footer";
import InfoJogos from "./components/InfoJogos";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Jogos />} />
          <Route path="/add" element={<AddJogos />} />
          <Route path="/info/:id" element={<InfoJogos />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
