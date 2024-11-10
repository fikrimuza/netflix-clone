import express from "express";
import { getCategoryMovie, getDetailMovie, getSimilarMovie, getTrailersMovie, getTrendingMovie } from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getTrailersMovie);
router.get("/:id/detail", getDetailMovie);
router.get("/:id/similar", getSimilarMovie);
router.get("/:category", getCategoryMovie);

export default router;
