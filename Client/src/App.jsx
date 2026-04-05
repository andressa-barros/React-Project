import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Jogos from "./components/Jogos";
import AddJogos from "./components/AddJogos";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Jogos />} />
          <Route path="/add" element={<AddJogos />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
