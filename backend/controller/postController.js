import User from "../models/userModels.js"
import Post from "../models/postModels.js"
import Profile from "../models/profileModels.js";

export const createPost = async (req, res) => {
    console.log(req.user)
    try {
        const { title, content } = req.body
        const post = await Post.create({ title, content, user: req.user.userId });
        // console.log("req.user >>>", req.user);

        res.status(201).send({ message: "post created successfully", post: post })
    } catch (err) {
        res.status(500).send({ message: "Internal server error", error: err.message })
    }
}


export const getPost= async (req,res)=>{
    const{email} =req.body;
    let user= await User.findOne({email});
    // console.log(user);
    // res.status(201).send({message:"data find succesfully",user:user})
    let post=await Post.find({user:user._id}).populate("user")
    // console.log(profile)
    res.status(201).send({message:"post data fetched succefully",post:post})


}

//this will be dought on next monday class 

export const getPosts=async (req,res) => {
    const{email}=req.body;
    
    let pages=req.params.page
    let limit=5
    let skip=(pages-1)*limit
    let user=await User.findOne({email})
    //user= {
    //     _id: new ObjectId('686bd1c307193402768f03fb'),
    //     name: 'Amit',
    //     email: 'amitkm997@gmail.com',
    //     password: '12345678',
    //     __v: 0
    //   }
    let posts=await Post.find({user:user._id}).sort({createdAt:-1})
    .skip(skip).limit(limit)
    
    res.status(200).send({message:"post fetched successfully",posts:posts})
}




export const updatePost= async(req,res)=>{
     
    const _id =req.params._id;
   let{title} =req.body;
//    let updatepost= await Post.findByIdAndUpdate(_id,{title:title},{new:true});
//    res.status(201).send({message:"title updated sucessfully",updatepost:updatepost})

let post =await Post.findById(_id);
let updatePost =await post.updateOne({post},{title:title},{new:true})
await post.save();
res.status(201).send({message:"post updated Succesfully",updatePost:updatePost});

}


export const findAllpost= async(req,res)=>{
    let allpost=await Post.find({
         createdAt:{
            $gte:new Date('2025-07-19'),
            $lte:new Date('2025-07-20')
         }
   
        })



    res.send(allpost)
}