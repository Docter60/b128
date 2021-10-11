import express from "express";
import { celebrate, Joi, Segments } from "celebrate";
import db from "../db";

interface Request {
    moderator: string,
    subCount: number,
    subCountRelation: string,
    resultCapacity: number
}

const router = express.Router();

router.get(
  "/",
  celebrate({
    [Segments.QUERY]: {
      moderator: Joi.string(),
      subCount: Joi.number().integer().positive(),
      subCountRelation: Joi.string().length(2).default("eq"),
      resultCapacity: Joi.number().integer().positive(),
    },
  }),
  (req, res) => {
    const params = req.query as unknown as Request;
    const collection = db.get().db("miadb").collection("Moderators");
    const query = {} as any;
    query.name = new RegExp(params.moderator, "i");
    const r =
      params.subCountRelation === "lt"
        ? "<="
        : params.subCountRelation === "gt"
        ? ">="
        : "==";
    query.$where = `this.subreddits.length ${r} ${+params.subCount}`;
    collection
      .find(query)
      .limit(+params.resultCapacity)
      .project({
        _id: false,
        name: "$name",
        subreddits: "$subreddits",
      })
      .toArray((err, result) => {
        if (err) throw err;
        res.status(200).json({ results: result, type: "mods" });
        res.end();
      });
  }
);

export default router;
