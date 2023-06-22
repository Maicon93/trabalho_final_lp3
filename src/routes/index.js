const produto = require('./produtoRoute')
const cliente = require('./clienteRoute')
const producao = require('./producaoRoute')
const componentes = require('./componentesRoute')
const apontamentos = require('./apontamentoRoutes')

module.exports = (app) => {
  produto(app)
  cliente(app)
  producao(app)
  componentes(app)
  apontamentos(app)
}