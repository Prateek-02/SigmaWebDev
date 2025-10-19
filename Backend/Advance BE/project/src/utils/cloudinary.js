import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"

import dotenv from "dotenv"
dotenv.config({
  path: './.env'
})

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

console.log("Cloudinary Config:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ? "exists" : "missing",
  api_secret: process.env.CLOUDINARY_API_SECRET ? "exists" : "missing",
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
      if(!localFilePath){
        return null
      }  
      //upload the file in cloudinary
      const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type: "auto"
      })
      // file has been uploaded successfully
      // console.log("File is uploaded on cloudinary",response.url)
      fs.unlinkSync(localFilePath)  // remove the locally saved temp file as the upload operation is successfull
      return response
    }
    catch (error) {
      console.error("Cloudinary upload failed:", error);
      fs.unlinkSync(localFilePath)  // remove the locally saved temp file as the upload operation got failed
      return null
    }
}

export {uploadOnCloudinary}