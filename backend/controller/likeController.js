import User from "../models/userModels.js";
import Post from "../models/postModels.js";

export const liked = async (req, res) => {
    
        const { email } = req.body

        let postId = req.params.postId
        const post = await Post.findById(postId)
        if (!post) return res.send("post not found")

        const user = await User.findOne({ email });
        let userId = user._id;

        post.likedBy.push(userId);
        user.likes.push(postId)

        await post.save()
        await user.save()
        res.send({ post: post, user: user })
    

}
export const totalLikedByUser = async (req, res) => {
    const { email } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.send("user not found")

    let posts = await Promise.all(user.likes.map(async (cur) => await Post.findById(cur)))
    console.log(posts.length)
    res.send(posts)
}

export const totalUserLikePost = async (req, res) => {
    let postId = req.params.postId
    let post = await Post.findById(postId)

    let users = await Promise.all(post.likedBy.map(async (cur) => await User.findById(cur)))
    res.send(users)
}

export const showNoOfLikes = async (req, res) => {
    try {
        let postId = req.params.postId

        let post = await Post.findById(postId);
        if (!post) return res.status(404).send({message:"post not found"});

        let like=post.likedBy.length  // this is main logic of to find no of likes in my post
        
        res.send(like)
    } catch (err) {
        console.log(err)
    }

}



































