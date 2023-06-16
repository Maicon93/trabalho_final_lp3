const produto = require('../controllers/produtoController');

module.exports = (app) => {
  app.post('/cadastrar-produto/', produto.cadastrarProduto
    /*#swagger.tags = ['Produto']
    #swagger.summary = 'Cadastro de Produto'
    #swagger.parameters['descricao'] = {
      in: 'body',
      type: 'string',
      description: 'Descricao do produto...',
      required: 'true',
      schema: 'Gaita'
    }
    #swagger.parameters['cor'] = {
      in: 'body',
      type: 'string',
      description: 'Cor do produto...',
      required: 'true',
      schema: 'Azul'
    }
    #swagger.parameters['tipo_produto'] = {
      in: 'body',
      type: 'string',
      description: 'Tipo do produto...',
      required: 'true',
      schema: 'Produto Acabado'
    }
    #swagger.parameters['Origem'] = {
      in: 'body',
      type: 'string',
      description: 'Origem do produto...',
      required: 'true',
      schema: 'Produção Própria'
    }
    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.get('/get-produto/', produto.getProduto)
  app.patch('/update-produto/', produto.updateProduto)
  app.delete('/delete-produto/:id', produto.deleteProduto)
}