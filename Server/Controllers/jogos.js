import { db } from "../db.js";

// EDITAR JOGO
export const editJogo = (req, res) => {
  const jogoId = req.params.id;

  const dadosParaAtualizar = {
    nome: req.body.nome,
    genero: req.body.genero,
    plataforma: req.body.plataforma,
    ano_lancamento: req.body.ano_lancamento,
    desenvolvedora: req.body.desenvolvedora,
    descricao: req.body.descricao,
  };

  if (req.file) {
    dadosParaAtualizar.imagem = req.file.filename;
  }

  const q = "UPDATE jogos SET ? WHERE id_jogos = ?";

  db.query(q, [dadosParaAtualizar, jogoId], (err, result) => {
    if (err) {
      console.error("ERRO AO EDITAR JOGO NO BANCO:", err.sqlMessage || err);
      return res.status(500).json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json("Jogo não encontrado.");
    }

    console.log("JOGO EDITADO COM SUCESSO:", result);
    return res.status(200).json("Jogo editado com sucesso!");
  });
};

// BUSCAR JOGO POR ID
export const getJogoById = (req, res) => {
  const jogoId = req.params.id;
  const q = "SELECT * FROM jogos WHERE id_jogos = ?";

  db.query(q, [jogoId], (err, result) => {
    if (err) {
      console.log("ERRO AO BUSCAR JOGO:", err);
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json("Jogo não encontrado.");
    }

    return res.status(200).json(result[0]);
  });
};

//DELETAR JOGO
export const deleteJogo = (req, res) => {
  const jogoId = req.params.id;
  const q = "DELETE FROM jogos WHERE id_jogos = ?";

  db.query(q, [jogoId], (err, result) => {
    if (err) {
      console.log("ERRO AO DELETAR JOGO:", err);
      return res.status(500).json(err);
    }

    console.log("JOGO DELETADO COM SUCESSO:", result);
    return res.status(200).json("Jogo deletado com sucesso!");
  });
};

// LISTAR JOGOS
export const getJogos = (_, res) => {
  const q = "SELECT * FROM jogos";

  db.query(q, (err, data) => {
    if (err) {
      console.log("ERRO AO LISTAR JOGOS:", err);
      return res.status(500).json(err);
    }

    return res.status(200).json(data);
  });
};

// ADICIONAR JOGO
export const addJogo = (req, res) => {
  console.log("BODY RECEBIDO:", req.body);
  console.log("ARQUIVO RECEBIDO:", req.file);

  const q = `
    INSERT INTO jogos 
    (nome, genero, plataforma, ano_lancamento, desenvolvedora, imagem, descricao)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    req.body.nome,
    req.body.genero,
    req.body.plataforma,
    req.body.ano_lancamento,
    req.body.desenvolvedora,
    req.file ? req.file.filename : null,
    req.body.descricao,
  ];

  db.query(q, values, (err, result) => {
    if (err) {
      console.log("ERRO AO CADASTRAR JOGO:", err);
      return res.status(500).json(err);
    }

    console.log("JOGO CADASTRADO COM SUCESSO:", result);
    return res.status(200).json("Jogo cadastrado com sucesso!");
  });
};
