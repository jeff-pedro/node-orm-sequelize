const bodyParser = require('body-parser')
const pessoas = require('./pessoasRouter.js')
const niveis = require('./niveisRouter.js')
const turmas = require('./turmasRouter.js')

module.exports = (app) => {
  app.get('/', (_, res) => res.status(200).send('API da Escola de Magia Feitiços'))

  app.use(
    bodyParser.json(),
    pessoas,
    niveis,
    turmas,
  )
}