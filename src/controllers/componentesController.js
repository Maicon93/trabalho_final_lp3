const componentesService = require('../services/componentesService')

const cadastrarComponentesProduto = async (req, res, next) => {
  const retorno = await componentesService.cadastrarComponentesProduto(req.body)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const getComponentesProduto = async (req, res, next) => {
  const retorno = await componentesService.getComponentesProduto(req.query)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const deleteComponentesProduto = async (req, res, next) => {
  const retorno = await componentesService.deleteComponentesProduto(req.params)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const updateComponentesProduto = async (req, res, next) => {
  const retorno = await componentesService.updateComponentesProduto(req.body)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

module.exports = {
  cadastrarComponentesProduto,
  getComponentesProduto,
  deleteComponentesProduto,
  updateComponentesProduto
}