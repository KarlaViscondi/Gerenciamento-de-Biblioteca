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
import reservesRouter from "./routes/reserve.js";
import borrowRouter from "./routes/borrow.js";

app.use("/books", bookRouter);
app.use("/students", usersRouter);
app.use("/reserves", reservesRouter);
app.use("/borrows", borrowRouter);


export default app;
