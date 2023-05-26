const conn = require('../config/pg')

const cadastrarOrdem = async (params) => {
  try {
    const sql =`insert into ordem_producao (id_produto, quantidade, id_cliente, data_entrega)
      values (
        ${params.id_produto},
        ${params.quantidade},
        ${params.id_cliente},
        '${params.data_entrega}'
      )`
    await conn.execute(sql)
    return { type: 'success', msg: 'Ordem inserido com sucesso' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const getOrdemProducao = async () => {
  try {
    const sql = 'select * from ordem_producao'
    const { rows } = await conn.execute(sql)
    if (!rows.length) {
      return { type: 'info', msg: 'Nenhum registro retornado' }
    }

    return { type: 'success', rows }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const updateOrdemProducao = async (params) => {
  try {
    if (!params?.id) {
      return { type: 'error', msg: 'Informe os id da ordem de produção a ser alterado!' }
    }

    const alteracoes = []
    params.id_produto && alteracoes.push(`id_produto = '${params.id_produto}'`)
    params.quantidade && alteracoes.push(`quantidade = '${params.quantidade}'`)
    params.id_cliente && alteracoes.push(`id_cliente = '${params.id_cliente}'`)
    params.data_entrega && alteracoes.push(`data_entrega = '${params.data_entrega}'`)

    if (!alteracoes.length) {
      return { type: 'error', msg: 'Informe os parametros do produto a ser alterado!' }
    }
    const updates = alteracoes.join(', ')

    const sql = `update ordem_producao set ${updates} where id = ${params.id}`

    await conn.execute(sql)

    return { type: 'success' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const deleteOrdemProducao = async (params) => {
  try {
    if (!params.id) {
      return { type: 'info', msg: 'Informe o ID da ordem de produção que deseja deletar' }
    }

    const sql = `delete from ordem_producao where id = ${params.id}`
    await conn.execute(sql)

    return { type: 'success', msg: 'Ordem de produção deletada com sucesso' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

module.exports.cadastrarOrdem = cadastrarOrdem
module.exports.getOrdemProducao = getOrdemProducao
module.exports.updateOrdemProducao = updateOrdemProducao
module.exports.deleteOrdemProducao = deleteOrdemProducao
