const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'horus_final',
  password: '1',
  port: 5434
});

module.exports = {
  execute: (text, params) => pool.query(text, params),
  query: (text, params) => pool.query(text, params)
}
// module.exports = pool
