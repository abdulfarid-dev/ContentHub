import express from "express";
import { createProfile, getProfile } from "../controller/profileController.js";
import upload from "../middleware/multer.js";


const router=express.Router()


router.post('/profile',createProfile)
router.get('/profile',getProfile)
router.post("/create", upload.single("file"), createProfile);


router.post("/uploads/",upload.single("file"),(req,res)=>{    //yaha par sawal routes se related
    
    try{
    res.json({
        message:"file uploaded succefully",
        file:req.file})
    }
    catch(err){
        console.log(err)  //message.err and console me jo error kartea ky adifrence hai
        res.status(500).json({error:"file upload failed"})      
    }
})


export default router;