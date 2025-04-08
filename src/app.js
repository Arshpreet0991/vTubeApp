import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// common express middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser()); // allows express to handle cookies

// import routes
import healthcheckRouter from "./routes/healthcheck.routes.js";

// create routes
app.use("/api/v1/healthcheck", healthcheckRouter); // the route that we are where do you want to serve this

// ROUTES
import userRouter from "./routes/user.routes.js";

// Routes declaration
app.use("/api/v1/users", userRouter);
// this will give us a url like this: http://localhost:8000/api/v1/users/register

export { app };
