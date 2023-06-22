const clienteService = require('../services/clienteService')

const cadastrarCliente = async (req, res, next) => {
  const retorno = await clienteService.cadastrarCliente(req.body)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const getCliente = async (req, res, next) => {
  const retorno = await clienteService.getCliente(req.query)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const updateCliente = async (req, res, next) => {
  console.dir(req.params)
  const retorno = await clienteService.updateCliente(req.params.id ,req.body)

  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

const deleteCliente = async (req, res, next) => {
  const retorno = await clienteService.deleteCliente(req.params.id, req.params)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

module.exports.cadastrarCliente = cadastrarCliente
module.exports.getCliente = getCliente
module.exports.updateCliente = updateCliente
module.exports.deleteCliente = deleteCliente