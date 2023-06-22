const conn = require('../config/pg')

const inserirApontamentos = async (params) => {
  try {
    const sql =`insert into apontamentos (id_ordem, quantidade, id_componente, data)
      values (
        '${params.id_ordem}',
        '${params.id_componente}',
        '${params.quantidade}',
        current_date
      )`

    await conn.execute(sql)
    return { type: 'success', msg: 'Apontamento inserido com sucesso' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

const getApontamento = async () => {
  try {

    let where = 'where 1=1'
    params.id_ordem && (where += ` and id_ordem = ${params.id_ordem}`);
    params.id_componente && (where += ` and id_componente = ${params.id_componente}`);

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


const deleteApontamento = async (params) => {
  try {
    if (!params.id) {
      return { type: 'info', msg: 'Informe o ID do produto  ou o id da ordem que deseja deletar' }
    }

    let where = 'where 1=1'
    params.id_ordem && (where += ` and id_ordem = ${params.id_ordem}`);
    params.id_componente && (where += ` and id_componente = ${params.id_componente}`);

    const sql = `delete from apontamentos ${where}`
    const { rows } = await conn.execute(sql)
    if (!rows.length) {
      return { type: 'info', msg: 'Nenhum registro retornado' }
    }

    return { type: 'success', msg: 'Registro deletado com sucesso' }
  } catch (error) {
    return { type: 'error', msg: error }
  }
}

module.exports.inserirApontamentos = inserirApontamentos
module.exports.getApontamento = getApontamento
module.exports.deleteApontamento = deleteApontamento
