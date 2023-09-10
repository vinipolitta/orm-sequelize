const { Router } = require("express");
const PessaController = require("../controllers/PessoaController.js");

const router = Router();

router.get("/pessoas", PessaController.pegaTodasAsPessoas);

module.exports = router;
