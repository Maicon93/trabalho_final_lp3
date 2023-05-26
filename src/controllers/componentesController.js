const componentesService = require('../services/componentesService')

const cadastrarComponentesProduto = async (req, res, next) => {
  const retorno = await componentesService.cadastrarComponentesProduto(req.body)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const getComponentesProduto = async (req, res, next) => {
  const retorno = await componentesService.getComponentesProduto()
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const updateOrdemProducao = async (req, res, next) => {
  const retorno = await componentesService.updateOrdemProducao(req.body)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const deleteComponentesProduto = async (req, res, next) => {
  const retorno = await componentesService.deleteComponentesProduto(req.params)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

module.exports.cadastrarComponentesProduto = cadastrarComponentesProduto
module.exports.getComponentesProduto = getComponentesProduto
module.exports.updateOrdemProducao = updateOrdemProducao
module.exports.deleteComponentesProduto = deleteComponentesProduto