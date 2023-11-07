import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {storage  } from "../config/fireBase.js";
import sharp from "sharp";

export const uploadFile= async(file)=>{
    let fileBuffer= await sharp(file.buffer).resize({width: 200, fit: 'cover'}).toBuffer()

    const fileRef= ref(storage, `files/${file.oroginalname} ${Date.now()} `)

    const FileMetaData={
        contendType: file.mimetype
    }
    const fileUploadPromise= uploadBytesResumable(
        fileRef,
        fileBuffer,
        FileMetaData
    )

    await fileUploadPromise;
    const fileDownloadUrl= await getDownloadURL(fileRef)
    return {ref: fileRef, fileDownloadUrl: fileDownloadUrl}


}