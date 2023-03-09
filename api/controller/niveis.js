const database = require('../models') // busca a pasta index.js

class NivelController {
    static async pegaTodosOsNiveis(req, res) {
        try {
            const todasOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todasOsNiveis)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmNivel(req, res) {
        const { id } = req.params
        try {
            const options = { where: { id: Number(id) } }
            const umNivel = await database.Niveis.findOne(options)
            return res.status(200).json(umNivel)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaNivel(req, res) {
        const novaNivel = req.body
        try {
            const novaNivelCriada = await database.Niveis.create(novaNivel)
            return res.status(200).json(novaNivelCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaNivel(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            const options = { where: { id: Number(id) } }
            await database.Niveis.update(novasInfos, options)
            const nivelAtualizada = await database.Niveis.findOne(options);
            return res.status(200).json(nivelAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async removeNivel(req, res) {
        const { id } = req.params
        try {
            const options = { where: { id: Number(id) } }
            await database.Niveis.destroy(options)
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = NivelController;
