const ordemService = require('../services/producaoService')

const cadastrarOrdem = async (req, res, next) => {
  const retorno = await ordemService.cadastrarOrdem(req.body)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const getOrdemProducao = async (req, res, next) => {
  const retorno = await ordemService.getOrdemProducao()
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const updateOrdemProducao = async (req, res, next) => {
  const retorno = await ordemService.updateOrdemProducao(req.body)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const deleteOrdemProducao = async (req, res, next) => {
  const retorno = await ordemService.deleteOrdemProducao(req.params)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

module.exports.cadastrarOrdem = cadastrarOrdem
module.exports.getOrdemProducao = getOrdemProducao
module.exports.updateOrdemProducao = updateOrdemProducao
module.exports.deleteOrdemProducao = deleteOrdemProducao