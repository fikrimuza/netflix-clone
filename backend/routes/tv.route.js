import express from "express";
import { getCategoryTV, getDetailTV, getSimilarTV, getTrailersTV, getTrendingTV } from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTV);
router.get("/:id/trailers", getTrailersTV);
router.get("/:id/detail", getDetailTV);
router.get("/:id/similar", getSimilarTV);
router.get("/:category", getCategoryTV);

export default router;