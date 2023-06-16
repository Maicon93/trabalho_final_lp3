const produtoService = require('../services/produtoService')

const cadastrarProduto = async (req, res, next) => {
  try {
    const retorno = await produtoService.cadastrarProduto(req.body)
    res.status(200).send(retorno)
  } catch (err) {
    res.status(500).send(err)
  }
}

const getProduto = async (req, res, next) => {
  try {
    const retorno = await produtoService.getProduto(req.query)
    res.status(200).send(retorno)
  } catch (err) {
    res.status(500).send(err)
  }
}

const updateProduto = async (req, res, next) => {
  try {
    const retorno = await produtoService.updateProduto(req.body)
    res.status(200).send(retorno)
  } catch (err) {
    res.status(500).send(err)
  }
}

const deleteProduto = async (req, res, next) => {
  const retorno = await produtoService.deleteProduto(req.params)
  const status = retorno.type === 'success' ? 200 : 500

  res.status(status).send(retorno)
}

module.exports.cadastrarProduto = cadastrarProduto
module.exports.getProduto = getProduto
module.exports.updateProduto = updateProduto
module.exports.deleteProduto = deleteProduto