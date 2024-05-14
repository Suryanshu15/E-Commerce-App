import mongoose from "mongoose";

const productSchema = new Schema({
  productname: {
    type: String,
    required: true,
    unique: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export const Video = mongoose.model("Video", productSchema)