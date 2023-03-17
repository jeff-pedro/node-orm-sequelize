const { Router } = require('express')
const PessoaController = require('../controller/PessoaController.js')
const MatriculaController = require('../controller/MatriculaController.js')

const routes = Router()

routes
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .get('/pessoas/:estudanteId/matriculas', PessoaController.pegaMatriculas)
  .get('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.pegaUmaMatricula)
  .get('/pessoas/matriculas/turmas/:turmaId/confirmado', MatriculaController.pegaMatriculasPorTurma)
  .get('/pessoas/matriculas/turmas/lotadas', MatriculaController.pegaTurmasLotadas)
  .post('/pessoas', PessoaController.criaPessoa)
  .post('/pessoas/:estudanteId/matriculas/:matriculaId/restaura', MatriculaController.restauraMatricula)
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
  .post('/pessoas/:id/cancela', PessoaController.cancelaPessoa)   
  .post('/pessoas/:id/ativa', PessoaController.ativaPessoa)
  .post('/pessoas/:estudanteId/matriculas', MatriculaController.criaMatricula)
  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .put('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.atualizaMatricula)
  .delete('/pessoas/:id', PessoaController.apagaPessoa)
  .delete('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.apagaMatricula)
    
module.exports = routes