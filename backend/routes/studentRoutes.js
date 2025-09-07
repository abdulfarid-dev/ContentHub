import express from 'express'

import { studentcreate,findStudent,updateuser, projection } from '../controller/studentController.js'


   const router=express.Router()

   router.post('/student',studentcreate)
   router.get('/student', findStudent)
   router.put('/student',updateuser)

   router.get('/find', projection)

   export default router;