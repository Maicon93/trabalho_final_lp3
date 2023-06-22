const apontamento = require('../controllers/apontamentosController');

module.exports = (app) => {
  app.post('/inserir-apontamento/', apontamento.inserirApontamentos
      /*#swagger.tags = ['Apontamentos']
    #swagger.summary = 'Inserir apontamento'
    #swagger.parameters['json'] = {
      in: 'body',
      description: 'Sequencial do apontamento...',
      required: 'true',
      schema: {
        "id_ordem": 2,
        "quantidade": 1,
        "id_componente": 2,
      }
    }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.get('/get-apontamento/', apontamento.getApontamento
    /* #swagger.tags = ['Apontamentos']
      #swagger.summary = 'Buscar Cliente'
      #swagger.parameters['id'] = {
            description: "Id",
            value: "1",
            required: 'false'
          }

      #swagger.responses[200] = {
          description: 'Successo'
      }
    */
  )
  app.delete('/delete-apontamento/:id', apontamento.deleteApontamentos
      /*#swagger.tags = ['Apontamentos']
    #swagger.summary = 'Buscar de Produto'
    */
  )
}