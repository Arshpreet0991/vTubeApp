# Health check routes and testing with postman

Another standard practice in production is to create health check APIs.
Health check APIs are basically an request to a server in which we confirm that out system is working as intended. The objective is to reach at least one reliable endpoint. Endpoint here refers the URL(request) which will connect to server and give us a response.

## Why we need health check APIs?

- Detect if the application is running and ready to handle requests.
- Identify potential failures in dependencies like the database, cache, or external services.
- Help load balancers and orchestration tools (e.g., Kubernetes, AWS ELB) decide whether to route traffic to the instance.

## Creating a Health check API

### Steps

1. Go to controllers folder and create a file healthcheck.controllers.
2. Since we have already standardized our Apiresponse and we are able to handle async function using an asyncHandler, we will import these two from the utils.

   ```javascript
   import { ApiResponse } from "../utils/ApiResponse.js";
   import { asyncHandler } from "../utils/asyncHandler.js";
   ```

3. The usual way of doing this would be something like this:

   ```javascript
   const healthcheck = async (req, res) => {
     try {
     } catch (error) {}
   };
   ```

   - Since there is no guarantee that we will get a response or not, we have to use the try catch block to send the response.
   - Also, since the req and response can take time, we will have to make this an async function
   - To handle these kind of cases we made asyncHandler in the utils folder.

4. So, the professional way of writing the healthcheck would be:

   ```javascript
   const healthcheck = asyncHandler(async (req, res) => {
     return res.json(new ApiResponse(200, "OK", "Healthcheck Passed"));
   });
   ```

   - In async(req,res), we used async so that if we make a DB call, then it will be an async operation.
   - we are sending a json response which is being standardized by our Apiresponse util. Here we have created a new object from the Apiresponse Class.

5. export the healthcheck variable

   ```javascript
   export { healthcheck };
   ```

6. Create a route Handler.

   - each model will get a controller and each controller will get their own route handler.
   - Go to the routes folder and create a file named healthcheck.routes.js. Inside the router we write this :

   ```javascript
   import { Router } from "express";
   import { healthcheck } from "../controllers/healthcheck.controllers.js";

   const router = Router();
   router.route("/").get(healthcheck);

   export default router;
   ```

   - the "/" here is not the homepage. It means here that the control is passed to this controller here.

7. Now go to app.js in the root folder. We will bring our routes into the app.js

   - we import the required routes from routes folder:

   ```javascript
   import healthcheckRouter from "./routes/healthcheck.routes.js";
   ```

   - then we we use middlewares app.use

   ```javascript
   app.use("/api/v1/healthcheck", healthcheckRouter);
   ```

   - the '/api/v1/healthcheck' is the route that we want to serve, and whenever someone sends us the request on this link, we will pass the control to healthcheckRouter. It will handle the request.
