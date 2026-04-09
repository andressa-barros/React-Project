import express from "express";
import cors from "cors";
import jogosRoutes from "./Routes/jogos.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/jogos", jogosRoutes);

app.listen(8800, () => {
  console.log("Servidor rodando na porta 8800");
});
