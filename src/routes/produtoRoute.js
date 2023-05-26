const produto = require('../controllers/produtoController');

module.exports = (app) => {
  app.post('/cadastrar-produto/', produto.cadastrarProduto
    /*#swagger.tags = ['Produto']
    #swagger.summary = 'Cadastro de Produto'
    #swagger.description = 'Teste de descricao'
    */
  )
  app.get('/get-produto/', produto.getProduto)
  app.patch('/update-produto/', produto.updateProduto)
  app.delete('/delete-produto/:id', produto.deleteProduto
    /*#swagger.tags = ['Produto']
    #swagger.summary = 'Delete Produto'
    #swagger.description = 'Teste de descricao'
    #swagger.responses:
      '200':
        description: OK
    */
  )
}