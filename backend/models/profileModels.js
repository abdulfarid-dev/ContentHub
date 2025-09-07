import mongoose, { Types } from "mongoose";


const profileSchema=new mongoose.Schema({
    bio:{
        type:String,
        required:true

    },
    age:{
        type:Number,
        required:true
        },
    user:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"User"
        
        },
     image:{
        type:String,
        required:true
     }

},{timestamps:true})

const Profile = mongoose.model('Profile',profileSchema)

export default Profile;