import express from "express";
import { celebrate, Joi, Segments } from "celebrate";
import db from "../db";

const router = express.Router();

router.get("/", celebrate({
  [Segments.QUERY]: {
    resultCapacity: Joi.number().integer().positive()
  }
}), (req, res) => {
  const params = req.query;
  const collection = db.get().db("miadb").collection("Moderators");
  collection
    .aggregate([
      {
        $project: {
          _id: false,
          name: "$name",
          length: { $size: "$subreddits" },
        },
      },
      { $sort: { length: -1 } },
    ])
    .limit(+params.resultCapacity)
    .toArray((err, result) => {
      if (err) throw err;
      res.status(200).json({ results: result });
      res.end();
    });
});

export default router;
