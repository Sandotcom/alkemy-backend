import { DataTypes } from "sequelize"
import { sequelize } from "../db.js"

const Genres = sequelize.define('genres', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: DataTypes.STRING,
}, { timestamps: false })

export default Genres