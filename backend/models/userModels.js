import mongoose, { Types } from "mongoose";


let useSchema = new mongoose.Schema({ //useSchema defines the structure and rules for documents(rows) in that collection.(table)

    name:{
        type:String,
        required:true
        },

    email:{
        type:String,
        required:true,
        unique:true
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        default: []
    }],
    

    password:{
        type:String,
        required:true,

    }

    }, {timestamps:true})


    let User=mongoose.model('User', useSchema);//'User' is the name of the collection (Mongoose will use users in MongoDB)

    export default User;


 //You use this User model to interact with the users collection in MongoDB (e.g., create, find, update, delete users).

//  User>>>>>> this is database name
//useSchema>>>>>> this is name of schema 



