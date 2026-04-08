import { Link } from "react-router-dom";
import "../styles/jogos.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Jogos() {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJogos = async () => {
      try {
        const response = await axios.get("http://localhost:8800/jogos");
        setJogos(response.data);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJogos();
  }, []);

  const deleteJogos = async (id_jogos, e) => {
    e.preventDefault();

    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este jogo?",
    );

    if (!confirmar) return;

    try {
      await axios.delete(`http://localhost:8800/jogos/${id_jogos}`);

      setJogos((prevJogos) =>
        prevJogos.filter((jogo) => jogo.id_jogos !== id_jogos),
      );
    } catch (error) {
      console.error("Erro ao excluir jogo:", error);
      alert("Erro ao excluir jogo.");
    }
  };

  return (
    <div className="pagina-jogos">
      <div className="cabecalho-jogos">
        <h1 id="title-app">Catálogo de Jogos</h1>
      </div>

      {loading && <p className="mensagem-status">Carregando jogos...</p>}

      {!loading && jogos.length === 0 && (
        <p className="mensagem-status">Nenhum jogo cadastrado ainda.</p>
      )}

      <div className="div-jogos">
        {jogos.map((jogo) => (
          <div className="jogo" key={jogo.id_jogos}>
            <Link to={`/info/${jogo.id_jogos}`} className="link-jogo">
              <img
                src={`http://localhost:8800/uploads/${jogo.imagem}`}
                alt={jogo.nome}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/220x240?text=Sem+Imagem";
                }}
              />

              <p className="nome-jogo">{jogo.nome}</p>
            </Link>

            <div className="acoes">
              <button className="botao-editar">Editar</button>

              <button
                className="botao-excluir"
                onClick={(e) => deleteJogos(jogo.id_jogos, e)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}

        <Link to="/add" className="botao-novo-jogo">
          <span className="icone-mais">+</span>
          <span className="texto-novo-jogo">Adicionar</span>
          <span className="texto-novo-jogo">Novo Jogo</span>
        </Link>
      </div>
    </div>
  );
}

export default Jogos;
