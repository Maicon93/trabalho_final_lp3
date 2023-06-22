const producao = require('../controllers/producaoController');

module.exports = (app) => {
  app.post('/cadastrar-ordem-producao/', producao.cadastrarOrdem
    /* #swagger.tags = ['Produção']
    #swagger.summary = 'Cadastrar Cliente'
    #swagger.parameters['json'] = {
      in:'body',
      description:'Cadastrar Cliente...',
      required:'true',
      type:'json',
      schema: {
        "id_produto": 1,
        "quantidade": 10,
        "id_cliente": 1,
        "data_entrega": "2023-09-05"
      }
    }

    #swagger.responses[201] = {
        description: 'Successo'
    }
    */
  )
  app.get('/get-ordem-producao/', producao.getOrdemProducao
    /*#swagger.tags = ['Produção']
    #swagger.summary = 'Buscar Ordem'
   #swagger.parameters['id'] = {
        description: "Código da Ordem",
        value: "1",
        required: 'false'
      }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.patch('/update-ordem-producao/', producao.updateOrdemProducao
    /* #swagger.tags = ['Produção']
      #swagger.summary = 'Editar Cliente'
      #swagger.parameters['json'] = {
        in:'body',
        description:'Editar Cliente...',
        required:'true',
        type:'json',
        schema: {
          "id": 2,
          "id_produto": 1,
          "quantidade": 7,
          "id_cliente": 1,
          "data_entrega": "2023-09-05T03:00:00.000Z"
        }
      }

      #swagger.responses[201] = {
        description: 'Successo'
      }
    */
  )
  app.delete('/delete-ordem-producao/:id', producao.deleteOrdemProducao
    /*#swagger.tags = ['Produção']
      #swagger.summary = 'Excluir Ordem

      #swagger.responses[200] = {
        description: 'Successo'
      }
    */
  )

  app.post('/cadastrar-itens-ordem/', producao.cadastrarItensOrdem
    /*
    #swagger.tags = ['Produção']
    #swagger.summary = 'Cadastrar Itens da ORdem'
    #swagger.parameters['json'] = {
      in:'body',
      description:'Cadastrar Itens da ORdem...',
      required:'true',
      type:'json',
      schema: {
        "id_ordem": 2,
        "id_produto": 1,
        "quantidade": 8,

      }
    }

    #swagger.responses[201] = {
        description: 'Successo'
    }
    */
  )
  app.get('/get-itens-ordem/:ordem', producao.getItensOrdem
    /*#swagger.tags = ['Produção']
    #swagger.summary = 'Buscar Item da Ordem'
    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.delete('/delete-item-ordem/:id', producao.deleteItensORdem
    /*#swagger.tags = ['Produção']
    #swagger.summary = 'Excluir item da Ordem'

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )

}