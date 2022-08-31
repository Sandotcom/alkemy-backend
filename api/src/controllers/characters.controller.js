import Characters from '../models/Characters.js'

export const getCharacters = async(req, res) => {

  res.status(200).send('Get characters')
}

export const getCharacter = async(req, res) => {
  const { id } = req.params

  res.status(200).send(`Get ${id} detail`)
}

export const createCharacter = async(req, res) => {
  res.status(200).send('Create character')
}

export const updateCharacter = async(req, res) => {
  const { id } = req.params

  res.status(200).send(`Update ${id} character`)
}

export const deleteCharacter = async(req, res) => {
  const { id } = req.params

  res.status(200).send(`Delete ${id} character`)
}