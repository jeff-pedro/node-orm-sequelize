const { NiveisServices } = require('../services')
const niveisServices = new NiveisServices()

class NivelController {
  static async pegaTodosOsNiveis(req, res) {
    try {
      const todasOsNiveis = await niveisServices.pegaTodosOsRegistros()
      return res.status(200).json(todasOsNiveis)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmNivel(req, res) {
    const { id } = req.params
    try {
      const umNivel = await niveisServices.pegaUmRegistro(Number(id))
      return res.status(200).json(umNivel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaNivel(req, res) {
    const novaNivel = req.body
    try {
      const novaNivelCriada = await niveisServices.criaRegistro(novaNivel)
      return res.status(200).json(novaNivelCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaNivel(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await niveisServices.atualizaRegistro(novasInfos, Number(id))
      const nivelAtualizada = await niveisServices.pegaUmRegistro(Number(id))
      return res.status(200).json(nivelAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaNivel(req, res) {
    const { id } = req.params
    try {
      await niveisServices.apagaRegistro(Number(id))
      return res.status(200).json({ mensagem: `id ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restauraNivel(req, res) {
    const { id } = req.params
    try {
      await niveisServices.restauraRegistro(Number(id))
      return res.status(200).json({ mensagem: `id ${id} restaurado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = NivelController
