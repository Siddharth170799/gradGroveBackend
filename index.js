import express from "express";
import mongoose from "mongoose";
import StudentRoute from "./Routes/StudentRoute.js";
import cors from "cors";
import TeacherRoute from "./Routes/TeacherRoute.js";

const PORT = 3005;

const app = express();
app.use(cors());
app.use("/api", StudentRoute);
app.use("/api", TeacherRoute);

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${3000}`);
});

mongoose
  .connect(
    "mongodb+srv://boorgusiddharth:siddharthjuly99@siddharth.fiuilki.mongodb.net/?retryWrites=true&w=majority&appName=Siddharth"
  )
  .then(() => {
    console.log("mongo db connected successfully");
  });
