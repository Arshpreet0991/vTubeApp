import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; // import db name from constant which will form the part of the url

// async function because db can take time to connect
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
      // get mongodb_uri from .env file and db_name from constant and form a complete url of the database and pass it inside mongoose.connect
    );
    console.log(
      `\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host} `
    );
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1); // read from node
  }
};

export default connectDB; // export connectDB so that the index.js from the root folder can access it
