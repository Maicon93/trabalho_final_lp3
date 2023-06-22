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
        required: 'false'
      }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.patch('/update-componentes-produto/', componentes.updateComponentesProduto
  /*#swagger.tags = ['Componentes']
    #swagger.summary = 'Editar Componente'
    #swagger.parameters['json'] = {
      in:'body',
      description:'Editar Componente...',
      required:'true',
      type:'json',
      schema: {
        "id": 1,
        "id_produto": 1,
        "id_componente": 1,
        "quantidade": 10,
        "observacao": "Azul"
      }
    }

    #swagger.responses[201] = {
      description: 'Successo'
    }*/
  )
  app.delete('/delete-componentes-produto/:id', componentes.deleteComponentesProduto
    /*#swagger.tags = ['Componentes']
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