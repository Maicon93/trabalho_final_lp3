const cliente = require('../controllers/clienteController');

module.exports = (app) => {
  app.post('/cadastrar-cliente/', cliente.cadastrarCliente)
  app.get('/get-cliente/', cliente.getCliente)
  app.patch('/update-cliente/', cliente.updateCliente)
  app.delete('/delete-cliente/:id', cliente.deleteCliente)
}