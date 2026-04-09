import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/addJogos.css";

function AddJogos() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [jogo, setJogo] = useState({
    nome: "",
    genero: "",
    plataforma: "",
    ano_lancamento: "",
    desenvolvedora: "",
    descricao: "",
  });

  const [imagem, setImagem] = useState(null);

  useEffect(() => {
    if (isEdit) {
      const fetchJogo = async () => {
        try {
          const response = await axios.get(`http://localhost:8800/jogos/${id}`);
          const dados = Array.isArray(response.data)
            ? response.data[0]
            : response.data;

          setJogo({
            nome: dados.nome || "",
            genero: dados.genero || "",
            plataforma: dados.plataforma || "",
            ano_lancamento: dados.ano_lancamento || "",
            desenvolvedora: dados.desenvolvedora || "",
            descricao: dados.descricao || "",
          });
        } catch (error) {
          console.error("Erro ao carregar dados do jogo:", error);
          alert("Erro ao carregar dados para edição.");
        }
      };
      fetchJogo();
    } else {
      setJogo({
        nome: "",
        genero: "",
        plataforma: "",
        ano_lancamento: "",
        desenvolvedora: "",
        descricao: "",
      });
    }
  }, [id, isEdit]);

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

    if (imagem) {
      formData.append("imagem", imagem);
    }

    try {
      if (isEdit) {
        await axios.put(`http://localhost:8800/jogos/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post("http://localhost:8800/jogos", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      navigate("/");
    } catch (error) {
      console.error("Erro ao salvar jogo:", error);
      alert("Erro ao salvar informações no servidor.");
    }
  };

  return (
    <div className="div-add-jogos">
      <h2 className="titulo-add-jogo">
        {isEdit ? "Editar Jogo" : "Adicionar Novo Jogo"}
      </h2>

      <form className="form-add-jogo" onSubmit={handleSubmit}>
        <div className="campo-form">
          <label htmlFor="nome">Nome do Jogo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={jogo.nome}
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
            value={jogo.genero}
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
            value={jogo.plataforma}
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
            value={jogo.ano_lancamento}
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
            value={jogo.desenvolvedora}
            placeholder="Ex: Mojang Studios"
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo-form">
          <label htmlFor="imagem">
            Imagem do Jogo {isEdit && "(Deixe vazio para manter a atual)"}
          </label>
          <input
            type="file"
            id="imagem"
            name="imagem"
            onChange={handleImagemChange}
            required={!isEdit}
          />
        </div>

        <div className="campo-form">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            value={jogo.descricao}
            placeholder="Escreva uma breve descrição sobre o jogo..."
            rows="5"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="div-botoes-form">
          <button type="submit" className="botao-salvar">
            {isEdit ? "Salvar Alterações" : "Salvar Jogo"}
          </button>

          <Link to="/" className="botao-voltar-link">
            <button type="button">Voltar</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddJogos;
