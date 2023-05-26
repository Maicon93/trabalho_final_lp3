const conn = require('../config/pg')

const cadastrarComponentesProduto = async (params) => {
  try {
    const sql =`insert into componentes_produto (id_produto, id_componente, quantidade, observacao)
      values (
        ${params.id_produto},
        ${params.id_componente},
        ${params.quantidade},
        '${params.observacao}'
      )`
    await conn.execute(sql)
    return { type: 'success', msg: 'Ordem inserido com sucesso' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const getComponentesProduto = async () => {
  try {
    const sql = 'select * from componentes_produto'
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

    const sql = `update componentes_produto set ${updates} where id = ${params.id}`

    await conn.execute(sql)

    return { type: 'success' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const deleteComponentesProduto = async (params) => {
  try {
    if (!params.id) {
      return { type: 'info', msg: 'Informe o ID do componente que deseja deletar' }
    }

    const sql = `delete from componentes_produto where id = ${params.id}`
    await conn.execute(sql)

    return { type: 'success', msg: 'componente do produto deletado com sucesso' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

module.exports.cadastrarComponentesProduto = cadastrarComponentesProduto
module.exports.getComponentesProduto = getComponentesProduto
module.exports.updateOrdemProducao = updateOrdemProducao
module.exports.deleteComponentesProduto = deleteComponentesProduto
