import Sequelize from "sequelize";
import sequelize from "../utils/database.js";
import Course from "./Course.js";

const Teacher = sequelize.define(
  "teacher",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // Defining foreign key
    course_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Course,
        key: "id",
      },
    },
  },
  { underscored: true }
);

export default Teacher;
