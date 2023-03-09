const { Router } = require('express')
const PessoaController = require('../controller/pessoas.js')

const routes = Router();

routes
    // pessoas
    .get('/pessoas', PessoaController.pegaTodasAsPessoas)
    .post('/pessoas', PessoaController.criaPessoa)
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .delete('/pessoas/:id', PessoaController.apagaPessoa)
    // matriculas
    .get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.pegaUmaMatricula)
    .get('/pessoas/:estudanteId/matriculas', PessoaController.pegaMatriculas)
    .post('/pessoas/:estudanteId/matriculas', PessoaController.criaMatricula)
    .put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.atualizaMatricula)
    .delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.apagaMatricula)

module.exports = routes