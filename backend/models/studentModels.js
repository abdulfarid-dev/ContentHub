import mongoose from "mongoose";

let studentSchema=new mongoose.Schema({
  name:{
       type:String,
       required:true
    },

    age:{
        type:Number,
        required:true
    },
    isEnrolled:{
        type:Boolean,
        default:true
    },
    isActive:{
        type:Boolean,
        default:true
    }

   
},{timestamps:true});

let student=  new mongoose.model("student" ,studentSchema)


export default student;