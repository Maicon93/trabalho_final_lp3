const componentes = require('../controllers/componentesController');

module.exports = (app) => {
  app.post('/cadastrar-componentes-produto/', componentes.cadastrarComponentesProduto
    /*#swagger.tags = ['Componentes']
    #swagger.summary = 'Cadastro de Produto'
    #swagger.parameters['id_produto'] = {
      in: 'body',
      type: 'int',
      description: 'Código do produto acabado...',
      required: 'true',
      schema: '14'
    }
    #swagger.parameters['id_componente'] = {
      in: 'body',
      type: 'int',
      description: 'Código do componente...',
      required: 'true',
      schema: '36'
    }
    #swagger.parameters['quantidade'] = {
      in: 'body',
      type: 'int',
      description: 'Quantidade...',
      required: 'true',
      schema: '10'
    }
    #swagger.parameters['observacao'] = {
      in: 'body',
      type: 'string',
      description: 'Breve observação do produto...',
      required: 'true',
      schema: 'Feito por negros'
    }
    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.get('/get-componentes-produto/', componentes.getComponentesProduto
    /*#swagger.tags = ['Componentes']
    #swagger.summary = 'Cadastro de Cliente'
    #swagger.parameters['id_produto'] = {
      in: 'body',
      type: 'int',
      description: 'Código do produto...',
      required: 'true',
      schema: '1'
    }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.patch('/update-componentes-produto/', componentes.updateComponentesProduto
    /*#swagger.tags = ['Componentes']
    #swagger.summary = 'Editar Componente do Produto'
    #swagger.parameters['id_produto'] = {
      in: 'body',
      type: 'int',
      description: 'Código do produto acabado...',
      required: 'true',
      schema: '14'
    }
    #swagger.parameters['id_componente'] = {
      in: 'body',
      type: 'int',
      description: 'Código do componente...',
      required: 'true',
      schema: '36'
    }
    #swagger.parameters['quantidade'] = {
      in: 'body',
      type: 'int',
      description: 'Quantidade...',
      required: 'true',
      schema: '10'
    }
    #swagger.parameters['observacao'] = {
      in: 'body',
      type: 'string',
      description: 'Breve observação do produto...',
      required: 'true',
      schema: 'Feito por negros'
    }
    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.delete('/delete-componentes-produto/:id', componentes.deleteComponentesProduto
      /*#swagger.tags = ['Componentes']
    #swagger.summary = 'Deletar Componente da Produto'
    #swagger.parameters['id'] = {
      in: 'body',
      type: 'SERIAL',
      description: 'sequencial do componente...',
      required: 'true',
      schema: '1'
    }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
}