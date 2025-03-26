import express from "express";
const app = express();
export { app };

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});

//"dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
