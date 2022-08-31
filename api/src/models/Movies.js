import { DataTypes } from "sequelize"
import { sequelize } from "../db.js"
import Actors from "./Actors.js"
import Genres from "./Genres.js"

const Movies = sequelize.define('movies', {
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { timestamps: false })

Movies.belongsToMany(Actors, { through: 'MovieActors' })
Actors.belongsToMany(Movies, { through: 'MovieActors' })

Movies.belongsToMany(Genres, { through: 'MovieGenres' })
Genres.belongsToMany(Movies, { through: 'MovieGenres' })

export default Movies