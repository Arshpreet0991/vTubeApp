import { asyncHandler } from "../utils/asyncHandler.js";

// create a method to register a user
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "OK",
  });
});

export { registerUser };
