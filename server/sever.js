import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import createError from "http-errors";
import Camera from "./routes/cameraRouter.js";
const App = express();

dotenv.config();
connect();
App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: false }));

App.use("/api/v1/users", userRouter);
App.use("/camera", Camera);
App.use((req, res, next) => {
  next(createError(404, "PAGE NOT FOUND !!!"));
});

App.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ message: err.message || "Something went Wrong!" });
});

const port = process.env.PORT || 7000;
App.listen(port, () => {
  console.log(`Server is running on Port on :http//localhost:${port}`);
});
