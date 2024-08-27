import express from "express";
import mongoose from "mongoose";
import StudentRoute from "./Routes/StudentRoute.js";
import cors from "cors";
import TeacherRoute from "./Routes/TeacherRoute.js";
import DBString from "./ConnectionString.js";
import bodyParser from "body-parser";

const PORT = 3005;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", StudentRoute);
app.use("/api", TeacherRoute);

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

mongoose.connect(DBString).then(() => {
  console.log("mongo db connected successfully");
});
