import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import prisma from "./database/client.js";

import indexRouter from "./routes/index.js";



const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

import usersRouter from "./routes/users.js";
import bookRouter from "./routes/book.js";
import studentsRouter from "./routes/student.js";
import reservesRouter from "./routes/reserve.js";
import borrowRouter from "./routes/borrow.js";

app.use("/books", bookRouter);
app.use("/students", studentsRouter);
app.use("/reserves", reservesRouter);
app.use("/borrows", borrowRouter);


export default app;
