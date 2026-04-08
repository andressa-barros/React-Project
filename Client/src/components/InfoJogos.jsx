import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/infoJogos.css";

function InfoJogos() {
  const { id } = useParams();
  const [jogo, setJogo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const fetchJogo = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8800/jogos/${id}`);

        // Como seu backend já manda result[0], a resposta é o objeto do jogo
        setJogo(response.data);
        setErro(false);
      } catch (error) {
        console.error("Erro ao buscar jogo:", error);
        setErro(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJogo();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="info-container">
        <p className="mensagem-status">Carregando informações do jogo...</p>
      </div>
    );
  }

  if (erro || !jogo) {
    return (
      <div className="info-container">
        <p className="mensagem-status">
          Jogo não encontrado ou erro no servidor.
        </p>
        <Link to="/" className="botao-voltar">
          Voltar para a lista
        </Link>
      </div>
    );
  }

  return (
    <div className="info-container">
      <div className="info-jogo">
        <div className="img-nome-jogo">
          <img
            className="img-jogo"
            src={`http://localhost:8800/uploads/${jogo.imagem}`}
            alt={jogo.nome}
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/220x240?text=Sem+Imagem";
            }}
          />
          <h1 className="nome-jogo">{jogo.nome}</h1>
        </div>

        <div className="detalhes-jogo">
          <p>
            <strong>Gênero:</strong> {jogo.genero}
          </p>
          <p>
            <strong>Plataforma:</strong> {jogo.plataforma}
          </p>
          <p>
            <strong>Desenvolvedora:</strong> {jogo.desenvolvedora}
          </p>
          <p>
            <strong>Ano de lançamento:</strong> {jogo.ano_lancamento}
          </p>
          <p>
            <strong>Descrição:</strong> {jogo.descricao}
          </p>

          <Link to="/" className="botao-voltar-link">
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InfoJogos;
