import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index.js";



const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

import bookRouter from "./routes/book.js";
import usersRouter from "./routes/user.js";
import operationRouter from "./routes/operation.js";

app.use("/books", bookRouter);
app.use("/users", usersRouter);
app.use("/operations", operationRouter);


export default app;
