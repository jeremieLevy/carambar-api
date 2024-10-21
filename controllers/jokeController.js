const Joke = require('../models/Joke')

exports.addJoke = async (req, res) => {
  try {
    const newJoke = await Joke.create({ content: req.body.content })
    res.status(201).json(newJoke)
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'ajout de la blague' })
  }
}

exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll()
    res.status(200).json(jokes)
  } catch (error) {
    res.status(500).json( { error: 'Erreur lors de la récupération des blagues' })
  }
}

exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id)
    if(joke) {
      res.status(200).json(joke)
    } else {
      res.status(404).json({ error: 'Blague non trouvée' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la blague' })
  }
}

exports.getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.count()
    const randomIndex = Math.floor(Math.random() * count)
    const randomJoke = await Joke.findAll({ offset: randomIndex, limit: 1 })
    res.status(200).json(randomJoke[0])
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la blague' })
  }
}
