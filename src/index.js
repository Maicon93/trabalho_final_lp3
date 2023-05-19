const express = require('express');
const app = express();
app.use(express.json())

require('./services/swagger')
require('./routes')(app)

app.use('/docs', express.static('src/views'))
app.use('/docs/swagger.yaml', express.static('src/docs/swagger.yaml'))

app.listen(3000, () => {
    console.log(`Aplicação rodando na porta 3000`);
});