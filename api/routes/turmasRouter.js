const { Router } = require('express')
const TurmaController = require('../controller/TurmaController.js')

const routes = Router()

routes
  .get('/turmas', TurmaController.pegaTodasAsTurmas)
  .get('/turmas/:id', TurmaController.pegaUmaTurma)
  .get('/turmas/:id/restaura', TurmaController.restauraTurma)
  .post('/turmas', TurmaController.criaTurma)
  .put('/turmas/:id', TurmaController.atualizaTurma)
  .delete('/turmas/:id', TurmaController.apagaTurma)

module.exports = routes