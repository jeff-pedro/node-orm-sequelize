const { Router } = require('express')
const NivelController = require('../controller/NivelController.js')

const routes = Router()

routes
  .get('/niveis', NivelController.pegaTodosOsNiveis)
  .get('/niveis/:id', NivelController.pegaUmNivel)
  .get('/niveis/:id/restaura', NivelController.restauraNivel)
  .post('/niveis', NivelController.criaNivel)
  .put('/niveis/:id', NivelController.atualizaNivel)
  .delete('/niveis/:id', NivelController.apagaNivel)

module.exports = routes