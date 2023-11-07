import {Router, json} from "express";
//import multer
import { upload } from "../config/multer.js";
import User from "../models/User.js";

import { uploadFile } from "../util/uploadFile.js";
const router= Router()

router.post('/', upload.fields([{name: "image", maxCount: 1}]), async (req, res)=>{
    const { name, lastName}= req.body;
    const image = req.files.image;

    if(image && image.length >0){
        const {fileDownloadUrl}=  await uploadFile(image[0])

        const newUser= new User({
            name,
            lastName,
            image: fileDownloadUrl
        })

        const saved= await newUser.save()

        return  res.status(200).json(saved)

    }

    res.status(400).json({message: 'seleccione una imagen que este buena'})





})

router.get('/',  async(req, res)=>{

    try {
        const users= await User.find()
        res.json(users)
        
    } catch (error) {
        console.log(error)
    }

})




export default router;