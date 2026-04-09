import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "jogos",
});

db.connect((err) => {
  if (err) {
    console.log("Erro ao conectar no banco:", err);
  } else {
    console.log("Conectado ao MySQL com sucesso!");
  }
});
