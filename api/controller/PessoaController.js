const { PessoasServices } = require('../services')
const pessoasServices = new PessoasServices()

class PessoaController {
  static async pegaPessoasAtivas(req, res) {
    try {
      const pessoasAtivas = await pessoasServices.pegaRegistrosAtivos()
      return res.status(200).json(pessoasAtivas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros()
      return res.status(200).json(todasAsPessoas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaPessoa(req, res) {
    const { estudanteId } = req.params
    try {
      const umaPessoa = await pessoasServices.pegaUmRegistro({ id: Number(estudanteId) })
      return res.status(200).json(umaPessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaPessoa(req, res) {
    const novaPessoa = req.body
    try {
      const novaPessoaCriada = await pessoasServices.criaRegistro(novaPessoa)
      return res.status(200).json(novaPessoaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaPessoa(req, res) {
    const { estudanteId } = req.params
    const novasInfos = req.body
    try {
      await pessoasServices.atualizaRegistro(novasInfos, Number(estudanteId))
      const pessoaAtualizada = await pessoasServices.pegaUmRegistro({ id: Number(estudanteId) })
      return res.status(200).json(pessoaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaPessoa(req, res) {
    const { estudanteId } = req.params
    try {
      await pessoasServices.apagaRegistro(Number(estudanteId))
      return res.status(200).json({ mensagem: `id ${estudanteId} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restauraPessoa(req, res) {
    const { estudanteId } = req.params
    try {
      await pessoasServices.restauraRegistro(Number(estudanteId))
      return res.status(200).json({ mensagem: `id ${estudanteId} restaurado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async cancelaPessoa(req, res) {
    const { estudanteId } = req.params
    try {
      await pessoasServices.cancelaPessoasEMatriculas(Number(estudanteId))
      return res.status(200).json({ mensagem: `matriculas ref. estudante ${estudanteId} canceladas` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PessoaController