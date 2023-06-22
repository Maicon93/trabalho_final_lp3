const cliente = require('../controllers/clienteController');

module.exports = (app) => {
  app.post('/cadastrar-cliente/', cliente.cadastrarCliente
        /*#swagger.tags = ['Cliente']
    #swagger.summary = 'Cadastro de Cliente'
    #swagger.parameters['cpf'] = {
      in: 'body',
      type: 'string',
      description: 'CPF do Cliente...',
      required: 'true',
      schema: '125.026.548.50'
    }
    #swagger.parameters['nome'] = {
      in: 'body',
      type: 'string',
      description: 'Nome do Cliente...',
      required: 'true',
      schema: 'Willian'
    }
    #swagger.parameters['cidade'] = {
      in: 'body',
      type: 'string',
      description: 'Cidade onde cliente esta morando...',
      required: 'true',
      schema: 'Saudades'
    }
    #swagger.parameters['data_nascimento'] = {
      in: 'body',
      type: 'date',
      description: 'Data de Nascimento do Cliente...',
      required: 'true',
      schema: '2001/09/15'
    }
    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.get('/get-cliente/', cliente.getCliente
          /*#swagger.tags = ['Cliente']
    #swagger.summary = 'Buscar Cliente'
    #swagger.parameters['id'] = {
      in: 'body',
      type: 'SERIAL',
      description: 'ID sequencial...',
      required: 'true',
      schema: '1'
    }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.patch('/update-cliente/', cliente.updateCliente
          /*#swagger.tags = ['Cliente']
    #swagger.summary = 'Editar Produto'
    #swagger.parameters['id'] = {
      in: 'body',
      type: 'SERIAL',
      description: 'ID sequencial...',
      required: 'true',
      schema: '1'
    }
    #swagger.parameters['cpf'] = {
      in: 'body',
      type: 'string',
      description: 'CPF do Cliente...',
      required: 'true',
      schema: '125.026.548.50'
    }
    #swagger.parameters['nome'] = {
      in: 'body',
      type: 'string',
      description: 'Nome do Cliente...',
      required: 'true',
      schema: 'Willian'
    }
    #swagger.parameters['cidade'] = {
      in: 'body',
      type: 'string',
      description: 'Cidade onde cliente esta morando...',
      required: 'true',
      schema: 'Saudades'
    }
    #swagger.parameters['data_nascimento'] = {
      in: 'body',
      type: 'date',
      description: 'Data de Nascimento do Cliente...',
      required: 'true',
      schema: '2001/09/15'
    }
    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
  app.delete('/delete-cliente/:id', cliente.deleteCliente
            /*#swagger.tags = ['Cliente']
    #swagger.summary = 'Deletar Cliente'
    #swagger.parameters['id'] = {
      in: 'body',
      type: 'SERIAL',
      description: 'ID sequencial...',
      required: 'true',
      schema: '1'
    }

    #swagger.responses[200] = {
        description: 'Successo'
    }
    */
  )
}