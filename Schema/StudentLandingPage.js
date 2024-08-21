import mongoose from "mongoose";


const LandingPageSchema = mongoose.Schema({
    Title :{type:String},
    Description:{type:String},
    Feature1:{type:String},
    Feature2:{type:String},
    Feature3:{type:String},
    Feature4:{type:String},
})

const StudentLandingSchema = mongoose.model(" studentData",LandingPageSchema)
export default StudentLandingSchema