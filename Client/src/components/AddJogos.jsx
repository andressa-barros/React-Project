import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/addJogos.css";

function AddJogos() {
  const navigate = useNavigate();

  const [jogo, setJogo] = useState({
    nome: "",
    genero: "",
    plataforma: "",
    ano_lancamento: "",
    desenvolvedora: "",
    descricao: "",
  });

  const [imagem, setImagem] = useState(null);

  const handleChange = (e) => {
    setJogo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImagemChange = (e) => {
    setImagem(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome", jogo.nome);
    formData.append("genero", jogo.genero);
    formData.append("plataforma", jogo.plataforma);
    formData.append("ano_lancamento", jogo.ano_lancamento);
    formData.append("desenvolvedora", jogo.desenvolvedora);
    formData.append("descricao", jogo.descricao);
    formData.append("imagem", imagem);

    try {
      await axios.post("http://localhost:8800/jogos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/");
    } catch (error) {
      console.error("Erro ao cadastrar jogo:", error);
      alert("Erro ao cadastrar jogo.");
    }
  };

  return (
    <div className="div-add-jogos">
      <h2 className="titulo-add-jogo">Adicionar Novo Jogo</h2>

      <form className="form-add-jogo" onSubmit={handleSubmit}>
        <div className="campo-form">
          <label htmlFor="nome">Nome do Jogo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Ex: Minecraft"
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo-form">
          <label htmlFor="genero">Gênero</label>
          <input
            type="text"
            id="genero"
            name="genero"
            placeholder="Ex: Sandbox, Terror, RPG"
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo-form">
          <label htmlFor="plataforma">Plataforma</label>
          <input
            type="text"
            id="plataforma"
            name="plataforma"
            placeholder="Ex: PC, PS5, Xbox"
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo-form">
          <label htmlFor="ano_lancamento">Ano de Lançamento</label>
          <input
            type="number"
            id="ano_lancamento"
            name="ano_lancamento"
            placeholder="Ex: 2023"
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo-form">
          <label htmlFor="desenvolvedora">Desenvolvedora</label>
          <input
            type="text"
            id="desenvolvedora"
            name="desenvolvedora"
            placeholder="Ex: Mojang Studios"
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo-form">
          <label htmlFor="imagem">Imagem do Jogo</label>
          <input
            type="file"
            id="imagem"
            name="imagem"
            onChange={handleImagemChange}
            required
          />
        </div>

        <div className="campo-form">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            placeholder="Escreva uma breve descrição sobre o jogo..."
            rows="5"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="botao-salvar">
          Salvar Jogo
        </button>
      </form>
    </div>
  );
}

export default AddJogos;
