import User from "./User.js";
import Course from "./Course.js";
import Teacher from "./Teacher.js";
import Evaluation from "./Evaluation.js";

const associations = () => {
  // Define associations with foreign key constraints
  Course.hasMany(Teacher, { foreignKey: "course_id" });
  Teacher.belongsTo(Course, { foreignKey: "course_id" }); // Bidirectional relationship

  User.hasMany(Evaluation, { foreignKey: "user_id" });
  Evaluation.belongsTo(User, { foreignKey: "user_id" });

  Course.hasMany(Evaluation, { foreignKey: "course_id" });
  Evaluation.belongsTo(Course, { foreignKey: "course_id" });
};

const factory = {
  associations,
};

export default factory;
