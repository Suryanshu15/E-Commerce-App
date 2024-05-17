import mongoose,{Schema} from "mongoose";

const productSchema = new Schema({
  productname: {
    type: String,
    required: true,
    unique: true,
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: "admin"
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


export const Product = mongoose.model("Product", productSchema)