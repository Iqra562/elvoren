import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

  cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

 
const uploadOnCloudinary = async (localFilePath :any ) => {
  try {
    if (!localFilePath) return null;

      return new Promise<any>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "products",
        resource_type: "auto",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    uploadStream.end(localFilePath);
  })
  } catch (error) {
     if (localFilePath && fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    console.error("Cloudinary upload error:", error);
    return null;
  }
};
    
 const removeFromCloudinary = async (publicId : string) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId,{ invalidate: true });
    return result;
  } catch (error :any) {
    console.error("Cloudinary delete error:", error.message);
    return null;
  }
};


    export {uploadOnCloudinary,removeFromCloudinary}