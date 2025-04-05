import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";


const getStorage = (folderName) => new CloudinaryStorage({
  
  cloudinary: cloudinary,
  params: {
      folder: folderName,
      allowed_formats: [
          "jpg", "jpeg", "png", "gif", "webp", "avif", 
          "pdf", "doc", "docx", "ppt", "pptx", "xls", "xlsx", 
          "mp3", "wav", "ogg", "aac", "flac" 
      ],
  },
} ,console.log(folderName , 'sdfghj3'));


const upload = (folderName) => multer({ storage: getStorage(folderName) })

export default upload;
