import Characters from '../models/Characters.js'

export const getCharacters = async(req, res) => {
  try {
    const characters = await Characters.findAll()

    res.status(200).send(characters)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' })
  }
}

export const getCharacter = async(req, res) => {
  const { id } = req.params

  try {
    const character = await Characters.findByPk(id)

    if(!character) return res.status(404).json({ message: 'Character not found.' })

    res.status(200).send(character)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' })
    
  }
}

export const createCharacter = async(req, res) => {
  const { image, name, age, weight, history } = req.body

  try {
    const character = await Characters.create({ image, name, age, weight, history })

    res.status(200).send(character)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' })    
  }
}

export const updateCharacter = async(req, res) => {
  const { id } = req.params

  res.status(200).send(`Update ${id} character`)
}

export const deleteCharacter = async(req, res) => {
  const { id } = req.params

  res.status(200).send(`Delete ${id} character`)
}