import Sequelize from "sequelize";
import sequelize from "../utils/database.js";
import User from "./User.js";
import Course from "./Course.js";

const Evaluation = sequelize.define(
  "evaluation",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    concept: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
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

export default Evaluation;
