const swaggerAutogen = require('swagger-autogen')('pt-BR')
const pjson = require('../../package.json')

const doc = {
    info: {
        version: pjson.version,
        title: 'API - HORUS',
        description: 'Documentação da API HORUS'
    },
    host: 'localhost:3000',
    basePath: '',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json']
}

const outputFile = './src/docs/swagger.yaml'
const endpointsFiles = [
    './src/routes/produtoRoute.js',
    './src/routes/clienteRoute.js',
    './src/routes/apontamentoRoutes.js',
    './src/routes/componentesRoute.js',
    './src/routes/producaoRoute.js',
]

swaggerAutogen(outputFile, endpointsFiles, doc)