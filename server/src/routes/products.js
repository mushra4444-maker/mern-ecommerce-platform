import { Router } from "express";
import mongoose from "mongoose";
import Product from "../models/Product.js";
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const q = String(req.query.search || "").trim();
    const filter = q ? { $or: [
      { name: { $regex: q, $options: "i" } },
      { category: { $regex: q, $options: "i" } }
    ] } : {};
    res.json(await Product.find(filter).sort({ createdAt: -1 }));
  } catch (e) { next(e); }
});

router.get("/:id", async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: "Invalid product ID" });
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (e) { next(e); }
});

// Demo endpoint only. Add login + admin authorization before production use.
router.post("/", async (req, res, next) => {
  try {
    const { name, description = "", price, category = "General", imageUrl = "", countInStock = 10 } = req.body;
    if (!name || !Number.isFinite(Number(price)) || Number(price) < 0)
      return res.status(400).json({ message: "Name and valid non-negative price are required" });
    const product = await Product.create({ name, description, price: Number(price), category, imageUrl, countInStock: Number(countInStock) });
    res.status(201).json(product);
  } catch (e) { next(e); }
});
export default router;
