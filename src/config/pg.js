const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'horusdb',
  password: '123456789',
  port: 5434
});

module.exports = {
  execute: (text, params) => pool.query(text, params),
  query: (text, params) => pool.query(text, params)
}
// module.exports = pool
