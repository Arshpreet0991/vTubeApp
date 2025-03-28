import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is up and running at port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(`mongoDB connection error ${err}`);
  });
