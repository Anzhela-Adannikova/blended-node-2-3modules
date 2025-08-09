import { model, Schema } from 'mongoose';

const constantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['books', 'electronics', 'clothing', 'other'],
      required: true,
      default: 'other',
    },
    description: {
      type: String,
      optional: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Product = model('product', constantSchema);
