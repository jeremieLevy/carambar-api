// const app = require('express')();
// const PORT = 3000



// app.listen(
//   PORT,
//   () => console.log(`it's alive on http://localhost:${PORT}`)
// )


const express = require('express')
const app = express()
const jokesRoutes = require('./routes/jokes')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const PORT = 3000

app.use(express.json())
app.use('/blagues', jokesRoutes)

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Carambar-API',
      description: 'API pour le stockage des blagues',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(PORT, () => console.log('Serveur démarré sur le port 3000'))
