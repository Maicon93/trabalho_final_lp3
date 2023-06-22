const producao = require('../controllers/producaoController');

module.exports = (app) => {
  app.post('/cadastrar-ordem-producao/', producao.cadastrarOrdem
    /*
    #swagger.tags = ['Produção']
    #swagger.summary = 'Cadastrar Cliente'
    #swagger.parameters['json'] = {
      in:'body',
      description:'Cadastrar Cliente...',
      required:'true',
      type:'json',
      schema: {
        "cpf": "12942406925",
        "nome": "Willian",
        "cidade": "Saudades",
        "data_nascimento": "2001-09-15"

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
        required: 'true'
      }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.patch('/update-ordem-producao/', producao.updateOrdemProducao
    /*#swagger.tags = ['Produção']
    #swagger.summary = 'Editar Ordem'
    #swagger.parameters['id_produto'] = {
      in: 'body',
      type: 'int',
      description: 'Código do produto acabado...',
      required: 'true',
      schema: '14'
    }
    #swagger.parameters['quantidade'] = {
      in: 'body',
      type: 'int',
      description: 'Quantidade...',
      required: 'true',
      schema: '10'
    }
    #swagger.parameters['id_cliente'] = {
      in: 'body',
      type: 'int',
      description: 'Código do Cliente...',
      required: 'true',
      schema: '256365'
    }
    #swagger.parameters['data_entrega'] = {
      in: 'body',
      type: 'date',
      description: 'Data de Entrega...',
      required: 'true',
      schema: '2023/06/20'
    }
    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.delete('/delete-ordem-producao/:id', producao.deleteOrdemProducao
    /*#swagger.tags = ['Produção']
    #swagger.summary = 'Excluir Ordem
    #swagger.parameters['id'] = {
      in: 'body',
      type: 'int',
      description: 'Código da Ordem...',
      required: 'true',
      schema: '1'
    }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )

  app.post('/cadastrar-itens-ordem/', producao.cadastrarItensOrdem
    /*
    #swagger.tags = ['Produção']
    #swagger.summary = 'Cadastrar Cliente'
    #swagger.parameters['json'] = {
      in:'body',
      description:'Cadastrar Cliente...',
      required:'true',
      type:'json',
      schema: {
        "cpf": "12942406925",
        "nome": "Willian",
        "cidade": "Saudades",
        "data_nascimento": "2001-09-15"

      }
    }

    #swagger.responses[201] = {
        description: 'Successo'
    }
    */
  )
  app.get('/get-itens-ordem/', producao.getItensOrdem
    /*#swagger.tags = ['Produção']
    #swagger.summary = 'Buscar Item da Ordem'
   #swagger.parameters['id'] = {
        description: "Código do Item na Ordem",
        value: "1",
        required: 'true'
      }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.patch('/update-itens-ordem/', producao.updateItensOrdem
    /*#swagger.tags = ['Produção']
    #swagger.summary = 'Editar item da Ordem'
    #swagger.parameters['id_produto'] = {
      in: 'body',
      type: 'int',
      description: 'Código do Produto...',
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
    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.delete('/delete-item-ordem/:id', producao.deleteItensORdem
    /*#swagger.tags = ['Produção']
    #swagger.summary = 'Excluir item da Ordem'
    #swagger.parameters['id'] = {
      in: 'body',
      type: 'SERIAL',
      description: 'Código da Ordem...',
      required: 'true',
      schema: '23658'
    }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )

}