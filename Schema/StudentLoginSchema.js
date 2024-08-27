import mongoose from "mongoose";

const studentLogin = new mongoose.Schema({
  Email: { type: String },
  Password: { type: String },
});

const StudentLoginSchema = mongoose.model(
  "Student Login Details",
  studentLogin
);
export default StudentLoginSchema;
