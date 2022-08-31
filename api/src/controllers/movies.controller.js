export const getMovies = async(req, res) => {
  res.status(200).send('Get movies')
}

export const getMovie = async(req, res) => {
  const { id } = req.params

  res.status(200).send(`Get ${id} detail`)
}

export const createMovie = async(req, res) => {
  res.status(200).send('Create movie')
}

export const updateMovie = async(req, res) => {
  const { id } = req.params

  res.status(200).send(`Update ${id} movie`)
}

export const deleteMovie = async(req, res) => {
  const { id } = req.params

  res.status(200).send(`Delete ${id} movie`)
}