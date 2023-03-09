const { Router } = require('express')
const TurmaController = require('../controller/turmas.js')

const routes = Router();

routes
    .get('/turmas', TurmaController.pegaTodasAsTurmas)
    .post('/turmas', TurmaController.criaTurma)
    .get('/turmas/:id', TurmaController.pegaUmaTurma)
    .put('/turmas/:id', TurmaController.atualizaTurma)
    .delete('/turmas/:id', TurmaController.removeTurma)

module.exports = routes