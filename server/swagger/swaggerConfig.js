const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const swaggerDefinition = require("./swagger")

const options = {
    swaggerDefinition,
    apis:["../routers/*.js"]
}

const swaggerSpec = swaggerJsdoc(options)



module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  };