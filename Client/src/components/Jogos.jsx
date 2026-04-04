import "../styles/jogos.css";
import minecraftImg from "../assets/minecraft.jpg";
import bluePrinceImg from "../assets/bluePrince.jpg";
import tlouImg from "../assets/tlou2.jpg";
import elderRingImg from "../assets/elderRing.jpg";

function Jogos() {
  return (
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

      <div className="novo-jogo">
        <button className="botao-novo-jogo">
          <span className="icone-mais">+</span>
          <span className="texto-novo-jogo">Adicionar</span>
          <span className="texto-novo-jogo">Novo Jogo</span>
        </button>
      </div>
    </div>
  );
}

export default Jogos;
