const database = require('../models') // busca a pasta index.js

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const options = { where: { id: Number(id) } }
            const umaPessoa = await database.Pessoas.findOne(options)
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            const options = { where: { id: Number(id) } }
            await database.Pessoas.update(novasInfos, options)
            const pessoaAtualizada = await database.Pessoas.findOne(options);
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaPessoa(req, res) {
        const { id } = req.params
        try {
            const options = { where: { id: Number(id) } }
            await database.Pessoas.destroy(options)
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            const matriculas = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId),
                }
            });

            return res.status(200).json(matriculas)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaMatriculas(req, res) {
        const { estudanteId } = req.params
        try {
            const matriculas = await database.Matriculas.findAll({
                where: {
                    estudante_id: Number(estudanteId)
                }
            });

            return res.status(200).json(matriculas)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body
        try {
            const options = {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            }
            await database.Matriculas.update(novasInfos, options)
            const matriculaAtualizada = await database.Matriculas.findOne(options);
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            const options = {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            }
            await database.Matriculas.destroy(options)
            return res.status(200).json({ mensagem: `id ${matriculaId} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController;
