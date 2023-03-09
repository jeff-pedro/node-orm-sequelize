const { Router } = require('express')
const NivelController = require('../controller/niveis.js')

const routes = Router();

routes
    .get('/niveis', NivelController.pegaTodosOsNiveis)
    .post('/niveis', NivelController.criaNivel)
    .get('/niveis/:id', NivelController.pegaUmNivel)
    .put('/niveis/:id', NivelController.atualizaNivel)
    .delete('/niveis/:id', NivelController.removeNivel)

module.exports = routes