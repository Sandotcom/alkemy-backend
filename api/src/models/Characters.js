import { DataTypes } from "sequelize"
import { sequelize } from "../db.js"

const Characters = sequelize.define('characters', {
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  weight: DataTypes.INTEGER,
  history: DataTypes.STRING,
}, { timestamps: false })

export default Characters