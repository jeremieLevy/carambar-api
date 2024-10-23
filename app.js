const db = require('./models')

const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const jokesRoutes = require('./routes/jokes')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const PORT = process.env.PORT || 3000 // Dynamic port set-up

app.use(bodyParser.json())
app.use(cors()) // Cross origin : Authorize request from other domains

app.use(express.json())
app.use('/blagues', jokesRoutes)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})

// Db Logs
// db.sequelize.authenticate()
//   .then(() => {
//     console.log('Db Connected')
//   })
//   .catch(err => {
//     console.error('Unable to connect db')
//   })


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

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`))
