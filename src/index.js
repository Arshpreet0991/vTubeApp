import dotenv from "dotenv"; // import the dotenv package to get access to .env file. This should be at the top, because index file is the first file to execute and by doing this all the files inside the project will have access to .env variables from the start.
import connectDB from "./db/index.js"; // import connectDB form DB index file

dotenv.config({ path: "./env" }); // define the path of the .env

connectDB();
