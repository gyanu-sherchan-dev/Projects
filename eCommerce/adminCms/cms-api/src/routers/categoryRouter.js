import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    catName: {
      type: String,
      required: true,
    },
    catSlug: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("category", categorySchema);
