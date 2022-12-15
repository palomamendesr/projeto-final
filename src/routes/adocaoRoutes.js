const express = require("express");
const router = express.Router()

const controller = require("../controllers/adocaoController")

const controllerUsuario = require("../controllers/usuarioController")
const autenticacaoController = require("../controllers/autenticacaoController")
const { checkAuth } = require("../middlewares/auth")
//rotas de login
router.get("/usuarios", checkAuth, controllerUsuario.todosUsuarios)
router.post("/novo", controllerUsuario.criarUsuario)
router.post("/login", autenticacaoController.login)
//rota inicial
router.get("/", controller.todosCachorros)

router.post("/criar", checkAuth, controller.adicionarCachorro)
router.patch("/atualizar/:id", checkAuth, controller.atualizarResponsavel)
router.get("/buscar/:id", controller.cachorroPorId)
router.delete("/deletar/:id", checkAuth, controller.deletarCachorro)


module.exports = router