import app from './src/app.js'
import { sequelize } from './src/db.js'
import Movies from './src/models/Movies.js'
import Actors from './src/models/Actors.js'
import Genres from './src/models/Genres.js'
import User from './src/models/User.js'

const PORT = process.env.PORT || 3001

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => 
  console.log(`Server running on port: ${PORT}`)
  )
})