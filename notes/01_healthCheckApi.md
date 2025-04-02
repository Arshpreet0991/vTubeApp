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
