const bodyParser = require('body-parser')

const pessoas = require('./pessoasRouter.js')
const niveis = require('./niveisRouter.js')
const turmas = require('./turmasRouter.js')
// const matriculas = require('./matriculasRouter.js')

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turmas,
        // matriculas
    )
}