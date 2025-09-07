import mongoose, { model, Schema } from "mongoose";

const postSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    likedBy:[{
        type:Schema.Types.ObjectId,
        ref:"user",
        default: []
    }],

    
},{timestamps:true})

const Post=model("Post",postSchema);

export default Post;