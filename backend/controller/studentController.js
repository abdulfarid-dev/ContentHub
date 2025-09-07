import student from "../models/studentModels.js";



 export const studentcreate=async(req,res)=>{

    const{name,age}=req.body;
    
    let newStudent= await student.create({name,age});
    res.status(201).send({message:"student data crated successfully",student:newStudent})

}

// findStudent Based on name age etc 

export const findStudent=async(req,res)=>{

    let newStudent = await student.find({age:{$eq:32}})//by age ls eq,gt,
    // let newStudent=await student.find({name:{$in:["Babar","farid"]}}) //by name find
    res.send(newStudent)
     
}

export const updateuser=async(req,res)=>{
    const{name,age}=req.body;
    let updatedStudent=await student.updateOne({name},{$set:{age}})
    res.send(updatedStudent)
}



// Projection-->>Projection = selecting which fields you want to see in the result.
// For example:
// const posts = await Post.find({ author: userId }).select('title createdAt');

export const projection = async (req, res) => {
  const newStudent = await student.find().select('name age createdAt'); // lowercase 'createdAt'
  res.send(newStudent);
};
