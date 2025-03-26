//require("dotenv").config({ path: "./env" });
import { app } from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB();
