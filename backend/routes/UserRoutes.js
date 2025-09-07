import express from "express"
import { createUser, getuserById, getusers,toupdateuser,deleteuser,} from "../controller/userController.js";
import { createuser, manyusercreate} from "../controller/userController.js";
import { register ,logIn} from "../controller/Register/UserRegister.js";
import {authentication} from "../middleware/auth.js"

    const router = express.Router();



//Register
router.post('/register',register)
router.post('/logIn',logIn)


 
// -------------------------------------
     router.post('/create',authentication, createuser)
     router.post('/many',authentication ,manyusercreate)
// -------------------------------------

router.post('/user', createUser)
router.get('/user',getusers)
router.get('/user/:id',getuserById)
router.put('/user/:id',toupdateuser)
router.delete('/user/:id',deleteuser)





export default router;