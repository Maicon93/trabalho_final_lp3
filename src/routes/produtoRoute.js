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
  app.get('/get-produto/', produto.getProduto
      /*#swagger.tags = ['Produto']
    #swagger.summary = 'Buscar de Produto'
    #swagger.parameters['id'] = {
      in: 'body',
      type: 'INT',
      description: 'Código do produto...',
      required: 'true',
      schema: '1'
    }
    #swagger.parameters['descricao'] = {
      in: 'body',
      type: 'string',
      description: 'Descricao do produto...',
      required: 'true',
      schema: 'Gaita'
    }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.patch('/update-produto/', produto.updateProduto
        /*#swagger.tags = ['Produto']
    #swagger.summary = 'Alterar Produto'
    #swagger.parameters['id'] = {
      in: 'body',
      type: 'INT',
      description: 'Código do produto...',
      required: 'true',
      schema: '1'
    }
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
  app.delete('/delete-produto/:id', produto.deleteProduto
          /*#swagger.tags = ['Produto']
    #swagger.summary = 'Deletar de Produto'
    #swagger.parameters['id'] = {
      in: 'body',
      type: 'INT',
      description: 'Código do produto...',
      required: 'true',
      schema: '1'
    }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
}