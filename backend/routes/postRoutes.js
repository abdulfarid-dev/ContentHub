import express from 'express'
import { createPost,getPost ,updatePost,findAllpost} from '../controller/postController.js';
import { liked ,totalLikedByUser,totalUserLikePost,showNoOfLikes} from '../controller/likeController.js';
import { postPerUser,totalLikedByUsers,avgLikes } from '../controller/advancecontroller.js';


 const router = express.Router()

router.post('/create',createPost)
router.get('/create',getPost)
router.post('/updatePost/:_id',updatePost)


// router.post('/like/',liked)
router.post('/like/:postId',liked)

router.get('/like',totalLikedByUser)
router.get('/userlike/:postId',totalUserLikePost)
router.get('/NoLike/:postId',showNoOfLikes)

router.get('/allpost',findAllpost)


// advancePost aggreagate

router.get('/postPerUser',postPerUser)
router.get('/totalLikedByUser',totalLikedByUsers)
router.get('/avgLikes',avgLikes)


 export default router;

