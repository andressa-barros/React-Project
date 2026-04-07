import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/infoJogos.css";

function InfoJogos() {
  const { id } = useParams();
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJogos = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/jogos/${id}`);
        setJogos(response.data);
      } catch (error) {
        console.error("Erro ao buscar jogo:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJogos();
  }, [id]);

  return (
    <div className="info-container">
      {loading ? (
        <p className="mensagem-status">Carregando informações do jogo...</p>
      ) : jogos.length === 0 ? (
        <p className="mensagem-status">Nenhum jogo encontrado.</p>
      ) : (
        jogos.map((jogo) => (
          <div className="info-jogo" key={jogo.id_jogos}>
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
              <p className="nome-jogo">{jogo.nome}</p>
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
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default InfoJogos;
