import dotenv from "dotenv"; // import the dotenv package to get access to .env file. This should be at the top, because index file is the first file to execute and by doing this all the files inside the project will have access to .env variables from the start.
import connectDB from "./db/index.js"; // import connectDB form DB index file

dotenv.config({ path: "./env" }); // define the path of the .env

// connectDB is an async function, it returns us a promise. And we know that we can use .then(to get resolved promise) and .catch(to catch rejected promise)
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8001, () => {
      console.log(`Server is up and running at port:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Mongo Connection Failed!!`, err);
  });
