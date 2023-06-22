const componentes = require('../controllers/componentesController');

module.exports = (app) => {
  app.post('/cadastrar-componentes-produto/', componentes.cadastrarComponentesProduto
      /*
    #swagger.tags = ['Componentes']
    #swagger.summary = 'Cadastrar Componente'
    #swagger.parameters['json'] = {
      in:'body',
      description:'Cadastrar Componente...',
      required:'true',
      type:'json',
      schema: {
        "id_produto": 1,
        "id_componente": 1,
        "quantidade": 10,
        "observacao": "Preto"

      }
    }      
  
    #swagger.responses[201] = {
        description: 'Successo'
    }
    */  
  )
  app.get('/get-componentes-produto/', componentes.getComponentesProduto
      /*#swagger.tags = ['Componentes']
    #swagger.summary = 'Buscar Componente'
   #swagger.parameters['id'] = {
        description: "Código do Componente",
        value: "1",
        required: 'true'
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