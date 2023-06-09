const produto = require('../controllers/produtoController');

module.exports = (app) => {
  app.post('/cadastrar-produto/', produto.cadastrarProduto
    /*#swagger.tags = ['Produto']
    #swagger.summary = 'Cadastro de Produto'
    #swagger.parameters['json'] = {
      in: 'body',
      description: 'Cadastrar Produto...',
      required: 'true',
      type: 'json',
      schema: {
        "descricao": "Gaita",
        "cor": "Azul",
        "tipo_produto": "Produto Acabado",
        "origem": "Produção Própria"

      }
    }
    #swagger.responses[201] = {
        description: 'Successo'
    }
    */
  )
  app.get('/get-produto/', produto.getProduto
    /*#swagger.tags = ['Produto']
    #swagger.summary = 'Buscar de Produto'
    #swagger.parameters['id'] = {
        in: 'query',
        description: "Código do Produto",
        value: "1",
        required: 'false'
      }
   #swagger.parameters['descricao'] = {
        in: 'query',
        description: "Descrição do Produto",
        value: "Note",
        required: 'false'
      }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.patch('/update-produto/', produto.updateProduto
    /*#swagger.tags = ['Produto']
    #swagger.summary = 'Editar Produto'
    #swagger.parameters['json'] = {
      in: 'body',
      description: 'Dados para alteração',
      required: 'true',
      type: 'json',
      schema: {
        "id": 3,
        "descricao": "Notebook",
        "cor": "Preto",
        "tipo_produto": "Produto Acabado",
        "origem": "Produção Própria"
      }
    }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.delete('/delete-produto/:id', produto.deleteProduto
    /*#swagger.tags = ['Produto']
    #swagger.summary = 'Exluir Produto'
   #swagger.parameters['id'] = {
        in: 'path',
        description: "Código do Produto",
        value: "1",
        required: 'true'
      }


    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
}