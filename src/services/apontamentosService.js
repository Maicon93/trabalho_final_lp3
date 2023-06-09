const conn = require('../config/pg')

const inserirApontamentos = async (params) => {
  try {
    const sql =`insert into apontamentos (id_ordem, id_componente, quantidade, data)
      values (
        ${params.id_ordem},
        ${params.id_componente},
        ${params.quantidade},
        current_date
      )`

    await conn.execute(sql)
    return { type: 'success', msg: 'Apontamento inserido com sucesso' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const getApontamento = async (params) => {
  try {
    let where = 'where 1=1'
    params.id_ordem && (where += ` and id_ordem = ${params.id_ordem}`);

    const sql = `select * from apontamentos ${where}`
    const { rows } = await conn.execute(sql)
    if (!rows.length) {
      return { type: 'info', msg: 'Nenhum registro retornado' }
    }

    return { type: 'success', rows }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}


const deleteApontamentos = async (id) => {
  try {
    const sql = `delete from apontamentos where id = ${id}`
    const resp = await conn.execute(sql)
    if (resp.rowCount == 0) {
      return { type: 'info', msg: 'Nenhum registro deletado' }
    }

    return { type: 'success', msg: 'Registro deletado com sucesso' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

module.exports.inserirApontamentos = inserirApontamentos
module.exports.getApontamento = getApontamento
module.exports.deleteApontamentos = deleteApontamentos
