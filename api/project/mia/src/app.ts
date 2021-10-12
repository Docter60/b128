import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { errors } from "celebrate";
import cors from "cors";
import db from "./db";

db.connect("mongodb://localhost:27017", (err: MongoError) => {
  /* tslint:disable no-console */
  console.log(err);
  /* tslint:enable no-console */
});

import middlewares from "./middlewares";
import api from "./api";
import { MongoError } from "mongodb";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/v1", api);
app.use(errors());

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
