const apontamento = require('../controllers/apontamentosController');

module.exports = (app) => {
  app.post('/inserir-apontamento/', apontamento.inserirApontamentos
      /*#swagger.tags = ['Apontamentos']
    #swagger.summary = 'Inserir apontamento'
    #swagger.parameters['id'] = {
      in: 'body',
      type: 'serial',
      description: 'Sequencial do apontamento...',
      required: 'true',
      schema: '1'
    }
    #swagger.parameters['id_ordem'] = {
      in: 'body',
      type: 'INT',
      description: 'Código da Ordem...',
      required: 'true',
      schema: '99775548'
    }
    #swagger.parameters['quantidade'] = {
      in: 'body',
      type: 'INT',
      description: 'Quantidade do item que vai apontar...',
      required: 'true',
      schema: '10'
    }
    #swagger.parameters['id_componente'] = {
      in: 'body',
      type: 'INT',
      description: 'ID do componente para apontar...',
      required: 'true',
      schema: '1'
    }
    #swagger.parameters['data'] = {
      in: 'body',
      type: 'DATE',
      description: 'Data do apontamento...',
      required: 'true',
      schema: '2023-06-19'
    }
    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.get('/get-apontamento/', apontamento.getApontamento
      /*#swagger.tags = ['Apontamentos']
    #swagger.summary = 'Buscar apontamento'
    #swagger.parameters['id_componente'] = {
      in: 'body',
      type: 'INT',
      description: 'ID do componente para buscar...',
      required: 'true',
      schema: '1'
    }
    #swagger.parameters['id_ordem'] = {
      in: 'body',
      type: 'INT',
      description: 'Código da Ordem para buscar...',
      required: 'true',
      schema: '99775548'
    } 
    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.delete('/delete-apontamento/:id', apontamento.deleteApontamentos
        /*#swagger.tags = ['Apontamentos']
    #swagger.summary = 'Deletar apontamento'
    #swagger.parameters['id_componente'] = {
      in: 'body',
      type: 'INT',
      description: 'ID do componente para deletar...',
      required: 'true',
      schema: '1'
    }
    #swagger.parameters['id_ordem'] = {
      in: 'body',
      type: 'INT',
      description: 'Código da Ordem...',
      required: 'true',
      schema: '99775548'
    } 
    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
}