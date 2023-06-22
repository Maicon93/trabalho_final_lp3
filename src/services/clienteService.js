const conn = require('../config/pg')

const cadastrarCliente = async (params) => {
  try {
    const sql =`insert into cliente (cpf, nome, cidade, data_nascimento)
      values (
        '${params.cpf}',
        '${params.nome}',
        '${params.cidade}',
        '${params.data_nascimento}'
      )`
    await conn.execute(sql)
    return { type: 'success', msg: 'Cliente inserido com sucesso' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const getCliente = async (params) => {
  try {
    const where = params.id ? `where id = ${params.id}` : ''
    const sql = `select * from cliente ${where}`
    const { rows } = await conn.execute(sql)
    if (!rows.length) {
      return { type: 'info', msg: 'Nenhum registro retornado' }
    }

    return { type: 'success', rows }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const updateCliente = async (params) => {
  try {
    if (!params.id) {
      return { type: 'error', msg: 'Informe os id do cliente a ser alterado!' }
    }

    const alteracoes = []
    params.cpf && alteracoes.push(`cpf = '${params.cpf}'`)
    params.nome && alteracoes.push(`nome = '${params.nome}'`)
    params.cidade && alteracoes.push(`cidade = '${params.cidade}'`)
    params.data_nascimento && alteracoes.push(`data_nascimento = '${params.data_nascimento}'`)

    if (!alteracoes.length) {
      return { type: 'error', msg: 'Informe os parametros do produto a ser alterado!' }
    }
    const updates = alteracoes.join(', ')

    const sql = `update cliente set ${updates} where id = ${params.id}`

    await conn.execute(sql)

    return { type: 'success' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const deleteCliente = async (id,params) => {
  try {
    if (!id) {
      return { type: 'info', msg: 'Informe o ID do cliente que deseja deletar' }
    }

    const sql = `delete from cliente where id = ${id}`
    await conn.execute(sql)

    return { type: 'success', msg: 'Cliente deletado com sucesso' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

module.exports = {
  cadastrarCliente,
  getCliente,
  updateCliente,
  deleteCliente,
}