import { Link } from "react-router-dom";
import "../styles/jogos.css";
import minecraftImg from "../assets/minecraft.jpg";
import bluePrinceImg from "../assets/bluePrince.jpg";
import tlouImg from "../assets/tlou2.jpg";
import elderRingImg from "../assets/elderRing.jpg";
import enigmaDoMedoImg from "../assets/enigmaDoMedo.jpg";
import residentEvilImg from "../assets/residentEvil.jpg";

function Jogos() {
  return (
    <div className="pagina-jogos">
      <div className="cabecalho-jogos">
        <h1 id="title-app">Catálogo de Jogos</h1>
      </div>

      <div className="div-jogos">
        <div className="jogo">
          <img src={minecraftImg} alt="Minecraft" />
          <p className="nome-jogo">Minecraft</p>
          <div className="acoes">
            <button className="botao-editar">Editar</button>
            <button className="botao-excluir">Excluir</button>
          </div>
        </div>

        <div className="jogo">
          <img src={bluePrinceImg} alt="Blue Prince" />
          <p className="nome-jogo">Blue Prince</p>
          <div className="acoes">
            <button className="botao-editar">Editar</button>
            <button className="botao-excluir">Excluir</button>
          </div>
        </div>

        <div className="jogo">
          <img src={tlouImg} alt="The Last of Us 2" />
          <p className="nome-jogo">The Last of Us 2</p>
          <div className="acoes">
            <button className="botao-editar">Editar</button>
            <button className="botao-excluir">Excluir</button>
          </div>
        </div>

        <div className="jogo">
          <img src={elderRingImg} alt="Elder Ring" />
          <p className="nome-jogo">Elder Ring</p>
          <div className="acoes">
            <button className="botao-editar">Editar</button>
            <button className="botao-excluir">Excluir</button>
          </div>
        </div>

        <div className="jogo">
          <img src={enigmaDoMedoImg} alt="Enigma do Medo" />
          <p className="nome-jogo">Enigma do Medo</p>
          <div className="acoes">
            <button className="botao-editar">Editar</button>
            <button className="botao-excluir">Excluir</button>
          </div>
        </div>

        <div className="jogo">
          <img src={residentEvilImg} alt="Resident Evil" />
          <p className="nome-jogo">Resident Evil</p>
          <div className="acoes">
            <button className="botao-editar">Editar</button>
            <button className="botao-excluir">Excluir</button>
          </div>
        </div>

        <div>
          <Link to="/add" className="botao-novo-jogo">
            <span className="icone-mais">+</span>
            <span className="texto-novo-jogo">Adicionar</span>
            <span className="texto-novo-jogo">Novo Jogo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Jogos;
