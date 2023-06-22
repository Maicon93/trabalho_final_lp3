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
        "id_ordem": 236548,
        "quantidade": 10,
        "id_componente": 1,
        "data": "19-06-2023"

      }
    }
    
    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.get('/get-apontamento/', apontamento.getApontamento
      /*#swagger.tags = ['Apontamentos']
    #swagger.summary = 'Buscar de Produto'
   #swagger.parameters['id_ordem'] = {
        description: "Código do Produto",
        value: "1",
        required: 'true'
      }
   #swagger.parameters['id_componente'] = {
        description: "Código do Componente",
        value: "1",
        required: 'true'
      }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.delete('/delete-apontamento/:id', apontamento.deleteApontamentos
      /*#swagger.tags = ['Apontamentos']
    #swagger.summary = 'Buscar de Produto'
   #swagger.parameters['id_ordem'] = {
        description: "Código do Produto",
        value: "1",
        required: 'true'
      }
   #swagger.parameters['id_componente'] = {
        description: "Código do Componente",
        value: "1",
        required: 'true'
      }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
}