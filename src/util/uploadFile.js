import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config/fireBase.js"; // Asegúrate de importar tu configuración de Firebase
import sharp from "sharp";

export const uploadFile = async (file) => {
  let fileBuffer = await sharp(file.buffer)
    .resize({ width: 200, fit: 'cover' })
    .toBuffer();

  const fileRef = ref(storage, `files/${file.originalname} ${Date.now()}`);

  const fileMetadata = {
    contentType: file.mimetype
  };

  const fileUploadPromise = uploadBytesResumable(
    fileRef,
    fileBuffer,
    fileMetadata
  );

  await fileUploadPromise;
  const fileDownloadUrl = await getDownloadURL(fileRef);

  return { ref: fileRef, fileDownloadUrl: fileDownloadUrl };
};
