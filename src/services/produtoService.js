const conn = require('../config/pg')

const cadastrarProduto = async (params) => {
  try {
    const sql =`insert into produto (descricao, cor, tipo_produto, origem)
      values (
        '${params.descricao}',
        '${params.cor}',
        '${params.tipo_produto}',
        '${params.origem}'
      )`

    await conn.execute(sql)
    return { type: 'success', msg: 'Produto inserido com sucesso' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const getProduto = async () => {
  try {
    const sql = 'select * from produto'
    const { rows } = await conn.execute(sql)
    if (!rows.length) {
      return { type: 'info', msg: 'Nenhum registro retornado' }
    }

    return { type: 'success', rows }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const updateProduto = async (params) => {
  try {
    if (!params?.id) {
      return { type: 'error', msg: 'Informe os id do produto a ser alterado!' }
    }

    const alteracoes = []
    params.descricao && alteracoes.push(`descricao = '${params.descricao}'`)
    params.cor && alteracoes.push(`cor = '${params.cor}'`)
    params.tipo_produto && alteracoes.push(`tipo_produto = '${params.tipo_produto}'`)
    params.origem && alteracoes.push(`tipo_produto = '${params.origem}'`)

    if (!alteracoes.length) {
      return { type: 'error', msg: 'Informe os parametros do produto a ser alterado!' }
    }
    const updates = alteracoes.join(', ')

    const sql = `update produto set ${updates} where id = ${params.id}`


    await conn.execute(sql)

    return { type: 'success' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const deleteProduto = async (params) => {
  try {
    if (!params.id) {
      return { type: 'info', msg: 'Informe o ID do produto que deseja deletar' }
    }

    const sql = `delete from produto where id = ${params.id}`
    await conn.execute(sql)

    return { type: 'success', msg: 'Produto deletado com sucesso' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

module.exports.cadastrarProduto = cadastrarProduto
module.exports.getProduto = getProduto
module.exports.updateProduto = updateProduto
module.exports.deleteProduto = deleteProduto
