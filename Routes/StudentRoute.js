import express from "express";
import StudentLandingSchema from "../Schema/StudentLandingPage.js";

const StudentRoute = express.Router();

StudentRoute.get("/getStudent", async (req, res) => {
  try {
    const data = await StudentLandingSchema.find();
    res.send({
      message: "student data sent successfully",
      data: data,
      status: 200,
    });
  } catch (err) {
    console.log(err, "error recieving the details");
  }
});
export default StudentRoute;
