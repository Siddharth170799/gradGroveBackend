import express from "express";
import StudentLandingSchema from "../Schema/StudentLandingPage.js";
import StudentSignUpDetails from "../Schema/StudentSignUpDetails.js";
import jwt from "jsonwebtoken";
import StudentLoginSchema from "../Schema/StudentLoginSchema.js";
import { message } from "antd";
// import Twilio from "twilio/lib/rest/Twilio.js";
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

StudentRoute.post("/studentSignUpDetails", async (req, res) => {
  try {
    const { name, dob, age, gender, fieldStudy, phoneNumber, email, password } =
      req.body;
    console.log(
      name,
      dob,
      age,
      gender,
      fieldStudy,
      phoneNumber,
      email,
      password,
      "namaste"
    );

    const details = new StudentSignUpDetails({
      Name: name,
      DOB: dob,
      Age: age,
      Gender: gender,
      FieldofStudy: fieldStudy,
      PhoneNumber: phoneNumber,
      Email: email,
      Password: password,
    });

    const details2 = await details.save();
    res.send({
      message: "student signup details posted successfully",
      data: details2,
      status: 200,
    });
    console.log(details2);

    StudentRoute.get("/getToken", async (req, res) => {
      const token = jwt.sign({ userId: details2._id }, "my secret key");
      console.log(token);
      res.send(token);
    });
  } catch (err) {
    console.log(err, "error occurred");
  }
});

StudentRoute.post("/studentLoginDetails", async (req, res) => {
  const { Email, Password } = req.body;
  console.log(Email, Password);

  const details = new StudentLoginSchema({
    Email: Email,
    Password: Password,
  });

  const details1 = await details.save();
  res.send({
    message: "studentlogin details posted successfully",
    data: details1,
    status: 200,
  });

  StudentRoute.get("/getStudentLoginToken",async(req,res)=>{
    const token =jwt.sign({userId:details1._id},"my secret key")
    res.send(token)
  })
});

StudentRoute.get("/studentSignUpDetails", async (req, res) => {
  const details = await StudentSignUpDetails.find();
  res.send(details);
});
// StudentRoute.post('/sendotp',async(req,res)=>{

//   const details= req.body.phoneNumber;
//   console.log(details,"hi")
//   try{

// const client = new Twilio('AC1518c90203e8aa15ad4dba70f2e9ea08', '4e8fc4257ff459f60b584f732387af32');

// client.messages.create({
//   body: 'Your OTP code is 123456',
//   to: `+91${details}`,
//   from: '+1 240 312 3896'
// })
// .then((message) => console.log(message.sid))
// .catch((error) => console.error(error));

//   }catch(err){
//     console.log(err,"error occurred")
//   }
// })

export default StudentRoute;
