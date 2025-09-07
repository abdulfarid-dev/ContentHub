import User from "../models/userModels.js";
import Profile from "../models/profileModels.js";
import cloudinary from "../config/cloudinary.js";
// import { updateuser } from "./studentController.js";


// export const createProfile=async(req,res)=>{
//     const{email,bio,age}=req.body;
     
//     let user =await User.findOne({email})
//     console.log(user)

//   let profile =await Profile.create({bio,age,user:user._id});
//   res.status(201).send({message:"Profile created Successfully",profile:profile});

// }


  
export const createProfile = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "profiles"
        });
        const { bio, age } = req.body;
        console.log(req.user)
        let profile = await Profile.create({ bio, age, image: result.secure_url, user: req.user.userId })
        res.status(201).send({ message: "profile created successfully", profile: profile })
    } catch (err) {
        res.status(500).send({ message: "internal server error", error: err.message })
    }
}



export const getProfile=async(req,res)=>{
    const{email}=req.body;
    let user=await User.findOne({email})
    let profile=await Profile.findOne({user:user._id}).populate('user');
    res.send({profile:profile});
}