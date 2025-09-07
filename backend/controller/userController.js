import User from '../models/userModels.js'







export const createUser=(req,res)=>{
    
     const{name,email,password} = req.body; ///destructuring and  to get data from body
    //  now create instance of User
    let newUser=new User({
        name:name,
        email:email,
        password:password
    })
    newUser.save()
    res.status(201).send({
        success:true,
        message:"data created successfully",
        newUser:newUser
    })
   

}

// another method to creatre user



// -----------------------------------------------------------------------------------
// using methos i have create database
export const createuser = async(req,res)=>{
const { name, email, password } = req.body; // remove the ()
// if (!name){
//     return res.send=console.log('provide name');
// }
 let newUser= await User.create({name,email,password})  //this dhorte method of thid//also can write this ({name:name,Email:email,paswwaord:passwaord}) 

 res.status(200).send({message:"created successfully",newUser:newUser});

}
// insert many data in the form of array
export const manyusercreate=async(req,res)=>{
    const manyUser=req.body;
    let newUser =await User.insertMany(manyUser)
    res.status(201).send({message:"data created Successfully",newUser:newUser})

}
// ------------------------------------------------------------------------------------


//  to fetch data from database

 export const getusers=async(req,res)=>{
        let users=await User.find();
        res.status(200).send({
            success:true,
            message:"data successfully fetch",
            users:users
        })
                                       }

// get user by id

export const getuserById=async(req,res)=>{
      
    let id =req.params.id;   
    let user = await User.findById(id);
    res.send(user);

 }

//update by custome method

export const toupdateuser=async(req,res)=>{
    let id =req.params.id;
    // const{email}=req.body
    let updateuser= await User.findById(id);
    updateuser.email=req.body.email;
    updateuser.save()
    res.send(updateuser);
}

// no update using in built method

// export const toupdateuser=async(req,res)=>{
    
//     const{email}=req.body
//     let updateuser= await User.findByIdAndUpdate(req.params.id,{email},{new:true})
//     res.send(updateuser);
    

//     }


 export const deleteuser=async(req,res)=>{
        let deleteUser=await User.findByIdAndDelete(req.params.id )
        res.send(deleteUser)
}