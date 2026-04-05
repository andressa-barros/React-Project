import { db } from "../db.js";

// LISTAR JOGOS
export const getJogos = (_, res) => {
  const q = "SELECT * FROM jogos";

  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    return res.status(200).json(data);
  });
};

// ADICIONAR JOGO
export const addJogo = (req, res) => {
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

  db.query(q, values, (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    return res.status(201).json("Jogo cadastrado com sucesso!");
  });
};
