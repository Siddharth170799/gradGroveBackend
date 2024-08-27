import mongoose from "mongoose";

const studentSignUpDetails = new mongoose.Schema({
  Name: { type: String },
  DOB: { type: String },
  Age: { type: String },
  Gender: { type: String },
  FieldofStudy: { type: String },
  PhoneNumber: { type: Number },
  Email: { type: String },
  Password: { type: String },
});

const StudentSignUpDetails = mongoose.model(
  "student signup details",
  studentSignUpDetails
);
export default StudentSignUpDetails;
