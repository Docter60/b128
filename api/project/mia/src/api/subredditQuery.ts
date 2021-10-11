import express from "express";
import { celebrate, Joi, Segments } from "celebrate";
import db from "../db";

interface Request {
    subreddit: string,
    modCount: number,
    modCountRelation: string,
    resultCapacity: number
}

const router = express.Router();

router.get(
  "/",
  celebrate({
    [Segments.QUERY]: {
      subreddit: Joi.string().optional(),
      modCount: Joi.number().integer().positive(),
      modCountRelation: Joi.string().length(2).default("eq"),
      resultCapacity: Joi.number().integer().positive(),
    },
  }),
  (req, res) => {
    const params = req.query as unknown as Request;
    const collection = db.get().db("miadb").collection("Subreddits");
    const query = {} as any;
    query.name = new RegExp(params.subreddit, "i");
    const r =
      params.modCountRelation === "lt"
        ? "<="
        : params.modCountRelation === "gt"
        ? ">="
        : "==";
    query.$where = `this.moderators.length ${r} ${+params.modCount}`;
    collection
      .find(query)
      .limit(+params.resultCapacity)
      .project({
        _id: false,
        name: "$name",
        moderators: "$moderators",
      })
      .toArray((err, result) => {
        if (err) throw err;
        res.status(200).json({ results: result, type: "subs" });
        res.end();
      });
  }
);

export default router;
