const apontamentoService = require('../services/apontamentosService')

const inserirApontamentos = async (req, res, next) => {
  const retorno = await apontamentoService.inserirApontamentos(req.body)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const getApontamento = async (req, res, next) => {
  const retorno = await apontamentoService.getApontamento(req.query)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const deleteApontamentos = async (req, res, next) => {
  const retorno = await apontamentoService.deleteApontamentos(req.params.id)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

module.exports.inserirApontamentos = inserirApontamentos
module.exports.getApontamento = getApontamento
module.exports.deleteApontamentos = deleteApontamentos