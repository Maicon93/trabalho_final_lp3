const cliente = require('../controllers/clienteController');

module.exports = (app) => {
  app.post('/cadastrar-cliente/', cliente.cadastrarCliente
    /*
    #swagger.tags = ['Cliente']
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
  app.get('/get-cliente/', cliente.getCliente
  /*
  #swagger.tags = ['Cliente']
  #swagger.summary = 'Buscar Cliente'
  #swagger.parameters['id'] = {
        description: "Código do Cliente",
        value: "1",
        required: 'false'
      }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.put('/update-cliente/', cliente.updateCliente
    /*#swagger.tags = ['Cliente']
    #swagger.summary = 'Editar Cliente'
     #swagger.parameters['json'] = {
      in: 'body',
      description: 'Dados para alteração',
      required: 'true',
      type: 'json',
      schema: {
        "id": 1,
        "cpf": "12942406925",
        "nome": "Willian Badia",
        "cidade": "Pinhalzinho",
        "data_nascimento": "2001-09-20"
      }
    }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.delete('/delete-cliente/:id', cliente.deleteCliente
    /*#swagger.tags = ['Cliente']
    #swagger.summary = 'Exluir Cliente'
   #swagger.parameters['id'] = {
        in: 'path',
        description: "Código do Cliente",
        value: "1",
        required: 'true'
      }
    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
}