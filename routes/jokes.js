const express = require('express')
const router = express.Router()
const jokeController = require('../controllers/jokeController')

router.post('/', jokeController.addJoke)
router.get('/',jokeController.getAllJokes)
router.get('/random',jokeController.getRandomJoke) // random route must be defined before the :id route
router.get('/:id',jokeController.getJokeById)


module.exports = router
