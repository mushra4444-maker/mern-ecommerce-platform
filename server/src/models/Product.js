import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, default: "General" },
  imageUrl: { type: String, default: "" },
  countInStock: { type: Number, default: 10, min: 0 }
}, { timestamps: true });
export default mongoose.model("Product", schema);
