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

const cadastrarItensOrdem = async (params) => {
  try {
    const sql =`insert into itens_ordem_producao (id_ordem, id_produto, quantidade)
      values (
        ${params.id_ordem},
        ${params.id_produto},
        ${params.quantidade}
      )`
    await conn.execute(sql)
    return { type: 'success', msg: 'Componente inserido com sucesso' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const getItensOrdem = async (params) => {
  try {
    const where = params.ordem ? `where id_ordem = ${params.ordem}` : ''
    const sql = `select * from itens_ordem_producao ${where}`

    const { rows } = await conn.execute(sql)
    if (!rows.length) {
      return { type: 'info', msg: 'Nenhum registro retornado' }
    }

    return { type: 'success', rows }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const deleteItensORdem = async (params) => {
  try {
    if (!params.id) {
      return { type: 'info', msg: 'Informe o ID do item da ordem de produção que deseja deletar' }
    }

    const sql = `delete from itens_ordem_producao where id = ${params.id}`
    const resp = await conn.execute(sql)
    if (resp.rowCount == 0) {
      return { type: 'success', msg: 'Item não encontrado' }
    }

    return { type: 'success', msg: 'Item da ordem de produção deletado com sucesso' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const updateItensOrdem = async (params) => {
  try {
    if (!params?.id) {
      return { type: 'error', msg: 'Informe os id do item a ser alterado!' }
    }

    const alteracoes = []
    params.id_produto && alteracoes.push(`id_produto = '${params.id_produto}'`)
    params.quantidade && alteracoes.push(`quantidade = '${params.quantidade}'`)

    if (!alteracoes.length) {
      return { type: 'error', msg: 'Informe os parametros a ser alterado!' }
    }
    const updates = alteracoes.join(', ')

    const sql = `update itens_ordem_producao set ${updates} where id = ${params.id}`

    await conn.execute(sql)

    return { type: 'success' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}



module.exports = {
  cadastrarItensOrdem,
  cadastrarOrdem,
  getOrdemProducao,
  updateOrdemProducao,
  deleteOrdemProducao,
  getItensOrdem,
  deleteItensORdem,
  updateItensOrdem
}