import express from "express";
import multer from "multer";
import { getJogos, addJogo, deleteJogo } from "../Controllers/jogos.js";

const router = express.Router();

// Configuração do multer para salvar imagens na pasta uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Rotas
router.get("/", getJogos);
router.post("/", upload.single("imagem"), addJogo);
router.delete("/:id", deleteJogo);

export default router;
