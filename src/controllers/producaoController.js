const ordemService = require('../services/producaoService')

const cadastrarOrdem = async (req, res, next) => {
  const retorno = await ordemService.cadastrarOrdem(req.body)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const getOrdemProducao = async (req, res, next) => {
  const retorno = await ordemService.getOrdemProducao(req.query)
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

const cadastrarItensOrdem = async (req, res, next) => {
  const retorno = await ordemService.cadastrarItensOrdem(req.body)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const getItensOrdem = async (req, res, next) => {
  const retorno = await ordemService.getItensOrdem(req.query)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const deleteItensORdem = async (req, res, next) => {
  const retorno = await ordemService.deleteItensORdem(req.params)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const updateItensOrdem = async (req, res, next) => {
  const retorno = await ordemService.updateItensOrdem(req.body)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}




module.exports = {
  cadastrarItensOrdem,
  cadastrarOrdem,
  getOrdemProducao,
  updateOrdemProducao,
  deleteOrdemProducao,
  getItensOrdem,
  deleteItensORdem,
  updateItensOrdem
}