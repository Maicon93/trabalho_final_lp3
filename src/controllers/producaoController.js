//const alunoService = require('../services/aluno')

const teste = async (req, res, next) => {
  try {
    res.status(201).json('aaaaaaa')
  } catch (err) {
    res.status(500).send(err)
  }
}


module.exports.teste = teste