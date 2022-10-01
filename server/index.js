import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// routes
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";
import PostRoute from "./routes/PostRoute.js";
import UploadRoute from "./routes/UploadRoute.js";
import chatRoute from "./routes/chatRoute.js";
import messageRouter from "./routes/messageRoute.js";

const app = express();

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// to serve images inside public folder
app.use(express.static("public"));
app.use("/images", express.static("images"));

dotenv.config();
const PORT = process.env.PORT;

const CONNECTION = process.env.MONGODB_CONNECTION;

mongoose.connect(CONNECTION, () => {
  console.log("Connected to MongoDB");
});

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/posts", PostRoute);
app.use("/upload", UploadRoute);
app.use("/chat", chatRoute);
app.use("/message", messageRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Database Connection Failed", err);
  }
  console.log("Database Connected Successfully");
});
