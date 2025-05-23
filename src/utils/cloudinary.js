import { v2 as cloudinary } from "cloudinary"; // import cloudinary
import fs from "fs"; // import file system

// configure cloudinary- boiler plate(copied from cloudinary account)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// create our method to upload files
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null; // if file pathe is incorrect

    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("file uploaded successfully with url:", response.url); // file uploaded successfully
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file if the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
