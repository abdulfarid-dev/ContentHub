import Post from '../models/postModels.js';


export const postPerUser = async (req, res) => {
    try{

        const postPerUser = await Post.aggregate([
            {
                $group: {
                    _id: '$user',
                    totalPost: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json({
            success:true,
            message:"post per user",
            data:postPerUser
        })
            
    }





    catch(error)
    
        {
        console.log(error);
         }
}


export const totalLikedByUsers=async (req,res) => {
    try{
      let totallikes=await Post.aggregate([
        {
          $project:{
            likescount:{'$size':{'$ifNull':['$likedBy',[]]}}
          }
        },
        {
          $group:{
            _id:'$user',
            totalLikes:{'$sum':'$likescount'}
          }
        }
      ])
      res.status(201).send({message:'successfully fetched total no. of likes',totallikes:totallikes})
    }catch(err){
      console.log(err)
    }
}


//avg likes 
export const avgLikes=async (req,res) => {
  try{
    let avglikes=await Post.aggregate([
      {
        $project:{
          likescount:{'$size':{'$ifNull':['$likedBy',[]]}}
        }
      },
      {
        $group:{
          _id:'$user',
          avgLikes:{'$avg':'$likescount'}
        }
      }
    ])
    res.status(201).send({message:'successfully fetched avglikes likes',avglikes:avglikes})
  }catch(err){
    console.log(err);
  }
}