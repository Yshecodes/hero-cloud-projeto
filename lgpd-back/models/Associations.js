import User from "./User.js";
import Course from "./Course.js";
import Teacher from "./Teacher.js";
import Evaluation from "./Evaluation.js";

const associations = () => {
  // Define associations with foreign key constraints
  Course.hasMany(Teacher, { foreignKey: "courseId" }); // Teacher belongs to Course
  Teacher.belongsTo(Course, { foreignKey: "courseId" }); // Bidirectional relationship
  Evaluation.belongsTo(User, { foreignKey: "userId" }); // Evaluation belongs to User
  Evaluation.belongsTo(Course, { foreignKey: "courseId" }); // Evaluation belongs to Course
};

const factory = {
  associations,
};

export default factory;
