import mongoose from "mongoose";


const LandingPageSchema1 = mongoose.Schema({
    Title :{type:String},
    Description:{type:String},
    Feature1:{type:String},
    Feature2:{type:String},
    Feature3:{type:String},
    Feature4:{type:String},

})

const TeacherLandingSchema = mongoose.model("teacherData",LandingPageSchema1)
export default TeacherLandingSchema